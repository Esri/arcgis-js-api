// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","./ClassificationDefinition"],(function(i,a,e,t,s){var n=i(s,{declaredClass:"esri.tasks.ClassBreaksDefinition",type:"classBreaksDef",classificationField:null,classificationMethod:null,breakCount:null,standardDeviationInterval:null,normalizationType:null,normalizationField:null,toJson:function(){var i,e=this.inherited(arguments);switch(this.classificationMethod.toLowerCase()){case"natural-breaks":i="esriClassifyNaturalBreaks";break;case"equal-interval":i="esriClassifyEqualInterval";break;case"quantile":i="esriClassifyQuantile";break;case"standard-deviation":i="esriClassifyStandardDeviation";break;case"geometrical-interval":i="esriClassifyGeometricalInterval";break;default:i=this.classificationMethod}if(a.mixin(e,{type:this.type,classificationField:this.classificationField,classificationMethod:i,breakCount:this.breakCount}),this.normalizationType){var t;switch(this.normalizationType.toLowerCase()){case"field":t="esriNormalizeByField";break;case"log":t="esriNormalizeByLog";break;case"percent-of-total":t="esriNormalizeByPercentOfTotal";break;default:t=this.normalizationType}a.mixin(e,{normalizationType:t})}return this.normalizationField&&a.mixin(e,{normalizationField:this.normalizationField}),this.standardDeviationInterval&&a.mixin(e,{standardDeviationInterval:this.standardDeviationInterval}),e}});return e("extend-esri")&&a.setObject("tasks.ClassBreaksDefinition",n,t),n}));