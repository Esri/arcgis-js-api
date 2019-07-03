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

define(["esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","esri/dijit/PopupTemplate","./attachments/AttributesUtil","esri/dijit/geoenrichment/utils/DomUtil","dojo/i18n!esri/nls/jsapi"],function(t,e,n,a,i,r){function u(t){return null===t||void 0===t||"number"==typeof t&&isNaN(t)?r.unavailableData:t}r=r.geoenrichment.dijit.ReportPlayer.AreasInfoTemplateBuilder;var o={buildInfoTemplates:function(n,a,i){var r=this,u={},o=a.map(function(e,a){return t(r._getAttributesAndNotesForAreaAt(n,a),function(t){u[a]=t,r._buildAreaInfoTemplate(e,t.attributesText,t.notesText)})});return e(o).then(function(){i.groups&&i.groups.forEach(function(t){var e=u[t.indexes[0]];r._buildGroupInfoTemplate(t,e.attributesText,e.notesText)})})},buildInfoTemplateForFeature:function(e,n,a,i){var r=this;return t(this._getAttributesAndNotesForAreaAt(e,a),function(t){var e=[{feature:n,title:i}];r._buildFeatureInfosInfoTemplate(e,t.attributesText,t.notesText)})},_getAttributesAndNotesForAreaAt:function(n,i){return n.setCurrentAnalysisAreaIndex&&n.setCurrentAnalysisAreaIndex(i),e([function(){return t(n.getAttributes(),function(t){return t&&t.length?o.buildAttributesTable(r.attributes,t.map(function(t){return{label:t.alias,value:a.formatAttributeValue(t,{unavailableDataValue:r.unavailableData})}})):null})}(),function(){return t(n.getNotes(),function(t){return t&&t.length?o.formatArrayOfTexts(r.notes,t.map(function(t){return t.text})):null})}()]).then(function(t){return{attributesText:t[0]||"",notesText:t[1]||""}})},_buildAreaInfoTemplate:function(t,e,n){var a=[{feature:t.feature,title:t.name}];t.location&&a.push({feature:t.location,title:t.locationName||t.name}),this._buildFeatureInfosInfoTemplate(a,e,n)},_buildGroupInfoTemplate:function(t,e,n){var a=[];t.location&&a.push({feature:t.location,title:t.locationName||t.name}),this._buildFeatureInfosInfoTemplate(a,e,n)},_buildFeatureInfosInfoTemplate:function(t,e,a){t.forEach(function(t){if(!e&&!a)return void t.feature.setInfoTemplate(null);t.feature.setInfoTemplate(new n({title:t.title,fieldInfos:[],description:e+a}))})},formatArrayOfTexts:function(t,e){var n="<p>"+t+"</p>";return n+="<p style='padding-left:10px'>"+e.join("<br/><br/>")+"</p>"},buildAttributesTable:function(t,e,n){n=n||{};var a=n.padding?n.padding+"px":"0px 5px",r=null;if(n.maxHeight){var o=n.padding||0,l=i.getTextBox("Text").h,f=(2*o+l)*(e.length+(t?1:0));if(n.maxHeight<f){var s=n.maxHeight/f;r=Math.floor(l*s)+"px",n.padding&&(a=Math.floor(n.padding*s*.5)+"px "+n.padding+"px")}}var p="";t&&(p+="<p>"+t+"</p>");var d="padding:"+a+";"+(r?"font-size:"+r+";":"");return p+="<table>",e.forEach(function(t){p+="<tr style='text-align:left;'>",p+="<td style='"+d+"'>"+t.label+"</td>",p+="<td style='"+d+"'>"+u(t.value)+"</td>",p+="</tr>"}),p+="</table>"}};return o});