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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/dom-construct","dojo/dom-style"],(function(t,e){return{replaceMapWithImage:function(i){for(var o=[];i.children.length;)o.push(i.firstChild),i.removeChild(i.firstChild);var r=e.get(i,"position"),n=t.create("img",{class:"esriGEAbsoluteStretched"},i);return e.set(n,{width:e.get(i,"width")+"px",height:e.get(i,"height")+"px"}),e.set(i,"position","relative"),{mapImage:n,undo:function(){t.destroy(n),e.set(i,"position",r),o.forEach((function(e){t.place(e,i)}))}}}}}));