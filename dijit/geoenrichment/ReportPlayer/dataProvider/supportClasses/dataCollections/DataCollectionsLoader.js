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

define(["../GEUtil"],function(a){return{_cache:{},canLoad:function(){return a.canMakeRequests()},loadVariables:function(i){var e=i.countryID+";"+i.hierarchy+";"+i.outFields.join(";");if(!this._cache[e]){var t=i.outFields.slice();-1===t.indexOf("id")&&t.push("id"),this._cache[e]=a.getDataCollections(i.countryID,i.hierarchy,{f:"json",outFields:JSON.stringify(t),suppressNullValues:!0,AddDerivativeVariables:"all"}).then(function(a){var e={dataCollections:a,idToVariableCache:{},fullNameToVariableCache:{}};return a.forEach(function(a){a.data.forEach(function(t){function c(a){var e=0;return i.outFields.forEach(function(i){void 0!==a[i]&&e++}),e}var n=e.idToVariableCache[t.id];(!n||c(t)>c(n))&&(e.idToVariableCache[t.id]=t),e.fullNameToVariableCache[a.dataCollectionID+"."+t.id]=t})}),e})}return this._cache[e]}}});