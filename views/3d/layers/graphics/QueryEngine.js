/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../geometry","../../../../core/Accessor","../../../../core/maybe","../../../../core/accessorSupport/decorators/property","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/Logger","../../../../core/accessorSupport/decorators/subclass","../../../../geometry/Extent","../../../../layers/graphics/data/QueryEngine","../../../../rest/support/FeatureSet","../../../../rest/support/Query","../../../../geometry/support/typeUtils"],(function(e,r,t,n,u,a,o,i,s,y,c,l,p,h,f,d){"use strict";const Q=p.default;e.QueryEngine=function(e){function t(r){var t;return(t=e.call(this,r)||this)._dataQueryEngineInstance=null,t}r._inheritsLoose(t,e);var n=t.prototype;return n.destroy=function(){this.clear()},n.clear=function(){return!!this._dataQueryEngineInstance&&(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null,!0)},n.executeQueryForIdSet=function(){var e=r._asyncToGenerator((function*(e,r){return this.dataQueryEngine.executeQueryForIdSet(this._ensureQueryJSON(e),r)}));function t(r,t){return e.apply(this,arguments)}return t}(),n.executeQueryForCount=function(){var e=r._asyncToGenerator((function*(e,r){return this.dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),r)}));function t(r,t){return e.apply(this,arguments)}return t}(),n.executeQueryForExtent=function(){var e=r._asyncToGenerator((function*(e,r){const{count:t,extent:n}=yield this.dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),r);return{count:t,extent:l.fromJSON(n)}}));function t(r,t){return e.apply(this,arguments)}return t}(),n.executeQueryForIds=function(){var e=r._asyncToGenerator((function*(e,r){return this.dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),r)}));function t(r,t){return e.apply(this,arguments)}return t}(),n.executeQueryForLatestObservations=function(){var e=r._asyncToGenerator((function*(e,r){const t=yield this.dataQueryEngine.executeQueryForLatestObservations(this._ensureQueryJSON(e),r),n=h.fromJSON(t);return n.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),n}));function t(r,t){return e.apply(this,arguments)}return t}(),n.executeQuery=function(){var e=r._asyncToGenerator((function*(e,r){const t=yield this.dataQueryEngine.executeQuery(this._ensureQueryJSON(e),r),n=h.fromJSON(t);return n.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),n}));function t(r,t){return e.apply(this,arguments)}return t}(),n._ensureQueryJSON=function(e){return a.isNone(e)?this.defaultQueryJSON:("outSpatialReference"in e&&!e.outSpatialReference&&(e.outSpatialReference=this.spatialReference),e.toJSON())},n.ensureDataQueryEngine=function(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e="timeInfo"in this.layer&&this.layer.timeInfo&&this.layer.timeInfo.toJSON()||null,r=this.layer.objectIdField,t=d.featureGeometryTypeKebabDictionary.toJSON(this.queryGeometryType),n=this.layer.fields.map((e=>e.toJSON())),u=this.layerView.view.resourceController.scheduler,a=this.priority,o=this.spatialReference.toJSON(),i=this.layerView.graphics3d.graphicsCore.featureStore,{hasZ:s,hasM:y}=this.layerView;return this._dataQueryEngineInstance=new Q({hasZ:s,hasM:y,geometryType:t,fields:n,timeInfo:e,spatialReference:o,objectIdField:r,featureStore:i,scheduler:u,priority:a}),this._dataQueryEngineInstance},r._createClass(t,[{key:"queryGeometryType",get:function(){switch(this.layer.geometryType){case"multipoint":case"point":case"polygon":case"polyline":return this.layer.geometryType;case"mesh":return"polygon";default:return}}},{key:"defaultQueryJSON",get:function(){return new f({outSpatialReference:this.spatialReference}).toJSON()}},{key:"dataQueryEngine",get:function(){return this.ensureDataQueryEngine()}}]),t}(u),t.__decorate([o.property({constructOnly:!0})],e.QueryEngine.prototype,"layerView",void 0),t.__decorate([o.property({constructOnly:!0})],e.QueryEngine.prototype,"priority",void 0),t.__decorate([o.property({readOnly:!0,aliasOf:"layerView.view.spatialReference"})],e.QueryEngine.prototype,"spatialReference",void 0),t.__decorate([o.property({readOnly:!0,aliasOf:"layerView.layer"})],e.QueryEngine.prototype,"layer",void 0),t.__decorate([o.property({readOnly:!0})],e.QueryEngine.prototype,"queryGeometryType",null),t.__decorate([o.property({readOnly:!0})],e.QueryEngine.prototype,"defaultQueryJSON",null),e.QueryEngine=t.__decorate([c.subclass("esri.views.3d.layers.graphics.QueryEngine")],e.QueryEngine);var g=e.QueryEngine;e.default=g,Object.defineProperty(e,"__esModule",{value:!0})}));
