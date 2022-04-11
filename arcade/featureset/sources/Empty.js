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

var __extends=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();define(["require","exports","../support/FeatureSet","../support/IdSet","../support/shared","../../polyfill/promiseUtils"],(function(t,e,r,n,o,u){"use strict";return function(t){function e(e){var r=t.call(this,e)||this;return r.declaredClass="esri.layers.featureset.sources.Empty",r._maxProcessing=1e3,r._wset=new n([],[],!1,null),r._parent=e.parentfeatureset,r._databaseType=o.FeatureServiceDatabaseType.Standardised,r}return __extends(e,t),e.prototype._getSet=function(t){return u.resolve(this._wset)},e.prototype.optimisePagingFeatureQueries=function(t){},e.prototype._isInFeatureSet=function(t){return o.IdState.NotInFeatureSet},e.prototype._getFeature=function(t,e){return u.reject(new Error("No Feature Found in EmptySet"))},e.prototype._getFeatures=function(t,e,r,n){return u.resolve("success")},e.prototype._featureFromCache=function(t){return null},e.prototype._fetchAndRefineFeatures=function(t,e,r){return u.reject(new Error("Fetch and Refine should not be called in this featureset"))},e.prototype._getFilteredSet=function(t,e,r,o,s){return u.resolve(new n([],[],!1,null))},e.prototype._stat=function(t,e,r,n,o,u,s){return this._manualStat(t,e,u,s)},e.prototype._canDoAggregates=function(t,e,r,n,o){return u.resolve(!1)},e.prototype.canBeBigDataFeatureSet=function(){return!1},e.prototype.shouldBeResolvedAsBigData=function(){return!1},e}(r)}));