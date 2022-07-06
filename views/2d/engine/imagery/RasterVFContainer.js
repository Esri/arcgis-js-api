/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"./BrushVectorField.js";import{WGLDrawPhase as r}from"../webgl/enums.js";import s from"../webgl/WGLContainer.js";class t extends s{constructor(){super(...arguments),this.symbolTypes=["triangle"]}get requiresDedicatedFBO(){return!1}prepareRenderPasses(s){const t=s.registerRenderPass({name:"imagery (vf)",brushes:[e],target:()=>this.children,drawPhase:r.MAP});return[...super.prepareRenderPasses(s),t]}doRender(e){this.visible&&e.drawPhase===r.MAP&&this.symbolTypes.forEach((r=>{e.renderPass=r,super.doRender(e)}))}}export{t as RasterVFContainer};
