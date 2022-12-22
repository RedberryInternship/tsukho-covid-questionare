<div style="display:flex; align-items: center">
  <h1 style="position:relative; top: -6px" >Covid Questionare</h1>
</div>

---

Covid Questionare helps company to gather information regarding their empleoyees covid-19 status and there relationship with different working environments.

#

### Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development](#development)
- [Project Structure](#project-structure)
- [Deployment](#deployment)

#

### Prerequisites

- <img src="readme/assets/node.png" width="25" style="position: relative; top: 8px" /> _Node JS @14.X and up_
- <img src="readme/assets/npm.png" width="35" style="position: relative; top: 4px" /> _npm @6 and up_
- <img src="readme/assets/typescript.png" width="20" style="position: relative; top: 6px" /> *TypeScript@4.9.3.X and up*

#

### Tech Stack

- <img src="readme/assets/react.png" height="18" style="position: relative; top: 4px" /> [React @18.2.0.0](https://reactjs.org) - front-end framework
- <img src="readme/assets/axios.svg" height="18" style="position: relative; top: 4px; width: 18px" /> [axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js
- <img src="readme/assets/vite.png" height="18" style="position: relative; top: 4px; width: 18px" /> [Vite](https://vitejs.dev/guide/) - rapid development tool
- <img src="readme/assets/tailwind.png" height="18" style="position: relative; top: 4px; width: 18px" /> [Tailwind](https://tailwindcss.com/) - Tailwind CSS is an open source CSS framework

#

### Getting Started

1\. First of all you need to clone Covid Questionare repository from github:

```sh
git clone https://github.com/RedberryInternship/tsukho-covid-questionare.git
```

2\. Next step requires install all the dependencies.

```sh
npm install
```

or

```sh
yarn
```

#

### Project Structure

```bash
├─── readme   # readme assets
├─── public      # public folder
│   ├─── assets       # project images and fonts
├─── src      # project source codes
│   ├─── components   # reusable components
│   ├─── pages      # pages folder for routing
│   ├─── helpers      # global helpers
│       ├─── hooks        # global react hooks
│   ├─── services     # api services / axios calls
│   ├─── state        # context api state management
│   ├─── types        # global types
- .eslintrc.json   # eslint config file
- .prettierrc.js   # prettier config file
- App.tsx          # react app
- index.html       # index file
- package.json     # dependency manager configurations
- tsconfig.json    # typescript config file
- tailwind.config.cjs     # tailwind config file
- vite.config.ts     # vite config file
- .gitignore     # gitignore file
- postcss.config.cjs     # postcss config file

```

#

### Deployment

In order to deploye project on the server you must build existing Covid Questionare from terminal:

```sh
npm run build
```
