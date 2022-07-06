/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let e=(e,l,t)=>{let r=[],n=[];return{results:n,map:g=>{let h=g.map(e),f=n.slice(),s=0;for(let e=0;e<g.length;e++){let a=g[e],i=h[e];if(i===r[s])n[e]=f[s],t(a,f[s],e),s++;else{let h=!1;for(let l=1;l<r.length+1;l++){let a=(s+l)%r.length;if(r[a]===i){n[e]=f[a],t(g[e],f[a],e),s=a+1,h=!0;break}}h||(n[e]=l(a,e))}}n.length=g.length,r=h}}};export{e as createMapping};
