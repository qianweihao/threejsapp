import * as THREE from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import modifyCityMaterial from "../modify/modifyCityMaterial";
import scene from "../scene";
import AlarmSprite from "./AlarmSprite";
import FlyLine from "./FlyLine";
import FlyLineShader from "./FlyLineShader"
import LightRadar from "./LightRadar";
import LightWall from "./LightWall";
import MeshLine from "./MeshLine";

export default function createCity(){
  const gltfLoader = new GLTFLoader();
  gltfLoader.load('./model/city.glb',(gltf) =>{
      //console.log(gltf);

      gltf.scene.traverse((item) =>{
        // console.log(item)
      if(item.type =="Mesh"){
        const cityMaterial = new THREE.MeshBasicMaterial({
          color: new THREE.Color(0x0c0e6f),
      })
        item.material = cityMaterial
        modifyCityMaterial(item)
        if(item.name == "Layerbuildings"){
          const meshLine = new MeshLine(item.geometry)
          const size = item.scale.x*1.0001
          meshLine.mesh.scale.set(size,size,size)
          
          meshLine.mesh.position.set(item.position.x,item.position.y,item.position.z)

          scene.add(meshLine.mesh)
        }
      }
      })
      scene.add(gltf.scene)

      // //添加飞线
      // const flyLine = new FlyLine();
      // scene.add(flyLine.mesh)
      // //添加着色器飞线
      // const flyLineShader = new FlyLineShader();
      //   scene.add(flyLineShader.mesh)

      //添加光墙
      // const lightWall = new LightWall();
      // scene.add(lightWall.mesh)
      // //添加雷达
      // const lightRadar = new LightRadar();
      // scene.add(lightRadar.mesh)
      //添加警告标识
      // const alarmSprite = new AlarmSprite();
      // scene.add(alarmSprite.mesh);
      // alarmSprite.onClick(function(e){
      //   console.log("警告",e);
      // })
  })
}