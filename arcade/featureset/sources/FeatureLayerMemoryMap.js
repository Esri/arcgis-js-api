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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","../../polyfill/tsSupport/awaiter","../../polyfill/tsSupport/generator","../../polyfill/tsSupport/assign","../../polyfill/tsSupport/extends","../../../graphic","../support/FeatureSet","../support/IdSet","../support/shared","../../../geometry/geometryEngineAsync"],(function(e,t,r,n,i,s,o,a,u,l,c){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;if(r.declaredClass="esri.layers.featureset.sources.FeatureLayerMemory",r._removeGeometry=!1,r._overrideFields=null,r.allf=null,t.spatialReference&&(r.spatialReference=t.spatialReference),r._transparent=!0,r._maxProcessing=1e3,r._layer=t.layer,r._wset=null,!1===r._layer.loaded)throw new Error("Can only create Feature FeatureSets from Loaded FeatureLayers. Use FeatureLayer or FeatureCollection classes");return void 0!==t.outFields&&(r._overrideFields=t.outFields),void 0!==t.includeGeometry&&(r._removeGeometry=!1===t.includeGeometry),r}return s(t,e),t.prototype._maxQueryRate=function(){return l.defaultMaxRecords},t.prototype.end=function(){return this._layer},t.prototype.optimisePagingFeatureQueries=function(e){},t.prototype.loadImpl=function(){return r(this,void 0,void 0,(function(){return n(this,(function(e){return this._initialiseFeatureSet(),[2,this]}))}))},t.prototype._initialiseFeatureSet=function(){if(!this._layer.getMap())throw new Error("Can only use featuresets with layers attached to map");null==this.spatialReference&&(this.spatialReference=this._layer.getMap().spatialReference),this.geometryType=this._layer.geometryType,this.fields=this._layer.fields.slice(0);var e=this._layer.getOutFields();if(1===e.length&&"*"===e[0]);else{for(var t=[],r=0,n=this.fields;r<n.length;r++){if("esriFieldTypeOID"===(c=n[r]).type)t.push(c);else for(var i=0,s=e;i<s.length;i++){if(s[i].toLowerCase()===c.name.toLowerCase()){t.push(c);break}}}this.fields=t}if(null!==this._overrideFields)if(1===this._overrideFields.length&&"*"===this._overrideFields[0])this._overrideFields=null;else{t=[];for(var o=[],a=0,u=this.fields;a<u.length;a++){var c;if("esriFieldTypeOID"===(c=u[a]).type)t.push(c),o.push(c.name);else for(var h=0,p=this._overrideFields;h<p.length;h++){if(p[h].toLowerCase()===c.name.toLowerCase()){t.push(c),o.push(c.name);break}}}this.fields=t,this._overrideFields=o}this.objectIdField=this._layer.objectIdField,this.globalIdField=this._layer.globalIdField,this._databaseType=l.FeatureServiceDatabaseType.Standardised,this.typeIdField=this._layer.typeIdField,this.types=this._layer.types},t.prototype._isInFeatureSet=function(e){return l.IdState.InFeatureSet},t.prototype._transformSetWithIdChanges=function(e){},t.prototype._candidateIdTransform=function(e){return e},t.prototype._getSet=function(e){return r(this,void 0,void 0,(function(){var t;return n(this,(function(r){switch(r.label){case 0:return null!==this._wset?[3,3]:[4,this._ensureLoaded()];case 1:return r.sent(),[4,this._getFilteredSet("",null,null,null,e)];case 2:return t=r.sent(),this._wset=t,[2,t];case 3:return[2,this._wset]}}))}))},t.prototype._getFilteredSet=function(e,t,i,s,o){return r(this,void 0,void 0,(function(){var r,s,a,l,c=this;return n(this,(function(n){switch(n.label){case 0:return[4,this._ensureLoaded()];case 1:return n.sent(),null===this._wset&&(r=[],this._allFeatures().forEach((function(e){void 0===e.geometry&&(e.geometry=null);var t=e.attributes[c._layer.objectIdField];r.push(t),c._featureCache[t]=e})),this._wset=new u([],r,!1,null)),s=this._wset._known.slice(0),this._checkCancelled(o),[4,this.fetchAndRefineFeaturesByWhere(s,i,o)];case 2:return a=n.sent(),this._checkCancelled(o),null===t?[3,4]:[4,this.fetchAndRefineFeaturesSpatially(a,t,e,o)];case 3:return l=n.sent(),[2,new u([],l,!1,null)];case 4:return[2,new u([],a,!1,null)]}}))}))},t.prototype.executeSpatialRelationTest=function(e,t,i,s){return r(this,void 0,void 0,(function(){var r,o;return n(this,(function(n){if(null===e.geometry)return[2,!1];switch(t){case"esriSpatialRelEnvelopeIntersects":return r=l.shapeExtent(i),o=l.shapeExtent(e.geometry),[2,c.intersects(r,o)];case"esriSpatialRelIntersects":return[2,c.intersects(i,e.geometry)];case"esriSpatialRelContains":return[2,c.contains(i,e.geometry)];case"esriSpatialRelOverlaps":return[2,c.overlaps(i,e.geometry)];case"esriSpatialRelWithin":return[2,c.within(i,e.geometry)];case"esriSpatialRelTouches":return[2,c.touches(i,e.geometry)];case"esriSpatialRelCrosses":return[2,c.crosses(i,e.geometry)];case"esriSpatialRelRelation":return[2,c.relate(i,e.geometry,s)]}return[2]}))}))},t.prototype.executeWhereTest=function(e,t){return t.testFeature(e)},t.prototype.fetchAndRefineFeaturesSpatially=function(e,t,i,s){return r(this,void 0,void 0,(function(){var r,s,o,a,u,l;return n(this,(function(n){switch(n.label){case 0:for(r=[],s=[],o="",i.indexOf("esriSpatialRelRelation")>=0&&(o=i.split(":")[1],i="esriSpatialRelRelation"),l=0;l<e.length;l++)a=this._featureFromCache(e[l]),s.push(this.executeSpatialRelationTest(a,i,t,o));return 0===s.length?[2,r]:[4,Promise.all(s)];case 1:for(u=n.sent(),l=0;l<e.length;l++)!0===u[l]&&r.push(e[l]);return[2,r]}}))}))},t.prototype.fetchAndRefineFeaturesByWhere=function(e,t,i){return r(this,void 0,void 0,(function(){var r,i,s;return n(this,(function(n){if(r=[],null===t)return[2,e];for(i=0;i<e.length;i++)s=this._featureFromCache(e[i]),this.executeWhereTest(s,t)&&r.push(e[i]);return[2,r]}))}))},t.prototype._getFeatures=function(e,t,i,s){return r(this,void 0,void 0,(function(){var r,s;return n(this,(function(n){for(r=[],-1!==t&&void 0===this._featureCache[t]&&r.push(t),s=e._lastFetchedIndex;s<e._known.length&&(e._lastFetchedIndex+=1,!(void 0===this._featureCache[e._known[s]]&&(e._known[s]!==t&&r.push(e._known[s]),r.length>i)));s++);if(0===r.length)return[2,"success"];throw new Error("Unaccounted for Features. Not in Feature Collection")}))}))},t.prototype._refineSetBlock=function(e,t,i){return r(this,void 0,void 0,(function(){return n(this,(function(t){return[2,e]}))}))},t.prototype._stat=function(e,t,i,s,o,a,u){return r(this,void 0,void 0,(function(){return n(this,(function(e){return[2,{calculated:!1}]}))}))},t.prototype._canDoAggregates=function(e,t,i,s,o){return r(this,void 0,void 0,(function(){return n(this,(function(e){return[2,!1]}))}))},t._cloneAttr=function(e){var t={};for(var r in e)t[r]=e[r];return t},t.prototype.cloneAttr=function(e){for(var t={},r=0,n=this.fields;r<n.length;r++){var i=n[r];t[i.name]=e[i.name]}return t},t.prototype.relationshipMetaData=function(){return[]},Object.defineProperty(t.prototype,"gdbVersion",{get:function(){return""},enumerable:!1,configurable:!0}),t.prototype.nativeCapabilities=function(){return{title:this._layer.name,source:this,canQueryRelated:!1,capabilities:{query:{maxRecordCount:1e3},queryRelated:{supportsOrderBy:!1,supportsPagination:!1}},databaseType:this._databaseType,requestStandardised:!1}},t.prototype._allFeatures=function(){var e=this;return null==this.allf&&(this.allf=[],this._layer.graphics.forEach((function(t){e.allf.push(new o(!0===e._removeGeometry?null:t.geometry,null,e.cloneAttr(t.attributes)))}))),this.allf},t.prototype.canBeBigDataFeatureSet=function(){return!1},t.prototype.shouldBeResolvedAsBigData=function(){return!1},t.prototype.queryAttachments=function(e,t,i,s){return r(this,void 0,void 0,(function(){return n(this,(function(e){return[2,[]]}))}))},t.prototype.getFeatureByObjectId=function(e,t){return r(this,void 0,void 0,(function(){var t,r=this;return n(this,(function(n){return t=null,this._layer.graphics.forEach((function(n){n.attributes[r.objectIdField]===e&&(t=n)})),[2,t]}))}))},t.prototype.getIdentityUser=function(){return r(this,void 0,void 0,(function(){return n(this,(function(e){return[2,""]}))}))},t.prototype.getOwningSystemUrl=function(){return r(this,void 0,void 0,(function(){return n(this,(function(e){return[2,""]}))}))},t}(a)}));