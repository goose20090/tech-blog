# tech-blog

Personal blog, built with [Astro](https://docs.astro.build) and deployed to GitHub Pages on every push to `main`.

## Writing a post

1. Add a Markdown file to `src/content/blog/`. The filename becomes the URL (`my-post.md` → `/blog/my-post/`).
2. Start it with this frontmatter:

   ```md
   ---
   title: 'Post title'
   description: 'One sentence for the post list and link previews.'
   pubDate: '2026-10-24'
   draft: true
   ---
   ```

   Link to other posts with relative links (`../other-post/`) so they keep working if the site moves to a custom domain.
3. Preview with `npm run dev` (http://localhost:4321/tech-blog/). Drafts show up locally, marked "Draft".
4. Commit and push drafts whenever you like. They're left out of the live site.
5. To publish, set `draft: false` and `pubDate` to today, then push.

A post without a `draft` line counts as a draft, so nothing goes live by accident.

## Commands

| Command           | Action                               |
| :---------------- | :----------------------------------- |
| `npm run dev`     | Local dev server at `localhost:4321/tech-blog/` |
| `npm run build`   | Build the site to `./dist/`          |
| `npm run preview` | Preview the built site locally       |
