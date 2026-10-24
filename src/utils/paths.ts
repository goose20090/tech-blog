// Prefix an internal path with the site's base (`/tech-blog` on GitHub Pages).
// With a custom domain and no `base` in astro.config.mjs, this returns the path unchanged.
export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return `${base}/${path.replace(/^\//, '')}`;
}
