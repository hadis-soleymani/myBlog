---
title: 'Plant care application'
date: '2020-01-01'
poster_image: 'https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657820379/Screenshot_20220203-152131_nahalito_xksuyx.jpg'
width: 130
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
