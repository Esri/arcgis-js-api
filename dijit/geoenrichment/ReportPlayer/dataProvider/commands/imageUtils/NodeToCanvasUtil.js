// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dojo/dom-construct","esri/dijit/geoenrichment/utils/SVGUtil","../createHTML/CSSFilesLoader"],(function(e,t,n,r,o){var i={svgNodeToCanvasFunc:function(i,d,c){return t(o.loadCssFontFiles(),(function(t){var o=document.createElement("canvas");o.width=d,o.height=c,t.forEach((function(e){var t=document.createElementNS("http://www.w3.org/2000/svg","defs"),n=document.createElementNS("http://www.w3.org/2000/svg","style");n.innerHTML=e,t.appendChild(n),i.insertBefore(t,i.firstElementChild)}));var a=window.URL||window.webkitURL||window,s=new Image;s.width=d,s.height=c;var l=new Blob([r.getOuterHTML(i)],{type:"image/svg+xml"}),w=a.createObjectURL(l),u=new e;return s.onload=function(){s.onload=s.onerror=null,o.getContext("2d").drawImage(s,0,0,d,c),a.revokeObjectURL(w),n.destroy(s),u.resolve(o)},s.onerror=function(e){s.onload=s.onerror=null,n.destroy(s),u.reject(e)},n.place(s,document.body),s.src=w,u.promise}))}};return i}));