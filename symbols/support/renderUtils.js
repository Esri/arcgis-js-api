// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../kernel","../../request","../../core/colorUtils","../../core/Error","../../core/has","../../core/promiseUtils","./svgUtils","maquette"],function(e,t,r,i,a,n,o,h,c,l){function u(e,t,r){var i=Math.ceil(t[0]),a=Math.ceil(t[1]);if(!e.some(function(e){return!!e.length}))return null;var n=r&&r.node||document.createElement("div");return null!=r.opacity&&(n.style.opacity=r.opacity.toString()),f.append(n,c.renderSVG.bind(null,e,i,a,r)),n}function d(e,t){e=Math.ceil(e),t=Math.ceil(t);var r=document.createElement("canvas");r.width=e,r.height=t,r.style.width=e+"px",r.style.height=t+"px";var i=r.getContext("2d");return i.clearRect(0,0,e,t),i}function g(e,t,r){return e?i(e,{responseType:"image"}).then(function(e){var i=e.data,a=i.width,n=i.height,o=a/n,h=t;if(r){var c=Math.max(a,n);h=Math.min(h,c)}return{image:i,width:o<=1?Math.ceil(h*o):h,height:o<=1?h:Math.ceil(h/o)}}):h.reject(new n("renderUtils: imageDataSize","href not provided."))}function s(e,t){return!(!e||"ignore"===t)&&("multiply"!==t||255!==e.r||255!==e.g||255!==e.b||1!==e.a)}function v(e,t,r,i,n){switch(n){case"multiply":e[t+0]*=r[0],e[t+1]*=r[1],e[t+2]*=r[2],e[t+3]*=r[3];break;default:var o=a.toHSV({r:e[t+0],g:e[t+1],b:e[t+2]});o.h=i.h,o.s=i.s,o.v=o.v/100*i.v;var h=a.toRGB(o);e[t+0]=h.r,e[t+1]=h.g,e[t+2]=h.b,e[t+3]*=r[3]}}function m(e,t,i,n,h){return g(e,t,h).then(function(h){var c=h.width?h.width:t,l=h.height?h.height:t;if(h.image&&s(i,n)){var u=h.image.width,g=h.image.height;(o("edge")||o("ie"))&&/\.svg$/i.test(e)&&(u-=1,g-=1);var m=d(c,l);m.drawImage(h.image,0,0,u,g,0,0,c,l);for(var f=m.getImageData(0,0,c,l),p=[i.r/255,i.g/255,i.b/255,i.a],w=a.toHSV(i),y=0;y<f.data.length;y+=4)v(f.data,y,p,w,n);m.putImageData(f,0,0),e=m.canvas.toDataURL("image/png")}else{var M=r.id&&r.id.findCredential(e);if(M&&M.token){var b=-1===e.indexOf("?")?"?":"&";e=""+e+b+"token="+M.token}}return{url:e,width:c,height:l}}).catch(function(){return{url:e,width:t,height:t}})}Object.defineProperty(t,"__esModule",{value:!0});var f=l.createProjector();t.renderSymbol=u,t.tintImageWithColor=m});