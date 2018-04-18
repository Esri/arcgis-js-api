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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","dojox/gfx","dojox/gfx/matrix","../../kernel","../../request","../../core/colorUtils","../../core/Error","../../core/promiseUtils","../../core/sniff"],function(t,e,i,r,a,n,h,o,c,l,u){function d(t){return t.map(function(t){return t.command+" "+t.values.join(",")}).join(" ").trim()}function g(t,e,n,h){var o=h&&h.node||document.createElement("div"),c=r.createSurface(o,e,n);null!=h.opacity&&(o.style.opacity=h.opacity.toString());try{t.forEach(function(t){var r=c.createGroup(),o=0;t.forEach(function(t){var e=t.shape,i=t.fill,a=t.stroke;o+=a&&a.width||0;var n=null;e&&("path"===e.type&&"string"!=typeof e.path&&(e.path=d(e.path)),n=r.createShape(e).setFill(i).setStroke(a||{width:0}),"text"===e.type&&n.setFont(t.font))});var l=r.getBoundingBox(),u=l.width,g=l.height,f=-(l.x+u/2),s=-(l.y+g/2),m=c.getDimensions(),p={dx:f+m.width/2,dy:s+m.height/2},v=!1;if(h.scale&&0!==l.width&&0!==l.height){var w=l.width/l.height,y=(e>n?e:n)-2*o,x=1,M=1;isNaN(y)||(w>1?(x=y/l.width,M=y/w/l.height):(M=y/l.height,x=y*w/l.width)),r.applyTransform(a.scaleAt(x,M,m.width/2,m.height/2)),v=!0}if(!v&&(u>e||g>n)){var b=u/e>g/n,S=b?u:g,j=b?e:n,k=(j-5)/S;i.mixin(p,{xx:k,yy:k})}r.applyTransform(p)})}catch(t){return c.clear(),c.destroy(),null}return o}function f(t,e,i){var r=Math.ceil(e[0]),a=Math.ceil(e[1]);return t.some(function(t){return!!t.length})?g(t,r,a,i):null}function s(t,e){t=Math.ceil(t),e=Math.ceil(e);var i=document.createElement("canvas");i.width=t,i.height=e,i.style.width=t+"px",i.style.height=e+"px";var r=i.getContext("2d");return r.clearRect(0,0,t,e),r}function m(t,e,i,r){return t?h(t,{responseType:"image",allowImageDataAccess:i}).then(function(t){var a=t.data,n=a.width,h=a.height,o=n/h,c=e;if(r){var l=Math.max(n,h);c=Math.min(c,l)}return{image:i?a:null,width:o<=1?Math.ceil(c*o):c,height:o<=1?c:Math.ceil(c/o)}}).catch(function(a){if(i)return m(t,e,!1,r);throw a}):l.reject(new c("renderUtils: imageDataSize","href not provided."))}function p(t,e){return!(!t||"ignore"===e)&&("multiply"!==e||255!==t.r||255!==t.g||255!==t.b||1!==t.a)}function v(t,e,i,r,a){switch(a){case"multiply":t[e+0]*=i[0],t[e+1]*=i[1],t[e+2]*=i[2],t[e+3]*=i[3];break;default:var n=o.toHSV({r:t[e+0],g:t[e+1],b:t[e+2]});n.h=r.h,n.s=r.s,n.v=n.v/100*r.v;var h=o.toRGB(n);t[e+0]=h.r,t[e+1]=h.g,t[e+2]=h.b,t[e+3]*=i[3]}}function w(t,e,i,r,a){return m(t,e,!!i,a).then(function(a){var h=a.width?a.width:e,c=a.height?a.height:e;if(a.image&&p(i,r)){var l=a.image.width,d=a.image.height;(u("edge")||u("ie"))&&/\.svg$/i.test(t)&&(l-=1,d-=1);var g=s(h,c);g.drawImage(a.image,0,0,l,d,0,0,h,c);for(var f=g.getImageData(0,0,h,c),m=[i.r/255,i.g/255,i.b/255,i.a],w=o.toHSV(i),y=0;y<f.data.length;y+=4)v(f.data,y,m,w,r);g.putImageData(f,0,0),t=g.canvas.toDataURL("image/png")}else{var x=n.id&&n.id.findCredential(t);if(x&&x.token){var M=-1===t.indexOf("?")?"?":"&";t=""+t+M+"token="+x.token}}return{url:t,width:h,height:c}}).catch(function(){return{url:t,width:e,height:e}})}Object.defineProperty(e,"__esModule",{value:!0}),e.renderSymbol=f,e.tintImageWithColor=w});