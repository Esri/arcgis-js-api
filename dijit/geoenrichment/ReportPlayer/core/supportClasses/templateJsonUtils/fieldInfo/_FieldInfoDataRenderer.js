// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/ReportPlayer/config","../../conditionalStyling/ConditionalStyleUtil","../../../../dataProvider/supportClasses/AreaDataUtil","../../../../dataProvider/supportClasses/attachments/AttributesUtil","esri/dijit/geoenrichment/utils/FieldUtil","esri/dijit/geoenrichment/utils/ObjectUtil","dojo/i18n!esri/nls/jsapi"],function(e,a,t,i,r,l,n){n=n.geoenrichment.dijit.ReportPlayer.ReportPlayer;var o={getValueFromFieldData:function(t,l){function u(){console.log("Error: can't calculate value for => "+t.name),s=NaN,d=e.tables.showUnavailableData?n.unavailableDataShort:"",m=!0}l=l||{};var s,d,f,c,m=!1;if(l.getPreviewValueFunction){var v=l.getPreviewValueFunction();v=v.fields&&v.fields[t.name]||v,s=v.number,"string"==typeof v.formattedValue&&(d=v.formattedValue)}else s=o._getFieldDataValue(t,l.fieldData,l.currentFeatureIndex,l.isMultiFeature);var g=(!t.type||r.isNumericField(t))&&(t.hasVariable||t.script);if(s&&"object"==typeof s){var p=s;s=p.value,d=i.formatAttributeValue(p,{skipFormattedValue:!0,unavailableDataValue:void 0,format:t}),void 0===d&&u()}else!l.getPreviewValueFunction&&(void 0===s||null===s||"number"==typeof s&&isNaN(s)||"NaN"===s||"undefined"===s||"null"===s||g&&"number"!=typeof s)?u():void 0===d&&(g?(d=o._formatValue(s,t),f=function(e){return o._formatValue(e,t)}):d=String(s));return t.triggerJson&&(c={style:a.getConditionalStyle(s,t.triggerJson),value:s,formattedValue:d}),{value:s,formattedValue:d,formatFunction:f,isUnavailableData:m,conditionalStyle:c}},_formatValue:function(e,a){return l.formatNumber(e,{places:a.decimals||0,noSeparator:!a.useThousandsSeparator,preserveTrailingZeroes:!0})},getFieldDataValue:function(e,a,t,i){var r=o._getFieldDataValue(e,a,t,i);return r&&"object"==typeof r?r.value:r},_getFieldDataValue:function(e,a,i,r){return e&&t.getAreaDataValue({fieldName:e.templateName||e.name,fieldData:a,featureIndex:i,isMultiFeature:r,comparisonIndex:e.comparisonIndex})}};return o});