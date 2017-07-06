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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["./core/declare","dojo/colors"],function(r,n){var t=r([n],{declaredClass:"esri.Color",toJSON:function(){return[this.r,this.g,this.b,this.a>1?this.a:Math.round(255*this.a)]},clone:function(){return new t(this.toRgba())}});t.toJSON=function(r){return r&&[r.r,r.g,r.b,r.a>1?r.a:Math.round(255*r.a)]},t.fromJSON=function(r){return r&&new t([r[0],r[1],r[2],r[3]/255])},t.toUnitRGB=function(r){return[r.r/255,r.g/255,r.b/255]},t.toUnitRGBA=function(r){return[r.r/255,r.g/255,r.b/255,null!=r.a?r.a:1]};var o,e=["named","blendColors","fromRgb","fromHex","fromArray","fromString"];for(o=0;o<e.length;o++)t[e[o]]=n[e[o]];return t.named.rebeccapurple=[102,51,153],t});
