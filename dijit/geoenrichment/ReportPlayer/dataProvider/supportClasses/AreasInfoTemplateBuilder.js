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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/when","dojo/promise/all","esri/dijit/PopupTemplate","./attachments/AttributesUtil","dojo/i18n!esri/nls/jsapi"],function(t,e,n,r,a){function i(t){return null===t||void 0===t||"number"==typeof t&&isNaN(t)?a.unavailableData:t}a=a.geoenrichment.dijit.ReportPlayer.AreasInfoTemplateBuilder;var u={buildInfoTemplates:function(n,r,a){var i=this,u={},o=r.map(function(e,r){return t(i._getAttributesAndNotesForAreaAt(n,r),function(t){u[r]=t,i._buildAreaInfoTemplate(e,t.attributesText,t.notesText)})});return e(o).then(function(){a.groups&&a.groups.forEach(function(t){var e=u[t.indexes[0]];i._buildGroupInfoTemplate(t,e.attributesText,e.notesText)})})},buildInfoTemplateForFeature:function(e,n,r,a){var i=this;return t(this._getAttributesAndNotesForAreaAt(e,r),function(t){var e=[{feature:n,title:a}];i._buildFeatureInfosInfoTemplate(e,t.attributesText,t.notesText)})},_getAttributesAndNotesForAreaAt:function(n,i){return n.setCurrentAnalysisAreaIndex&&n.setCurrentAnalysisAreaIndex(i),e([function(){return t(n.getAttributes(),function(t){return t&&t.length?u.buildAttributesTable(a.attributes,t.map(function(t){return{label:t.alias,value:r.formatAttributeValue(t,{returnUnavailableDataForIncorrectValues:!0})}})):null})}(),function(){return t(n.getNotes(),function(t){return t&&t.length?u.formatArrayOfTexts(a.notes,t.map(function(t){return t.text})):null})}()]).then(function(t){return{attributesText:t[0]||"",notesText:t[1]||""}})},_buildAreaInfoTemplate:function(t,e,n){var r=[{feature:t.feature,title:t.name}];t.location&&r.push({feature:t.location,title:t.locationName||t.name}),this._buildFeatureInfosInfoTemplate(r,e,n)},_buildGroupInfoTemplate:function(t,e,n){var r=[];t.location&&r.push({feature:t.location,title:t.locationName||t.name}),this._buildFeatureInfosInfoTemplate(r,e,n)},_buildFeatureInfosInfoTemplate:function(t,e,r){t.forEach(function(t){if(!e&&!r)return void t.feature.setInfoTemplate(null);t.feature.setInfoTemplate(new n({title:t.title,fieldInfos:[],description:e+r}))})},formatArrayOfTexts:function(t,e){var n="<p>"+t+"</p>";return n+="<p style='padding-left:10px'>"+e.join("<br/><br/>")+"</p>"},buildAttributesTable:function(t,e,n){var r="",a=n&&n.padding||0;return t&&(r+="<p>"+t+"</p>"),r+="<table>",e.forEach(function(t){r+="<tr style='text-align:left;'>",r+="<td style='padding:"+a+"px;'>"+t.label+"</td>",r+="<td style='padding:"+a+"px;'>"+i(t.value)+"</td>",r+="</tr>"}),r+="</table>"}};return u});