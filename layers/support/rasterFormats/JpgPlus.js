/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/Jpg","../../../chunks/Zlib"],(function(n,e){"use strict";return function(){function t(){}return t.decode=function(t,r=!1){const i=new Uint8Array(t),o=new n.JpegImage;o.parse(i);const{width:s,height:f,numComponents:u,eof:c}=o,h=o.getData(s,f,!0),a=s*f;let l,g=null,w=0,y=0,p=0;if(!r&&c<i.length-1)try{const n=new e.Zlib(i.subarray(c)).getBytes();g=new Uint8Array(a);let t=0;for(w=0;w<n.length;w++)for(p=7;p>=0;p--)g[t++]=n[w]>>p&1}catch{}if(1===u&&h.length===s*f){const n=new Uint8Array(h.buffer);l=[n,n,n]}else{for(l=[],w=0;w<3;w++)l.push(new Uint8Array(a));for(p=0,y=0;y<a;y++)for(w=0;w<3;w++)l[w][y]=h[p++]}return{width:s,height:f,pixels:l,mask:g}},t}()}));
