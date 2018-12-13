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

define(["dojo/when","dojo/promise/all","esri/dijit/PopupTemplate","./attachments/AttributesUtil","esri/dijit/geoenrichment/utils/DomUtil","dojo/i18n!esri/nls/jsapi"],function(t,e,n,r,a,i){function o(t){return null===t||void 0===t||"number"==typeof t&&isNaN(t)?i.unavailableData:t}i=i.geoenrichment.dijit.ReportPlayer.AreasInfoTemplateBuilder;var u={buildInfoTemplates:function(n,r,a){var i=this,o={},u=r.map(function(e,r){return t(i._getAttributesAndNotesForAreaAt(n,r),function(t){o[r]=t,i._buildAreaInfoTemplate(e,t.attributesText,t.notesText)})});return e(u).then(function(){a.groups&&a.groups.forEach(function(t){var e=o[t.indexes[0]];i._buildGroupInfoTemplate(t,e.attributesText,e.notesText)})})},buildInfoTemplateForFeature:function(e,n,r,a){var i=this;return t(this._getAttributesAndNotesForAreaAt(e,r),function(t){var e=[{feature:n,title:a}];i._buildFeatureInfosInfoTemplate(e,t.attributesText,t.notesText)})},_getAttributesAndNotesForAreaAt:function(n,a){return n.setCurrentAnalysisAreaIndex&&n.setCurrentAnalysisAreaIndex(a),e([function(){return t(n.getAttributes(),function(t){return t&&t.length?u.buildAttributesTable(i.attributes,t.map(function(t){return{label:t.alias,value:r.formatAttributeValue(t,{returnUnavailableDataForIncorrectValues:!0})}})):null})}(),function(){return t(n.getNotes(),function(t){return t&&t.length?u.formatArrayOfTexts(i.notes,t.map(function(t){return t.text})):null})}()]).then(function(t){return{attributesText:t[0]||"",notesText:t[1]||""}})},_buildAreaInfoTemplate:function(t,e,n){var r=[{feature:t.feature,title:t.name}];t.location&&r.push({feature:t.location,title:t.locationName||t.name}),this._buildFeatureInfosInfoTemplate(r,e,n)},_buildGroupInfoTemplate:function(t,e,n){var r=[];t.location&&r.push({feature:t.location,title:t.locationName||t.name}),this._buildFeatureInfosInfoTemplate(r,e,n)},_buildFeatureInfosInfoTemplate:function(t,e,r){t.forEach(function(t){if(!e&&!r)return void t.feature.setInfoTemplate(null);t.feature.setInfoTemplate(new n({title:t.title,fieldInfos:[],description:e+r}))})},formatArrayOfTexts:function(t,e){var n="<p>"+t+"</p>";return n+="<p style='padding-left:10px'>"+e.join("<br/><br/>")+"</p>"},buildAttributesTable:function(t,e,n){n=n||{};var r=n.padding?n.padding+"px":"0px 5px",i=null;if(n.maxHeight){var u=n.padding||0,l=a.getTextBox("Text").h,f=(2*u+l)*(e.length+(t?1:0));if(n.maxHeight<f){var s=n.maxHeight/f;i=Math.floor(l*s)+"px",n.padding&&(r=Math.floor(n.padding*s*.5)+"px "+n.padding+"px")}}var p="";t&&(p+="<p>"+t+"</p>");var d="padding:"+r+";"+(i?"font-size:"+i+";":"");return p+="<table>",e.forEach(function(t){p+="<tr style='text-align:left;'>",p+="<td style='"+d+"'>"+t.label+"</td>",p+="<td style='"+d+"'>"+o(t.value)+"</td>",p+="</tr>"}),p+="</table>"}};return u});