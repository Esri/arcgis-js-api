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

define(["../GEUtil"],function(a){return{_cache:{},canLoad:function(){return a.canMakeRequests()},loadVariables:function(e){var i=e.countryID+";"+e.hierarchy+";"+e.outFields.join(";")+";"+!!e.forceLowerCase;if(!this._cache[i]){var r=e.outFields.slice();-1===r.indexOf("id")&&r.push("id"),this._cache[i]=a.getDataCollections(e.countryID,e.hierarchy,{f:"json",outFields:JSON.stringify(r),suppressNullValues:!0,AddDerivativeVariables:"all"}).then(function(a){var i={dataCollections:a,idToVariableCache:{},fullNameToVariableCache:{}};return a.forEach(function(a){a.data.forEach(function(r){function o(a){return e.forceLowerCase?a.toLowerCase():a}function t(a){var i=0;return e.outFields.forEach(function(e){void 0!==a[e]&&i++}),i}var c=i.idToVariableCache[o(r.id)];(!c||t(r)>t(c))&&(i.idToVariableCache[o(r.id)]=r),i.fullNameToVariableCache[o(a.dataCollectionID+"."+r.id)]=r})}),i})}return this._cache[i]}}});