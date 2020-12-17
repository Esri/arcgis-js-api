/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";e.createMapping=(e,t,l)=>{let n=[];const s=[];return{results:s,map:r=>{const o=r.map(e),c=s.slice();let i=0;for(let e=0;e<r.length;e++){const f=r[e],a=o[e];if(a===n[i])s[e]=c[i],l(f,c[i],e),i++;else{let o=!1;for(let t=1;t<n.length+1;t++){const f=(i+t)%n.length;if(n[f]===a){s[e]=c[f],l(r[e],c[f],e),i=f+1,o=!0;break}}o||(s[e]=t(f,e))}}s.length=r.length,n=o}}},Object.defineProperty(e,"__esModule",{value:!0})}));
