# Movie Explorer

A responsive Movie Explorer application built with React. Users can browse TV shows, search for specific titles, and view detailed information in an interactive modal.

## Live Demo

https://movie-explorer-two-snowy.vercel.app/

## GitHub Repository

https://github.com/mishukmahbub/movie-explorer

## Features

- Responsive home page
- Navigation between Home and Movies pages
- Browse TV shows from the TVMaze API
- Search shows by title
- Responsive movie/show card grid
- Show poster, title, release year, and rating
- Interactive details modal
- Modal close button
- Close modal by pressing the Escape key
- Close modal by clicking outside the modal
- Loading state
- API error handling
- Responsive design for desktop, tablet, and mobile

## Technologies Used

- JavaScript
- React
- React Router
- Vite
- CSS
- TVMaze API

## API

This project uses the free TVMaze API.

### Get All Shows

```text
https://api.tvmaze.com/shows
```

### Search Shows

```text
https://api.tvmaze.com/search/shows?q={query}
```

## Project Structure

```text
movie-explorer/
├── public/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieModal.jsx
│   │   ├── Navbar.jsx
│   │   └── SearchBar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Movies.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vercel.json
└── vite.config.js
```

## Installation

Clone the repository:

```bash
git clone https://github.com/mishukmahbub/movie-explorer.git
```

Go to the project directory:

```bash
cd movie-explorer
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Production Build

To create a production build:

```bash
npm run build
```

The production files will be generated inside the `dist` folder.

## Deployment

The application is deployed using Vercel.

Live URL:

https://movie-explorer-two-snowy.vercel.app/

