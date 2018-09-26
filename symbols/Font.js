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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/sniff","dojox/gfx/_base","../kernel","../lang"],function(i,t,s,e,n,o){var r={STYLE_NORMAL:"normal",STYLE_ITALIC:"italic",STYLE_OBLIQUE:"oblique",VARIANT_NORMAL:"normal",VARIANT_SMALLCAPS:"small-caps",WEIGHT_NORMAL:"normal",WEIGHT_BOLD:"bold",WEIGHT_BOLDER:"bolder",WEIGHT_LIGHTER:"lighter"},a=i(null,{declaredClass:"esri.symbol.Font",constructor:function(i,n,o,r,a){i?t.isObject(i)?t.mixin(this,i):(this.size=i,parseFloat(this.size)==this.size&&(this.size=this.size+"px"),void 0!==n&&(this.style=n),void 0!==o&&(this.variant=o),void 0!==r&&(this.weight=r),void 0!==a&&(this.family=a)):t.mixin(this,e.defaultFont),parseFloat(this.size)==this.size&&(this.size=this.size+"pt"),s("ie")<9&&this.size&&t.isString(this.size)&&this.size.indexOf("em")>-1&&(this.size=e.pt2px(12*parseFloat(this.size))+"px"),this.size=this._convert2PxSize(this.size)},setSize:function(i){return this.size=this._convert2PxSize(i),this},_convert2PxSize:function(i){var s;return parseFloat(i)==i?s=i:t.isString(i)&&(i.indexOf("pt")>-1?s=e.pt2px(parseFloat(i)):i.indexOf("px")>-1?s=parseFloat(i):i.indexOf("em")>-1?s=e.pt2px(12*parseFloat(i)):i.indexOf("%")>-1&&(s=e.pt2px(.12*parseFloat(i)))),s},setStyle:function(i){return this.style=i,this},setVariant:function(i){return this.variant=i,this},setWeight:function(i){return this.weight=i,this},setFamily:function(i){return this.family=i,this},setDecoration:function(i){return this.decoration=i,this},toJson:function(){return o.fixJson({size:e.px2pt(this.size),style:this.style,decoration:this.decoration,weight:this.weight,family:this.family})}});return t.mixin(a,r),s("extend-esri")&&t.setObject("symbol.Font",a,n),a});