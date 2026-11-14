# Task Manager

A simple and responsive task management application built with React, JavaScript, and Vite. The application allows users to manage their daily tasks through a clean and user-friendly interface.

## Live Demo

[View Live Application](https://cosmic-scone-0c19ea.netlify.app/)

## Features

- **Add Tasks:** Create new tasks easily.
- **View Tasks:** Display all tasks in a list.
- **Edit Tasks:** Update existing task titles.
- **Delete Tasks:** Remove tasks from the list.
- **Local Storage:** Automatically save tasks in the browser so they persist after refreshing the page.
- **Responsive Design:** A clean and modern interface that adapts to different screen sizes.

## Technologies Used

- **React** – Component-based user interface
- **JavaScript** – Application logic
- **HTML5 & CSS3** – Structure and styling
- **Vite** – Development and build tooling
- **LocalStorage API** – Client-side data persistence
- **ESLint** – Code quality and linting

## Installation and Setup

1. Clone the repository:

   `git clone https://github.com/YOUR_USERNAME/task-manager.git`

2. Navigate to the project directory:

   `cd task-manager`

3. Install dependencies:

   `npm install`

4. Start the development server:

   `npm run dev`

5. Open the local URL displayed in the terminal (typically `http://localhost:5173/`).

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

## How It Works

The application uses React's `useState` hook to manage the task list and input values.

- New tasks are added to the state using the spread operator.
- Existing tasks are updated using `map()`.
- Tasks are deleted using `filter()`.
- The `useEffect` hook synchronizes the task list with the browser's LocalStorage.

Each task is assigned a unique ID using `crypto.randomUUID()`.

All data is stored locally in the user's browser, so no backend server or external database is required.

## Project Structure

- `src/App.jsx` – Main application component and task management logic
- `src/App.css` – Application styles
- `src/index.css` – Global styles
- `src/main.jsx` – React entry point
- `public/` – Static assets
- `screenshots/` – Application screenshots

## Future Improvements

- Task completion status
- Task categories and priorities
- Search and filtering
- Due dates
- Dark mode

## License

This project was developed for educational purposes.
