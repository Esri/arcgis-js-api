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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/lang","../ElementBuilder","../VisibilityChecker"],(function(t,e,r){var d={drawRect:function(i,o){if(r.checkRect(i)){var s=i.style.getBorder().radius,l=i.style.getBorder().ew/2,y=s>0;return e.buildElement("rect",t.mixin({fill:i.style.getBackground().color,"fill-opacity":i.style.getBackground().opacity,width:i.box.w+(y?-l:0),height:i.box.h+(y?-l:0),x:i.box.x+(y?l/2:0),y:i.box.y+(y?l/2:0),opacity:i.style.opacity,rx:s||void 0,ry:s||void 0,clipParams:o,transform:i.style.transform},y?d._getBorderParams(i,"l"):null))}},_getBorderParams:function(t,e){var r,d=t.style.getBorder()[e];if("dashed"===d.style){var i=1+2*d.width;r=i+", "+i}return{stroke:d.color,"stroke-opacity":d.opacity,"stroke-width":d.width,"stroke-dasharray":r}},drawBorder:function(i,o){if(!i.style.getBorder().radius){var s=[];return y("t",l(0,0,i.style.getPaddings().bw+i.style.getBorder().l.width/2+ +i.style.getBorder().r.width/2,0)),y("r",l(i.style.getPaddings().bw+i.style.getBorder().l.width/2+ +i.style.getBorder().r.width/2,0,i.style.getPaddings().bw+i.style.getBorder().l.width/2+ +i.style.getBorder().r.width/2,i.style.getPaddings().bh+i.style.getBorder().t.width/2+ +i.style.getBorder().b.width/2)),y("b",l(i.style.getPaddings().bw+i.style.getBorder().l.width/2+ +i.style.getBorder().r.width/2,i.style.getPaddings().bh+i.style.getBorder().t.width/2+ +i.style.getBorder().b.width/2,0,i.style.getPaddings().bh+i.style.getBorder().t.width/2+ +i.style.getBorder().b.width/2)),y("l",l(0,i.style.getPaddings().bh+i.style.getBorder().t.width/2+ +i.style.getBorder().b.width/2,0,0)),s}function l(t,e,r,d){return t+=i.box.x+i.style.getBorder().l.width/2,r+=i.box.x+i.style.getBorder().l.width/2,t+","+(e+=i.box.y+i.style.getBorder().t.width/2)+" "+r+","+(d+=i.box.y+i.style.getBorder().t.width/2)}function y(l,y){var g=i.style.getBorder()[l];r.checkBorder(g)&&s.push(e.buildElement("polyline",t.mixin({points:y,clipParams:o,transform:i.style.transform},d._getBorderParams(i,l))))}}};return d}));