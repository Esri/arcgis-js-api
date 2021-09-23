/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/Logger","../../../../../core/screenUtils"],(function(e,l,t){"use strict";const o=8,s=o-2,r=l.getLogger("esri.renderers.visualVariables.support.utils"),a=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const l=e.clone(),t=l.visualVariables.map((e=>n(e)?u(e):e));return l.visualVariables=t,l};function i(e){return e.map((e=>n(e)?u(e.clone()):e))}function n(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function u(e){return e.stops=f(e.type,e.stops),e}function c(e,l,t){return(1-t)*e+t*l}function p(e,l){const[o,...r]=l,a=r.pop(),i=r[0].value,n=r[r.length-1].value,u=(n-i)/s,p=[];for(let s=i;s<n;s+=u){let o=0;for(;s>=r[o].value;)o++;const a=r[o],i=l[o-1],n=s-i.value,u=a.value===i.value?1:n/(a.value-i.value);if("color"===e){const e=r[o],t=l[o-1],a=e.color.clone();a.r=c(t.color.r,a.r,u),a.g=c(t.color.g,a.g,u),a.b=c(t.color.b,a.b,u),a.a=c(t.color.a,a.a,u),p.push({value:s,color:a,label:e.label})}else if("size"===e){const e=r[o],a=l[o-1],i=t.toPt(e.size),n=c(t.toPt(a.size),i,u);p.push({value:s,size:n,label:e.label})}else{const e=r[o],t=c(l[o-1].opacity,e.opacity,u);p.push({value:s,opacity:t,label:e.label})}}return[o,...p,a]}function b(e){const[l,...t]=e,o=t.pop();for(;t.length>s;){let e=0,l=0;for(let o=1;o<t.length;o++){const s=t[o-1],r=t[o],a=Math.abs(r.value-s.value);a>l&&(l=a,e=o)}t.splice(e,1)}return[l,...t,o]}function f(e,l){return l.length<=o?l:(r.warn(`Found ${l.length} Visual Variable stops, but MapView only supports ${o}. Displayed stops will be simplified.`),l.length>2*o?p(e,l):b(l))}e.simplifyVVRenderer=a,e.simplifyVisualVariables=i,Object.defineProperty(e,"__esModule",{value:!0})}));
