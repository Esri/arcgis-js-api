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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/promise/all","../GEUtil","../ReportTemplateData","esri/dijit/geoenrichment/utils/JsonXmlConverter","esri/dijit/geoenrichment/utils/UrlUtil"],function(e,a,i,r,t){return{_cache:{},canLoad:function(){return a.canMakeRequests()},loadVariables:function(e){var i="*"===e.outFields,r=i?["*"]:e.outFields,t=e.countryID+";"+e.hierarchy+";"+r.join(";")+";"+!!e.forceLowerCase;return this._cache[t]||(i||(r=r.slice(),-1===r.indexOf("id")&&r.push("id")),this._cache[t]=a.getDataCollections(e.countryID,e.hierarchy,{f:"json",outFields:i?"*":JSON.stringify(r),suppressNullValues:!0,AddDerivativeVariables:"all"}).then(function(a){var t={dataCollections:a,idToVariableCache:{},fullNameToVariableCache:{}};return a.forEach(function(a){a.data.forEach(function(n){function o(a){return e.forceLowerCase?a.toLowerCase():a}function l(e){if(i)return Object.keys(e).length;var a=0;return r.forEach(function(i){void 0!==e[i]&&a++}),a}var c=t.idToVariableCache[o(n.id)];(!c||l(n)>l(c))&&(t.idToVariableCache[o(n.id)]=n),t.fullNameToVariableCache[o(a.dataCollectionID+"."+n.id)]=n})}),t})),this._cache[t]},loadCustomDataVariables:function(a,n){n=n||{};var o={idToVariableCache:{},fullNameToVariableCache:{}};return e(a.map(function(e){var a=t.combineMulti([e.url||n.portalUrl,"sharing/rest/content/items",e.itemid,"resources/metadata.xml"]);return i.loadResource(a,e.token||t.getToken(n.portalUrl)).then(function(a){var i=r.parseXml(a.data);r.queryJson(i,"Field").forEach(function(a){function i(e){return n.forceLowerCase?e.toLowerCase():e}var r=a.attributes,t={id:r.Name,fullName:e.itemid+"."+r.Name,alias:r.Alias,description:r.Alias,type:"esriFieldType"+r.Type,precision:r.Precision?Number(r.Precision):void 0,vintage:r.Vintage};o.idToVariableCache[i(t.id)]=t,o.fullNameToVariableCache[i(t.fullName)]=t})})})).then(function(){return o})}}});