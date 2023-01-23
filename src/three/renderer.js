import * as THREE from "three";

//初始化渲染器
const renderer = new THREE.WebGL1Renderer({
    //抗锯齿
    antialias:true,
});
//设置渲染尺寸大小
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.shadowMap.enabled = true;

export default renderer;
