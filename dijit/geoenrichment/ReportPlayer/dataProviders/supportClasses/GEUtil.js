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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/when","dojox/uuid/generateRandomUuid","esri/kernel","esri/request","esri/urlUtils","esri/dijit/geoenrichment/utils/requests/UniversalClient"],function(t,e,n,r,i,o,a,s,u){function c(){var t=o.id.credentials[0];return t&&t.token}function l(t,n){var r=s.urlToObject(t);return n&&(n=e.mixin(r.query||{},n),n.token||(n.token=c())),{url:r.path,taskParams:n}}function h(t,e){return d||(d=new p(t)),!e||d.initialized?d:d.initialize()}var p=t(null,{_geoenrichmentUrl:null,_geInfo:null,_capabilities:null,_supportedOperations:null,_tasksHash:{},constructor:function(t){this._geoenrichmentUrl=t},_initDfd:null,initialized:!1,initialize:function(){var t=this;return this._initDfd?this._initDfd.promise:(this._initDfd=new n,a({url:l(this._geoenrichmentUrl).url+"/Geoenrichment",content:{f:"json"},handleAs:"json"}).then(function(e){t._geInfo=e,t._capabilities={},t._supportedOperations={},e.capabilities&&e.capabilities.forEach(function(e){t._capabilities[e.toLowerCase()]=!0}),e.supportedOperations&&e.supportedOperations.forEach(function(e){t._supportedOperations[e.toLowerCase()]=!0}),t.initialized=!0,t._initDfd.resolve()}),this._initDfd.promise)},hasCapability:function(t){return this._capabilities[t.toLowerCase()]},supportsOperation:function(t){return this._supportedOperations[t.toLowerCase()]},enrich:function(t){var e=l(this._geoenrichmentUrl,t);return e.taskParams.AddDerivativeVariables="all",a({url:e.url+"/Geoenrichment/Enrich",content:e.taskParams,handleAs:"json"}).then(function(t){return t.results[0].value.FeatureSet||[]})},_contriesCache:null,getCountry:function(t){if(this._contriesCache=this._contriesCache||{},!this._contriesCache[t]){var e=l(this._geoenrichmentUrl,{f:"json"});this._contriesCache[t]=a({url:e.url+"/Geoenrichment/Countries/"+t,content:e.taskParams,handleAs:"json"}).then(function(t){return t.countries[0]})}return this._contriesCache[t]},formatReport:function(t){var e=l(this._geoenrichmentUrl,t);return new u({allowSSL:!0}).send(e.url+"/Geoenrichment/FormatReport",{handleAs:"bin",content:e.taskParams}).then(function(t){return t&&t.data&&"text/plain"===t.data.type?null:t})},createReport:function(t){var n=l(this._geoenrichmentUrl,t),r=i();return this._tasksHash[r]={taskName:"createReport",taskParams:e.clone(t)},new u({allowSSL:!0}).send(n.url+"/Geoenrichment/createReport",{handleAs:"text",content:n.taskParams}).then(function(t){return{taskID:r,result:t}})},consumeCredits:function(t){var n=this._tasksHash[t];if(n)return n=e.clone(n),delete n.taskParams.forStorage,this[n.taskName](n.taskParams)}}),f={};f.GEClient=p;var d;return f.enrich=function(t,e){return h(t).enrich(e)},f.formatReport=function(t,e){return h(t).formatReport(e)},f.createReport=function(t,e){return h(t).createReport(e)},f.consumeCredits=function(t,e){return h(t).consumeCredits(e)},f.hasCapability=function(t,e){return r(h(t,!0),function(){return d.hasCapability(e)})},f.supportsOperation=function(t,e){return r(h(t,!0),function(){return d.supportsOperation(e)})},f.getCountry=function(t,e){return h(t).getCountry(e)},f});