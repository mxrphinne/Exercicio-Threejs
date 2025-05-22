import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Cena
const scene = new THREE.Scene();

// Base da cena
const planeGeometry = new THREE.PlaneGeometry(20, 20);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xa9a9a9 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
scene.add(plane);

// Caixa
const box = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ color: 0x8a2be2 })
);
box.position.set(-4, 1, 0);
box.rotation.y = Math.PI / 4;
scene.add(box);

// Caixa2
const box2 = new THREE.Mesh(
  new THREE.BoxGeometry(1.5, 3, 1),
  new THREE.MeshBasicMaterial({ color: 0x1e90ff }) // cor: ciano
);
box2.position.set(0, 1.5, -4);    
box2.rotation.y = Math.PI / 6;    
box2.scale.set(1, 1, 2);          
scene.add(box2);

// Esfera
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(1.5, 32, 32),
  new THREE.MeshBasicMaterial({ color: 0x32cd32 })
);
sphere.position.set(0, 1.5, 3);
scene.add(sphere);

// Cone
const cone = new THREE.Mesh(
  new THREE.ConeGeometry(1, 3, 32),
  new THREE.MeshBasicMaterial({ color: 0xb22240 })
);
cone.position.set(4, 1.5, -1);
cone.rotation.z = Math.PI / 4;
scene.add(cone);

// Câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(10, 10, 10);
camera.lookAt(0, 0, 0);

// Renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 1, 0);
controls.update();

// Responsividade
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Loop de animação
function animate() {
  requestAnimationFrame(animate);
  cone.rotation.x += 0.01;
  box.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
