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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/Color"],function(e,t){var r={};return r.DEFAULT_SHAPE={isShape:!0,shapeJson:{id:"shape",g:[{name:"circle",cx:32,cy:32,r:32,fill:"#DDDDDD"},{name:"line",x1:32,y1:20,x2:32,y2:44,stroke:"#999999",strokeWidth:2},{name:"line",x1:20,y1:32,x2:44,y2:32,stroke:"#999999",strokeWidth:2}],viewBox:{xmin:0,ymin:0,width:64,height:64},style:{width:64,height:64,borderAlpha:0,fillAlpha:1,borderWidth:1}}},r.shapeJsonToGFXJson=function(r){function o(e,t){return void 0!==r.style[e]?r.style[e]:r.themeStyle&&void 0!==r.themeStyle[e]?r.themeStyle[e]:t}var i=new t(o("fillColor","#000000"));i.a=o("fillAlpha",1);var l=new t(o("borderColor","#000000"));l.a=o("borderAlpha",0);for(var n=o("borderWidth",1),a=[],h=0;h<r.g.length;h++){var s=r.g[h],p={shape:e.mixin({type:s.name,path:s.d},s),fill:s.fill||i,stroke:{color:s.stroke||l,width:s.strokeWidth||n}};"polygon"===p.shape.type&&(p.shape.type="polyline",p.shape.points=p.shape.points.trim().replace(/\s+/g," ").split(" ").map(function(e){var t=e.split(",");return{x:Number(t[0]),y:Number(t[1])}})),a.push(p)}return{name:"gfxJson",children:a}},r});