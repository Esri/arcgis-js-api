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

define(["require","exports","../../polyfill/tsSupport/awaiter","../../polyfill/tsSupport/generator","../../polyfill/tsSupport/extends","../support/FeatureSet","../support/IdSet","../support/shared"],(function(t,e,r,n,o,u,i,s){"use strict";return function(t){function e(e){var r=t.call(this,e)||this;return r.declaredClass="esri.layers.featureset.sources.Empty",r._maxProcessing=1e3,r._wset=new i([],[],!1,null),r._parent=e.parentfeatureset,r._databaseType=s.FeatureServiceDatabaseType.Standardised,r}return o(e,t),e.prototype._getSet=function(){return r(this,void 0,void 0,(function(){return n(this,(function(t){return[2,this._wset]}))}))},e.prototype.optimisePagingFeatureQueries=function(t){},e.prototype._isInFeatureSet=function(t){return s.IdState.NotInFeatureSet},e.prototype._getFeature=function(){return r(this,void 0,void 0,(function(){return n(this,(function(t){throw new Error("No Feature Found in EmptySet")}))}))},e.prototype._getFeatures=function(){return r(this,void 0,void 0,(function(){return n(this,(function(t){return[2,"success"]}))}))},e.prototype._featureFromCache=function(t){return null},e.prototype.queryAttachments=function(t,e,o,u,i){return r(this,void 0,void 0,(function(){return n(this,(function(t){return[2,[]]}))}))},e.prototype._fetchAndRefineFeatures=function(){return r(this,void 0,void 0,(function(){return n(this,(function(t){throw new Error("Fetch and Refine should not be called in this featureset")}))}))},e.prototype._getFilteredSet=function(){return r(this,void 0,void 0,(function(){return n(this,(function(t){return[2,new i([],[],!1,null)]}))}))},e.prototype._stat=function(t,e,r,n,o,u,i){return this._manualStat(t,e,u,i)},e.prototype._canDoAggregates=function(){return r(this,void 0,void 0,(function(){return n(this,(function(t){return[2,!1]}))}))},e.prototype.canBeBigDataFeatureSet=function(){return!1},e.prototype.shouldBeResolvedAsBigData=function(){return!1},e}(u)}));