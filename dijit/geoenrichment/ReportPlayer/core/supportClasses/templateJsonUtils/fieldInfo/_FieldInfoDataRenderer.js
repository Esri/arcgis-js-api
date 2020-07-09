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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/ReportPlayer/config","../../conditionalStyling/ConditionalStyleUtil","../../../../dataProvider/supportClasses/data/AreaDataUtil","../../../../dataProvider/supportClasses/attachments/AttributesUtil","../../../grid/coreUtils/GridDataUtil","esri/dijit/geoenrichment/utils/ObjectUtil","dojo/i18n!esri/nls/jsapi"],(function(e,t,a,r,i,u,l){function n(e,t){return null==e||"number"==typeof e&&isNaN(e)||"NaN"===e||"N/A"===e||"undefined"===e||"null"===e||t&&"number"!=typeof e}l=l.geoenrichment.dijit.ReportPlayer.ReportPlayer;var o={getValueFromFieldData:function(a,u){u=u||{};var d,s,f=void 0,c=void 0,m=!1,v=!1,g=i.isNumericVariableFieldCell(a);function F(){n(f,g)?c=void 0:g?(c=o._formatValue(f,a),d=function(e){return o._formatValue(e,a)}):c=String(f)}if(u.getPreviewValueFunction){var b=u.getPreviewValueFunction({fieldInfo:a,currentFeatureIndex:u.currentFeatureIndex,currentFeatureAttributes:u.currentFeatureAttributes});b&&(v=!0,b=b.fields&&b.fields[a.name]||b,f=b.value,"string"==typeof b.formattedValue?c=b.formattedValue:F())}if(!v)if((f=f=o._getFieldDataValue(a,{fieldData:u.fieldData,featureIndex:u.currentFeatureIndex,featureAttributes:u.currentFeatureAttributes,isMultiFeature:u.isMultiFeature}))&&"object"==typeof f){var p=f;f=p.value,c=r.formatAttributeValue(p,{skipFormattedValue:!0,unavailableDataValue:void 0,format:a})}else F();return n(f,g)&&(f=void 0),n(c,!1)&&(c=void 0),void 0===f&&void 0===c&&(console.log("Error: can't calculate value for => "+a.name),f=NaN,c=e.tables.showUnavailableData?l.unavailableDataShort:"",m=!0),a.triggerJson&&(s={style:t.getConditionalStyle(f,a.triggerJson),value:f,formattedValue:c}),{value:f,formattedValue:c,formatFunction:d,isUnavailableData:m,conditionalStyle:s}},_formatValue:function(e,t){return u.formatNumber(e,{places:t.decimals||0,noSeparator:!t.useThousandsSeparator,preserveTrailingZeroes:!0})},getFieldDataValue:function(e,t){var a=o._getFieldDataValue(e,t);return a&&"object"==typeof a?a.value:a},_getFieldDataValue:function(e,t){return e&&a.getAreaDataValue({fieldName:e.templateName||e.name,fieldData:t.fieldData,featureIndex:t.featureIndex,featureAttributes:t.featureAttributes,isMultiFeature:t.isMultiFeature})}};return o}));