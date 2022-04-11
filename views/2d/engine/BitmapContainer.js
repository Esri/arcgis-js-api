/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","./brushes","./webgl/enums","./webgl/WGLContainer"],(function(e,t,r,s,n){"use strict";let i=function(e){function n(){return e.apply(this,arguments)||this}return t._inheritsLoose(n,e),n.prototype.prepareRenderPasses=function(t){const n=t.registerRenderPass({name:"bitmap",brushes:[r.brushes.bitmap],target:()=>this.children,drawPhase:s.WGLDrawPhase.MAP});return[...e.prototype.prepareRenderPasses.call(this,t),n]},t._createClass(n,[{key:"requiresDedicatedFBO",get:function(){return this.children.some((e=>"additive"===e.blendFunction))}}]),n}(n);e.BitmapContainer=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
