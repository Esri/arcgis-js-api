// COPYRIGHT © 2017 Esri
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

define(["require","exports","dojo/_base/lang","dojo/Deferred","dojox/gfx/matrix","dojox/gfx","../../request","../../core/sniff","../../core/Error","../../core/promiseUtils","../../core/urlUtils","../../core/colorUtils","../../kernel"],function(e,t,r,i,a,n,o,h,l,c,u,d,s){function g(e){return e.map(function(e){return e.command+" "+e.values.join(",")}).join(" ").trim()}function f(e,t,i,o){var h=o&&o.node||document.createElement("div"),l=n.createSurface(h,t,i);null!=o.opacity&&(h.style.opacity=o.opacity.toString());try{e.forEach(function(e){var n=l.createGroup(),h=0;e.forEach(function(e){var t=e.shape,r=e.fill,i=e.stroke;h+=i&&i.width||0;var a=null;t&&("path"===t.type&&"string"!=typeof t.path&&(t.path=g(t.path)),a=n.createShape(t).setFill(r).setStroke(i?i:{width:0}),"text"===t.type&&a.setFont(e.font))});var c=n.getBoundingBox(),u=c.width,d=c.height,s=-(c.x+u/2),f=-(c.y+d/2),m=l.getDimensions(),v={dx:s+m.width/2,dy:f+m.height/2},p=!1;if(o.scale&&0!==c.width&&0!==c.height){var w=c.width/c.height,y=(t>i?t:i)-2*h,x=1,j=1;isNaN(y)||(w>1?(x=y/c.width,j=y/w/c.height):(j=y/c.height,x=y*w/c.width)),n.applyTransform(a.scaleAt(x,j,m.width/2,m.height/2)),p=!0}if(!p&&(u>t||d>i)){var M=u/t>d/i,b=M?u:d,D=M?t:i,S=(D-5)/b;r.mixin(v,{xx:S,yy:S})}n.applyTransform(v)})}catch(c){return l.clear(),l.destroy(),null}return h}function m(e,t,r){var i=Math.ceil(t[0]),a=Math.ceil(t[1]),n=e.some(function(e){return!!e.length});return n?f(e,i,a,r):null}function v(e,t){e=Math.ceil(e),t=Math.ceil(t);var r=document.createElement("canvas");r.width=e,r.height=t,r.style.width=e+"px",r.style.height=t+"px";var i=r.getContext("2d");return i.clearRect(0,0,e,t),i}function p(e,t,r,a){if(!e)return c.reject(new l("renderUtils: imageDataSize","href not provided."));var n;if(u.isDataProtocol(e)){var h=new Image;if(h.src=e,h.complete)n=c.resolve({data:h});else{var d=new i;n=d.promise,h.onload=function(){d.resolve({data:h})},h.onerror=d.reject}}else n=o(e,{responseType:"image",allowImageDataAccess:r});return n.then(function(e){var i=e.data,n=i.width,o=i.height,h=n/o,l=t;if(a){var c=Math.max(n,o);l=Math.min(l,c)}return{image:r?i:null,width:1>=h?Math.ceil(l*h):l,height:1>=h?l:Math.ceil(l/h)}}).otherwise(function(i){if(r)return p(e,t,!1,a);throw i})}function w(e,t){return e&&"ignore"!==t?"multiply"===t&&255===e.r&&255===e.g&&255===e.b&&1===e.a?!1:!0:!1}function y(e,t,r,i,a){switch(a){case"multiply":e[t+0]*=r[0],e[t+1]*=r[1],e[t+2]*=r[2],e[t+3]*=r[3];break;default:var n=d.toHSV({r:e[t+0],g:e[t+1],b:e[t+2]});n.h=i.h,n.s=i.s,n.v=n.v/100*i.v;var o=d.toRGB(n);e[t+0]=o.r,e[t+1]=o.g,e[t+2]=o.b,e[t+3]*=r[3]}}function x(e,t,r,i,a){return p(e,t,!!r,a).then(function(a){var n=a.width?a.width:t,o=a.height?a.height:t;if(a.image&&w(r,i)){var l=a.image.width,c=a.image.height;(h("edge")||h("ie"))&&/\.svg$/i.test(e)&&(l-=1,c-=1);var u=v(n,o);u.drawImage(a.image,0,0,l,c,0,0,n,o);for(var g=u.getImageData(0,0,n,o),f=[r.r/255,r.g/255,r.b/255,r.a],m=d.toHSV(r),p=0;p<g.data.length;p+=4)y(g.data,p,f,m,i);u.putImageData(g,0,0),e=u.canvas.toDataURL("image/png")}else{var x=s.id&&s.id.findCredential(e);if(x&&x.token){var j=-1===e.indexOf("?")?"?":"&";e=""+e+j+"token="+x.token}}return{url:e,width:n,height:o}}).otherwise(function(){return{url:e,width:t,height:t}})}Object.defineProperty(t,"__esModule",{value:!0}),t.renderSymbol=m,t.tintImageWithColor=x});