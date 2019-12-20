// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/Logger","../../../../../core/screenUtils","../../../engine"],function(e,l,r,a,i){function o(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function t(e){return e.stops=c(e.type,e.stops),e}function n(e,l,r){return(1-r)*e+r*l}function s(e,l){for(var r=l[0],i=l.slice(1),o=i.pop(),t=i[0].value,s=i[i.length-1].value,u=(s-t)/p,c=[],v=t;v<s;v+=u){for(var f=0;v>=i[f].value;)f++;var b=i[f],g=l[f-1],y=v-g.value,h=b.value===g.value?1:y/(b.value-g.value);if("color"===e){var V=i[f],d=l[f-1],_=V.color.clone();_.r=n(d.color.r,_.r,h),_.g=n(d.color.g,_.g,h),_.b=n(d.color.b,_.b,h),_.a=n(d.color.a,_.a,h),c.push({value:v,color:_,label:V.label})}else if("size"===e){var z=i[f],M=l[f-1],P=a.toPt(z.size),L=a.toPt(M.size),S=n(L,P,h);c.push({value:v,size:S,label:z.label})}else{var m=i[f],w=l[f-1],E=n(w.opacity,m.opacity,h);c.push({value:v,opacity:E,label:m.label})}}return[r].concat(c,[o])}function u(e){for(var l=e[0],r=e.slice(1),a=r.pop();r.length>p;){for(var i=0,o=0,t=1;t<r.length;t++){var n=r[t-1],s=r[t],u=Math.abs(s.value-n.value);u>o&&(o=u,i=t)}r.splice(i,1)}return[l].concat(r,[a])}function c(e,l){return l.length<=v?l:(f.warn("Found "+l.length+" Visual Variable stops, but MapView only supports "+v+". Displayed stops will be simplified."),l.length>2*v?s(e,l):u(l))}Object.defineProperty(l,"__esModule",{value:!0});var p=i.definitions.WEBGL_MAX_INNER_STOPS,v=i.definitions.WEBGL_MAX_STOPS,f=r.getLogger("esri.renderers.visualVariables.support.utils");l.simplifyVVRenderer=function(e){if(!("visualVariables"in e&&e.visualVariables&&e.visualVariables.length))return e;var l=e.clone(),r=l.visualVariables.map(function(e){return o(e)?t(e):e});return l.visualVariables=r,l}});