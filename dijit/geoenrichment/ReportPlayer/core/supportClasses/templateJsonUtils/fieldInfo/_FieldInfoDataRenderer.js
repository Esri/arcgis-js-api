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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/ReportPlayer/config","../../conditionalStyling/ConditionalStyleUtil","../../../../dataProvider/supportClasses/data/AreaDataUtil","../../../../dataProvider/supportClasses/attachments/AttributesUtil","../../../grid/coreUtils/GridDataUtil","esri/dijit/geoenrichment/utils/NumberUtil","esri/dijit/geoenrichment/utils/ObjectUtil","dojo/i18n!esri/nls/jsapi"],(function(e,t,a,r,i,u,l,n){function o(e,t){return null==e||"number"==typeof e&&isNaN(e)||"NaN"===e||"N/A"===e||"undefined"===e||"null"===e||t&&"number"!=typeof e}n=n.geoenrichment.dijit.ReportPlayer.ReportPlayer;var s={getValueFromFieldData:function(a,u){u=u||{};var l,d,f=void 0,c=void 0,m=!1,v=!1,g=i.isNumericVariableFieldCell(a);function p(){o(f,g)?c=void 0:g?(c=s.formatNumericValue(f,a),l=function(e){return s.formatNumericValue(e,a)}):c=String(f)}if(u.getPreviewValueFunction){var b=u.getPreviewValueFunction({fieldInfo:a,currentFeatureIndex:u.currentFeatureIndex,currentFeatureAttributes:u.currentFeatureAttributes});b&&(v=!0,b=b.fields&&b.fields[a.name]||b,f=b.value,"string"==typeof b.formattedValue?c=b.formattedValue:p())}if(!v)if((f=f=s._getFieldDataValue(a,{fieldData:u.fieldData,featureIndex:u.currentFeatureIndex,featureAttributes:u.currentFeatureAttributes,isMultiFeature:u.isMultiFeature}))&&"object"==typeof f){var F=f;f=F.value,c=r.formatAttributeValue(F,{skipFormattedValue:!0,unavailableDataValue:void 0,format:a})}else p();return o(f,g)&&(f=void 0),o(c,!1)&&(c=void 0),void 0===f&&void 0===c&&(console.log("Error: can't calculate value for => "+a.name),f=NaN,c=e.tables.showUnavailableData?n.unavailableDataShort:"",m=!0),a.triggerJson&&(d={style:t.getConditionalStyle(f,a.triggerJson),value:f,formattedValue:c}),{value:f,formattedValue:c,formatFunction:l,isUnavailableData:m,conditionalStyle:d}},formatNumericValue:function(e,t){return(t=t||{}).unitPrefix||t.isCompact?u.formatNumberCompact(e,{unitPrefix:t.unitPrefix,unitPrefixSymbol:t.unitPrefixSymbol,places:t.decimals,noSeparator:!t.useThousandsSeparator,preserveTrailingZeroes:!0}):l.formatNumber(e,{places:t.decimals,noSeparator:!t.useThousandsSeparator,preserveTrailingZeroes:!0})},getFieldDataValue:function(e,t){var a=s._getFieldDataValue(e,t);return a&&"object"==typeof a?a.value:a},_getFieldDataValue:function(e,t){return e&&a.getAreaDataValue({fieldName:e.templateName||e.name,fieldData:t.fieldData,featureIndex:t.featureIndex,featureAttributes:t.featureAttributes,isMultiFeature:t.isMultiFeature})}};return s}));