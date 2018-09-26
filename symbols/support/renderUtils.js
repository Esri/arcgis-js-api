// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","dojox/gfx","dojox/gfx/matrix","../../kernel","../../request","../../core/colorUtils","../../core/Error","../../core/has","../../core/promiseUtils"],function(t,e,r,a,i,n,o,h,c,l){function u(t){return t.map(function(t){return t.command+" "+t.values.join(",")}).join(" ").trim()}function g(t,e,i,n){var o=n&&n.node||document.createElement("div"),h=r.createSurface(o,e,i);null!=n.opacity&&(o.style.opacity=n.opacity.toString());try{t.forEach(function(t){var r=h.createGroup(),o=0;t.forEach(function(t){var e=t.shape,a=t.fill,i=t.stroke;o+=i&&i.width||0;var n=null;e&&("path"===e.type&&"string"!=typeof e.path&&(e.path=u(e.path)),n=r.createShape(e).setFill(a).setStroke(i||{width:0}),"text"===e.type&&n.setFont(t.font))});var c=e/2,l=i/2,g=r.getBoundingBox(),d=g.width,f=g.height,s=!1;if(n.scale&&0!==g.width&&0!==g.height){var p=g.width/g.height,m=(e>i?e:i)-2*o,v=1,y=1;isNaN(m)||(p>1?(v=m/g.width,y=m/p/g.height):(y=m/g.height,v=m*p/g.width)),r.applyTransform(a.scaleAt(v,y,c,l)),s=!0}var w=g.x+d/2,x=g.y+f/2,M=c-w,S=l-x;if(r.applyTransform(a.translate(M,S)),!s&&(d>e||f>i)){var b=d/e>f/i,k=b?d:f,j=b?e:i,E=(j-5)/k;r.applyTransform(a.scaleAt(E,E,c,l))}n.rotation&&r.applyTransform(a.rotategAt(n.rotation,w,x))})}catch(t){return h.clear(),h.destroy(),null}return o}function d(t,e,r){var a=Math.ceil(e[0]),i=Math.ceil(e[1]);return t.some(function(t){return!!t.length})?g(t,a,i,r):null}function f(t,e){t=Math.ceil(t),e=Math.ceil(e);var r=document.createElement("canvas");r.width=t,r.height=e,r.style.width=t+"px",r.style.height=e+"px";var a=r.getContext("2d");return a.clearRect(0,0,t,e),a}function s(t,e,r){return t?n(t,{responseType:"image"}).then(function(t){var a=t.data,i=a.width,n=a.height,o=i/n,h=e;if(r){var c=Math.max(i,n);h=Math.min(h,c)}return{image:a,width:o<=1?Math.ceil(h*o):h,height:o<=1?h:Math.ceil(h/o)}}):l.reject(new h("renderUtils: imageDataSize","href not provided."))}function p(t,e){return!(!t||"ignore"===e)&&("multiply"!==e||255!==t.r||255!==t.g||255!==t.b||1!==t.a)}function m(t,e,r,a,i){switch(i){case"multiply":t[e+0]*=r[0],t[e+1]*=r[1],t[e+2]*=r[2],t[e+3]*=r[3];break;default:var n=o.toHSV({r:t[e+0],g:t[e+1],b:t[e+2]});n.h=a.h,n.s=a.s,n.v=n.v/100*a.v;var h=o.toRGB(n);t[e+0]=h.r,t[e+1]=h.g,t[e+2]=h.b,t[e+3]*=r[3]}}function v(t,e,r,a,n){return s(t,e,n).then(function(n){var h=n.width?n.width:e,l=n.height?n.height:e;if(n.image&&p(r,a)){var u=n.image.width,g=n.image.height;(c("edge")||c("ie"))&&/\.svg$/i.test(t)&&(u-=1,g-=1);var d=f(h,l);d.drawImage(n.image,0,0,u,g,0,0,h,l);for(var s=d.getImageData(0,0,h,l),v=[r.r/255,r.g/255,r.b/255,r.a],y=o.toHSV(r),w=0;w<s.data.length;w+=4)m(s.data,w,v,y,a);d.putImageData(s,0,0),t=d.canvas.toDataURL("image/png")}else{var x=i.id&&i.id.findCredential(t);if(x&&x.token){var M=-1===t.indexOf("?")?"?":"&";t=""+t+M+"token="+x.token}}return{url:t,width:h,height:l}}).catch(function(){return{url:t,width:e,height:e}})}Object.defineProperty(e,"__esModule",{value:!0}),e.renderSymbol=d,e.tintImageWithColor=v});