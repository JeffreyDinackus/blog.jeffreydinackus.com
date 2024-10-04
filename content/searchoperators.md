---
author: 'Jeffrey Dinackus'
title: "Search operators you can actually use"
date: "2024-10-01"
---

I’m keeping this short and sweet so it’s usable. 

If you need to filter results to a specific website use this:

`site:reddit.com cat memes`

finds [reddit.com](http://reddit.com) results of cat memes

If you need to find a PDF file on a specific website 

`site:reddit.com filetype:pdf`

finds PDF’s hosted on reddit.com

There are a lot of things you can do with this flag, such as a title of a PDF

`filetype:pdf ESV bible`

Let’s say the search results aren’t really showing what you are typing in. You want the exact text you typed. 

`filetype:pdf "ESV Bible"` 

Will search the exact phrase and only show results that meet that text exactly. Check for spelling mistakes!

Want to read a blog of a company that you like? Type adding a blog subdomain. 

[facebook.com](http://facebook.com) → [blog.facebook.com](http://blog.facebook.com) 

[facebook.com](http://facebook.com) → facebook.com/blog

Find after or before a date 

`after:2022 terraform docs` 

you can find some old stuff this way

`before:2003 blog` 

combine them too

`after:2022 before:2024 memes` 

finds memes only in 2023

Note: These are not inclusive, so after:2022 will only be 2023 and later, not including 2022 results. 

Once in a blue moon I will need these ones

`intitle:blog site:tesla.com`  

finds url’s with blog in the title of the website I believe

`inurl:blog site:tesla.com`

finds blog in the URL of [tesla.com](http://tesla.com) (my preferred way)