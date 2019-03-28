// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../support/FeatureSet","../support/IdSet","../support/shared","../../../core/promiseUtils"],function(e,t,r,n,o,u,s){return function(e){function t(t){var r=e.call(this,t)||this;return r.declaredClass="esri.layers.featureset.sources.Empty",r._maxProcessing=1e3,r._wset=new o([],[],!1,null),r._parent=t.parentfeatureset,r._databaseType=u.FeatureServiceDatabaseType.Standardised,r}return r(t,e),t.prototype._getSet=function(e){return s.resolve(this._wset)},t.prototype.optimisePagingFeatureQueries=function(e){},t.prototype._isInFeatureSet=function(e){return u.IdState.NotInFeatureSet},t.prototype._getFeature=function(e,t){return s.reject(new Error("No Feature Found in EmptySet"))},t.prototype.queryAttachments=function(e,t,r,n){return s.resolve([])},t.prototype._getFeatures=function(e,t,r,n){return s.resolve("success")},t.prototype._featureFromCache=function(e){return null},t.prototype._fetchAndRefineFeatures=function(e,t,r){return s.reject(new Error("Fetch and Refine should not be called in this featureset"))},t.prototype._getFilteredSet=function(e,t,r,n,u){return s.resolve(new o([],[],!1,null))},t.prototype._stat=function(e,t,r,n,o,u,s){return this._manualStat(e,t,u,s)},t.prototype._canDoAggregates=function(e,t,r,n,o){return s.resolve(!1)},t.prototype.canBeBigDataFeatureSet=function(){return!1},t.prototype.shouldBeResolvedAsBigData=function(){return!1},t}(n)});