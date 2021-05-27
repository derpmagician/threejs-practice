import * as THREE from "./three.module.js" //The main module
import { OrbitControls } from "./OrbitControls.js" //This will help us control the camera

/*
We need at least these 3 objects to actually see something
Scene:    Container that holds all your objects, cameras and lights
Camera:   Indicates what part of the scene will the focus of attention
          PerspectiveCamera(FOV,aspect ration(browser window), view frustum(near, far))
Renderer: Render the graphics to the scenes (the canvas)
*/

var scene = new THREE.Scene();
//scene.background = new THREE.Color(0x2a3b4c);
var camera = new THREE.PerspectiveCamera(90, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);
