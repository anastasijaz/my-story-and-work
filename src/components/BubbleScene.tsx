import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, OrbitControls, Environment, Lightformer } from "@react-three/drei";
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

export default function BubbleScene() {
  const orbits = useOrbits(10);

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
      {/* palette-tinted studio lighting via lightformers */}
      <Environment resolution={64} environmentIntensity={4.5} background={false} frames={1}>
        <color attach="background" args={["#120a1c"]} />
        <Lightformer form="circle" intensity={6} color="#ff9a6b" position={[5, 3, 3]} scale={6} target={[0, 0, 0]} />
        <Lightformer form="circle" intensity={5} color="#ff6f91" position={[-5, -1, 2]} scale={6} target={[0, 0, 0]} />
        <Lightformer form="circle" intensity={4} color="#7fd4ff" position={[0, -5, -3]} scale={7} target={[0, 0, 0]} />
        <Lightformer form="ring" intensity={3.5} color="#b48cff" position={[0, 5, -4]} scale={5} target={[0, 0, 0]} />
      </Environment>

      {/* soft colour backdrop, visible through the bubbles */}
      <group position={[0, 0, -7]}>
        {([
          ["#ff9a6b", [-3.2, 1.6, 0], 5.5, 0.5],
          ["#ff6f91", [2.8, -1.2, 0], 6.5, 0.45],
          ["#b48cff", [0.4, 2.6, -1], 5, 0.35],
          ["#7fd4ff", [-1.6, -2.6, -1], 5.5, 0.3],
        ] as const).map(([color, pos, size, opacity], i) => (
          <mesh key={i} position={pos as unknown as [number, number, number]}>
            <circleGeometry args={[size, 48]} />
            <meshBasicMaterial
              color={color}
              transparent
              opacity={opacity}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
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
