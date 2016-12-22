// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../core/declare","dojo/_base/lang","./ClassificationDefinition"],function(i,e,t){var u=i(t,{declaredClass:"esri.tasks.support.UniqueValueDefinition",attributeField:null,attributeField2:null,attributeField3:null,fieldDelimiter:null,type:"uniqueValueDef",toJSON:function(){var i=this.inherited(arguments);return this.uniqueValueFields=[],this.attributeField&&this.uniqueValueFields.push(this.attributeField),this.attributeField2&&this.uniqueValueFields.push(this.attributeField2),this.attributeField3&&this.uniqueValueFields.push(this.attributeField3),e.mixin(i,{type:this.type,uniqueValueFields:this.uniqueValueFields}),this.fieldDelimiter&&e.mixin(i,{fieldDelimiter:this.fieldDelimiter}),i}});return u});