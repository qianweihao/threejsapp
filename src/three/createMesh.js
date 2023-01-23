import * as THREE from "three";
import {RGBLoader} from "three/examples/jsm/loaders/RGBELoader"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import scene from "./scene";
import gsap from "gsap";
import createCity from "./mesh/City";
export default function createMesh(){
//添加平面
// const plane = new THREE.Mesh(
//     new THREE.PlaneBufferGeometry(20,20),
//     new THREE.MeshBasicMaterial({color: 0xff0000})
// )
// plane.position.set(0,0,-6);
// plane.receiveShadow = true;
// scene.add(plane)
createCity();

}