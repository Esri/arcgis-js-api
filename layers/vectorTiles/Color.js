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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["./core/declare","./core/accessorSupport/ensureType","dojo/colors"],(function(r,n,e){var t=r([e],{declaredClass:"esri.Color",toJSON:function(){return[o(this.r),o(this.g),o(this.b),this.a>1?this.a:o(255*this.a)]},clone:function(){return new t(this.toRgba())}});function o(r){return Math.max(0,Math.min(n.ensureInteger(r),255))}t.toJSON=function(r){return r&&[o(r.r),o(r.g),o(r.b),r.a>1?r.a:o(255*r.a)]},t.fromJSON=function(r){return r&&new t([r[0],r[1],r[2],r[3]/255])},t.toUnitRGB=function(r){return[r.r/255,r.g/255,r.b/255]},t.toUnitRGBA=function(r){return[r.r/255,r.g/255,r.b/255,null!=r.a?r.a:1]};var a,i=["named","blendColors","fromRgb","fromHex","fromArray","fromString"];for(a=0;a<i.length;a++)t[i[a]]=e[i[a]];return t.named.rebeccapurple=[102,51,153],t}));