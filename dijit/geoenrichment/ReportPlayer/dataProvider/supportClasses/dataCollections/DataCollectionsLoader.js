// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/promise/all","../GEUtil","../ReportTemplateData","esri/dijit/geoenrichment/utils/CacheUtil","esri/dijit/geoenrichment/utils/JsonXmlConverter","esri/dijit/geoenrichment/utils/UrlUtil"],(function(e,a,i,r,t,o){return{canLoad:function(){return a.canMakeRequests()},loadVariables:function(e){var i=r.get("DataCollectionsLoader"),t="*"===e.outFields,o=t?["*"]:e.outFields,n=e.countryID+";"+e.hierarchy+";"+o.join(";")+";"+!!e.forceLowerCase;return i[n]||(t||-1===(o=o.slice()).indexOf("id")&&o.push("id"),i[n]=a.getDataCollections(e.countryID,e.hierarchy,{f:"json",outFields:t?"*":JSON.stringify(o),suppressNullValues:!0,AddDerivativeVariables:"all"}).then((function(a){var i={dataCollections:a,idToVariableCache:{},fullNameToVariableCache:{}};return a.forEach((function(a){a.data.forEach((function(r){function n(a){return e.forceLowerCase?a.toLowerCase():a}function l(e){if(t)return Object.keys(e).length;var a=0;return o.forEach((function(i){void 0!==e[i]&&a++})),a}var c=i.idToVariableCache[n(r.id)];(!c||l(r)>l(c))&&(i.idToVariableCache[n(r.id)]=r),i.fullNameToVariableCache[n(a.dataCollectionID+"."+r.id)]=r}))})),i}))),i[n]},loadCustomDataVariables:function(a,r){r=r||{};var n={idToVariableCache:{},fullNameToVariableCache:{}};return e(a.map((function(e){var a=o.combineMulti([e.url||r.portalUrl,"sharing/rest/content/items",e.itemid,"resources/metadata.xml"]);return i.loadResource(a,e.token||o.getToken(r.portalUrl)).then((function(a){var i=t.parseXml(a.data),o=[],l=t.queryJson(i,"Fields")[0];l&&(o=o.concat(t.queryJson(l,"Field")));var c=t.queryJson(i,"CalculatedFields")[0];c&&(o=o.concat(t.queryJson(c,"Script"))),o.forEach((function(a){function i(e){return r.forceLowerCase?e.toLowerCase():e}var t=a.attributes,o={id:t.Name,fullName:e.itemid+"."+t.Name,alias:t.Alias,description:t.Alias,type:"esriFieldType"+t.Type,precision:t.Precision?Number(t.Precision):void 0,vintage:t.Vintage};n.idToVariableCache[i(o.id)]=o,n.fullNameToVariableCache[i(o.fullName)]=o}))}))}))).then((function(){return n}))}}}));