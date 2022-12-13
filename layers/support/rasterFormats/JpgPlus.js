/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../../chunks/Jpg","../../../chunks/Zlib"],(function(n,e){"use strict";return function(){function t(){}return t.decode=function(t,r=!1){const i=new Uint8Array(t),o=new n.JpegImage;o.parse(i);const{width:s,height:u,numComponents:c,eof:f}=o,h=o.getData(s,u,!0),a=s*u;let l,g=null,w=0,p=0,y=0;if(!r&&f<i.length-1)try{const n=new e.Zlib(i.subarray(f)).getBytes();g=new Uint8Array(a);let t=0;for(w=0;w<n.length;w++)for(y=7;y>=0;y--)g[t++]=n[w]>>y&1}catch{}if(1===c&&h.length===s*u)l=[h,h,h];else{for(l=[],w=0;w<3;w++)l.push(new Uint8Array(a));for(y=0,p=0;p<a;p++)for(w=0;w<3;w++)l[w][p]=h[y++]}return{width:s,height:u,pixels:l,mask:g}},t}()}));
