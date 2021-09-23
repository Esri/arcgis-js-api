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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();define(["require","exports","../../../graphic","../support/FeatureSet","../support/IdSet","../support/shared","../../polyfill/promiseUtils","../../../tasks/RelationshipQuery"],(function(e,t,r,i,n,a,s,o){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.declaredClass="esri.arcade.featureset.sources.FeatureLayerRelated",r._findObjectId=-1,r._requestStandardised=!1,r._removeGeometry=!1,r._overrideFields=null,r.featureObjectId=null,r.relatedLayer=null,r.relationship=null,t.spatialReference&&(r.spatialReference=t.spatialReference),r._transparent=!0,r._maxProcessing=1e3,r._layer=t.layer,r._wset=null,r._findObjectId=t.objectId,r.featureObjectId=t.objectId,r.relationship=t.relationship,r.relatedLayer=t.relatedLayer,void 0!==t.outFields&&(r._overrideFields=t.outFields),void 0!==t.includeGeometry&&(r._removeGeometry=!1===t.includeGeometry),r}return __extends(t,e),t.prototype._maxQueryRate=function(){return a.defaultMaxRecords},t.prototype.end=function(){return this._layer},t.prototype.optimisePagingFeatureQueries=function(e){},t.prototype.load=function(){var e=this;return null===this._loadPromise&&(this._loadPromise=s.create((function(t,r){s.all([e._layer.load(),e.relatedLayer.load()]).then((function(){e._initialiseFeatureSet(),t(e)}),r)}))),this._loadPromise},t.prototype.nativeCapabilities=function(){return this.relatedLayer.nativeCapabilities()},Object.defineProperty(t.prototype,"gdbVersion",{get:function(){return this.relatedLayer.gdbVersion},enumerable:!1,configurable:!0}),t.prototype._initialiseFeatureSet=function(){if(null==this.spatialReference&&(this.spatialReference=this._layer.spatialReference),this.geometryType=this.relatedLayer.geometryType,this.fields=this.relatedLayer.fields.slice(0),null!==this._overrideFields)if(1===this._overrideFields.length&&"*"===this._overrideFields[0])this._overrideFields=null;else{for(var e=[],t=[],r=0,i=this.fields;r<i.length;r++){var n=i[r];if("oid"===n.type)e.push(n),t.push(n.name);else for(var a=0,s=this._overrideFields;a<s.length;a++){if(s[a].toLowerCase()===n.name.toLowerCase()){e.push(n),t.push(n.name);break}}}this.fields=e,this._overrideFields=t}var o=this._layer.nativeCapabilities();o&&(this._databaseType=o.databaseType,this._requestStandardised=o.requestStandardised),this.objectIdField=this.relatedLayer.objectIdField,this.hasM=this.relatedLayer.supportsM,this.hasZ=this.relatedLayer.supportsZ,this.typeIdField=this.relatedLayer.typeIdField,this.types=this.relatedLayer.types},t.prototype.databaseType=function(){var e=this;return this.relatedLayer.databaseType().then((function(){return e._databaseType=e.relatedLayer._databaseType,e._databaseType}))},t.prototype.isTable=function(){return this.relatedLayer.isTable()},t.prototype._isInFeatureSet=function(e){return a.IdState.InFeatureSet},t.prototype._transformSetWithIdChanges=function(e){},t.prototype._candidateIdTransform=function(e){return e},t.prototype._getSet=function(e){var t=this;return null===this._wset?this._ensureLoaded().then((function(){return t._getFilteredSet("",null,null,null,e)})).then((function(e){return t._wset=e,e})):s.resolve(this._wset)},t.prototype._changeFeature=function(e){for(var t={},i=0,n=this.fields;i<n.length;i++){var a=n[i];t[a.name]=e.attributes[a.name]}return new r({geometry:!0===this._removeGeometry?null:e.geometry,attributes:t})},t.prototype._getFilteredSet=function(e,t,r,i,a){var s=this;return this.databaseType().then((function(l){if(s.isTable()&&t&&null!==e&&""!==e)return new n([],[],!0,null);var u=s._layer.nativeCapabilities();if(!1===u.canQueryRelated)return new n([],[],!0,null);if(u.capabilities.queryRelated&&u.capabilities.queryRelated.supportsPagination)return s._getFilteredSetUsingPaging(e,t,r,i,a);var d="",p=!1;null!==i&&u.capabilities&&u.capabilities.queryRelated&&!0===u.capabilities.queryRelated.supportsOrderBy&&(d=i.constructClause(),p=!0);var c=new o;c.objectIds=[s._findObjectId];var y=null!==s._overrideFields?s._overrideFields:s._fieldsIncludingObjectId(s.relatedLayer.fields?s.relatedLayer.fields.map((function(e){return e.name})):["*"]);c.outFields=y,c.relationshipId=s.relationship.id,c.definitionExpression="1=1";var f=!0;return!0===s._removeGeometry&&(f=!1),c.returnGeometry=f,s._requestStandardised&&(c.sqlFormat="standard"),c.outSpatialReference=s.spatialReference,c.orderByFields=""!==d?d.split(","):null,u.source.queryRelatedFeatures(c).then((function(i){s._checkCancelled(a);for(var o=i[s._findObjectId]?i[s._findObjectId].features:[],l=[],u=0;u<o.length;u++)s._featureCache[o[u].attributes[s._layer.objectIdField]]=o[u],l.push(o[u].attributes[s._layer.objectIdField]);var d=t&&null!==e&&""!==e,c=null!=r;return new n(d||c?l:[],d||c?[]:l,p,null)}))}))},t.prototype._fieldsIncludingObjectId=function(e){if(null===e)return[this.objectIdField];var t=e.slice(0);if(t.indexOf("*")>-1)return t;for(var r=!1,i=0,n=t;i<n.length;i++){if(n[i].toUpperCase()===this.objectIdField.toUpperCase()){r=!0;break}}return!1===r&&t.push(this.objectIdField),t},t.prototype._getFilteredSetUsingPaging=function(e,t,r,i,a){var o=this;try{var l="",u=!1,d=this._layer.nativeCapabilities();return null!==i&&d&&d.capabilities.queryRelated&&!0===d.capabilities.queryRelated.supportsOrderBy&&(l=i.constructClause(),u=!0),this.databaseType().then((function(i){var s=o._maxQueryRate(),p=d.capabilities.query.maxRecordCount;void 0!==p&&p<s&&(s=p);var c,y=t&&null!==e&&""!==e,f=null!=r,h=!0;!0===o._removeGeometry&&(h=!1);var _=null!==o._overrideFields?o._overrideFields:o._fieldsIncludingObjectId(o.relatedLayer.fields?o.relatedLayer.fields.map((function(e){return e.name})):["*"]);return c=new n(y||f?["GETPAGES"]:[],y||f?[]:["GETPAGES"],u,{outFields:_.join(","),resultRecordCount:s,resultOffset:0,objectIds:[o._findObjectId],where:"1=1",orderByFields:l,returnGeometry:h,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,fullyResolved:!1}}),o._expandPagedSet(c,s,0,0,a).then((function(){return c}))}))}catch(e){return s.reject(e)}},t.prototype._expandPagedSet=function(e,t,r,i,n){return this._expandPagedSetFeatureSet(e,t,r,i,n)},t.prototype._clonePageDefinition=function(e){return null===e?null:!0!==e.groupbypage?{groupbypage:!1,outFields:e.outFields,resultRecordCount:e.resultRecordCount,resultOffset:e.resultOffset,where:e.where,objectIds:e.objectIds,orderByFields:e.orderByFields,returnGeometry:e.returnGeometry,returnIdsOnly:e.returnIdsOnly,internal:e.internal}:{groupbypage:!0,outFields:e.outFields,resultRecordCount:e.resultRecordCount,useOIDpagination:e.useOIDpagination,generatedOid:e.generatedOid,groupByFieldsForStatistics:e.groupByFieldsForStatistics,resultOffset:e.resultOffset,outStatistics:e.outStatistics,geometry:e.geometry,where:e.where,objectIds:e.objectIds,orderByFields:e.orderByFields,returnGeometry:e.returnGeometry,returnIdsOnly:e.returnIdsOnly,internal:e.internal}},t.prototype._getPhysicalPage=function(e,t,r){var i=this;try{var n=e.pagesDefinition.internal.lastRetrieved,a=n,l=this._layer.nativeCapabilities(),u=new o;return!0===this._requestStandardised&&(u.sqlFormat="standard"),u.relationshipId=this.relationship.id,u.objectIds=e.pagesDefinition.objectIds,u.resultOffset=e.pagesDefinition.internal.lastRetrieved,u.resultRecordCount=e.pagesDefinition.resultRecordCount,u.outFields=e.pagesDefinition.outFields.split(","),u.definitionExpression=e.pagesDefinition.where,u.orderByFields=""!==e.pagesDefinition.orderByFields?e.pagesDefinition.orderByFields.split(","):null,u.returnGeometry=e.pagesDefinition.returnGeometry,u.outSpatialReference=this.spatialReference,l.source.queryRelatedFeatures(u).then((function(t){if(i._checkCancelled(r),e.pagesDefinition.internal.lastRetrieved!==n)return 0;for(var s=t[i._findObjectId]?t[i._findObjectId].features:[],o=0;o<s.length;o++)e.pagesDefinition.internal.set[a+o]=s[o].attributes[i._layer.objectIdField];for(o=0;o<s.length;o++)i._featureCache[s[o].attributes[i._layer.objectIdField]]=s[o];var l=!t[i._findObjectId]||!1===t[i._findObjectId].exceededTransferLimit;return s.length!==e.pagesDefinition.resultRecordCount&&l&&(e.pagesDefinition.internal.fullyResolved=!0),e.pagesDefinition.internal.lastRetrieved=n+s.length,s.length}))}catch(e){return s.reject(e)}},t.prototype._getFeatures=function(e,t,r,i){var n=this,a=[];-1!==t&&void 0===this._featureCache[t]&&a.push(t);var o=this._maxQueryRate();if(!0===this._checkIfNeedToExpandKnownPage(e,o))return this._expandPagedSet(e,o,0,0,i).then((function(a){return n._getFeatures(e,t,r,i)}));for(var l=0,u=e._lastFetchedIndex;u<e._known.length&&(++l<=r&&(e._lastFetchedIndex+=1),!("GETPAGES"!==e._known[u]&&void 0===this._featureCache[e._known[u]]&&(e._known[u]!==t&&a.push(e._known[u]),a.length>r)))&&!(l>=r&&0===a.length);u++);return 0===a.length?s.resolve("success"):s.reject(new Error("Unaccounted for Features. Not in Feature Collection"))},t.prototype._refineSetBlock=function(e,t,r){return s.resolve(e)},t.prototype._stat=function(e,t,r,i,n,a,o){return s.resolve({calculated:!1})},t.prototype._canDoAggregates=function(e,t,r,i,n){return s.resolve(!1)},t.prototype.relationshipMetaData=function(){return this.relatedLayer.relationshipMetaData()},t.prototype.serviceUrl=function(){return this.relatedLayer.serviceUrl()},t.prototype.queryAttachments=function(e,t,r,i,n){return this.relatedLayer.queryAttachments(e,t,r,i,n)},t.prototype.getFeatureByObjectId=function(e,t){return this.relatedLayer.getFeatureByObjectId(e,t)},t.prototype.getIdentityUser=function(){return this.relatedLayer.getIdentityUser()},t.prototype.getOwningSystemUrl=function(){return this.relatedLayer.getOwningSystemUrl()},t.prototype.getDataSourceFeatureSet=function(){return this.relatedLayer},t}(i)}));