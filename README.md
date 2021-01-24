# DeletedBot Frontend

This repo contains the code for DeletedBot's frontend.

It's made with some basic HTML, CSS and JS (jQuery).
CSS is provided by [this fork](https://github.com/lianella-gg/typora-cobalt-theme) of Cobalt theme for Typora.

This project is released under GNU GPL v3.0, read the LICENSE file to know more. Contributions are always welcome!

> The backend is split apart from the frontend for everyone who wants to follow the **Jamstack** way.
> If you don't care about that, and you want an all-in-one solution which is **easier to deploy,** check out the [allinone](https://github.com/deleted-bot/allinone) repo.



## How to self-host

Notice: The front-end, without a backend linked, is useless. Check out the [backend](https://github.com/deleted-bot/backend) repo to learn how to deploy the backend before deploying the frontend.

1. Fork this repo (if you want to deploy to Netlify) or download it (if you want to deploy to your local server)
2. Edit the file `create.js` and replace `https://apidel.massivebox.eu.org/setbot` with `https://HOST.OF.YOUR.BACKEND/setbot`.
4. Deploy as you'd usually do. [Here's](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/) an handy guide for Netlify, if you're a beginner.
5. That's it. Here's a cat to fill some space:

![Maurizio the cat](https://i.imgur.com/58ZHjlC.gif)