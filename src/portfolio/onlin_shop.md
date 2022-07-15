---
title: "Online shop"
date: "2021-01-01"
poster_image: "https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657655719/Untitled_ncebvl.png"
width: 300
video: https://res.cloudinary.com/dzmzdqy8q/video/upload/v1657651124/B612_20220529_175214_025_dma1v5.mp4
pic:
  [
    {
      id: 0,
      width: 400,
      slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657655719/Untitled_ncebvl.png,
    },
    {
      id: 1,
      width: 400,
      slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657655383/2_oe1eqf.png,
    },
    {
      id: 2,
      width: 400,
      slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657655378/3_knhqww.png,
    },
    {
      id: 3,
      width: 150,
      slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657655376/5_u4pdaj.png,
    },
    {
      id: 4,
      width: 150,
      slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657655377/6_bvojuq.png,
    },
    {
      id: 5,
      width: 150,
      slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657655376/4_wx5myc.png,
    },
  ]
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
