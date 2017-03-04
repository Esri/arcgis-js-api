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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/Color","dojo/_base/declare","dojo/Stateful"],function(f,e,o,a){var c=["#ffffff","#858585","#ffbebe","#ffebbe","#ffebaf","#ffffbe","#e9ffbe","#d3ffbe","#beffe8","#bee8ff","#bed2ff","#e8beff","#ffbee8","#ebebeb","#707070","#ff7f7f","#ffa77f","#ffd37f","#ffff73","#d1ff73","#a3ff73","#73ffdf","#73dfff","#73b2ff","#df73ff","#ff73df","#d6d6d6","#5c5c5c","#ff0000","#ff5500","#ffaa00","#ffff00","#aaff00","#55ff00","#00ffc5","#00c5ff","#0070ff","#c500ff","#ff00c5","#c2c2c2","#474747","#e60000","#e64c00","#e69800","#e6e600","#98e600","#4ce600","#00e6a9","#00a9e6","#005ce6","#a900e6","#e600a9","#adadad","#242424","#a80000","#a83800","#a87000","#a8a800","#70a800","#38a800","#00a884","#0084a8","#004da8","#8400a8","#a80084","#999999","#1a1a1a","#730000","#732600","#734c00","#737300","#4c7300","#267300","#00734c","#004c73","#002673","#4c0073","#73004c"],r=o([a],{constructor:function(f){f=f||{},this.set("colors",f.colors)},_colorInstance:new e,_colors:null,_colorsGetter:function(){return this._colors},_colorsSetter:function(f){f=f?f:c,this._colors=this._normalizeColors(f)},_normalizeColors:function(e){var o=this._colorInstance;return f.map(e,function(f){return o.setColor(f).toHex()},this)},contains:function(e){var o=this._colorInstance;return o.setColor(e),f.indexOf(this._colors,o.toHex())>-1}});return r.DEFAULT_COLORS=c,r});