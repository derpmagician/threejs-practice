import * as THREE from "./tjs/three.module.js"
import { OrbitControls } from "./tjs/OrbitControls.js"
var scene = new THREE.Scene();
scene.background = new THREE.Color(0x2a3b4c);
var camera = new THREE.PerspectiveCamera(90, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

var geometry = new THREE.TorusGeometry(20, 2, 16, 100);
//MeshBasicMaterial requires no light source
var material = new THREE.MeshBasicMaterial({ color: 0x5f11dd, wireframe: true});
//var material = new THREE.MeshStandardMaterial({ color: 0x5f11dd});
var torus = new THREE.Mesh(geometry, material);

scene.add(torus);

camera.position.setZ(50);/*Objects will spawn in the middle so we move the camera */
var gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);

//const controls = new Three.OrbitControls(camera, renderer.domElement)
var controls = new OrbitControls(camera, renderer.domElement)

renderer.render(scene, camera);

var animate = function(){

	requestAnimationFrame(animate);

    torus.rotation.x += 0.025;
    torus.rotation.y += 0.025;
    torus.rotation.z += 0.025;
	// required if controls.enableDamping or controls.autoRotate are set to true
	//controls.update();

	renderer.render( scene, camera );

}

animate()