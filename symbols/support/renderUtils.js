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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","dojo/Deferred","dojox/gfx/matrix","dojox/gfx","../../request","../../core/sniff","../../core/Error","../../core/promiseUtils","../../core/urlUtils"],function(e,t,i,r,a,n,o,h,l,c,s){function d(e){return e.map(function(e){return e.command+" "+e.values.join(",")}).join(" ").trim()}function g(e,t,r,o){var h=o&&o.node||document.createElement("div"),l=n.createSurface(h,t,r);null!=o.opacity&&(h.style.opacity=o.opacity.toString());try{e.forEach(function(e){var n=l.createGroup(),h=0;e.forEach(function(e){var t=e.shape,i=e.fill,r=e.stroke;h+=r&&r.width||0;var a=null;t&&("path"===t.type&&"string"!=typeof t.path&&(t.path=d(t.path)),"image"===t.type&&t.src&&"data:"!==t.src.substr(0,5)&&(t.src+=(-1===t.src.indexOf("?")?"?":"&")+"legend=1"),a=n.createShape(t).setFill(i).setStroke(r?r:{width:0}),"text"===t.type&&a.setFont(e.font))});var c=n.getBoundingBox(),s=c.width,g=c.height,u=-(c.x+s/2),f=-(c.y+g/2),m=l.getDimensions(),p={dx:u+m.width/2,dy:f+m.height/2},w=!1;if(o.scale&&0!==c.width&&0!==c.height){var v=c.width/c.height,y=(t>r?t:r)-2*h,x=1,j=1;isNaN(y)||(v>1?(x=y/c.width,j=y/v/c.height):(j=y/c.height,x=y*v/c.width)),n.applyTransform(a.scaleAt(x,j,m.width/2,m.height/2)),w=!0}if(!w&&(s>t||g>r)){var M=s/t>g/r,S=M?s:g,D=M?t:r,I=(D-5)/S;i.mixin(p,{xx:I,yy:I})}n.applyTransform(p)})}catch(c){return l.clear(),l.destroy(),null}return h}function u(e,t,i){var r=Math.ceil(t[0]),a=Math.ceil(t[1]),n=e.some(function(e){return!!e.length});return n?g(e,r,a,i):null}function f(e,t){e=Math.ceil(e),t=Math.ceil(t);var i=document.createElement("canvas");i.width=e,i.height=t,i.style.width=e+"px",i.style.height=t+"px";var r=i.getContext("2d");return r.clearRect(0,0,e,t),r}function m(e,t,i,a){if(!e)return c.reject(new l("renderUtils: imageDataSize","href not provided."));var n;if(s.isDataProtocol(e)){var h=new Image;if(h.src=e,h.complete)n=c.resolve({data:h});else{var d=new r;n=d.promise,h.onload=function(){d.resolve({data:h})},h.onerror=d.reject}}else i||(e+=(-1===e.indexOf("?")?"?":"&")+"legend=1"),n=o(e,{responseType:"image",allowImageDataAccess:i});return n.then(function(e){var r=e.data,n=r.width,o=r.height,h=n/o,l=t;if(a){var c=Math.max(n,o);l=Math.min(l,c)}return{image:i?r:null,width:1>=h?Math.ceil(l*h):l,height:1>=h?l:Math.ceil(l/h)}}).otherwise(function(r){if(i)return m(e,t,!1,a);throw r})}function p(e,t,i,r){return m(e,t,!!i,r).then(function(r){var a=r.width?r.width:t,n=r.height?r.height:t;if(r.image&&i){var o=f(a,n),l=r.image.width,c=r.image.height;(h("edge")||h("ie"))&&/\.svg$/i.test(e)&&(l-=1,c-=1),o.drawImage(r.image,0,0,l,c,0,0,a,n),o.globalCompositeOperation="source-atop",o.rect(0,0,a,n),o.fillStyle=i.toCss(),o.fill();var s=f(a,n);s.drawImage(r.image,0,0,l,c,0,0,a,n),s.globalCompositeOperation="multiply",s.drawImage(o.canvas,0,0),e=s.canvas.toDataURL("image/png")}return{url:e,width:a,height:n}}).otherwise(function(){return{url:e,width:t,height:t}})}t.renderSymbol=u,t.tintImageWithColor=p});