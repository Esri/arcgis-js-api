/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";let t=(e,t,l)=>{let n=[],r=[];return{results:r,map:i=>{let o=i.map(e),s=r.slice(),a=0;for(let e=0;e<i.length;e++){let g=i[e],u=o[e];if(u===n[a])r[e]=s[a],l(g,s[a],e),a++;else{let o=!1;for(let t=1;t<n.length+1;t++){let g=(a+t)%n.length;if(n[g]===u){r[e]=s[g],l(i[e],s[g],e),a=g+1,o=!0;break}}o||(r[e]=t(g,e))}}r.length=i.length,n=o}}};e.createMapping=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
