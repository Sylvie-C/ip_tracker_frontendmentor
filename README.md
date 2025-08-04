# Frontend Mentor - IP Address Tracker Challenge

This is my solution to the [Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0) **IP Address Tracker** challenge.

Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#Links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Features](#Features)
  - [What I learned or practice](#what-i-learned-or-practiced)
  - [Continued development](#continued-development)
  - [Deployment](#deployment)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

## Links

- [My Challenge Solution](https://www.frontendmentor.io/solutions/deployed-app-frontend-netlify-MwlW0DI-Js)
- [Live Website on Netlify](https://ip-tracker-frontend.netlify.app)

## My process

### Built with

- ⚛️ React 19 + Vite 7
- 🎨 TailwindCSS 4
- 📱 Mobile-first workflow
- 🌐 [IP Geolocation API by IPify](https://geo.ipify.org/)
- 🗺️ [LeafletJS](https://leafletjs.com/)
- 🧩 Express.js (for local backend server)

### Features

- 🔍 Track any IP address or domain name
- 📱 Fully responsive layout (mobile → desktop)
- 🗺️ Dynamic map centered on the searched location
- 📦 Clean and modular folder structure
- ♻️ Reusable React components
- 🌍 Separate project for the backend proxy server, which fetches IP data using the **geo.ipify IP Geolocation API**.

### Environment Variables

For this frontend app with Vite7, set the **VITE_BACKEND_URL** environment variable in your .env file.  
Value: your backend server URL.

### Backend Server

For security reasons, the backend server code remains private.  
Here’s a code snippet for fetching data from the ipify IP Geolocation API:

```
const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`;
try {
    const response = await fetch(url);
    ...
```

### What I learned or practiced

While working on this challenge, I learned:

- How to implement a geolocation API with geo.ipify.org
- How to implement a dynamic map using LeafletJS
- How to deploy and configure a backend server on Netlify

I practiced:

- Frontend-backend communication using a custom local Express server
- Asynchronous API handling

### Continued development

In future iterations, I'd like to:

- Add unit and integration tests
- Improve accessibility (ARIA, keyboard navigation)
- Enhance SEO with dynamic meta tags

### Deployment

This project is deployed on [Netlify](https://www.netlify.com/).

During local development, the frontend runs with Vite, and the backend is served using a custom Express server (`server.mjs`), which handles API communication with geo.ipify.org.

```bash
# Run locally with
npm run dev
```

Please refer to package.json for other scripts commands

## Author

- GitHub - [@Sylvie-C](https://github.com/Sylvie-C)
- Frontend Mentor - [@Sylvie-C](https://www.frontendmentor.io/profile/Sylvie-C)
- Portfolio - [sylvieswebcorner.fr](https://sylvieswebcorner.fr)

## Acknowledgments

Thanks to [Frontend Mentor](https://www.frontendmentor.io/) for the challenge and inspiration!
Special thanks to the open-source dev community for tools like Leaflet, Tailwind, Vite, etc...
