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

/*
To Create an object we need 3 things
Geometry: Set of vectors that define the vector itself
          Look at https://threejsfundamentals.org/threejs/lessons/threejs-primitives.html
          for more info
Material: The wrapping paper for an object
          Look at https://threejs.org/docs/?q=mate#api/en/materials/Material
          for more info
Mesh:     Geometry+Material
*/
// Torus
var geometry = new THREE.TorusGeometry(20, 2, 16, 100);
//MeshBasicMaterial requires no light source
//var material = new THREE.MeshBasicMaterial({ color: 0x5f11dd, wireframe: true});
var material = new THREE.MeshStandardMaterial({ color: 0xffffff});
var torus = new THREE.Mesh(geometry, material);

scene.add(torus);

camera.position.setZ(50);//Objects will spawn in the middle so we move the camera

var gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);
//Camera controller
var controls = new OrbitControls(camera, renderer.domElement)

const pointLight1 = new THREE.PointLight(0xff0000);//Acts as a bulb in the scene
pointLight1.position.set(20, 20, 20);

const pointLight2 = new THREE.PointLight(0x00ff00);//Acts as a bulb in the scene
pointLight2.position.set(-20, -20, -0);
scene.add(pointLight1, pointLight2);

const lightHelper1 = new THREE.PointLightHelper(pointLight1)//This will help you locate the position of the pl
const lightHelper2 = new THREE.PointLightHelper(pointLight2)
scene.add(lightHelper1, lightHelper2);

renderer.render(scene, camera);

var animate = function(){//Animation function

	requestAnimationFrame(animate);

    torus.rotation.x += 0.025;
    torus.rotation.y += 0.025;
    torus.rotation.z += 0.025;

	// required if controls.enableDamping or controls.autoRotate are set to true
	//controls.update();

	renderer.render( scene, camera );

}

animate()