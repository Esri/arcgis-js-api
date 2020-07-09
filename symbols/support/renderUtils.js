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

define(["require","exports","../../kernel","../../request","../../core/colorUtils","../../core/Error","../../core/has","../../core/promiseUtils","../../libs/maquette/index","./svgUtils"],(function(e,t,r,i,a,n,o,h,c,l){Object.defineProperty(t,"__esModule",{value:!0});var u=c.createProjector();function d(e,t,r,i,n){switch(n){case"multiply":e[t+0]*=r[0],e[t+1]*=r[1],e[t+2]*=r[2],e[t+3]*=r[3];break;default:var o=a.toHSV({r:e[t+0],g:e[t+1],b:e[t+2]});o.h=i.h,o.s=i.s,o.v=o.v/100*i.v;var h=a.toRGB(o);e[t+0]=h.r,e[t+1]=h.g,e[t+2]=h.b,e[t+3]*=r[3]}}t.renderSymbol=function(e,t,r){var i=Math.ceil(t[0]),a=Math.ceil(t[1]);if(!e.some((function(e){return!!e.length})))return null;var n=r&&r.node||document.createElement("div");return null!=r.opacity&&(n.style.opacity=r.opacity.toString()),u.append(n,l.renderSVG.bind(null,e,i,a,r)),n},t.tintImageWithColor=function(e,t,c,l,u){return function(e,t,r){return e?i(e,{responseType:"image"}).then((function(e){var i=e.data,a=i.width,n=i.height,o=a/n,h=t;if(r){var c=Math.max(a,n);h=Math.min(h,c)}return{image:i,width:o<=1?Math.ceil(h*o):h,height:o<=1?h:Math.ceil(h/o)}})):h.reject(new n("renderUtils: imageDataSize","href not provided."))}(e,t,u).then((function(i){var n=i.width?i.width:t,h=i.height?i.height:t;if(i.image&&function(e,t){return!(!e||"ignore"===t)&&("multiply"!==t||255!==e.r||255!==e.g||255!==e.b||1!==e.a)}(c,l)){var u=i.image.width,g=i.image.height;(o("edge")||o("ie"))&&/\.svg$/i.test(e)&&(u-=1,g-=1);var s=function(e,t){e=Math.ceil(e),t=Math.ceil(t);var r=document.createElement("canvas");r.width=e,r.height=t,r.style.width=e+"px",r.style.height=t+"px";var i=r.getContext("2d");return i.clearRect(0,0,e,t),i}(n,h);s.drawImage(i.image,0,0,u,g,0,0,n,h);for(var v=s.getImageData(0,0,n,h),m=[c.r/255,c.g/255,c.b/255,c.a],f=a.toHSV(c),p=0;p<v.data.length;p+=4)d(v.data,p,m,f,l);s.putImageData(v,0,0),e=s.canvas.toDataURL("image/png")}else{var w=r.id&&r.id.findCredential(e);if(w&&w.token){var y=-1===e.indexOf("?")?"?":"&";e=""+e+y+"token="+w.token}}return{url:e,width:n,height:h}})).catch((function(){return{url:e,width:t,height:t}}))}}));