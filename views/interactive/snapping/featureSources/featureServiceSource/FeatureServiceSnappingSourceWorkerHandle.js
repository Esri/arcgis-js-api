/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/HandleOwner","../../../../../core/maybe","../../../../../core/promiseUtils","../../../../../core/accessorSupport/decorators/property","../../../../../core/has","../../../../../core/accessorSupport/ensureType","../../../../../core/Logger","../../../../../core/accessorSupport/decorators/subclass","../../../../../core/workers/WorkerHandle","../../../../../geometry/support/typeUtils"],(function(e,t,r,n,i,o,a,d,s,l,u,c,p){"use strict";e.FeatureServiceSnappingSourceWorkerHandle=function(e){function r(t){var r;return(r=e.call(this,t)||this).availability=0,r.workerHandleUpdating=!0,r.editId=0,r}t._inheritsLoose(r,e);var n=r.prototype;return n.destroy=function(){this.workerHandle.destroy()},n.initialize=function(){this.workerHandle=new h(this.schedule),this.handles.add([this.workerHandle.on("notify-updating",(({updating:e})=>this.workerHandleUpdating=e)),this.workerHandle.on("notify-availability",(({availability:e})=>this._set("availability",e)))])},n.setup=function(){var e=t._asyncToGenerator((function*(e,t){const r=this.serviceInfoFromLayer(e.layer);if(i.isNone(r))return;const n={configuration:this.convertConfiguration(e.configuration),serviceInfo:r,spatialReference:e.spatialReference.toJSON()};yield this.updatingHandles.addPromise(this.workerHandle.invokeMethod("setup",n,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}));function r(t,r){return e.apply(this,arguments)}return r}(),n.configure=function(){var e=t._asyncToGenerator((function*(e,t){const r=this.convertConfiguration(e);yield this.updatingHandles.addPromise(this.workerHandle.invokeMethod("configure",r,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}));function r(t,r){return e.apply(this,arguments)}return r}(),n.refresh=function(){var e=t._asyncToGenerator((function*(e){yield this.updatingHandles.addPromise(this.workerHandle.invokeMethod("refresh",{},e)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},e))}));function r(t){return e.apply(this,arguments)}return r}(),n.fetchCandidates=function(){var e=t._asyncToGenerator((function*(e,t){const r={distance:e.distance,point:e.coordinateHelper.vectorToPoint(e.point).toJSON(),types:e.types,filter:i.isSome(e.filter)?e.filter.createQuery().toJSON():null};return this.workerHandle.invoke(r,t)}));function r(t,r){return e.apply(this,arguments)}return r}(),n.updateTiles=function(){var e=t._asyncToGenerator((function*(e,t){const r={tiles:e.tiles,tileInfo:i.isSome(e.tileInfo)?e.tileInfo.toJSON():null,tileSize:e.tileSize};yield this.updatingHandles.addPromise(this.workerHandle.invokeMethod("updateTiles",r,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}));function r(t,r){return e.apply(this,arguments)}return r}(),n.applyEdits=function(){var e=t._asyncToGenerator((function*(e,t){var r,n,i,a,d,s;const l=this.editId++,u={id:l};yield this.updatingHandles.addPromise(this.workerHandle.invokeMethod("beginApplyEdits",u,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t));const c=yield this.updatingHandles.addPromise(o.whenOrAbort(e.result,t)),p={id:l,edits:{addedFeatures:null!=(r=null==(n=c.addedFeatures)?void 0:n.map((({objectId:e})=>e)))?r:[],deletedFeatures:null!=(i=null==(a=c.deletedFeatures)?void 0:a.map((({objectId:e,globalId:t})=>({objectId:e,globalId:t}))))?i:[],updatedFeatures:null!=(d=null==(s=c.updatedFeatures)?void 0:s.map((({objectId:e})=>e)))?d:[]}};yield this.updatingHandles.addPromise(this.workerHandle.invokeMethod("endApplyEdits",p,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}));function r(t,r){return e.apply(this,arguments)}return r}(),n.getDebugInfo=function(e){return this.workerHandle.invokeMethod("getDebugInfo",{},e)},n.convertConfiguration=function(e){return{filter:i.isSome(e.filter)?e.filter.toJSON():null,customParameters:e.customParameters}},n.serviceInfoFromLayer=function(e){var t;return"multipatch"===e.geometryType||"mesh"===e.geometryType?null:{url:e.parsedUrl.path,fields:e.fields.map((e=>e.toJSON())),geometryType:p.featureGeometryTypeKebabDictionary.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:null==(t=e.timeInfo)?void 0:t.toJSON()}},t._createClass(r,[{key:"updating",get:function(){return this.updatingHandles.updating||this.workerHandleUpdating}}]),r}(n.HandleOwner),r.__decorate([a.property({constructOnly:!0})],e.FeatureServiceSnappingSourceWorkerHandle.prototype,"schedule",void 0),r.__decorate([a.property({readOnly:!0})],e.FeatureServiceSnappingSourceWorkerHandle.prototype,"updating",null),r.__decorate([a.property({readOnly:!0})],e.FeatureServiceSnappingSourceWorkerHandle.prototype,"availability",void 0),r.__decorate([a.property()],e.FeatureServiceSnappingSourceWorkerHandle.prototype,"workerHandleUpdating",void 0),e.FeatureServiceSnappingSourceWorkerHandle=r.__decorate([u.subclass("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],e.FeatureServiceSnappingSourceWorkerHandle);let h=function(e){function r(t){return e.call(this,"FeatureServiceSnappingSourceWorker","fetchCandidates",t,{strategy:"dedicated"})||this}return t._inheritsLoose(r,e),r.prototype.getTransferList=function(){return[]},r}(c.WorkerHandle);Object.defineProperty(e,"__esModule",{value:!0})}));
