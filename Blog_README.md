# Blog Instructions

This file is NOT a blog post (it has no frontmatter, so it won't show up on the site). It's a reference for how to write and manage posts.

---

## How to create a new blog post

1. Create a new `.md` file in this folder (`content/blog/`)
2. The filename becomes the URL slug. Example: `kafka-pipeline.md` becomes `/blog/kafka-pipeline`
3. Use lowercase and hyphens for filenames (no spaces)

## Frontmatter template

Every post needs this at the top, between `---` lines:

```markdown
---
title: "Your Post Title Here"
excerpt: "A short 1-2 sentence summary shown on the blog card preview."
date: "2024-03-15"
category: "Backend"
readTime: "8 min read"
---
```

### Field reference

| Field      | Required | Description                                                        |
|------------|----------|--------------------------------------------------------------------|
| `title`    | Yes      | The post title, shown on cards and the post page                   |
| `excerpt`  | Yes      | Short preview text shown on blog cards (1-2 sentences)             |
| `date`     | Yes      | Publication date in `YYYY-MM-DD` format. Used for sorting          |
| `category` | Yes      | Badge label. Use: `Backend`, `Frontend`, `Personal`, or any string |
| `readTime` | Yes      | Display string like `"5 min read"`. You estimate this yourself     |

## Writing content

After the frontmatter, write normal markdown:

```markdown
# Heading 1
## Heading 2
### Heading 3

Regular paragraph text. **Bold** and *italic* work.

- Bullet list
- Another item

1. Numbered list
2. Second item

[Link text](https://example.com)

![Image alt text](/images/my-image.jpg)

> Blockquote

`inline code`
```

### Code blocks

Use triple backticks with a language name:

````markdown
```python
def hello():
    print("Hello world")
```
````

Supported languages: python, javascript, typescript, java, sql, bash, and more.

### Adding images to posts

1. Put image files in the `public/images/` folder
2. Reference them with a leading `/`:

```markdown
![My screenshot](/images/screenshot.png)
```

### Adding links

```markdown
[Click here](https://github.com/chien-se)
[Another post](/blog/my-other-post)
```

## Using Obsidian

You can point Obsidian's vault at the `content/blog/` folder (or the whole project). Just make sure:

- You write the frontmatter exactly as shown above (Obsidian supports YAML frontmatter natively)
- You save files as `.md` with hyphenated lowercase names
- Images go in `public/images/`, not in the blog folder

## How it shows up on the site

- **Homepage** (`/`): Shows the 3 most recent posts (sorted by `date`)
- **Blog index** (`/blog`): Lists all posts
- **Individual post** (`/blog/your-slug`): Full post page with rendered markdown

## Publishing

After writing or editing a post:

1. Save the `.md` file
2. `git add content/blog/your-post.md`
3. `git commit -m "add blog post: your post title"`
4. `git push`

The site rebuilds automatically on deploy (Vercel/Netlify) and your post is live.

## Deleting or hiding a post

Just delete or rename the `.md` file. If the file doesn't exist, the post disappears from the site.

## Example post

See `my-first-post.md` and `developer-journey.md` in this folder for working examples.
