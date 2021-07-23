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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/Color"],(function(e,r){var t={DEFAULT_SHAPE:{isShape:!0,shapeJson:{id:"shape",g:[{name:"circle",cx:32,cy:32,r:32,fill:"#DDDDDD"},{name:"line",x1:32,y1:20,x2:32,y2:44,stroke:"#999999",strokeWidth:2},{name:"line",x1:20,y1:32,x2:44,y2:32,stroke:"#999999",strokeWidth:2}],viewBox:{xmin:0,ymin:0,width:64,height:64},style:{width:64,height:64,borderAlpha:0,fillAlpha:1,borderWidth:1}}},shapeJsonToGFXJson:function(t){function o(e){return"string"==typeof e||"number"==typeof e&&!isNaN(e)}function i(e,r){return o(t.style[e])?t.style[e]:t.themeStyle&&o(t.themeStyle[e])?t.themeStyle[e]:r}var n=new r(i("fillColor","#000000"));n.a=i("fillAlpha",1);var l=new r(i("borderColor","#000000"));l.a=i("borderAlpha",0);for(var s=i("borderWidth",1),a=i("borderDashArray"),h=[],p=0;p<t.g.length;p++){var y=t.g[p],d={shape:e.mixin({type:y.name,path:y.d},y),fill:y.fill||n,stroke:{color:y.stroke||l,width:y.strokeWidth||s}};a&&(d.stroke.style=a),"polygon"===d.shape.type&&(d.shape.type="polyline",d.shape.points=d.shape.points.trim().replace(/\s+/g," ").split(" ").map((function(e){var r=e.split(",");return{x:Number(r[0]),y:Number(r[1])}}))),h.push(d)}return{name:"gfxJson",children:h}}};return t}));