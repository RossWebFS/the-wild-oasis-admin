# THE WILD OASIS

<p align="center">
  <img src="public/logo-light.png" alt="Логотип" width="300">
</p>

## Description

This is the application for a small boutique hotel called **The Wild Oasis**. The administration can manage everything about their hotel, so the booking, the cabins and also the guests.

## Table of Contents

- [THE WILD OASIS](#the-wild-oasis)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Instalation](#instalation)
  - [Usage](#usage)
  - [Project structure](#project-structure)
  - [Contact](#contact)
## Features

- Authentication
- Cabins
- Bookings
- Check in/out
- Guests
- Dashboard
- Settings
- Dark mode

## Technologies

The project was developed using the following technologies:

- **Frontend**: React, React Query, React Router
- **Backend**: Supabase
- **Styling**: Styled components
- **Development Tools**: Vite, ESLint

## Instalation

To clone this project locally, run following command:

```javascript
    git clone https://github.com/RossWebFS/the-wild-oasis-admin.git
    cd the-wild-oasis
```

## Usage

To work on this project locally you need to have Node.js installed on your machine

To install all dependencies run this command:

```javascript
    npm i
```

To run project, copy and paste this code in bash:

```javascript
    npm run dev
```

To build project for production use this command:

```javascript
    npm run build
```

## Project structure

- Project root
    - public - This folder contains static assets that are served directly to the client
    - src - folder with all project code
        - contexts - for contexts
        - data - for keeping constants and some project data
        - features - for components with their own logic
        - hooks - for custom reusable hooks
        - layouts - for base application layout parts (header, footer, sidebar, etc.)
        - pages - for project pages
        - services - for interact with the server part
        - styles - for keeping global styles
        - ui - for reusable small components
        - utils - for reusable functions

## Contact

Feel free to contact me via email

shimon.vip2006@gmail.com