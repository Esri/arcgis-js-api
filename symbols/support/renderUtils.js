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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","dojo/Deferred","dojox/gfx/matrix","dojox/gfx","../../request","../../core/sniff","../../core/Error","../../core/promiseUtils","../../core/urlUtils","../../kernel"],function(e,t,r,a,i,n,o,h,c,l,d,u){function g(e){return e.map(function(e){return e.command+" "+e.values.join(",")}).join(" ").trim()}function s(e,t,a,o){var h=o&&o.node||document.createElement("div"),c=n.createSurface(h,t,a);null!=o.opacity&&(h.style.opacity=o.opacity.toString());try{e.forEach(function(e){var n=c.createGroup(),h=0;e.forEach(function(e){var t=e.shape,r=e.fill,a=e.stroke;h+=a&&a.width||0;var i=null;t&&("path"===t.type&&"string"!=typeof t.path&&(t.path=g(t.path)),i=n.createShape(t).setFill(r).setStroke(a?a:{width:0}),"text"===t.type&&i.setFont(e.font))});var l=n.getBoundingBox(),d=l.width,u=l.height,s=-(l.x+d/2),f=-(l.y+u/2),m=c.getDimensions(),p={dx:s+m.width/2,dy:f+m.height/2},v=!1;if(o.scale&&0!==l.width&&0!==l.height){var w=l.width/l.height,y=(t>a?t:a)-2*h,x=1,j=1;isNaN(y)||(w>1?(x=y/l.width,j=y/w/l.height):(j=y/l.height,x=y*w/l.width)),n.applyTransform(i.scaleAt(x,j,m.width/2,m.height/2)),v=!0}if(!v&&(d>t||u>a)){var M=d/t>u/a,D=M?d:u,k=M?t:a,I=(k-5)/D;r.mixin(p,{xx:I,yy:I})}n.applyTransform(p)})}catch(l){return c.clear(),c.destroy(),null}return h}function f(e,t,r){var a=Math.ceil(t[0]),i=Math.ceil(t[1]),n=e.some(function(e){return!!e.length});return n?s(e,a,i,r):null}function m(e,t){e=Math.ceil(e),t=Math.ceil(t);var r=document.createElement("canvas");r.width=e,r.height=t,r.style.width=e+"px",r.style.height=t+"px";var a=r.getContext("2d");return a.clearRect(0,0,e,t),a}function p(e,t,r,i){if(!e)return l.reject(new c("renderUtils: imageDataSize","href not provided."));var n;if(d.isDataProtocol(e)){var h=new Image;if(h.src=e,h.complete)n=l.resolve({data:h});else{var u=new a;n=u.promise,h.onload=function(){u.resolve({data:h})},h.onerror=u.reject}}else n=o(e,{responseType:"image",allowImageDataAccess:r});return n.then(function(e){var a=e.data,n=a.width,o=a.height,h=n/o,c=t;if(i){var l=Math.max(n,o);c=Math.min(c,l)}return{image:r?a:null,width:1>=h?Math.ceil(c*h):c,height:1>=h?c:Math.ceil(c/h)}}).otherwise(function(a){if(r)return p(e,t,!1,i);throw a})}function v(e,t,r,a){return p(e,t,!!r,a).then(function(a){var i=a.width?a.width:t,n=a.height?a.height:t;if(a.image&&r){var o=a.image.width,c=a.image.height;(h("edge")||h("ie"))&&/\.svg$/i.test(e)&&(o-=1,c-=1);var l=m(i,n);l.drawImage(a.image,0,0,o,c,0,0,i,n);for(var d=l.getImageData(0,0,i,n),g=r.r/255,s=r.g/255,f=r.b/255,p=r.a,v=0;v<d.data.length;v+=4)d.data[v+0]*=g,d.data[v+1]*=s,d.data[v+2]*=f,d.data[v+3]*=p;l.putImageData(d,0,0),e=l.canvas.toDataURL("image/png")}else{var w=u.id&&u.id.findCredential(e);if(w&&w.token){var y=-1===e.indexOf("?")?"?":"&";e=""+e+y+"token="+w.token}}return{url:e,width:i,height:n}}).otherwise(function(){return{url:e,width:t,height:t}})}Object.defineProperty(t,"__esModule",{value:!0}),t.renderSymbol=f,t.tintImageWithColor=v});