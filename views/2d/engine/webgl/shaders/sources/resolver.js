/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./shaderRepository","../../../../../webgl/ShaderCompiler"],(function(e,r,o){"use strict";function t(e){let o=r;return e.split("/").forEach((e=>{o&&(o=o[e])})),o}const n=new o.ShaderCompiler(t);function l(e){return n.resolveIncludes(e)}e.resolveIncludes=l,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
