/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../geometry","../../../core/Error","../../../core/HandleOwner","../../../core/has","../../../core/Loadable","../../../core/maybe","../../../core/promiseUtils","../../../core/watchUtils","../../../core/workers/workers","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../../../geometry/support/typeUtils","./support/clientSideDefaults","../../ogc/wfsUtils","../../../rest/support/FeatureSet","../../../geometry/Extent"],(function(e,t,r,o,n,a,i,s,u,c,l,p,y,d,f,m,h,S,_,F,v){"use strict";e.WFSSource=function(e){function r(){var r;return(r=e.apply(this,arguments)||this).capabilities=S.createCapabilities(!1,!1),r.type="wfs",r.refresh=c.debounce(t._asyncToGenerator((function*(){yield r.load();const{extent:e}=yield r._connection.invoke("refresh");return r.sourceJSON.extent=e,{hasUpdates:!0,updates:{extent:r.sourceJSON.extent}}}))),r._updateCustomParameters=c.debounce((()=>{var e;const t=r.layer.customParameters;return null==(e=r._connection)?void 0:e.invoke("setCustomParameters",t)})),r}t._inheritsLoose(r,e);var o=r.prototype;return o.load=function(e){var t;const r=null!=(t=u.isSome(e)&&e.signal)?t:null;return this.addResolvingPromise(this._startWorker({signal:r})),Promise.resolve(this)},o.destroy=function(){var e;null==(e=this._connection)||e.close(),this._connection=null},o.openPorts=function(){var e=t._asyncToGenerator((function*(){return yield this.load(),this._connection.openPorts()}));function r(){return e.apply(this,arguments)}return r}(),o.queryFeatures=function(){var e=t._asyncToGenerator((function*(e,t={}){yield this.load(t);const r=yield this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return F.fromJSON(r)}));function r(t){return e.apply(this,arguments)}return r}(),o.queryFeaturesJSON=function(){var e=t._asyncToGenerator((function*(e,t={}){return yield this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}));function r(t){return e.apply(this,arguments)}return r}(),o.queryFeatureCount=function(){var e=t._asyncToGenerator((function*(e,t={}){return yield this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}));function r(t){return e.apply(this,arguments)}return r}(),o.queryObjectIds=function(){var e=t._asyncToGenerator((function*(e,t={}){return yield this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}));function r(t){return e.apply(this,arguments)}return r}(),o.queryExtent=function(){var e=t._asyncToGenerator((function*(e,t={}){yield this.load(t);const r=yield this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:r.count,extent:v.fromJSON(r.extent)}}));function r(t){return e.apply(this,arguments)}return r}(),o.querySnapping=function(){var e=t._asyncToGenerator((function*(e,t={}){return yield this.load(t),this._connection.invoke("querySnapping",e,t)}));function r(t){return e.apply(this,arguments)}return r}(),o._createLoadOptions=function(){var e=t._asyncToGenerator((function*(e){const{url:t,customParameters:r,name:o,namespaceUri:a,spatialReference:i,fields:s,geometryType:c,swapXY:l}=this.layer;if(!t)throw new n("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities=this.wfsCapabilities||(yield _.getCapabilities(t,{customParameters:r,...e}));const p=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some((e=>null==this.layer[e]))?yield _.getWFSLayerInfo(this.wfsCapabilities,o,a,{spatialReference:i,customParameters:r,signal:null==e?void 0:e.signal}):{..._.prepareWFSLayerFields(s),geometryType:c,name:o,namespaceUri:a,spatialReference:i,swapXY:l},y=u.unwrap(_.findFeatureType(this.wfsCapabilities.readFeatureTypes(),p.name,p.namespaceUri)),d=h.featureGeometryTypeKebabDictionary.toJSON(p.geometryType);return{customParameters:r,featureType:y,fields:p.fields.map((e=>e.toJSON())),geometryField:p.geometryField,geometryType:d,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:p.objectIdField,spatialReference:p.spatialReference.toJSON(),swapXY:p.swapXY}}));function r(t){return e.apply(this,arguments)}return r}(),o._startWorker=function(){var e=t._asyncToGenerator((function*(e){const[t,r]=yield c.eachAlways([this._createLoadOptions(e),p.open("WFSSourceWorker",{...e,strategy:i("feature-layers-workers")?"dedicated":"local"})]),o=t.error||r.error||null,n=r.value||null;if(o)throw n&&n.close(),o;const a=t.value;this._connection=r.value;const{extent:s}=yield this._connection.invoke("load",a,e);this.sourceJSON={extent:s,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:S.createDrawingInfo(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:3e3,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}},this.handles.add(l.init(this.layer,"customParameters",(()=>this._updateCustomParameters().catch((()=>{})))))}));function r(t){return e.apply(this,arguments)}return r}(),r}(a.HandleOwnerMixin(s)),r.__decorate([y.property()],e.WFSSource.prototype,"capabilities",void 0),r.__decorate([y.property({constructOnly:!0})],e.WFSSource.prototype,"layer",void 0),r.__decorate([y.property()],e.WFSSource.prototype,"sourceJSON",void 0),r.__decorate([y.property()],e.WFSSource.prototype,"type",void 0),r.__decorate([y.property()],e.WFSSource.prototype,"wfsCapabilities",void 0),e.WFSSource=r.__decorate([m.subclass("esri.layers.graphics.sources.WFSSource")],e.WFSSource);var g=e.WFSSource;e.default=g,Object.defineProperty(e,"__esModule",{value:!0})}));
