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

define(["../../core/declare","dojo/_base/lang","./ClassificationDefinition"],function(i,a,e){var t=i(e,{declaredClass:"esri.tasks.support.ClassBreaksDefinition",breakCount:null,classificationField:null,classificationMethod:null,normalizationField:null,normalizationType:null,standardDeviationInterval:null,type:"classBreaksDef",toJSON:function(){var i,e=this.inherited(arguments);switch(this.classificationMethod.toLowerCase()){case"natural-breaks":i="esriClassifyNaturalBreaks";break;case"equal-interval":i="esriClassifyEqualInterval";break;case"quantile":i="esriClassifyQuantile";break;case"standard-deviation":i="esriClassifyStandardDeviation";break;case"geometrical-interval":i="esriClassifyGeometricalInterval";break;default:i=this.classificationMethod}if(a.mixin(e,{type:this.type,classificationField:this.classificationField,classificationMethod:i,breakCount:this.breakCount}),this.normalizationType){var t;switch(this.normalizationType.toLowerCase()){case"field":t="esriNormalizeByField";break;case"log":t="esriNormalizeByLog";break;case"percent-of-total":t="esriNormalizeByPercentOfTotal";break;default:t=this.normalizationType}a.mixin(e,{normalizationType:t})}return this.normalizationField&&a.mixin(e,{normalizationField:this.normalizationField}),this.standardDeviationInterval&&a.mixin(e,{standardDeviationInterval:this.standardDeviationInterval}),e}});return t});