---
title: "Cuctus online shop"
date: "2022-01-01"
poster_image: "https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657656286/2_ruagna.png"
width: 300
video: https://res.cloudinary.com/dzmzdqy8q/video/upload/v1657656292/Rec_0033_yfayd1.mp4
pic:
  [
    {
      id: 0,
      width: 400,
      slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657656286/Untitled_gxnvhf.png,
    },
    {
      id: 1,
      width: 400,
      slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657656286/2_ruagna.png,
    },
    {
      id: 2,
      width: 400,
      slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657656286/4_cfffbk.png,
    },
    {
      id: 3,
      width: 400,
      slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657656286/3_oomnhc.png,
    },
  ]
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
