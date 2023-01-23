import * as THREE from "three";
import gsap from "gsap";
import vertex from "@/shader/flyLine/vertex.glsl"
import fragment from "@/shader/flyLine/fragment.glsl"
import { Color } from "three";

export default class FlyLineShader{
    constructor(position = { x: 0, z: 0 }, color = 0x00ffff){
        let linePOints = [
            new THREE.Vector3(0,0,0),
            new THREE.Vector3(position.x / 2,12,position.z / 2),
            new THREE.Vector3(position.x,0,position.z),

        ]
        //创建曲线
        this.lineCurve = new THREE.CatmullRomCurve3(linePOints);
        const points = this.lineCurve.getPoints(1000);
        //创建几何顶点
        this.geometry = new THREE.BufferGeometry().setFromPoints(points);

        //给每个顶点设置属性
        const  aSizeArray = new Float32Array(points.length)
        // console.log(aSizeArray)
        for(let i = 0;i<aSizeArray.length;i++){
            aSizeArray[i] = i
        }
        // console.log(aSizeArray)
        //设置几何体顶点属性
        this.geometry.setAttribute(
            "aSize",
            new THREE.BufferAttribute(aSizeArray,1)
        )
        //设置着色器材质
        this.shaderMaterial = new THREE.ShaderMaterial({
            uniforms:{
                uTime:{
                    value:0,
                },
                uColor:{
                    value: new THREE.Color(color),
                },
                uLength:{
                    value:points.length,
                }
            },
            vertexShader:vertex,
            fragmentShader:fragment,
            transparent:true,
            depthWrite:false,
            blending: THREE.AdditiveBlending,
        });

        this.mesh = new THREE.Points(this.geometry,this.shaderMaterial)

        gsap.to(this.shaderMaterial.uniforms.uTime,{
            value:1000,
            duration:2,
            repeat:-1,
            ease:"none",
        })

    }
    remove() {
        this.mesh.remove();
        this.mesh.removeFromParent();
        this.mesh.geometry.dispose();
        this.mesh.material.dispose();
      }
}