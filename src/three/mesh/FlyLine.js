import * as THREE from "three";
import gsap from "gsap";


export default class FlyLine {
    constructor(){
        let linePOints = [
            new THREE.Vector3(0,0,0),
            new THREE.Vector3(4,12,0),
            new THREE.Vector3(15,0,0),

        ]
        //创建曲线
        this.lineCurve = new THREE.CatmullRomCurve3(linePOints)
        //根据曲线生成管道几何体
        this.geometry = new THREE.TubeBufferGeometry(this.lineCurve,100,0.05,2,false)
        //设置飞线材质
        //创建纹理
        const textloader = new THREE.TextureLoader();
        this. texture = textloader.load("./textures/1.png");
        this.texture.repeat.set(1,2);
        this.texture.wrapS =THREE.RepeatWrapping;
        this.texture.wrapT = THREE.MirroredRepeatWrapping;
        this.material = new THREE.MeshBasicMaterial({
            // color: 0xfff000,
            map: this.texture,
            transparent:true,
        })
        //创建飞线物体
        this.mesh = new THREE.Mesh(this.geometry,this.material);
        //创建飞线动画
        gsap.to(this.texture.offset,{
            x:-1,
            duration:1,
            repeat:-1,
            ease:"none"
        })

    }
}