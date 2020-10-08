// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../core/Logger","../../../../../core/screenUtils"],(function(e,r,l,a,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.simplifyVisualVariables=r.simplifyVVRenderer=void 0;var s=a.getLogger("esri.renderers.visualVariables.support.utils");function t(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function o(e){return e.stops=function(e,r){if(r.length<=8)return r;if(s.warn("Found "+r.length+" Visual Variable stops, but MapView only supports 8. Displayed stops will be simplified."),r.length>16)return function(e,r){for(var a=r[0],s=r.slice(1),t=s.pop(),o=s[0].value,n=s[s.length-1].value,p=(n-o)/6,c=[],v=o;v<n;v+=p){for(var f=0;v>=s[f].value;)f++;var b=s[f],y=r[f-1],V=v-y.value,g=b.value===y.value?1:V/(b.value-y.value);if("color"===e){var d=s[f],h=r[f-1],m=d.color.clone();m.r=u(h.color.r,m.r,g),m.g=u(h.color.g,m.g,g),m.b=u(h.color.b,m.b,g),m.a=u(h.color.a,m.a,g),c.push({value:v,color:m,label:d.label})}else if("size"===e){var _=s[f],z=r[f-1],w=i.toPt(_.size),M=u(i.toPt(z.size),w,g);c.push({value:v,size:M,label:_.label})}else{var P=s[f],A=u(r[f-1].opacity,P.opacity,g);c.push({value:v,opacity:A,label:P.label})}}return l.__spreadArrays([a],c,[t])}(e,r);return function(e){var r=e[0],a=e.slice(1),i=a.pop();for(;a.length>6;){for(var s=0,t=0,o=1;o<a.length;o++){var u=a[o-1],n=a[o],p=Math.abs(n.value-u.value);p>t&&(t=p,s=o)}a.splice(s,1)}return l.__spreadArrays([r],a,[i])}(r)}(e.type,e.stops),e}function u(e,r,l){return(1-l)*e+l*r}r.simplifyVVRenderer=function(e){if(!("visualVariables"in e&&e.visualVariables&&e.visualVariables.length))return e;var r=e.clone(),l=r.visualVariables.map((function(e){return t(e)?o(e):e}));return r.visualVariables=l,r},r.simplifyVisualVariables=function(e){return e.map((function(e){return t(e)?o(e.clone()):e}))}}));