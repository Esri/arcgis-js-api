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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/ReportPlayer/config","../../conditionalStyling/ConditionalStyleUtil","esri/dijit/geoenrichment/utils/ObjectUtil","../../../../dataProvider/supportClasses/AreaDataUtil","dojo/i18n!esri/nls/jsapi"],function(e,a,t,l,r){r=r.geoenrichment.dijit.ReportPlayer.ReportPlayer;var i={getValueFromFieldData:function(t,l){l=l||{};var n,o={value:null,formattedValue:null,isUnavailableData:!1,conditionalStyle:null};o.value=n=i.getFieldDataValue(t,l.fieldData,l.featureIndex);var u="esriFieldTypeString"!==t.type&&(t.hasVariable||t.script),d=Number(n);return void 0===n||"number"==typeof n&&isNaN(n)||"NaN"===n||"null"===n||u&&""===n||u&&isNaN(d)?(console.log("Error: can't calculate value for => "+t.name),o.value=NaN,o.formattedValue=e.tables.showUnavailableData?r.unavailableDataShort:"",o.isUnavailableData=!0):u?(o.formattedValue=i._formatValue(d,t),o.formatFunction=function(e){return i._formatValue(e,t)},t.triggerJson&&(o.conditionalStyle={style:a.getConditionalStyle(d,t.triggerJson),value:d,formattedValue:o.formattedValue})):o.formattedValue=n,o},_formatValue:function(e,a){return t.formatNumber(e,{places:a.decimals||0,noSeparator:!a.useThousandsSeparator,preserveTrailingZeroes:!0})},getFieldDataValue:function(e,a,t){return e&&l.getAreaDataValue({fieldName:e.templateName||e.name,fieldData:a,featureIndex:t,comparisonIndex:e.comparisonIndex})}};return i});