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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","dojo/Deferred","../support/FeatureSet","../support/IdSet","../support/shared"],function(e,t,r,n,o,u,a){return function(e){function t(t){var r=e.call(this,t)||this;return r.declaredClass="esri.layers.featureset.sources.Empty",r._maxProcessing=1e3,r._wset=new u([],[],!1,null),r._parent=t.parentfeatureset,r._databaseType=a.FeatureServiceDatabaseType.Standardised,r}return r(t,e),t.prototype._getSet=function(e){var t=new n;return t.resolve(this._wset),t.promise},t.prototype.optimisePagingFeatureQueries=function(e){},t.prototype._isInFeatureSet=function(e){return a.IdState.NotInFeatureSet},t.prototype._getFeature=function(e,t){var r=new n;return r.reject(new Error("No Feature Found in EmptySet")),r.promise},t.prototype._getFeatures=function(e,t,r,o){var u=new n;return u.resolve("success"),u.promise},t.prototype._featureFromCache=function(e){return null},t.prototype._fetchAndRefineFeatures=function(e,t,r){var o=new n;return o.reject(new Error("Fetch and Refine should not be called in this featureset")),o.promise},t.prototype._getFilteredSet=function(e,t,r,o,a){var s=new n,p=new u([],[],!1,null);return s.resolve(p),s.promise},t.prototype._stat=function(e,t,r,o,u,s,p){var i=new n;return this._manualStat(e,t,s,p).then(a.callback(function(e){i.resolve(e)},i),a.errback(i)),i.promise},t.prototype._canDoAggregates=function(e,t,r,o,u){var a=new n;return a.resolve(!1),a.promise},t.prototype.canBeBigDataFeatureSet=function(){return!1},t.prototype.shouldBeResolvedAsBigData=function(){return!1},t}(o)});