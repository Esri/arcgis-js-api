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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../../core/Logger","../../../../../core/screenUtils","../../../engine"],(function(e,r,l,a,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i.definitions.WEBGL_MAX_INNER_STOPS,t=i.definitions.WEBGL_MAX_STOPS,n=l.getLogger("esri.renderers.visualVariables.support.utils");function s(e,r,l){return(1-l)*e+l*r}r.simplifyVVRenderer=function(e){if(!("visualVariables"in e&&e.visualVariables&&e.visualVariables.length))return e;var r=e.clone(),l=r.visualVariables.map((function(e){return function(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}(e)?function(e){return e.stops=function(e,r){if(r.length<=t)return r;if(n.warn("Found "+r.length+" Visual Variable stops, but MapView only supports "+t+". Displayed stops will be simplified."),r.length>2*t)return function(e,r){for(var l=r[0],i=r.slice(1),t=i.pop(),n=i[0].value,u=i[i.length-1].value,c=(u-n)/o,p=[],v=n;v<u;v+=c){for(var f=0;v>=i[f].value;)f++;var b=i[f],g=r[f-1],y=v-g.value,h=b.value===g.value?1:y/(b.value-g.value);if("color"===e){var V=i[f],d=r[f-1],_=V.color.clone();_.r=s(d.color.r,_.r,h),_.g=s(d.color.g,_.g,h),_.b=s(d.color.b,_.b,h),_.a=s(d.color.a,_.a,h),p.push({value:v,color:_,label:V.label})}else if("size"===e){var z=i[f],M=r[f-1],P=a.toPt(z.size),L=s(a.toPt(M.size),P,h);p.push({value:v,size:L,label:z.label})}else{var S=i[f],m=s(r[f-1].opacity,S.opacity,h);p.push({value:v,opacity:m,label:S.label})}}return[l].concat(p,[t])}(e,r);return function(e){var r=e[0],l=e.slice(1),a=l.pop();for(;l.length>o;){for(var i=0,t=0,n=1;n<l.length;n++){var s=l[n-1],u=l[n],c=Math.abs(u.value-s.value);c>t&&(t=c,i=n)}l.splice(i,1)}return[r].concat(l,[a])}(r)}(e.type,e.stops),e}(e):e}));return r.visualVariables=l,r}}));