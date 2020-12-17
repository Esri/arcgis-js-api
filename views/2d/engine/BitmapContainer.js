/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","./webgl/enums","./brushes","./webgl/WGLContainer"],(function(e,r,s,t,n){"use strict";let i=function(e){function n(){return e.apply(this,arguments)||this}return r._inheritsLoose(n,e),n.prototype.prepareRenderPasses=function(r){const n=r.registerRenderPass({name:"bitmap",brushes:[t.brushes.bitmap],target:()=>this.children,drawPhase:s.WGLDrawPhase.MAP});return[...e.prototype.prepareRenderPasses.call(this,r),n]},n}(n);e.BitmapContainer=i,Object.defineProperty(e,"__esModule",{value:!0})}));
