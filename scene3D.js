import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

let scene, material, camera, renderer, controls; // Declare the scene, camera, renderer, and controls

export function initScene3D() {
    let canvas = document.getElementById("myCanvas3D");
    let context = canvas.getContext("webgl2", { alpha: false });

    canvas.addEventListener('resize', function() {
        const newWidth = canvas.width;
        const newHeight = canvas.height;

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(newWidth, newHeight);
    });

    // Create the scene
    scene = new THREE.Scene();

    // Create the camera with an adjusted near plane
    camera = new THREE.PerspectiveCamera(40, canvas.width / canvas.height, 0.1, 100);

    // Create the renderer
    renderer = new THREE.WebGLRenderer({ canvas: canvas, context: context, antialias: true });
    renderer.setSize(canvas.width, canvas.height);
    
    // Set the renderer's background color
    const canvasWrapper = document.querySelector(".canvas-wrapper");
    const computedStyle = getComputedStyle(canvasWrapper);
    renderer.setClearColor(computedStyle.backgroundColor);

    // Initialize orbit controls
    controls = new OrbitControls(camera, renderer.domElement);

    // Create the material for the loaded object
    material = new THREE.MeshPhongMaterial({ color: 0xe39b6b, side: THREE.DoubleSide });

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 100.0);
    scene.add(ambientLight);

    // Load the 3D model
    const loader = new OBJLoader();
    loader.load('assets/bunny.obj', loadObject); 

    // Start animation loop
    animateScene3D();
}

function loadObjectDummyIcosahedron(o) {
    scene.children = []; // clear the scene
    const subdiv = 1;
    const icoRadius = 1;
    const geometry = new THREE.IcosahedronGeometry(icoRadius, subdiv);
    const ico = new THREE.Mesh(geometry, material);
    scene.add(ico);
}

function loadObject(o) {
    scene.children = []; // clear the scene
    for (let i = 0; i < o.children.length; i++) 
    {
        let child = o.children[i];
        child.material = material;
        scene.add(child);
        fitToView(camera, child, 1.5, controls);
    }
}

function fitToView(camera, object, offset, controls) {
    const boundingBox = new THREE.Box3().setFromObject(object);
    const center = new THREE.Vector3();
    boundingBox.getCenter(center);
    const size = new THREE.Vector3();
    boundingBox.getSize(size);

    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * offset;

    // Adjust camera settings based on bounding box
    camera.position.set(center.x, center.y, cameraZ);
    camera.near = cameraZ / 100;
    camera.far = cameraZ * 2;
    camera.updateProjectionMatrix();
    
    camera.lookAt(center);

    // Adjust directional light position and intensity
    const lightDistance = maxDim * 2;
    const lightIntensity = 1.5;
    const light = new THREE.DirectionalLight(0xFFFFFF, lightIntensity);
    light.position.set(center.x + lightDistance, center.y + lightDistance, center.z + lightDistance);
    light.lookAt(center);
    scene.add(light);

    // Update OrbitControls to target the object's center
    if (controls) {
        controls.target.copy(center); // Set the controls target to the center of the object
        controls.update();            // Apply the new target immediately
    }
}

//console.log("countFacesInCameraView: ", countFacesInCameraView(camera, object));
// function countFacesInCameraView(camera, object)
// {
//     let vertices = object.geometry.attributes.position.array;
//     let count = 0;
//     for (let i = 0; i < vertices.length; i += 3) 
//     {
//         let vertex = new THREE.Vector3(vertices[i], vertices[i + 1], vertices[i + 2]);
//         if (isVertexInCameraView(camera, vertex)) 
//         {
//             count++;
//         }
//     }
//     return count / 3;
// }

// function isVertexInCameraView(camera, vertex)
// {
//     let frustum = new THREE.Frustum();
//     let cameraViewProjectionMatrix = new THREE.Matrix4();
//     cameraViewProjectionMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
//     frustum.setFromProjectionMatrix(cameraViewProjectionMatrix);
//     return frustum.containsPoint(vertex);
// }

function animateScene3D() {
    requestAnimationFrame(animateScene3D);
    // rotate all objects in the scene
    // for (let i = 0; i < scene.children.length; i++) 
    // {
    //     let object = scene.children[i];
    //     object.rotation.x += 0.001;
    //     object.rotation.y += 0.001;
    // }
    renderer.clear();
    renderer.render(scene, camera);
}