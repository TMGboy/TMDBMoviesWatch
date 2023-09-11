// ==UserScript==
// @name         TMDb Movies
// @namespace    https://cima4u.org/
// @version      1.0
// @description  Play Any Movies/TV From TMDB
// @author       TMGBoy
// @match        https://www.themoviedb.org/movie/*
// @match        https://www.themoviedb.org/tv/*
// @downloadURL  https://raw.githubusercontent.com/TMGboy/TMDBMoviesWatch/main/updates.js
// @updateURL    https://raw.githubusercontent.com/TMGboy/TMDBMoviesWatch/main/updates.js
// ==/UserScript==

!function(){const e="https://cima4u.org/favicon/icon512.png";function t(){const t=document.createElement("a");t.href=n(),t.target="_self",t.style.position="fixed",t.style.right="60px",t.style.top="50%",t.style.transform="translateY(-50%)",t.style.zIndex="9999";const o=document.createElement("img");o.src=e,o.alt="Watch Now",o.style.width="92px",t.appendChild(o),document.body.appendChild(t)}function n(){const e=window.location.href;return e.includes("/movie/")?e.replace("https://www.themoviedb.org/movie/","https://cima4u.org/movie/"):e.includes("/tv/")?e.replace("https://www.themoviedb.org/tv/","https://www.cima4u.org/tv/"):""}window.location.href.includes("https://www.themoviedb.org/")&&t()}();
