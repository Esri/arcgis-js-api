// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/Deferred","dojo/when","dojo/dom-construct","esri/dijit/geoenrichment/utils/SVGUtil","../createHTML/CSSFilesLoader"],function(e,t,n,o,r){var i={};return i.svgNodeToCanvasFunc=function(i,d,c){return t(r.loadCssFontFiles(),function(t){var r=document.createElement("canvas");r.width=d,r.height=c,t.forEach(function(e){var t=document.createElementNS("http://www.w3.org/2000/svg","defs"),n=document.createElementNS("http://www.w3.org/2000/svg","style");n.innerHTML=e,t.appendChild(n),i.insertBefore(t,i.firstElementChild)});var a=window.URL||window.webkitURL||window,s=new Image;s.width=d,s.height=c;var w=new Blob([o.getOuterHTML(i)],{type:"image/svg+xml"}),l=a.createObjectURL(w),u=new e;return s.onload=function(){r.getContext("2d").drawImage(s,0,0,d,c),a.revokeObjectURL(l),n.destroy(s),u.resolve(r)},s.onerror=function(e){n.destroy(s),u.reject(e)},n.place(s,document.body),s.src=l,u.promise})},i});