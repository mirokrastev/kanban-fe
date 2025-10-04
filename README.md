# kanban-fe

Front-end for the Kanban board application. It interacts with the Kanban API to manage tasks and boards.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [License](#license)

## Features

- CRUD over tasks on boards
- CRUD over columns on boards
- Drag-and-drop functionality for task management
- Responsive UI for both desktop and mobile screens
- Clean & intuitive design based on Kanban principles

## Technologies Used

- **React**
- **React-DnD** for drag & drop functionality
- **React Router** for navigation

## Installation

Follow the steps below to set up the front-end locally.

#### Prerequisites

Before you get started, make sure you have the following installed on your local machine:

- Developed and tested with Node.js v22.x and npm v10.9.x

#### Steps

1. Clone this repository:
   ```bash
   git clone https://github.com/mirokrastev/kanban-fe.git
   cd kanban-fe
2. Intell the dependencies: 
   ```bash
   npm install
3. If needed, change `BASE_URL` in `src/sdk/index.js` to point to the API server.
4. Start the development server:
   ```bash
   npm start
