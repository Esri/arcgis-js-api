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

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/when","dojo/promise/all","dojox/uuid/generateRandomUuid","esri/kernel","esri/request","esri/urlUtils","esri/dijit/geoenrichment/utils/requests/UniversalClient","./stdGeographies/StdGeographiesModel"],function(e,t,n,r,i,o,a,s,u,c,l){function h(){var e=a.id.credentials[0];return e&&e.token}function d(e,n){var r=u.urlToObject(e);return n&&(n=t.mixin(r.query||{},n),n.token||(n.token=h())),{url:r.path,taskParams:n}}function f(e,t){return m||(m=new p(e)),!t||m.initialized?m:m.initialize()}var p=e(null,{_geoenrichmentUrl:null,_geInfo:null,_capabilities:null,_supportedOperations:null,_tasksHash:{},constructor:function(e){this._geoenrichmentUrl=e},_initDfd:null,initialized:!1,initialize:function(){var e=this;return this._initDfd?this._initDfd.promise:(this._initDfd=new n,s({url:d(this._geoenrichmentUrl).url+"/Geoenrichment",content:{f:"json"},handleAs:"json"}).then(function(t){e._geInfo=t,e._capabilities={},e._supportedOperations={},t.capabilities&&t.capabilities.forEach(function(t){e._capabilities[t.toLowerCase()]=!0}),t.supportedOperations&&t.supportedOperations.forEach(function(t){e._supportedOperations[t.toLowerCase()]=!0}),e.initialized=!0,e._initDfd.resolve()}),this._initDfd.promise)},hasCapability:function(e){return this._capabilities[e.toLowerCase()]},supportsOperation:function(e){return this._supportedOperations[e.toLowerCase()]},enrich:function(e){var t=d(this._geoenrichmentUrl,e);return t.taskParams.AddDerivativeVariables="all",s({url:t.url+"/Geoenrichment/Enrich",content:t.taskParams,handleAs:"json"}).then(function(e){return e.results[0].value.FeatureSet||[]})},_contriesCache:null,getCountryInfo:function(e){var t=this;if(this._contriesCache=this._contriesCache||{},!this._contriesCache[e]){var n=d(this._geoenrichmentUrl,{f:"json"});this._contriesCache[e]=s({url:n.url+"/Geoenrichment/Countries/"+e,content:n.taskParams,handleAs:"json"}).then(function(n){var o=n.countries[0],a={};return i(o.hierarchies.map(function(n){return r(t.getStdGeographyModel(e,n.ID),function(e){a[n.ID]=e})})).then(function(){return{country:o,geographiesModels:a}})})}return this._contriesCache[e]},_stdModelCache:null,getStdGeographyModel:function(e,t){t=t||"census",this._stdModelCache=this._stdModelCache||{};var n=e+t;if(!this._stdModelCache[n]){var r=d(this._geoenrichmentUrl,{f:"json"});this._stdModelCache[n]=s({url:r.url+"/Geoenrichment/StandardGeographyLevels/"+e+"/"+t,content:r.taskParams,handleAs:"json"}).then(function(n){return new l(e,t,n)})}return this._stdModelCache[n]},formatReport:function(e){var t=d(this._geoenrichmentUrl,e);return new c({allowSSL:!0}).send(t.url+"/Geoenrichment/FormatReport",{handleAs:"bin",content:t.taskParams}).then(function(e){return e&&e.data&&"text/plain"===e.data.type?null:e})},createReport:function(e){var n=d(this._geoenrichmentUrl,e),r=o();return this._tasksHash[r]={taskName:"createReport",taskParams:t.clone(e)},new c({allowSSL:!0}).send(n.url+"/Geoenrichment/createReport",{handleAs:"text",content:n.taskParams}).then(function(e){return{taskID:r,result:e}})},consumeCredits:function(e){var n=this._tasksHash[e];if(n)return n=t.clone(n),delete n.taskParams.forStorage,this[n.taskName](n.taskParams)}}),_={};_.GEClient=p;var m;return _.getClient=function(){return m},_.initialize=function(e){return f(e,!0)},_.enrich=function(e,t){return f(e).enrich(t)},_.formatReport=function(e,t){return f(e).formatReport(t)},_.createReport=function(e,t){return f(e).createReport(t)},_.consumeCredits=function(e,t){return f(e).consumeCredits(t)},_.hasCapability=function(e,t){return r(f(e,!0),function(){return m&&m.hasCapability(t)})},_.supportsOperation=function(e,t){return r(f(e,!0),function(){return m&&m.supportsOperation(t)})},_.getCountryInfo=function(e,t){return f(e).getCountryInfo(t)},_.getStdGeographyModel=function(e,t,n){return f(e).getStdGeographyModel(t,n)},_});