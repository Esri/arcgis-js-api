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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","dojox/uuid/generateRandomUuid","esri/kernel","esri/request","esri/urlUtils","esri/dijit/geoenrichment/utils/CacheUtil","esri/dijit/geoenrichment/utils/requests/FileContent","esri/dijit/geoenrichment/utils/requests/UniversalClient","esri/dijit/geoenrichment/utils/UrlUtil","./stdGeographies/StdGeographiesModel"],(function(t,e,n,r,i,o,s,a,u,l,c,h,f,d){function p(t){if(y)return y;var e=t&&s.id.findCredential(t)||s.id.credentials[0];return e&&e.token}function g(t,n){var r=u.urlToObject(t);for(var i in n=e.mixin({f:"json",token:p(t),langCode:dojo.locale},r.query||{},n)){var o=n[i];o instanceof c||o&&"object"==typeof o&&(n[i]=JSON.stringify("function"==typeof o.toJson?o.toJson():o))}return{url:r.path,taskParams:n}}var m,y,v,C=t(null,{url:null,_geInfo:null,_capabilities:null,_supportedOperations:null,constructor:function(t){this._capabilities={},this._supportedOperations={},this.url=t},_initDfd:null,initialized:!1,initialize:function(){var t=this;return this._initDfd?this._initDfd.promise:(this._initDfd=new n,h.requestPublicFirst(g(this.url).url+"/Geoenrichment",{content:{f:"json"},handleAs:"json"},{retryOnAnyError:!0}).then((function(e){t.initWithJson(e)})),this._initDfd.promise)},initWithJson:function(t){this._geInfo=t,this._capabilities={},this._supportedOperations={},t.capabilities&&t.capabilities.forEach((function(t){this._capabilities[t.toLowerCase()]=!0}),this),t.supportedOperations&&t.supportedOperations.forEach((function(t){this._supportedOperations[t.toLowerCase()]=!0}),this),this._initDfd=this._initDfd||new n,this._initDfd.resolve(),this.initialized=!0},hasCapability:function(t){return!!this._capabilities[t.toLowerCase()]},addCapability:function(t){this._capabilities[t.toLowerCase()]=!0},supportsOperation:function(t){return!!this._supportedOperations[t.toLowerCase()]},enrich:function(t){var e=g(this.url,t);return e.taskParams.AddDerivativeVariables="all",a({url:e.url+"/Geoenrichment/Enrich",content:e.taskParams,handleAs:"json"}).then((function(t){return t.results[0].value.FeatureSet||[]}))},stdGeographyQuery:function(t){var e=g(this.url,t);return a({url:e.url+"/StandardGeographyQuery/execute",content:e.taskParams,handleAs:"json"}).then((function(t){return t.results[0].value.features||[]}))},getDataCollections:function(t,e,n){var r=g(this.url,n);return a({url:r.url+"/Geoenrichment/DataCollections/"+t+(e?"/"+e:""),content:r.taskParams,handleAs:"json"}).then((function(t){return t.DataCollections}))},getCountries:function(){var t=g(this.url);return a({url:t.url+"/Geoenrichment/Countries",content:t.taskParams,handleAs:"json"}).then((function(t){return t.countries}))},getCountryInfo:function(t){var e=this,n=l.get("GEUtil.countries");if(!n[t]){var o=g(this.url);n[t]=a({url:o.url+"/Geoenrichment/Countries/"+t,content:o.taskParams,handleAs:"json"}).then((function(n){var o=n.countries[0],s={};return i(o.hierarchies.map((function(n){return r(e._getStdGeographyModel(t,n.ID),(function(t){s[n.ID]=t}))}))).then((function(){return{country:o,geographiesModels:s}}))}))}return n[t]},_getStdGeographyModel:function(t,e){var n=l.get("GEUtil.stdModels"),r=t+e;if(!n[r]){var i=g(this.url);n[r]=a({url:i.url+"/Geoenrichment/StandardGeographyLevels/"+t+"/"+e,content:i.taskParams,handleAs:"json"}).then((function(n){return new d({countryID:t,hierarchyID:e,levels:n.geographyLevels[0].hierarchies[0].levels})}))}return n[r]},formatReport:function(t){var e=g(this.url,t);return h.request({url:e.url,urlSuffix:"Geoenrichment/FormatReport"},{handleAs:"bin",content:e.taskParams}).then((function(t){return t&&t.data&&"text/plain"===t.data.type?null:t}))},getReports:function(t){var e=g(this.url);return a({url:e.url+"/Geoenrichment/reports/"+t,content:e.taskParams,handleAs:"json"}).then((function(t){return t.reports}))},createReport:function(t){var n=g(this.url,t),r=o();return!1===t.forStorage&&(l.get("GEUtil.tasks")[r]={taskName:"createReport",taskParams:e.clone(t)}),h.request({url:n.url,urlSuffix:"Geoenrichment/createReport"},{handleAs:"xml"===t.format?"text":"bin",content:n.taskParams}).then((function(t){return{taskID:r,result:t}}))},consumeCredits:function(t){var e=l.get("GEUtil.tasks")[t];if(e)return delete e.taskParams.forStorage,delete l.get("GEUtil.tasks")[t],this[e.taskName](e.taskParams)},getLayerInfos:function(t){var e=l.get("GEUtil.dataLayers");return e[t]||(e[t]=this._getLayerInfos(t)),e[t]},_getLayerInfos:function(t){var e=g(this.url);return a({url:e.url+"/Geoenrichment/DataLayers/"+t,content:e.taskParams,handleAs:"json"}).then((function(t){return t&&t.layers||[]})).otherwise((function(t){return console.log(t),[]}))},getLayerInfo:function(t,e){var n=l.get("GEUtil.dataLayers"),r=t+"_"+e;return n[r]||(n[r]=this._getLayerInfo(t,e)),n[r]},_getLayerInfo:function(t,e){var n=g(this.url);return a({url:n.url+"/Geoenrichment/DataLayers/"+t+"/"+e,content:n.taskParams,handleAs:"json"}).then((function(t){return t&&t.layer})).otherwise((function(t){return console.log(t),null}))}}),G={},_=new n;function k(t){return v||(v=new C(m)),!t||v.initialized?v:v.initialize()}return G.setGeoenrichmentUrl=function(t,e){(m=t||m)&&f.registerCORS(m),y=e||y,!_.promise.isFulfilled()&&_.resolve()},G.canMakeRequests=function(){return!!m},G.getInitPromise=function(){return _.promise},G.GEClient=C,G.getClient=function(){return k()},G.initialize=function(){return r(k(!0))},G.initWithJson=function(t,e){G.setGeoenrichmentUrl(t),k().initWithJson(e)},G.enrich=function(t){return k().enrich(t)},G.stdGeographyQuery=function(t){return k().stdGeographyQuery(t)},G.getDataCollections=function(t,e,n){return k().getDataCollections(t,e,n)},G.formatReport=function(t){return k().formatReport(t)},G.createReport=function(t){return k().createReport(t)},G.consumeCredits=function(t){return k().consumeCredits(t)},G.getLayerInfos=function(t){return k().getLayerInfos(t)},G.hasCapability=function(t){return r(k(!0),(function(){return v&&v.hasCapability(t)}))},G.addCapability=function(t){return k().addCapability(t)},G.supportsOperation=function(t){return r(k(!0),(function(){return v&&v.supportsOperation(t)}))},G.getCountryInfo=function(t){return k().getCountryInfo(t)},G}));