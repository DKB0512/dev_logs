---
title: "How I built this: A minimalist dev blog"
date: 2025-01-24
description: "Building a fast, dark-themed blog using ABC Stack."
---

I wanted a blog that didn't feel like a chore to maintain. No heavy databases, no complex CSS frameworks, and definitely no slow build times.

Here is how I put this site together using **ABC** Stack.

## The "ABC" Stack

![Image description: A screenshot taken from cloudflare's blog](https://cdn.jsdelivr.net/gh/DKB0512/blog-images/images/blog-1/astro-cf.webp)
_Astro + Bun + Cloudflare_

- **Bun**: I used Bun as the runtime and package manager. It’s significantly faster than Node.js and handles `npm` packages natively.
- **Astro**: The "Content Layer" in Astro 5 is a game changer. It treats Markdown files like a local database.
- **Cloudflare Pages**: It’s free, it’s fast, and it deploys automatically when I push to GitHub.

## 1. Starting with Bun

Instead of the usual `npm init`, I started with Bun. It feels snappier.

```bash
# https://bun.com/docs/guides/ecosystem/astro
bun create astro
```

I chose the "Empty" template because I wanted to understand every line of code in my project.

## 2. Organizing Content

In Astro 5, you define your content structure in a `content.config.ts` file. This gives you TypeScript autocompletion for your Markdown frontmatter. If I forget to add a date to a post, the build fails which is exactly what I want.

## 3. The "Orange & Zinc" Look

I didn't want to spend hours on CSS. I went with a "Classless-ish" approach. I defined three main colors in a global layout:

- **Background**: A deep Zinc grey (`#18181b`)
- **Accent**: A light, sunset orange (`#fb923c`)
- **Text**: A soft off-white (`#e4e4e7`)

By styling the HTML tags directly (like `h1`, `p`, and `a`) inside the layout, the Markdown content styles itself automatically.

## 4. Code Highlighting

As a dev blog, code needs to look good. Astro has **Shiki** built-in. I set the theme to `vesper` in the config because it matches the orange/grey aesthetic perfectly.

```javascript
// astro.config.mjs
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "vesper",
      wrap: true,
    },
  },
});
```

## 5. Deploying to the Edge

Deploying to Cloudflare Pages was the easiest part.

1. Push the code to GitHub.
2. Connect the repo to Cloudflare.
3. Set the build command to `bun run build`.

Now, every time I save a Markdown file and push it, the site updates in about 30 seconds.

## Final Thoughts

This setup is perfect if you just want to write. There’s no "technical debt" here. If I want to change the look, I edit one CSS file. If I want to write a post, I create one Markdown file.

Simple.
