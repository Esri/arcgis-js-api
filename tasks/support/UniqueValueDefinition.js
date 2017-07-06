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

define(["dojo/_base/lang","./ClassificationDefinition"],function(i,e){var t=e.createSubclass({declaredClass:"esri.tasks.support.UniqueValueDefinition",properties:{attributeField:null,attributeField2:null,attributeField3:null,fieldDelimiter:null,type:"uniqueValueDef"},toJSON:function(){var e=this.inherited(arguments);return this.uniqueValueFields=[],this.attributeField&&this.uniqueValueFields.push(this.attributeField),this.attributeField2&&this.uniqueValueFields.push(this.attributeField2),this.attributeField3&&this.uniqueValueFields.push(this.attributeField3),i.mixin(e,{type:this.type,uniqueValueFields:this.uniqueValueFields}),this.fieldDelimiter&&i.mixin(e,{fieldDelimiter:this.fieldDelimiter}),e}});return t});