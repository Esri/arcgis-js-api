/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{J as t}from"../../../chunks/Jpg.js";import{Z as e}from"../../../chunks/Zlib.js";class n{static decode(n,r=!1){const s=new Uint8Array(n),o=new t;o.parse(s);const{width:a,height:i,numComponents:l,eof:h}=o,c=o.getData(a,i,!0);let f;const g=a*i;let p=0,u=0,m=0;if(!r&&h<s.length-1)try{const t=new e(s.subarray(h)).getBytes();f=new Uint8Array(g);let n=0;for(p=0;p<t.length;p++)for(m=7;m>=0;m--)f[n++]=t[p]>>m&1}catch{}let w,y=null;if(1===l&&c.length===a*i)y=[c,c,c];else{for(y=[],p=0;p<3;p++)w=new Uint8Array(g),y.push(w);for(m=0,u=0;u<g;u++)for(p=0;p<3;p++)y[p][u]=c[m++]}return{width:a,height:i,pixels:y,mask:f}}}export{n as default};
