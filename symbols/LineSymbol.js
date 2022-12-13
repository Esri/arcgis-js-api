// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojox/gfx/_base","../kernel","./Symbol"],(function(t,i,e,o,s,n){var d=t(n,{declaredClass:"esri.symbol.LineSymbol",constructor:function(t){i.isObject(t)?this.width=o.pt2px(this.width):this.width=12},setWidth:function(t){return this.width=t,this},toJson:function(){var t=o.px2pt(this.width);return t=isNaN(t)?void 0:t,i.mixin(this.inherited("toJson",arguments),{width:t})}});return e("extend-esri")&&i.setObject("symbol.LineSymbol",d,s),d}));