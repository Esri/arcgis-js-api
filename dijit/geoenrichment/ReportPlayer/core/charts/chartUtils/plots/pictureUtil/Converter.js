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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/Color"],function(e,r){var t={};return t.DEFAULT_SHAPE={isShape:!0,shapeJson:{id:"shape",g:[{name:"circle",cx:32,cy:32,r:32,fill:"#DDDDDD"},{name:"line",x1:32,y1:20,x2:32,y2:44,stroke:"#999999",strokeWidth:2},{name:"line",x1:20,y1:32,x2:44,y2:32,stroke:"#999999",strokeWidth:2}],viewBox:{xmin:0,ymin:0,width:64,height:64},style:{width:64,height:64,borderAlpha:0,fillAlpha:1,borderWidth:1}}},t.shapeJsonToGFXJson=function(t){function o(e,r){return void 0!==t.style[e]?t.style[e]:t.themeStyle&&void 0!==t.themeStyle[e]?t.themeStyle[e]:r}var i=new r(o("fillColor","#000000"));i.a=o("fillAlpha",1);var l=new r(o("borderColor","#000000"));l.a=o("borderAlpha",0);for(var n=o("borderWidth",1),a=[],h=0;h<t.g.length;h++){var s=t.g[h],p={shape:e.mixin({type:s.name,path:s.d},s),fill:s.fill||i,stroke:{color:s.stroke||l,width:s.strokeWidth||n}};"polygon"===p.shape.type&&(p.shape.type="polyline",p.shape.points=p.shape.points.trim().replace(/\s+/g," ").split(" ").map(function(e){var r=e.split(",");return{x:Number(r[0]),y:Number(r[1])}})),a.push(p)}var d={name:"gfxJson",children:a};return d},t});