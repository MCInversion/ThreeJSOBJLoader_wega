# 3D Scene Viewer with Three.js, OBJLoader, and OrbitControls

This project is a 3D scene viewer built with Three.js, utilizing OBJLoader to load 3D models and OrbitControls for interactive navigation. The project is set up with Vite as the development server for faster, module-based builds.

## Prerequisites

Before setting up the project, ensure you have the following installed:

1. **Node.js and npm**: Node.js is required to run Vite, and npm (Node Package Manager) is included with Node.js.

   - Download Node.js (includes npm): [https://nodejs.org/](https://nodejs.org/)
   - Verify installation:
     ```bash
     node -v
     npm -v
     ```

## Installation

1. **Clone the Repository**:
   Clone the repository to your local machine:
   ```bash
   git clone https://github.com/MCInversion/ThreeJSOBJLoader_wega.git
   cd ThreeJSOBJLoader_wega
   ```

2. **Install Project Dependencies**:
   Install the required npm packages in the project directory:
   ```bash
   # three.js
   npm install --save three
   
   # vite
   npm install --save-dev vite
   ```

## Running the Project

To start the development server with Vite:

```bash
npx vite
```
npx is installed with Node.js, and runs command line programs like Vite so that you don't have to search for the right file in node_modules/ yourself. If you prefer, you can put Vite's common commands into the package.json:scripts list, and use npm run dev instead.

This will start the server, and you can access the application in your browser at `http://localhost:5173` (or another port as specified by Vite).
