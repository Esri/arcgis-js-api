/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function t(t,n,o){t[0]=n[0]+o[0],t[1]=n[1]+o[1],t[2]=n[2]+o[2]}function n(t,n,o){t[0]=n[0]-o[0],t[1]=n[1]-o[1],t[2]=n[2]-o[2]}function o(t,n,o){t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o}function a(t,n){let o=n[0]*n[0]+n[1]*n[1]+n[2]*n[2];o>0&&(o=1/Math.sqrt(o),t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o)}function e(t,n,o){t[0]=n[1]*o[2]-n[2]*o[1],t[1]=n[2]*o[0]-n[0]*o[2],t[2]=n[0]*o[1]-n[1]*o[0]}const s=Object.freeze(Object.defineProperty({__proto__:null,add:t,subtract:n,scale:o,normalize:a,cross:e},Symbol.toStringTag,{value:"Module"}));export{t as a,o as b,e as c,a as n,n as s,s as v};
