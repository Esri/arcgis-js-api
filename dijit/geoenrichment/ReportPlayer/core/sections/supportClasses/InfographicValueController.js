// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer","../../supportClasses/conditionalStyling/ConditionalStyleUtil"],(function(e,n,a){function t(e){return!e||!e.showAsBar&&!e.scaleByValue}return e(null,{_sections:null,_variableTables:null,constructor:function(){this._sections=[]},_samplePercentValues:[52,30,18,90,70,100],setVariableTables:function(e){this._variableTables=e},addSection:function(e){this._sections.push(e)},getValueInfo:function(e,n){n=n||{};var a=!e.viewModel.dynamicReportInfo,t=this._sections.indexOf(e),i=this._variableTables[t],l=i.variable.fieldInfo;n.fieldInfo=n.fieldInfo||l;var r=!1;i.description&&i.description.fieldInfo&&i.description.fieldInfo.templateName===n.fieldInfo.templateName&&(r=!0);var o=this._getValueAt(t,n,t,a);if(r||o.isStandAlone)return this._enrichWithConditionalColor(o.value,n);var s=o.value.value;if(o.shapeJson.useRange){var u=o.shapeJson.rangeMin,f=o.shapeJson.rangeMax;return"number"!=typeof u||"number"!=typeof f||f<=u?this._enrichWithConditionalColor({value:0,percent:0},n):(a&&(s=u+.62123*(f-u)),this._enrichWithConditionalColor({value:s,percent:s,normalizedValue:(s-u)/(f-u)},n))}var c=[];this._getValues(n,t,a).forEach((function(e){e.shapeJson&&!e.shapeJson.useRange&&(e.shapeJson.showAsBar||e.shapeJson.scaleByValue)&&c.push(e.value.value)}));f=function(e){var n=-1/0;return e.forEach((function(e){n=Math.max(n,e)})),n}(c);return this._enrichWithConditionalColor({value:s,percent:s,normalizedValue:s/f},n)},_enrichWithConditionalColor:function(e,n){return null!=e.value&&n.fieldInfo.triggerJson&&(e.conditionalStyling=a.getConditionalStyle(e.value,n.fieldInfo.triggerJson)),e},_getValues:function(e,n,a){return this._variableTables.map((function(t,i){return this._getValueAt(i,e,n,a)}),this)},_getValueAt:function(e,n,a,t){return t?this._getSampleValueAt(e,n,a):this._getRealValueAt(e,n,a)},_getRealValueAt:function(e,a,i){var l=this._variableTables[e],r=this._sections[0],o=e===i?a.fieldInfo:l.variable.fieldInfo,s="number"==typeof a.currentFeatureIndex?a.currentFeatureIndex:r.currentFeatureIndex,u=a.currentFeatureAttributes||r.currentFeatureAttributes,f=l.shape&&l.shape.shapeJson,c=t(f),d=void 0;if(e===i&&a.sectionPreviewValueFunction){var h=a.sectionPreviewValueFunction(a);h&&(d=h)}return void 0===d&&(d={value:n.getFieldDataValue(o,{fieldData:r.viewModel.dynamicReportInfo.fieldData,featureIndex:s,featureAttributes:u})}),{value:d,variable:l.variable,shapeJson:f,isStandAlone:c}},_getSampleValueAt:function(e,i,l){var r=this._variableTables[e],o=e===l?i.fieldInfo:r.variable.fieldInfo,s=r.shape&&r.shape.shapeJson,u=t(s),f=void 0;if(o.triggerJson){var c=a.getStatistics(o.triggerJson);c&&(f={value:c.min+(c.max-c.min)/2})}else if(e===l&&i.sectionPreviewValueFunction){var d=i.sectionPreviewValueFunction(i);d&&(f=d)}return void 0===f&&(f=u?n.renderFieldInfoInTableCell(i.fieldInfo,{previewValues:!0}):{value:this._samplePercentValues[e]||this._samplePercentValues[0]}),{value:f,variable:r.variable,shapeJson:s,isStandAlone:u}}})}));
