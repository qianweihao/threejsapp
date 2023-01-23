import camera from "./camera";
import renderer from "./renderer";
//监听屏幕大小改变的变化，设置渲染尺寸
window.addEventListener("resize",()=>{
    //更新摄像头
    camera.aspect = window.innerWidth/window.innerHeight;
    //更新摄像头的摄影矩阵
    camera.updateProjectionMatrix();
    //更新渲染器
    renderer.setSize(window.innerWidth,window.innerHeight);
    //设置渲染器的像素比例
    renderer.setPixelRatio(window.devicePixelRatio)
});
