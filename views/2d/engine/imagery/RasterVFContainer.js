/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","./BrushVectorField","../webgl/enums","../webgl/WGLContainer"],(function(e,r,t,s,n){"use strict";let a=function(e){function n(){var r;return(r=e.apply(this,arguments)||this).symbolTypes=["triangle"],r}r._inheritsLoose(n,e);var a=n.prototype;return a.prepareRenderPasses=function(r){const n=r.registerRenderPass({name:"imagery (vf)",brushes:[t],target:()=>this.children,drawPhase:s.WGLDrawPhase.MAP});return[...e.prototype.prepareRenderPasses.call(this,r),n]},a.doRender=function(r){this.visible&&r.drawPhase===s.WGLDrawPhase.MAP&&this.symbolTypes.forEach((t=>{r.renderPass=t,e.prototype.doRender.call(this,r)}))},r._createClass(n,[{key:"requiresDedicatedFBO",get:function(){return!1}}]),n}(n);e.RasterVFContainer=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
