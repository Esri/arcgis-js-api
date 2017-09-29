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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojox/gfx/_base","../kernel","./Symbol"],function(s,t,e,i,o,n){var f=s(n,{declaredClass:"esri.symbol.MarkerSymbol",angle:0,xoffset:0,yoffset:0,size:12,constructor:function(s){s&&t.isObject(s)&&(this.size="auto"===this.size?this.size:i.pt2px(this.size),this.xoffset=i.pt2px(this.xoffset),this.yoffset=i.pt2px(this.yoffset),this.angle&&(this.angle=-1*this.angle))},setAngle:function(s){return this.angle=s,this},setSize:function(s){return this.size=s,this},setOffset:function(s,t){return this.xoffset=s,this.yoffset=t,this},toJson:function(){var s=i.px2pt(this.size);s=isNaN(s)?void 0:s;var e=i.px2pt(this.xoffset);e=isNaN(e)?void 0:e;var o=i.px2pt(this.yoffset);return o=isNaN(o)?void 0:o,t.mixin(this.inherited("toJson",arguments),{size:"auto"===this.size?this.size:s,angle:this.angle&&-1*this.angle,xoffset:e,yoffset:o})}});return e("extend-esri")&&t.setObject("symbol.MarkerSymbol",f,o),f});