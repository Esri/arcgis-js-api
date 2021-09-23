/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../core/Error","../../../core/Logger","../../../core/maybe","../../../core/promiseUtils","../../../geometry/support/spatialReferenceUtils","../featureConversionUtils","../data/FeatureStore","../data/projectionSupport","../data/QueryEngine","./geojson/geojson","./support/sourceUtils","../../ogc/wfsUtils","../../support/FieldsIndex"],(function(e,t,r,n,o,i,s,a,u,c,p,y,l,h){"use strict";let f=function(){function f(){var t=this;this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=function(){var r=e._asyncToGenerator((function*(e){const{objectIdField:r}=t._queryEngine,a=yield l.getFeature(t._getFeatureUrl,t._featureType.typeName,t._getFeatureOutputFormat,{customParameters:t._customParameters,dateFields:t._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});yield p.validateGeoJSON(a),o.throwIfAborted(e);const c=p.createOptimizedFeatures(a,{geometryType:t._queryEngine.geometryType,hasZ:!1,objectIdField:r});if(!i.equals(t._queryEngine.spatialReference,i.WGS84))for(const o of c)n.isSome(o.geometry)&&(o.geometry=s.convertFromGeometry(u.project(s.convertToGeometry(o.geometry,t._queryEngine.geometryType,!1,!1),i.WGS84,t._queryEngine.spatialReference)));let h=1;for(const n of c){const e={};y.mixAttributes(t._fieldsIndex,e,n.attributes,null,!0),n.attributes=e,null==n.attributes[r]&&(n.objectId=n.attributes[r]=h++)}return c}));return function(e){return r.apply(this,arguments)}}()}var _=f.prototype;return _.destroy=function(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null},_.load=function(){var t=e._asyncToGenerator((function*(e,t){const{getFeatureUrl:r,getFeatureOutputFormat:i,spatialReference:s,fields:u,geometryType:p,featureType:y,objectIdField:l,customParameters:f}=e;this._featureType=y,this._customParameters=f,this._getFeatureUrl=r,this._getFeatureOutputFormat=i,this._fieldsIndex=new h(u),yield this._checkProjection(s),o.throwIfAborted(t),this._queryEngine=new c.default({fields:u,geometryType:p,hasM:!1,hasZ:!1,objectIdField:l,spatialReference:s,timeInfo:null,featureStore:new a({geometryType:p,hasM:!1,hasZ:!1})});const _=yield this._snapshotFeatures(n.unwrap(t.signal));return this._queryEngine.featureStore.addMany(_),{extent:this._queryEngine.fullExtent}}));function r(e,r){return t.apply(this,arguments)}return r}(),_.applyEdits=function(){var r=e._asyncToGenerator((function*(){throw new t("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}));function n(){return r.apply(this,arguments)}return n}(),_.queryFeatures=function(){var t=e._asyncToGenerator((function*(e={},t={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}));function r(){return t.apply(this,arguments)}return r}(),_.queryFeatureCount=function(){var t=e._asyncToGenerator((function*(e={},t={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}));function r(){return t.apply(this,arguments)}return r}(),_.queryObjectIds=function(){var t=e._asyncToGenerator((function*(e={},t={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}));function r(){return t.apply(this,arguments)}return r}(),_.queryExtent=function(){var t=e._asyncToGenerator((function*(e={},t={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}));function r(){return t.apply(this,arguments)}return r}(),_.querySnapping=function(){var t=e._asyncToGenerator((function*(e,t={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}));function r(e){return t.apply(this,arguments)}return r}(),_.setCustomParameters=function(e){this._customParameters=e},_.refresh=function(){var n=e._asyncToGenerator((function*(){var e;return null==(e=this._snapshotTask)||e.abort(),this._snapshotTask=o.createTask(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(e=>{this._queryEngine.featureStore.clear(),o.isAbortError(e)||r.getLogger("esri.layers.WFSLayer").error(new t("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))})),yield this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}));function i(){return n.apply(this,arguments)}return i}(),_._waitSnapshotComplete=function(){var t=e._asyncToGenerator((function*(){if(this._snapshotTask&&!this._snapshotTask.finished){try{yield this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}));function r(){return t.apply(this,arguments)}return r}(),_._checkProjection=function(){var r=e._asyncToGenerator((function*(e){try{yield u.checkProjectionSupport(i.WGS84,e)}catch{throw new t("unsupported-projection","Projection not supported",{spatialReference:e})}}));function n(e){return r.apply(this,arguments)}return n}(),f}();return f}));
