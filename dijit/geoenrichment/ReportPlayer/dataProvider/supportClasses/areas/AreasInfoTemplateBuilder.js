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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","esri/dijit/PopupTemplate","../attachments/AttributesUtil","esri/dijit/geoenrichment/utils/DomUtil","dojo/i18n!esri/nls/jsapi"],(function(t,e,n,a,i,r){r=r.geoenrichment.dijit.ReportPlayer.AreasInfoTemplateBuilder;var u={buildInfoTemplates:function(n,a,i){var r=this,u={},o=a.map((function(e,a){return t(r._getAttributesAndNotesForAreaAt(n,a),(function(t){u[a]=t,r._buildAreaInfoTemplate(e,t.attributesText,t.notesText)}))}));return e(o).then((function(){i.groups&&i.groups.forEach((function(t){var e=u[t.indexes[0]];r._buildGroupInfoTemplate(t,e.attributesText,e.notesText)}))}))},buildInfoTemplateForFeature:function(e,n,a,i){var r=this;return t(this._getAttributesAndNotesForAreaAt(e,a),(function(t){var e=[{feature:n,title:i}];r._buildFeatureInfosInfoTemplate(e,t.attributesText,t.notesText)}))},_getAttributesAndNotesForAreaAt:function(n,i){return n.supportsMultipleAreas&&n.setCurrentAnalysisAreaIndex(i),e([t(n.getAttributes(),(function(t){return t&&t.length?u.buildAttributesTable(r.attributes,t.map((function(t){return{label:t.alias,value:a.formatAttributeValue(t,{unavailableDataValue:r.unavailableData})}}))):null})),t(n.getNotes(),(function(t){return t&&t.length?u.formatArrayOfTexts(r.notes,t.map((function(t){return t.text}))):null}))]).then((function(t){return{attributesText:t[0]||"",notesText:t[1]||""}}))},_buildAreaInfoTemplate:function(t,e,n){var a=[{feature:t.feature,title:t.name}];t.location&&a.push({feature:t.location,title:t.locationName||t.name}),this._buildFeatureInfosInfoTemplate(a,e,n)},_buildGroupInfoTemplate:function(t,e,n){var a=[];t.location&&a.push({feature:t.location,title:t.locationName||t.name}),this._buildFeatureInfosInfoTemplate(a,e,n)},_buildFeatureInfosInfoTemplate:function(t,e,a){t.forEach((function(t){e||a?t.feature.setInfoTemplate(new n({title:t.title,fieldInfos:[],description:e+a})):t.feature.setInfoTemplate(null)}))},formatArrayOfTexts:function(t,e){var n="<p>"+t+"</p>";return n+="<p style='padding-left:10px'>"+e.join("<br/><br/>")+"</p>"},buildAttributesTable:function(t,e,n){var a=(n=n||{}).padding?n.padding+"px":"0px 5px",u=null;if(n.maxHeight){var o=n.padding||0,l=i.getTextBox("Text").h,s=(2*o+l)*(e.length+(t?1:0));if(n.maxHeight<s){var f=n.maxHeight/s;u=Math.floor(l*f)+"px",n.padding&&(a=Math.floor(n.padding*f*.5)+"px "+n.padding+"px")}}var p="";t&&(p+="<p>"+t+"</p>");var d="padding:"+a+";"+(u?"font-size:"+u+";":"");return p+="<table>",e.forEach((function(t){var e;p+="<tr style='text-align:left;'>",p+="<td style='"+d+"'>"+t.label+"</td>",p+="<td style='"+d+"'>"+(null==(e=t.value)||"number"==typeof e&&isNaN(e)?r.unavailableData:e)+"</td>",p+="</tr>"})),p+="</table>"}};return u}));