/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../core/screenUtils","../../../../chunks/vec2","../../../../chunks/vec3"],(function(e,n,r,t){"use strict";function c(e,n){if(t.set(n,0,0,0),e.length>0){for(let r=0;r<e.length;++r)t.add(n,n,e[r]);t.scale(n,n,1/e.length)}}function o(e,n,t,c){c.projectToRenderScreen(e,i),c.projectToRenderScreen(n,s),r.subtract(t,d,a),r.normalize(t,t)}const i=n.createRenderScreenPointArray3(),a=i,s=n.createRenderScreenPointArray3(),d=s;e.midpoint=c,e.screenSpaceTangent=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
