// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/DomUtil","../TransformUtil"],(function(n,e){var t;return{getBoxes:function(r,o,i){if(!r.textContent||!r.textContent.trim())return null;var a=e.disableTransform(o,i.parentVs);(t=t||n.create("span")).appendChild(r.cloneNode());for(var c=t.innerHTML,s=[],l=/&.+?;/,u=[],x=c.match(l);x;)u.push(c.substr(0,x.index)),u.push(x[0]),x=(c=c.substr(x.index+x[0].length)).match(l);u.push(c);var f="",h="";u.forEach((function(n){l.test(n)?f+="<c>"+n+"</c>":n.split("").forEach((function(n){if("<"!==n||h)return">"===n&&h?(f+=h+=n,void(h=null)):void(h?h+=n:f+="<c>"+n+"</c>");h=n}))})),t.innerHTML=f,n.place(t,r,"replace");var p=n.position(o);return n.query("c",o).forEach((function(e){var t=n.position(e),r={text:e.innerHTML,box:{x:t.x-p.x,y:t.y-p.y,w:t.w,h:t.h}};if(0===r.box.w&&r.box.x>0&&r.text.trim()&&s.length){var o=s[s.length-1];o.box.w/=2,r.box.w=o.box.w,r.box.x-=r.box.w}s.push(r)})),n.place(r,t,"replace"),t.innerHTML="",e.restoreTransform(a),{boxes:s}},cleanUp:function(){n.destroy(t),t=null}}}));