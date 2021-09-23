/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/Jpg","../../../chunks/Zlib"],(function(e,n){"use strict";return function(){function t(){}return t.decode=function(t){const r=new Uint8Array(t),i=new e.JpegImage;i.parse(r);const{width:o,height:s,numComponents:u,eof:f}=i,c=i.getData(o,s,!0);let l;const h=o*s;let a=0,g=0,w=0;if(f<r.length-1){const e=new n.Zlib(r.subarray(f)).getBytes();l=new Uint8Array(h);let t=0;for(a=0;a<e.length;a++)for(w=7;w>=0;w--)l[t++]=e[a]>>w&1}let p,d=null;if(1===u)d=[c,c,c];else{for(d=[],a=0;a<3;a++)p=new Uint8Array(h),d.push(p);for(w=0,g=0;g<h;g++)for(a=0;a<3;a++)d[a][g]=c[w++]}return{width:o,height:s,pixels:d,mask:l}},t}()}));
