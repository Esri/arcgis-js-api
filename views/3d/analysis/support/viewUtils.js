/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../core/screenUtils","../../../../chunks/vec2","../../../../chunks/vec3"],(function(e,n,r,t){"use strict";function c(e,n){if(t.set(n,0,0,0),e.length>0){for(let r=0;r<e.length;++r)t.add(n,n,e[r]);t.scale(n,n,1/e.length)}}function o(e,n,t,c){c.projectToRenderScreen(e,i),c.projectToRenderScreen(n,a),r.subtract(t,l,s),r.normalize(t,t)}const i=n.createRenderScreenPointArray3(),s=i,a=n.createRenderScreenPointArray3(),l=a;e.midpoint=c,e.screenSpaceTangent=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
