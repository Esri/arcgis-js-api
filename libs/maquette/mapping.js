/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";let t=(e,t,l)=>{let n=[],r=[];return{results:r,map:i=>{let g=i.map(e),o=r.slice(),a=0;for(let e=0;e<i.length;e++){let f=i[e],s=g[e];if(s===n[a])r[e]=o[a],l(f,o[a],e),a++;else{let g=!1;for(let t=1;t<n.length+1;t++){let f=(a+t)%n.length;if(n[f]===s){r[e]=o[f],l(i[e],o[f],e),a=f+1,g=!0;break}}g||(r[e]=t(f,e))}}r.length=i.length,n=g}}};e.createMapping=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
