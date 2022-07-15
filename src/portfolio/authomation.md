---
title: "Ticket manager"
date: "2020-04-01"
poster_image: "https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657651194/d1_q2gjcr.png"
width: 300
video : https://res.cloudinary.com/dzmzdqy8q/video/upload/v1657651438/desktop_me7xvz.mp4
pic:
  [
    { id: 0,width : 400 ,  slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657651194/d1_q2gjcr.png },
    { id: 1,width : 400 , slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657651244/d2_lxcaxr.png },
    { id: 2, width : 400 , slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657651260/d3_svqfux.png },
    { id: 3,width : 400 ,  slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657651276/d4_hqfunq.png },
    { id: 4,width : 150 , slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657651301/m1_bbvar7.png },
    { id: 5,width : 150 , slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657651346/m2_ccag8p.png },
    { id: 6,width : 150 ,  slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657651347/messagemob1_pmbkce.png },
    { id: 7,width : 150 , slide_pic_url: https://res.cloudinary.com/dzmzdqy8q/image/upload/v1657651347/m3_rq49ss.png },
  ]
  
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
