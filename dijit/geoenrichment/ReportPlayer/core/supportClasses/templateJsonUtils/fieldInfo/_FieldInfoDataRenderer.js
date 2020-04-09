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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/ReportPlayer/config","../../conditionalStyling/ConditionalStyleUtil","../../../../dataProvider/supportClasses/data/AreaDataUtil","../../../../dataProvider/supportClasses/attachments/AttributesUtil","esri/dijit/geoenrichment/utils/FieldUtil","esri/dijit/geoenrichment/utils/ObjectUtil","dojo/i18n!esri/nls/jsapi"],(function(e,a,t,r,i,l,n){n=n.geoenrichment.dijit.ReportPlayer.ReportPlayer;var o={getValueFromFieldData:function(t,l){var u,s,d,c,f=!1;if((l=l||{}).getPreviewValueFunction){var m=l.getPreviewValueFunction({currentFeatureIndex:l.currentFeatureIndex});m=m.fields&&m.fields[t.name]||m,u=m.number,"string"==typeof m.formattedValue&&(s=m.formattedValue)}else u=o._getFieldDataValue(t,l.fieldData,l.currentFeatureIndex,l.isMultiFeature);function g(){console.log("Error: can't calculate value for => "+t.name),u=NaN,s=e.tables.showUnavailableData?n.unavailableDataShort:"",f=!0}var v=(!t.type||i.isNumericField(t))&&(t.hasVariable||t.script);if(u&&"object"==typeof u){var p=u;u=p.value,void 0===(s=r.formatAttributeValue(p,{skipFormattedValue:!0,unavailableDataValue:void 0,format:t}))&&g()}else!l.getPreviewValueFunction&&(null==u||"number"==typeof u&&isNaN(u)||"NaN"===u||"undefined"===u||"null"===u||v&&"number"!=typeof u)?g():void 0===s&&(v?(s=o._formatValue(u,t),d=function(e){return o._formatValue(e,t)}):s=String(u));return t.triggerJson&&(c={style:a.getConditionalStyle(u,t.triggerJson),value:u,formattedValue:s}),{value:u,formattedValue:s,formatFunction:d,isUnavailableData:f,conditionalStyle:c}},_formatValue:function(e,a){return l.formatNumber(e,{places:a.decimals||0,noSeparator:!a.useThousandsSeparator,preserveTrailingZeroes:!0})},getFieldDataValue:function(e,a,t,r){var i=o._getFieldDataValue(e,a,t,r);return i&&"object"==typeof i?i.value:i},_getFieldDataValue:function(e,a,r,i){return e&&t.getAreaDataValue({fieldName:e.templateName||e.name,fieldData:a,featureIndex:r,isMultiFeature:i,comparisonIndex:e.comparisonIndex})}};return o}));