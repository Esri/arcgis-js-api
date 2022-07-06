/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"./BrushFlow.js";import{WGLDrawPhase as r}from"../webgl/enums.js";import s from"../webgl/WGLContainer.js";class t extends s{constructor(){super(...arguments),this.flowStyle=null}get requiresDedicatedFBO(){return!1}doRender(e){super.doRender(e)}prepareRenderPasses(s){const t=s.registerRenderPass({name:"flow",brushes:[e],target:()=>this.children,drawPhase:r.MAP});return[...super.prepareRenderPasses(s),t]}}export{t as default};
