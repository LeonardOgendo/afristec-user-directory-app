## Afristec - User Directory App

A modern, single-page **User Directory** built with **React.js**, featuring real-time search, theme toggling, and favorites — structured using a **SOLID, feature-based architecture** for maintainability and scalability.

> Developed as part of the Afristec Frontend Developer Skills Test.

---

### 🚀 Features

- **Search Users in Real-Time**  
  Fetches users from a public API and filters them as you type (case-insensitive).
  
- **Dark/Light Theme Toggle**  
  Simple UI switcher powered by React Context.

- **Mark Favorites**  
  Toggle favorite status per user and persist it in `localStorage`.

- **Recent Searches**  
  Automatically stores your 5 latest search terms for easy recall.

- **Responsive UI**  
  Tailwind CSS-powered layout that works great on mobile and desktop.

---

### 📁 Project Structure

Organized using a **feature-based architecture** with separation of concerns | SOLID Principles

```bash
src/
├── app/
│   ├── context/
│   │   └── themeContext.jsx         # Theme context logic and provider
│   ├── layout/
│   │   └── AppLayout.jsx            # Shared layout structure
│   └── router.jsx                   # React Router configuration
│
├── features/
│   └── users/
│       ├── components/
│       │   └── UserCard.jsx         # UI component for individual user display
│       ├── userApi.js               # API functions to fetch user data
│       ├── userContext.jsx          # Context for managing favorites & recent searches
│       └── UsersPage.jsx            # Main users directory view
│
├── styles/
│   └── styles.css                   # Global Tailwind CSS and custom styles
│
├── App.jsx                          
├── main.jsx                         
```


---

### 📦 Technologies Used

- [React.js](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Hot Toast](https://react-hot-toast.com/) – for toast notifications


---

### Getting Started

#### Clone & Install

```bash
git clone https://github.com/LeonardOgendo/afristec-user-directory-app.git

npm install
```


#### Run the App

```bash
npm run dev
```

> The app runs on `http://localhost:5173` by default (Vite).


---

### 🧊 Notes

- Favorites and Recent Searches are persisted in `localStorage`.
- Theme resets on page reload (no persistence by choice).



