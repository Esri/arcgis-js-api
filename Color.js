// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["./core/declare","./core/accessorSupport/ensureType","dojo/colors"],function(r,n,e){function t(r){return Math.max(0,Math.min(n.ensureInteger(r),255))}var o=r([e],{declaredClass:"esri.Color",toJSON:function(){return[t(this.r),t(this.g),t(this.b),this.a>1?this.a:t(255*this.a)]},clone:function(){return new o(this.toRgba())}});o.toJSON=function(r){return r&&[t(r.r),t(r.g),t(r.b),r.a>1?r.a:t(255*r.a)]},o.fromJSON=function(r){return r&&new o([r[0],r[1],r[2],r[3]/255])},o.toUnitRGB=function(r){return[r.r/255,r.g/255,r.b/255]},o.toUnitRGBA=function(r){return[r.r/255,r.g/255,r.b/255,null!=r.a?r.a:1]};var a,i=["named","blendColors","fromRgb","fromHex","fromArray","fromString"];for(a=0;a<i.length;a++)o[i[a]]=e[i[a]];return o.named.rebeccapurple=[102,51,153],o});