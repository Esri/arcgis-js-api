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

define(["dojo/_base/lang","dojo/_base/Color"],function(e,o){var r={};return r.DEFAULT_SHAPE={isShape:!0,shapeJson:{id:"shape",g:[{name:"circle",cx:16,cy:16,r:16}],viewBox:{xmin:0,ymin:0,width:32,height:32},style:{width:32,height:32,borderAlpha:0,fillAlpha:1,borderWidth:1},themeStyle:{borderColor:"#AAAAAA",fillColor:"#AAAAAA"}}},r.shapeJsonToGFXJson=function(r){function l(e,o){return r.themeStyle&&void 0!==r.themeStyle[e]?r.themeStyle[e]:void 0!==r.style[e]?r.style[e]:o}var t=new o(l("fillColor","#000000"));t.a=l("fillAlpha",1);var i=new o(l("borderColor","#000000"));i.a=l("borderAlpha",0);var n={name:"gfxJson",children:r.g.map(function(o){return{shape:e.mixin({type:o.name,path:o.d},o),fill:t,stroke:{color:i,width:l("borderWidth",1)}}})};return n},r});