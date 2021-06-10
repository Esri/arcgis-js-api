/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";let t=(e,t,l)=>{let n=[],r=[];return{results:r,map:i=>{let s=i.map(e),f=r.slice(),a=0;for(let e=0;e<i.length;e++){let g=i[e],o=s[e];if(o===n[a])r[e]=f[a],l(g,f[a],e),a++;else{let s=!1;for(let t=1;t<n.length+1;t++){let g=(a+t)%n.length;if(n[g]===o){r[e]=f[g],l(i[e],f[g],e),a=g+1,s=!0;break}}s||(r[e]=t(g,e))}}r.length=i.length,n=s}}};e.createMapping=t,Object.defineProperty(e,"__esModule",{value:!0})}));
