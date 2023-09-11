// ==UserScript==
// @name         TMDb Movies
// @namespace    https://cima4u.org/
// @version      1.0
// @description  Play Any Movies/TV From TMDB
// @author       TMGBoy
// @match        https://www.themoviedb.org/movie/*
// @match        https://www.themoviedb.org/tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const buttonImageUrl = 'https://cima4u.org/favicon/icon512.png';

    function createWatchButton() {
        const button = document.createElement('a');
        button.href = getRedirectUrl();
        button.target = '_self';
        button.style.position = 'fixed';
        button.style.right = '60px'; 
        button.style.top = '50%';
        button.style.transform = 'translateY(-50%)';
        button.style.zIndex = '9999';

        const img = document.createElement('img');
        img.src = buttonImageUrl;
        img.alt = 'Watch Now';
        img.style.width = '92px';

        button.appendChild(img);

        document.body.appendChild(button);
    }

    function getRedirectUrl() {
        const currentUrl = window.location.href;
        if (currentUrl.includes('/movie/')) {
            return currentUrl.replace('https://www.themoviedb.org/movie/', 'https://cima4u.org/movie/');
        } else if (currentUrl.includes('/tv/')) {
            return currentUrl.replace('https://www.themoviedb.org/tv/', 'https://www.cima4u.org/tv/');
        }
        return '';
    }

    if (window.location.href.includes('https://www.themoviedb.org/')) {
        createWatchButton();
    }
})();
