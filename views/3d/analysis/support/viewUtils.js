/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{createRenderScreenPointArray3 as e}from"../../../../core/screenUtils.js";import{g as o,i as r}from"../../../../chunks/vec2.js";import{s as n,a as s,g as t}from"../../../../chunks/vec3.js";function c(e,o){if(n(o,0,0,0),e.length>0){for(let r=0;r<e.length;++r)s(o,o,e[r]);t(o,o,1/e.length)}}function i(e,n,s,t){t.projectToRenderScreen(e,f),t.projectToRenderScreen(n,m),o(s,p,a),r(s,s)}const f=e(),a=f,m=e(),p=m;export{c as midpoint,i as screenSpaceTangent};
