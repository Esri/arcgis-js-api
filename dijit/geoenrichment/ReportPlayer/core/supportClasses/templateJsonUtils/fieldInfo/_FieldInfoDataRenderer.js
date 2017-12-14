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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/ReportPlayer/config","../../conditionalStyling/ConditionalStyleUtil","esri/dijit/geoenrichment/utils/ObjectUtil","../../../../dataProviders/supportClasses/AreaDataUtil","dojo/i18n!../../../../../../../nls/jsapi"],function(e,a,t,r,i){i=i.geoenrichment.dijit.ReportPlayer.ReportPlayer;var l={getValueFromFieldData:function(t,r){r=r||{};var n,o=r.formatValue!==!1,u=l.getFieldDataValue(t,r.fieldData,r.featureIndex);if(void 0===u||"number"==typeof u&&isNaN(u)||"NaN"===u||"null"===u)return console.log("Error: can't calculate value for => "+t.name),o?e.tables.showUnavailableData?i.unavailableDataShort:"":NaN;var s=Number(u);if(""!==u&&!isNaN(s)){if(!o)return s;t.triggerJson&&(n=a.getConditionalStyle(s,t.triggerJson));var d=this._formatValue(s,t);return n?{label:d,conditionalStyle:n,numberValue:s}:d}return o?u:NaN},_formatValue:function(e,a){return t.formatNumber(e,{places:a.decimals||0,noSeparator:!a.useThousandsSeparator,preserveTrailingZeroes:!0})},getFieldDataValue:function(e,a,t){if(e){var i=r.getAreaDataValue(e.templateName||e.name,a,void 0,t);return void 0===i&&e.variableID&&(i=r.getAreaDataValue(e.variableID,a,void 0,t)),i}}};return l});