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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","dojox/gfx","dojox/gfx/matrix","../../kernel","../../request","../../core/colorUtils","../../core/Error","../../core/lang","../../core/promiseUtils","../../core/sniff"],function(t,e,i,r,a,n,o,h,c,l,u){function g(t){return t.map(function(t){return t.command+" "+t.values.join(",")}).join(" ").trim()}function d(t,e,a,n){var o=n&&n.node||document.createElement("div"),h=i.createSurface(o,e,a);null!=n.opacity&&(o.style.opacity=n.opacity.toString());try{t.forEach(function(t){var i=h.createGroup(),o=0;t.forEach(function(t){var e=t.shape,r=t.fill,a=t.stroke;o+=a&&a.width||0;var n=null;e&&("path"===e.type&&"string"!=typeof e.path&&(e.path=g(e.path)),n=i.createShape(e).setFill(r).setStroke(a||{width:0}),"text"===e.type&&n.setFont(t.font))});var l=i.getBoundingBox(),u=l.width,d=l.height,f=-(l.x+u/2),s=-(l.y+d/2),m=h.getDimensions(),p={dx:f+m.width/2,dy:s+m.height/2},v=!1;if(n.scale&&0!==l.width&&0!==l.height){var w=l.width/l.height,y=(e>a?e:a)-2*o,x=1,M=1;isNaN(y)||(w>1?(x=y/l.width,M=y/w/l.height):(M=y/l.height,x=y*w/l.width)),i.applyTransform(r.scaleAt(x,M,m.width/2,m.height/2)),v=!0}if(!v&&(u>e||d>a)){var S=u/e>d/a,b=S?u:d,k=S?e:a,j=(k-5)/b;c.mixin(p,{xx:j,yy:j})}i.applyTransform(p),n.rotation&&i.applyTransform(r.rotategAt(n.rotation,u/2,d/2))})}catch(t){return h.clear(),h.destroy(),null}return o}function f(t,e,i){var r=Math.ceil(e[0]),a=Math.ceil(e[1]);return t.some(function(t){return!!t.length})?d(t,r,a,i):null}function s(t,e){t=Math.ceil(t),e=Math.ceil(e);var i=document.createElement("canvas");i.width=t,i.height=e,i.style.width=t+"px",i.style.height=e+"px";var r=i.getContext("2d");return r.clearRect(0,0,t,e),r}function m(t,e,i,r){return t?n(t,{responseType:"image",allowImageDataAccess:i}).then(function(t){var a=t.data,n=a.width,o=a.height,h=n/o,c=e;if(r){var l=Math.max(n,o);c=Math.min(c,l)}return{image:i?a:null,width:h<=1?Math.ceil(c*h):c,height:h<=1?c:Math.ceil(c/h)}}).catch(function(a){if(i)return m(t,e,!1,r);throw a}):l.reject(new h("renderUtils: imageDataSize","href not provided."))}function p(t,e){return!(!t||"ignore"===e)&&("multiply"!==e||255!==t.r||255!==t.g||255!==t.b||1!==t.a)}function v(t,e,i,r,a){switch(a){case"multiply":t[e+0]*=i[0],t[e+1]*=i[1],t[e+2]*=i[2],t[e+3]*=i[3];break;default:var n=o.toHSV({r:t[e+0],g:t[e+1],b:t[e+2]});n.h=r.h,n.s=r.s,n.v=n.v/100*r.v;var h=o.toRGB(n);t[e+0]=h.r,t[e+1]=h.g,t[e+2]=h.b,t[e+3]*=i[3]}}function w(t,e,i,r,n){return m(t,e,!!i,n).then(function(n){var h=n.width?n.width:e,c=n.height?n.height:e;if(n.image&&p(i,r)){var l=n.image.width,g=n.image.height;(u("edge")||u("ie"))&&/\.svg$/i.test(t)&&(l-=1,g-=1);var d=s(h,c);d.drawImage(n.image,0,0,l,g,0,0,h,c);for(var f=d.getImageData(0,0,h,c),m=[i.r/255,i.g/255,i.b/255,i.a],w=o.toHSV(i),y=0;y<f.data.length;y+=4)v(f.data,y,m,w,r);d.putImageData(f,0,0),t=d.canvas.toDataURL("image/png")}else{var x=a.id&&a.id.findCredential(t);if(x&&x.token){var M=-1===t.indexOf("?")?"?":"&";t=""+t+M+"token="+x.token}}return{url:t,width:h,height:c}}).catch(function(){return{url:t,width:e,height:e}})}Object.defineProperty(e,"__esModule",{value:!0}),e.renderSymbol=f,e.tintImageWithColor=w});