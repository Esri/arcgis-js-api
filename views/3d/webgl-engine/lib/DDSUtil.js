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

define(["require","exports","../../../../core/Logger","../../../../core/mathUtils","../../../webgl/Texture"],(function(e,r,t,a,n){Object.defineProperty(r,"__esModule",{value:!0});var o=t.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function i(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}var u=i("DXT1"),s=i("DXT3"),l=i("DXT5");function d(e,r){var t=new Int32Array(e,0,31);if(542327876!==t[0])return o.error("Invalid magic number in DDS header"),null;if(!(4&t[20]))return o.error("Unsupported format, must contain a FourCC code"),null;var n,i,d,c=t[21];switch(c){case u:n=8,i=33776;break;case s:n=16,i=33778;break;case l:n=16,i=33779;break;default:return o.error("Unsupported FourCC code:",(d=c,String.fromCharCode(255&d,d>>8&255,d>>16&255,d>>24&255))),null}var h=1,m=t[4],g=t[3];0==(3&m)&&0==(3&g)||(o.warn("Rounding up compressed texture size to nearest multiple of 4."),m=m+3&-4,g=g+3&-4);var p,w,f=m,v=g;131072&t[2]&&!1!==r&&(h=Math.max(1,t[7])),1===h||a.isPowerOfTwo(m)&&a.isPowerOfTwo(g)||(o.warn("Ignoring mipmaps of non power of two sized compressed texture."),h=1);for(var D=t[1]+4,x=[],C=0;C<h;++C)w=(m+3>>2)*(g+3>>2)*n,p=new Uint8Array(e,D,w),x.push(p),D+=w,m=Math.max(1,m>>1),g=Math.max(1,g>>1);return{textureData:{type:"compressed",levels:x},internalFormat:i,width:f,height:v}}r.createDDSTexture=function(e,r,t,a){var o=d(t,a),i=o.textureData,u=o.internalFormat,s=o.width,l=o.height;r.samplingMode=i.levels.length>1?9987:9729,r.hasMipmap=i.levels.length>1,r.internalFormat=u,r.width=s,r.height=l;var c=new n(e,r,i);return e.bindTexture(c),c},r.createDDSTextureData=d}));