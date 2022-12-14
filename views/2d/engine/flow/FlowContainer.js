/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","./BrushFlow","../webgl/enums","../webgl/WGLContainer"],(function(e,r,t,n){"use strict";let s=function(n){function s(){var e;return(e=n.apply(this,arguments)||this).flowStyle=null,e}e._inheritsLoose(s,n);var o=s.prototype;return o.doRender=function(e){n.prototype.doRender.call(this,e)},o.prepareRenderPasses=function(e){const s=e.registerRenderPass({name:"flow",brushes:[r],target:()=>this.children,drawPhase:t.WGLDrawPhase.MAP});return[...n.prototype.prepareRenderPasses.call(this,e),s]},e._createClass(s,[{key:"requiresDedicatedFBO",get:function(){return!1}}]),s}(n);return s}));
