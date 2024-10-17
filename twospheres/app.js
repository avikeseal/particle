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

//creating the first sphere:
const geometry = new THREE.SphereGeometry(0.5, 32, 32); // small sphere
const material = new THREE.MeshStandardMaterial({color: 0xff0000}); // red color
const sphere1 = new THREE.Mesh(geometry, material);
scene.add(sphere1);

//creating the second sphere (same size, different position)
const sphere2 = new THREE.Mesh(geometry, material); // same geometry and material as spehre1
sphere2.position.x = 2; // shift the second sphere 2 units to the right
scene.add(sphere2);

// set camera position to view both spheres:
camera.position.z = 5;

