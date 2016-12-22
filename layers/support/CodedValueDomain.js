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

define(["../../core/lang","./Domain","dojo/_base/array","dojo/_base/lang"],function(e,a,o,n){var r=a.createSubclass({declaredClass:"esri.layers.support.CodedValueDomain",properties:{codedValues:{value:null},type:{value:"coded-value"}},getName:function(e){var a;return o.some(this.codedValues,function(o){return o.code==e&&(a=o.name),!!a}),a},toJSON:function(){var a=this.inherited(arguments);return a.codedValues=n.clone(this.codedValues),e.fixJson(a)}});return r});