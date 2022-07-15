---
title: "Plant care application"
date: "2020-01-01"
poster_image: "https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657650972/1_qgkjgu.jpg"
width: 120
video: https://res.cloudinary.com/dzmzdqy8q/video/upload/v1657651124/B612_20220529_175214_025_dma1v5.mp4
pic:
  [
    {
      id: 0,
      width: 150,
      slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657650845/Screenshot_20220113-203834_nahalito_xtuhqq.jpg,
    },
    {
      id: 1,
      width: 150,
      slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657650930/6_x28sjg.jpg,
    },
    {
      id: 2,
      width: 150,
      slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657650972/1_qgkjgu.jpg,
    },
    {
      id: 3,
      width: 150,
      slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657650998/2_exvpxj.jpg,
    },
    {
      id: 4,
      width: 150,
      slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657651023/3_hg65qw.jpg,
    },
    {
      id: 5,
      width: 150,
      slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657651043/4_iqzsoj.jpg,
    },
  ]
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
