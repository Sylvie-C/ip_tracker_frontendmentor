# Frontend Mentor - IP Address Tracker Challenge

This is my solution to the [Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0) **IP Address Tracker** challenge.

## 🔗 Live site

🔗 [Click here to view the live site](https://ip-tracker-frontend.netlify.app)

## 🛠️ Built with

- ⚛️ React 19 + Vite 7
- 🎨 TailwindCSS 4
- 📱 Mobile-first workflow
- 🌐 [IP Geolocation API by IPify](https://geo.ipify.org/)
- 🗺️ [LeafletJS](https://leafletjs.com/)
- 🧩 Express.js (for local backend server)

## 🚀 Features

- 🔍 Track any IP address or domain name
- 📱 Fully responsive layout (mobile → desktop)
- 🗺️ Dynamic map centered on the searched location
- 📦 Clean and modular folder structure
- ♻️ Reusable React components
- 🌍 Backend proxy server for API communication (between IPify and Leaflet APIs)

## 💡 What I learned or practiced

While working on this challenge, I learned:

- How to implement a geolocation API with geo.ipify.org
- How to implement a dynamic map using LeafletJS

I also practiced:

- Frontend-backend communication using a custom Express server
- Asynchronous API handling

## 🧠 Continued development

In future iterations, I'd like to:

- Add unit and integration tests
- Improve accessibility (ARIA, keyboard navigation)
- Enhance SEO with dynamic meta tags
- Add user geolocation on load (optional)

## 🚀 Deployment

This project is deployed on [Netlify](https://www.netlify.com/).

### 🧪 Development environment

During local development, the frontend runs with Vite, and the backend is served using a custom Express server (`server.mjs`), which handles API communication with geo.ipify.org.

```bash
# Run locally (frontend + backend)
npm run dev
```

### Production environment

In production, the backend logic has been refactored into a Netlify Function, deployed as a serverless function,
located in `/netlify/functions/ip.js` .

```markdown
Note: The `server.mjs` file is kept in the repository to document the development setup and is not used in production.
```

## 👩‍💻 Author

- GitHub - [@Sylvie-C](https://github.com/Sylvie-C)
- Frontend Mentor - [@Sylvie-C](https://www.frontendmentor.io/profile/Sylvie-C)
- Portfolio - [sylvieswebcorner.fr](https://sylvieswebcorner.fr)

## 🤝 Acknowledgments

Thanks to [Frontend Mentor](https://www.frontendmentor.io/) for the challenge and inspiration!
Special thanks to the open-source dev community for tools like Leaflet, Tailwind, and Vite ...
