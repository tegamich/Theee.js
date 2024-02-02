import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer(); // for add and animate 3d stuff

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement); //for inject canvas element into page

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const axesHelper = new THREE.AxesHelper(5)  // adds 3d guide to the scene; (5) = length of axis
scene.add(axesHelper);

camera.position.z = 5;

renderer.render(scene, camera);

