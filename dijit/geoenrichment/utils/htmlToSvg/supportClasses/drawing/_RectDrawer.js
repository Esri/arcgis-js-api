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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/lang","../ElementBuilder","../VisibilityChecker"],function(t,e,r){var d={drawRect:function(s,i){if(r.checkRect(s))return e.buildElement("rect",t.mixin({fill:s.style.getBackground().color,"fill-opacity":s.style.getBackground().opacity,width:s.box.w,height:s.box.h,x:s.box.x,y:s.box.y,opacity:s.style.opacity,rx:s.style.getBorder().radius,ry:s.style.getBorder().radius,clipParams:i,transform:s.style.transform},s.style.getBorder().radius?d._getBorderParams(s,"l"):null))},_getBorderParams:function(t,e){var r,d=t.style.getBorder()[e];if("dashed"===d.style){var s=1+2*d.width;r=s+", "+s}return{stroke:d.color,"stroke-opacity":d.opacity,"stroke-width":d.width,"stroke-dasharray":r}},drawBorder:function(s,i){function o(t,e,r,d){return t+=s.box.x+s.style.getBorder().l.width/2,r+=s.box.x+s.style.getBorder().l.width/2,e+=s.box.y+s.style.getBorder().t.width/2,d+=s.box.y+s.style.getBorder().t.width/2,t+","+e+" "+r+","+d}function l(o,l){var g=s.style.getBorder()[o];r.checkBorder(g)&&y.push(e.buildElement("polyline",t.mixin({points:l,clipParams:i,transform:s.style.transform},d._getBorderParams(s,o))))}if(!s.style.getBorder().radius){var y=[];return l("t",o(0,0,s.style.getPaddings().bw+s.style.getBorder().l.width/2+ +s.style.getBorder().r.width/2,0)),l("r",o(s.style.getPaddings().bw+s.style.getBorder().l.width/2+ +s.style.getBorder().r.width/2,0,s.style.getPaddings().bw+s.style.getBorder().l.width/2+ +s.style.getBorder().r.width/2,s.style.getPaddings().bh+s.style.getBorder().t.width/2+ +s.style.getBorder().b.width/2)),l("b",o(s.style.getPaddings().bw+s.style.getBorder().l.width/2+ +s.style.getBorder().r.width/2,s.style.getPaddings().bh+s.style.getBorder().t.width/2+ +s.style.getBorder().b.width/2,0,s.style.getPaddings().bh+s.style.getBorder().t.width/2+ +s.style.getBorder().b.width/2)),l("l",o(0,s.style.getPaddings().bh+s.style.getBorder().t.width/2+ +s.style.getBorder().b.width/2,0,0)),y}}};return d});