import { getCollection } from 'astro:content';

// Drafts show up in `npm run dev` but are left out of the built site.
export function getPosts() {
	return getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
}
