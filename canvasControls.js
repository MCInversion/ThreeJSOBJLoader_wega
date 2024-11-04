import { initScene3D } from '/scene3D.js';

const btn = document.getElementById("go3DButton");
const canvas2D = document.getElementById("myCanvas2D");
const canvas3D = document.getElementById("myCanvas3D");
const svgIcon = document.getElementById("svgIcon");
const btnText = document.getElementById("buttonText");
let canvasWrapper = document.querySelector(".canvas-wrapper");
 
// Because canvas is responsive to canvas-wrapper size, we need to resize the canvas
function resizeCanvasAccordingToWrapper(canvas, canvasWrapper) {
    canvas.width = canvasWrapper.offsetWidth;
    canvas.height = canvasWrapper.offsetHeight;
}
 
canvasWrapper.addEventListener("resize", function() {
    resizeCanvasAccordingToWrapper(canvas2D, canvasWrapper);
    resizeCanvasAccordingToWrapper(canvas3D, canvasWrapper);
});
 
resizeCanvasAccordingToWrapper(canvas2D, canvasWrapper);
resizeCanvasAccordingToWrapper(canvas3D, canvasWrapper);

function onClickBtn() {
    if (canvas2D.style.display === "none") {
        // Switch to 2D
        canvas3D.style.display = "none";
        canvas2D.style.display = "block";
         
        // Update the button text
        btnText.textContent = "Go 3D";
         
        // Switch the SVG icon to 3D view
        svgIcon.setAttribute("data", "3DCanvas.svg");
    } else {
        // Switch to 3D
        canvas2D.style.display = "none";
        canvas3D.style.display = "block";
 
        // Update the button text
        btnText.textContent = "Go 2D";
         
        // Switch the SVG icon to 2D view
        svgIcon.setAttribute("data", "2DCanvas.svg");
 
        initScene3D();
    }
 
    // You can also initialize or refresh your canvas rendering here, if needed.
}
 
btn.addEventListener("click", onClickBtn);
