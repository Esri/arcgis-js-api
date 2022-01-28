/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","./brushes","./webgl/enums","./webgl/WGLContainer"],(function(e,r,t,s,n){"use strict";let i=function(e){function n(){return e.apply(this,arguments)||this}return r._inheritsLoose(n,e),n.prototype.prepareRenderPasses=function(r){const n=r.registerRenderPass({name:"bitmap",brushes:[t.brushes.bitmap],target:()=>this.children,drawPhase:s.WGLDrawPhase.MAP});return[...e.prototype.prepareRenderPasses.call(this,r),n]},r._createClass(n,[{key:"requiresDedicatedFBO",get:function(){return this.children.some((e=>"additive"===e.blendFunction))}}]),n}(n);e.BitmapContainer=i,Object.defineProperty(e,"__esModule",{value:!0})}));
