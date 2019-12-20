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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/ReportPlayer/config","../../conditionalStyling/ConditionalStyleUtil","../../../../dataProvider/supportClasses/data/AreaDataUtil","../../../../dataProvider/supportClasses/attachments/AttributesUtil","esri/dijit/geoenrichment/utils/FieldUtil","esri/dijit/geoenrichment/utils/ObjectUtil","dojo/i18n!esri/nls/jsapi"],function(e,a,t,r,i,l,n){n=n.geoenrichment.dijit.ReportPlayer.ReportPlayer;var o={getValueFromFieldData:function(t,l){function u(){console.log("Error: can't calculate value for => "+t.name),d=NaN,s=e.tables.showUnavailableData?n.unavailableDataShort:"",m=!0}l=l||{};var d,s,c,f,m=!1;if(l.getPreviewValueFunction){var v=l.getPreviewValueFunction({currentFeatureIndex:l.currentFeatureIndex});v=v.fields&&v.fields[t.name]||v,d=v.number,"string"==typeof v.formattedValue&&(s=v.formattedValue)}else d=o._getFieldDataValue(t,l.fieldData,l.currentFeatureIndex,l.isMultiFeature);var g=(!t.type||i.isNumericField(t))&&(t.hasVariable||t.script);if(d&&"object"==typeof d){var p=d;d=p.value,s=r.formatAttributeValue(p,{skipFormattedValue:!0,unavailableDataValue:void 0,format:t}),void 0===s&&u()}else!l.getPreviewValueFunction&&(void 0===d||null===d||"number"==typeof d&&isNaN(d)||"NaN"===d||"undefined"===d||"null"===d||g&&"number"!=typeof d)?u():void 0===s&&(g?(s=o._formatValue(d,t),c=function(e){return o._formatValue(e,t)}):s=String(d));return t.triggerJson&&(f={style:a.getConditionalStyle(d,t.triggerJson),value:d,formattedValue:s}),{value:d,formattedValue:s,formatFunction:c,isUnavailableData:m,conditionalStyle:f}},_formatValue:function(e,a){return l.formatNumber(e,{places:a.decimals||0,noSeparator:!a.useThousandsSeparator,preserveTrailingZeroes:!0})},getFieldDataValue:function(e,a,t,r){var i=o._getFieldDataValue(e,a,t,r);return i&&"object"==typeof i?i.value:i},_getFieldDataValue:function(e,a,r,i){return e&&t.getAreaDataValue({fieldName:e.templateName||e.name,fieldData:a,featureIndex:r,isMultiFeature:i,comparisonIndex:e.comparisonIndex})}};return o});