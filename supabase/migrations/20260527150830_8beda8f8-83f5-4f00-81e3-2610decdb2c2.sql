REVOKE SELECT, UPDATE, DELETE ON public.contact_submissions FROM anon, authenticated;
GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT ALL ON public.contact_submissions TO service_role;

CREATE POLICY "No public read access to contact submissions"
ON public.contact_submissions
FOR SELECT
TO anon, authenticated
USING (false);