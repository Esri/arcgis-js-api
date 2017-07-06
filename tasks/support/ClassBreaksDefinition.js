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

define(["dojo/_base/lang","./ClassificationDefinition"],function(i,a){var e=a.createSubclass({declaredClass:"esri.tasks.support.ClassBreaksDefinition",properties:{breakCount:null,classificationField:null,classificationMethod:null,normalizationField:null,normalizationType:null,standardDeviationInterval:null,type:"classBreaksDef"},toJSON:function(){var a,e=this.inherited(arguments);switch(this.classificationMethod.toLowerCase()){case"natural-breaks":a="esriClassifyNaturalBreaks";break;case"equal-interval":a="esriClassifyEqualInterval";break;case"quantile":a="esriClassifyQuantile";break;case"standard-deviation":a="esriClassifyStandardDeviation";break;case"geometrical-interval":a="esriClassifyGeometricalInterval";break;default:a=this.classificationMethod}if(i.mixin(e,{type:this.type,classificationField:this.classificationField,classificationMethod:a,breakCount:this.breakCount}),this.normalizationType){var t;switch(this.normalizationType.toLowerCase()){case"field":t="esriNormalizeByField";break;case"log":t="esriNormalizeByLog";break;case"percent-of-total":t="esriNormalizeByPercentOfTotal";break;default:t=this.normalizationType}i.mixin(e,{normalizationType:t})}return this.normalizationField&&i.mixin(e,{normalizationField:this.normalizationField}),this.standardDeviationInterval&&i.mixin(e,{standardDeviationInterval:this.standardDeviationInterval}),e}});return e});