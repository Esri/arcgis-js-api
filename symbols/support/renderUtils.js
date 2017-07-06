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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","dojo/Deferred","dojox/gfx/matrix","dojox/gfx","../../request","../../core/sniff","../../core/Error","../../core/promiseUtils","../../core/urlUtils"],function(e,t,r,a,i,n,o,h,c,d,l){function s(e){return e.map(function(e){return e.command+" "+e.values.join(",")}).join(" ").trim()}function u(e,t,a,o){var h=o&&o.node||document.createElement("div"),c=n.createSurface(h,t,a);null!=o.opacity&&(h.style.opacity=o.opacity.toString());try{e.forEach(function(e){var n=c.createGroup(),h=0;e.forEach(function(e){var t=e.shape,r=e.fill,a=e.stroke;h+=a&&a.width||0;var i=null;t&&("path"===t.type&&"string"!=typeof t.path&&(t.path=s(t.path)),"image"===t.type&&t.src&&"data:"!==t.src.substr(0,5)&&(t.src+=(-1===t.src.indexOf("?")?"?":"&")+"legend=1"),i=n.createShape(t).setFill(r).setStroke(a?a:{width:0}),"text"===t.type&&i.setFont(e.font))});var d=n.getBoundingBox(),l=d.width,u=d.height,g=-(d.x+l/2),f=-(d.y+u/2),m=c.getDimensions(),p={dx:g+m.width/2,dy:f+m.height/2},v=!1;if(o.scale&&0!==d.width&&0!==d.height){var w=d.width/d.height,y=(t>a?t:a)-2*h,x=1,j=1;isNaN(y)||(w>1?(x=y/d.width,j=y/w/d.height):(j=y/d.height,x=y*w/d.width)),n.applyTransform(i.scaleAt(x,j,m.width/2,m.height/2)),v=!0}if(!v&&(l>t||u>a)){var M=l/t>u/a,D=M?l:u,I=M?t:a,S=(I-5)/D;r.mixin(p,{xx:S,yy:S})}n.applyTransform(p)})}catch(d){return c.clear(),c.destroy(),null}return h}function g(e,t,r){var a=Math.ceil(t[0]),i=Math.ceil(t[1]),n=e.some(function(e){return!!e.length});return n?u(e,a,i,r):null}function f(e,t){e=Math.ceil(e),t=Math.ceil(t);var r=document.createElement("canvas");r.width=e,r.height=t,r.style.width=e+"px",r.style.height=t+"px";var a=r.getContext("2d");return a.clearRect(0,0,e,t),a}function m(e,t,r,i){if(!e)return d.reject(new c("renderUtils: imageDataSize","href not provided."));var n;if(l.isDataProtocol(e)){var h=new Image;if(h.src=e,h.complete)n=d.resolve({data:h});else{var s=new a;n=s.promise,h.onload=function(){s.resolve({data:h})},h.onerror=s.reject}}else r||(e+=(-1===e.indexOf("?")?"?":"&")+"legend=1"),n=o(e,{responseType:"image",allowImageDataAccess:r});return n.then(function(e){var a=e.data,n=a.width,o=a.height,h=n/o,c=t;if(i){var d=Math.max(n,o);c=Math.min(c,d)}return{image:r?a:null,width:1>=h?Math.ceil(c*h):c,height:1>=h?c:Math.ceil(c/h)}}).otherwise(function(a){if(r)return m(e,t,!1,i);throw a})}function p(e,t,r,a){return m(e,t,!!r,a).then(function(a){var i=a.width?a.width:t,n=a.height?a.height:t;if(a.image&&r){var o=a.image.width,c=a.image.height;(h("edge")||h("ie"))&&/\.svg$/i.test(e)&&(o-=1,c-=1);var d=f(i,n);d.drawImage(a.image,0,0,o,c,0,0,i,n);for(var l=d.getImageData(0,0,i,n),s=r.r/255,u=r.g/255,g=r.b/255,m=r.a,p=0;p<l.data.length;p+=4)l.data[p+0]*=s,l.data[p+1]*=u,l.data[p+2]*=g,l.data[p+3]*=m;d.putImageData(l,0,0),e=d.canvas.toDataURL("image/png")}return{url:e,width:i,height:n}}).otherwise(function(){return{url:e,width:t,height:t}})}Object.defineProperty(t,"__esModule",{value:!0}),t.renderSymbol=g,t.tintImageWithColor=p});