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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","esri/dijit/geoenrichment/promise/all","../../../tasks/geoenrichment/GeoenrichmentTask","../config","dojo/i18n!../../../nls/jsapi","./DeferredStore"],(function(e,t,r,n,o,i,s,u){return s=s.geoenrichment.dijit.VariableStore,e(null,{globalCountryID:"_",countries:null,variableFields:null,_currentCountryID:null,_getCountriesPromise:null,_resolveCountryIDPromise:null,constructor:function(){this.countries=new u({idProperty:"value",resolver:t.hitch(this,this._getCountries)}),this.countries.syncQuery=function(e,t){return e=e&&e.allowHierarchies?{}:function(e){return e.value.length<3},this.queryEngine(e,t)(this.data)},this.categories.resolver=this.dataCollections.resolver=t.hitch(this,this._resolveCountryID)},synchronize:function(e){return void 0===e?this._resolveCountryIDPromise:this._resolveCountryID({countryID:e})},getCurrentCountryID:function(){return this._currentCountryID},_getCountries:function(e){if(!this._getCountriesPromise){var n=this;this._getCountriesPromise=this._getGeoenrichmentTask().getAvailableCountries().then((function(e){var o=[{value:n.globalCountryID,label:s.global}];r.forEach(e,t.hitch(n,n._collectCountryValues,o)),n.countries.setData(o)}))}return this._getCountriesPromise},_collectCountryValues:function(e,t){e.push({value:t.id,label:t.name});var n=t.hierarchies;if(n&&!(n.length<2)){t.defaultDatasetID.toUpperCase();r.some(n,(function(e){return r.some(e.datasets,(function(e){return e.toUpperCase()==e}))&&(e.isDefault=!0),e.isDefault})),r.forEach(n,(function(r){e.push({value:t.id+"/"+r.ID,label:t.name+" ("+r.ID+")",countryID:t.id,countryName:t.name,hierarchyID:r.ID,isDefault:r.isDefault})}))}},_resolveCountryID:function(e){if("object"==typeof(e=e||{})){var t=e.countryID||this.globalCountryID;if(t!=this._currentCountryID){this._currentCountryID=t;var r=this;this._clearAllStores(),this._resolveCountryIDPromise=this._getDataCollections(t==this.globalCountryID?null:t).then((function(e){r._processDataCollections(e)})),this.favorites&&this.favorites.synchronize&&(this._resolveCountryIDPromise=n([this._resolveCountryIDPromise,this.favorites.synchronize(t)]))}return this._resolveCountryIDPromise}},_getDataCollections:function(e){return this._getGeoenrichmentTask().getDataCollections(e,null,this.variableFields||"*")},_getGeoenrichmentTask:function(){var e=new o(i.server+"?langCode="+this.langCode);return e.token=i.token,e}})}));