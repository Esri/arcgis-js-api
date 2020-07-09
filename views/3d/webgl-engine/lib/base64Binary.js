// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports"],(function(e,r){Object.defineProperty(r,"__esModule",{value:!0});for(var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t={},a=0;a<n.length;a++)t[n[a]]=a;function c(e){var r=t[e.charAt(e.length-1)],n=t[e.charAt(e.length-2)],a=e.length/4*3;64===r&&a--,64===n&&a--;var c=new ArrayBuffer(a),o=new Uint8Array(c);e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");for(var f=0,h=0;h<a;h+=3){var i=t[e.charAt(f++)],u=t[e.charAt(f++)],l=t[e.charAt(f++)],A=t[e.charAt(f++)],d=i<<2|u>>4,g=(15&u)<<4|l>>2,y=(3&l)<<6|A;o[h]=d,64!==l&&(o[h+1]=g),64!==A&&(o[h+2]=y)}return c}r.decode=c,r.decodeFloat32=function(e){return new Float32Array(c(e))},r.decodeUint32=function(e){return new Uint32Array(c(e))},r.decodeInt32=function(e){return new Int32Array(c(e))},r.encode=function(e){for(var r,t,a=(r=e instanceof Uint8Array?e:new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).length%3,c="",o=r.length-a,f=0;f<o;f+=3)t=(r[f]<<16)+(r[f+1]<<8)+r[f+2],c+=n[t>>18&63]+n[t>>12&63]+n[t>>6&63]+n[63&t];switch(a){case 1:t=r[r.length-1],c+=n[t>>2],c+=n[t<<4&63],c+="==";break;case 2:t=(r[r.length-2]<<8)+r[r.length-1],c+=n[t>>10],c+=n[t>>4&63],c+=n[t<<2&63],c+="="}return c}}));