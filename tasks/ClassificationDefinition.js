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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel"],function(o,s,i,n){var e=o(null,{declaredClass:"esri.tasks.ClassificationDefinition",type:null,baseSymbol:null,colorRamp:null,toJson:function(){var o={};return this.baseSymbol&&s.mixin(o,{baseSymbol:this.baseSymbol.toJson()}),this.colorRamp&&!s.isString(this.colorRamp)&&s.mixin(o,{colorRamp:this.colorRamp.toJson()}),o}});return i("extend-esri")&&s.setObject("tasks.ClassificationDefinition",e,n),e});