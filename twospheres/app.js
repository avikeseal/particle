// Basic setup:
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer, domElement);

// Adding lighting for 3D effect
const ambientLight = new THREE.AmbientLight(0x404040); // Soft ambient light
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 1000) // Strong point light
pointLight.position.set(5, 5, 5); //position light to shine on the spheres
scene.add(pointLight);
