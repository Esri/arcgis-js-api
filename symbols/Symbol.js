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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang","../Color"],function(o,e,s,l,i,r){var t=o(null,{declaredClass:"esri.symbol.Symbol",color:new r([0,0,0,1]),type:null,constructor:function(o){if(o&&e.isObject(o)){e.mixin(this,o),this.color&&i.isDefined(this.color[0])&&(this.color=r.toDojoColor(this.color));var s=this.type;s&&0===s.indexOf("esri")&&(this.type={esriSMS:"simplemarkersymbol",esriPMS:"picturemarkersymbol",esriSLS:"simplelinesymbol",esriCLS:"cartographiclinesymbol",esriSFS:"simplefillsymbol",esriPFS:"picturefillsymbol",esriTS:"textsymbol",esriSHD:"shieldlabelsymbol"}[s])}},setColor:function(o){return this.color=o,this},toJson:function(){return{color:r.toJsonColor(this.color)}}});return s("extend-esri")&&e.setObject("symbol.Symbol",t,l),t});