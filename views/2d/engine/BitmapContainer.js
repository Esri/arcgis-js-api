/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{brushes as e}from"./brushes.js";import{WGLDrawPhase as r}from"./webgl/enums.js";import s from"./webgl/WGLContainer.js";class t extends s{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(s){const t=s.registerRenderPass({name:"bitmap",brushes:[e.bitmap],target:()=>this.children,drawPhase:r.MAP});return[...super.prepareRenderPasses(s),t]}}export{t as BitmapContainer};
