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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["dojo/_base/lang","../../core/Accessor"],function(o,s){var i=s.createSubclass({declaredClass:"esri.tasks.support.ClassificationDefinition",properties:{baseSymbol:null,colorRamp:null,type:null},toJSON:function(){var s={};return this.baseSymbol&&o.mixin(s,{baseSymbol:this.baseSymbol.toJSON()}),this.colorRamp&&!o.isString(this.colorRamp)&&o.mixin(s,{colorRamp:this.colorRamp.toJSON()}),s}});return i});