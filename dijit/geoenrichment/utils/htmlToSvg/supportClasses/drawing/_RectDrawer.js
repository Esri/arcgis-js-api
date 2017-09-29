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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/lang","../ElementBuilder","../VisibilityChecker"],function(r,t,e){var d={drawRect:function(l,o){return e.checkRect(l)?t.buildElement("rect",r.mixin({fill:l.style.background.color,"fill-opacity":l.style.background.opacity,width:l.style.pw+l.style.border.l.width,height:l.style.ph+l.style.border.t.width,x:l.box.x+l.style.border.l.width/2,y:l.box.y+l.style.border.t.width/2,opacity:l.style.opacity,rx:l.style.borderRadius,ry:l.style.borderRadius,clipParams:o,transform:l.style.transform},l.style.borderRadius?d._getBorderParams(l,"l"):null)):void 0},_getBorderParams:function(r,t){var e,d=r.style.border[t];if("dashed"==d.style){var l=1+2*d.width;e=l+", "+l}return{stroke:d.color,"stroke-opacity":d.opacity,"stroke-width":d.width,"stroke-dasharray":e}},drawBorder:function(l,o){function s(r,t,e,d){return r+=l.box.x+l.style.border.l.width/2,e+=l.box.x+l.style.border.l.width/2,t+=l.box.y+l.style.border.t.width/2,d+=l.box.y+l.style.border.t.width/2,r+","+t+" "+e+","+d}function i(s,i){var b=l.style.border[s];e.checkBorder(b)&&y.push(t.buildElement("polyline",r.mixin({points:i,clipParams:o,transform:l.style.transform},d._getBorderParams(l,s))))}if(!l.style.borderRadius){var y=[];return i("t",s(0,0,l.style.pw+l.style.border.l.width/2+ +l.style.border.r.width/2,0)),i("r",s(l.style.pw+l.style.border.l.width/2+ +l.style.border.r.width/2,0,l.style.pw+l.style.border.l.width/2+ +l.style.border.r.width/2,l.style.ph+l.style.border.t.width/2+ +l.style.border.b.width/2)),i("b",s(l.style.pw+l.style.border.l.width/2+ +l.style.border.r.width/2,l.style.ph+l.style.border.t.width/2+ +l.style.border.b.width/2,0,l.style.ph+l.style.border.t.width/2+ +l.style.border.b.width/2)),i("l",s(0,l.style.ph+l.style.border.t.width/2+ +l.style.border.b.width/2,0,0)),y}}};return d});