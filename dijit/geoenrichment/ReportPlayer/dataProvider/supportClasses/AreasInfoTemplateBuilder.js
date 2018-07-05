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

define(["dojo/when","dojo/promise/all","esri/dijit/PopupTemplate","esri/dijit/geoenrichment/utils/ObjectUtil","dojo/i18n!esri/nls/jsapi"],function(t,e,n,r,a){function i(t){return null===t||void 0===t||"number"==typeof t&&isNaN(t)?a.unavailableData:t}a=a.geoenrichment.dijit.ReportPlayer.AreasInfoTemplateBuilder;var u={buildInfoTemplates:function(l,o){return e([function(){return t(l.getAttributes(),function(t){return t&&t.length?u.buildAttributesTable(a.attributes,t.map(function(t){return{label:t.alias,value:i(null!==t.places&&void 0!==t.places?r.formatNumber(t.value,t.places):t.value)}})):null})}(),function(){return t(l.getNotes(),function(t){return t&&t.length?u.formatArrayOfTexts(a.notes,t.map(function(t){return t.text})):null})}()]).then(function(t){var e=t[0]||"",r=t[1]||"",a=[];o.forEach(function(t){a.push({feature:t.feature,title:t.name}),t.additionalFeatures&&t.additionalFeatures.forEach(function(e){a.push({feature:e,title:t.name})})}),a.forEach(function(t){if(!e&&!r)return void t.feature.setInfoTemplate(null);var a=new n({title:t.title,fieldInfos:[],description:e+r});t.feature.setInfoTemplate(a)})})},formatArrayOfTexts:function(t,e){var n="<p>"+t+"</p>";return n+="<p style='padding-left:10px'>"+e.join("<br/><br/>")+"</p>"},buildAttributesTable:function(t,e){var n="";return t&&(n+="<p>"+t+"</p>"),n+="<table>",e.forEach(function(t){n+="<tr>",n+="<td>"+t.label+"</td>",n+="<td>"+t.value+"</td>",n+="</tr>"}),n+="</table>"}};return u});