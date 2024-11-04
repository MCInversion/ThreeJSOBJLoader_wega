# 3D Scene Viewer with Three.js, OBJLoader, and OrbitControls

This project is a 3D scene viewer built with Three.js, utilizing OBJLoader to load 3D models and OrbitControls for interactive navigation. The project is set up with Vite as the development server for faster, module-based builds.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Usage](#usage)

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
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install Project Dependencies**:
   Install the required npm packages in the project directory:
   ```bash
   npm install
   ```

## Running the Project

To start the development server with Vite:

```bash
npm run dev
```

This will start the server, and you can access the application in your browser at `http://localhost:3000` (or another port as specified by Vite).

## Project Structure

```plaintext
C:.
│   2DCanvas.svg
│   3DCanvas.svg
│   canvasControls.js
│   index.html
│   package-lock.json
│   package.json
│   README.md
│   scene2D.js
│   scene3D.js
│   styles.css
│
└───assets
        bunny.obj
```

- **`index.html`**: Main HTML file.
- **`scene3D.js`**: JavaScript file for setting up the 3D scene.
- **`canvasControls.js`**: JavaScript file for handling canvas interactions.
- **`styles.css`**: Main stylesheet for styling.
- **`assets/`**: Directory containing 3D assets (e.g., `bunny.obj`).

## Usage

1. **3D Model Loading**:
   - Place 3D models (e.g., `bunny.obj`) in the `assets` directory.
   - Update the model path in `scene3D.js` if using a different file.

2. **Orbit Controls**:
   - Use your mouse to interact with the 3D model:
     - **Left-click** and drag to rotate the view.
     - **Scroll** to zoom in and out.
     - **Right-click** and drag to pan around the scene.

3. **Customizing the View**:
   - Adjust the `fitToView` function in `scene3D.js` to modify the camera, lighting, and controls as needed.

## Notes

- **Production Build**:
  For a production build, run:
  ```bash
  npm run build
  ```
  This will generate optimized files in a `dist` folder, which can be served by any static file server.