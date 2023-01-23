import * as THREE from "three";
import vertex from "@/shader/gradColor/vertex.glsl"
import fragment from "@/shader/gradColor/fragment.glsl"
import { Fragment } from "vue";
export function gradColor(mesh){
    mesh.material.onBeforeCompile = (shader) =>{
        shader.fragmentShader = fragment;
        shader.vertexShader = vertex;
        shader.uniform.uTopColor = {
            value: new THREE.Color("#ffeeff")
        };
        shader.uniform.uHeight = {
            value:2,
        }
    }
}