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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../core/Logger","../../../../../core/screenUtils","../../../engine"],(function(e,r,l,a,i,o){Object.defineProperty(r,"__esModule",{value:!0});var s=o.definitions.WEBGL_MAX_INNER_STOPS,t=o.definitions.WEBGL_MAX_STOPS,n=a.getLogger("esri.renderers.visualVariables.support.utils");function u(e,r,l){return(1-l)*e+l*r}r.simplifyVVRenderer=function(e){if(!("visualVariables"in e&&e.visualVariables&&e.visualVariables.length))return e;var r=e.clone(),a=r.visualVariables.map((function(e){return function(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}(e)?function(e){return e.stops=function(e,r){if(r.length<=t)return r;if(n.warn("Found "+r.length+" Visual Variable stops, but MapView only supports "+t+". Displayed stops will be simplified."),r.length>2*t)return function(e,r){for(var a=r[0],o=r.slice(1),t=o.pop(),n=o[0].value,p=o[o.length-1].value,v=(p-n)/s,c=[],f=n;f<p;f+=v){for(var b=0;f>=o[b].value;)b++;var g=o[b],y=r[b-1],d=f-y.value,h=g.value===y.value?1:d/(g.value-y.value);if("color"===e){var V=o[b],_=r[b-1],z=V.color.clone();z.r=u(_.color.r,z.r,h),z.g=u(_.color.g,z.g,h),z.b=u(_.color.b,z.b,h),z.a=u(_.color.a,z.a,h),c.push({value:f,color:z,label:V.label})}else if("size"===e){var M=o[b],P=r[b-1],A=i.toPt(M.size),L=u(i.toPt(P.size),A,h);c.push({value:f,size:L,label:M.label})}else{var S=o[b],m=u(r[b-1].opacity,S.opacity,h);c.push({value:f,opacity:m,label:S.label})}}return l.__spreadArrays([a],c,[t])}(e,r);return function(e){var r=e[0],a=e.slice(1),i=a.pop();for(;a.length>s;){for(var o=0,t=0,n=1;n<a.length;n++){var u=a[n-1],p=a[n],v=Math.abs(p.value-u.value);v>t&&(t=v,o=n)}a.splice(o,1)}return l.__spreadArrays([r],a,[i])}(r)}(e.type,e.stops),e}(e):e}));return r.visualVariables=a,r}}));