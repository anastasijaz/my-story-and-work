import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, OrbitControls, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

type OrbitDef = {
  radius: number;
  speed: number;
  size: number;
  phase: number;
  quat: THREE.Quaternion;
  color: string;
};

const palette = ["#ff9a6b", "#ff6f91", "#f7c59f", "#b48cff", "#7fd4ff"];

function mulberry(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function useOrbits(count: number) {
  return useMemo<OrbitDef[]>(() => {
    const rand = mulberry(1337);
    return Array.from({ length: count }, (_, i) => {
      const euler = new THREE.Euler(
        rand() * Math.PI * 2,
        rand() * Math.PI * 2,
        rand() * Math.PI * 2,
      );
      return {
        radius: 1.9 + rand() * 2.4,
        speed: 0.18 + rand() * 0.4,
        size: 0.12 + rand() * 0.16,
        phase: rand() * Math.PI * 2,
        quat: new THREE.Quaternion().setFromEuler(euler),
        color: palette[i % palette.length],
      };
    });
  }, [count]);
}

function OrbitingBubble({ def }: { def: OrbitDef }) {
  const ref = useRef<THREE.Group>(null);
  const v = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * def.speed + def.phase;
    v.set(Math.cos(t) * def.radius, Math.sin(t) * def.radius, 0).applyQuaternion(def.quat);
    ref.current?.position.copy(v);
  });

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[def.size, 48, 48]} />
        <MeshTransmissionMaterial
          transmission={1}
          thickness={0.18}
          roughness={0.05}
          ior={1.15}
          chromaticAberration={0.35}
          iridescence={1}
          iridescenceIOR={1.6}
          iridescenceThicknessRange={[120, 700]}
          anisotropicBlur={0.2}
          distortion={0.25}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color={def.color}
          backside
          resolution={96}
          background={new THREE.Color("#3a1d4a")}
        />
      </mesh>
    </group>
  );
}

function CentralBubble() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!ref.current) return;
    ref.current.rotation.y = t * 0.06;
    ref.current.rotation.x = Math.sin(t * 0.12) * 0.15;
    const s = 1 + Math.sin(t * 0.5) * 0.012;
    ref.current.scale.setScalar(s);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.15, 128, 128]} />
      <MeshTransmissionMaterial
        transmission={1}
        thickness={0.3}
        roughness={0.02}
        ior={1.12}
        chromaticAberration={0.5}
        iridescence={1}
        iridescenceIOR={1.9}
        iridescenceThicknessRange={[200, 1100]}
        anisotropicBlur={0.1}
        distortion={0.35}
        distortionScale={0.4}
        temporalDistortion={0.12}
        color="#ffffff"
        backside
        resolution={192}
        background={new THREE.Color("#472157")}
      />
    </mesh>
  );
}

function useGlowTexture() {
  return useMemo(() => {
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext("2d")!;
    const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.35, "rgba(255,255,255,0.45)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    return new THREE.CanvasTexture(canvas);
  }, []);
}

export default function BubbleScene() {
  const orbits = useOrbits(10);
  const glowTexture = useGlowTexture();

  return (
    <Canvas
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 1.4, 8.5], fov: 42 }}
    >
      <color attach="background" args={["#150c22"]} />
      <ambientLight intensity={1.8} />
        <hemisphereLight args={["#ffb08a", "#7fd4ff", 1.2]} />
      <pointLight position={[0, 0, 0]} intensity={6} distance={9} color="#ff8a5c" />
      <pointLight position={[4, 4, 4]} intensity={18} color="#ff6f91" />
      <pointLight position={[-5, -2, -3]} intensity={12} color="#7fd4ff" />
      <Environment preset="sunset" background={false} environmentIntensity={1.4} />



      {/* soft colour backdrop, visible through the bubbles */}
      <group position={[0, 0, -16]}>
        {([
          ["#ff9a6b", [-4.4, 2.2, 0], 7],
          ["#ff6f91", [3.6, -1.6, 0], 8],
          ["#b48cff", [0.6, 3.4, -1], 6.5],
          ["#7fd4ff", [-2.2, -3.4, -1], 7],
        ] as const).map(([color, pos, size], i) => (
          <sprite key={i} position={pos as unknown as [number, number, number]} scale={[size, size, 1]}>
            <spriteMaterial
              map={glowTexture}
              color={color}
              transparent
              opacity={0.42}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </sprite>
        ))}
      </group>

      <CentralBubble />

      {orbits.map((def, i) => (
        <OrbitingBubble key={i} def={def} />
      ))}

      <EffectComposer>
        <Bloom intensity={0.55} luminanceThreshold={0.55} luminanceSmoothing={0.5} mipmapBlur />
      </EffectComposer>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.35}
        rotateSpeed={0.5}
      />
    </Canvas>
  );
}
