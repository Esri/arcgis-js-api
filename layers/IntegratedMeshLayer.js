/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/maybe","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../core/Error","../chunks/persistableUrlUtils","../core/accessorSupport/decorators/persistable","../core/promiseUtils","../core/Handles","./Layer","../core/MultiOriginJSONSupport","../core/watchUtils","./support/commonProperties","./mixins/OperationalLayer","./mixins/ArcGISService","./mixins/PortalLayer","./mixins/ScaleRangeLayer","./support/I3SLayerDefinitions","./mixins/SceneService","./support/SceneModifications"],(function(e,t,r,o,i,n,s,a,p,c,d,y,l,u,h,f,m,S,v,_,g,w,L,I,T){"use strict";let O=function(t){function r(...e){var r;return(r=t.call(this,...e)||this).handles=new u,r.geometryType="mesh",r.operationalLayerType="IntegratedMeshLayer",r.type="integrated-mesh",r.nodePages=null,r.materialDefinitions=null,r.textureSetDefinitions=null,r.geometryDefinitions=null,r.serviceUpdateTimeStamp=null,r.profile="mesh-pyramids",r.modifications=null,r._modificationsSource=null,r.elevationInfo=null,r.path=null,r}e._inheritsLoose(r,t);var i=r.prototype;return i.destroy=function(){this.handles.destroy()},i.initialize=function(){this.handles.add(m.on(this,"modifications","after-changes",(()=>this.modifications=this.modifications),null,null,!0))},i.normalizeCtorArgs=function(e,t){return"string"==typeof e?{url:e,...t}:e},i.readModifications=function(e,t,r){this._modificationsSource={url:d.fromJSON(e,r),context:r}},i.load=async function(e){return this.addResolvingPromise(this._doLoad(e)),this},i._doLoad=async function(e){const t=o.get(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){l.throwIfAbortError(r)}if(await this._fetchService(t),o.isSome(this._modificationsSource)){const t=await T.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)},i.beforeSave=function(){if(!o.isNone(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))},i.saveAs=async function(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)},i.save=async function(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)},i.validateLayer=function(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new c("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new c("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new c("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})},i._getTypeKeywords=function(){return["IntegratedMeshLayer"]},r}(I.SceneService(_.ArcGISService(v.OperationalLayer(g.PortalLayer(w.ScaleRangeLayer(f.MultiOriginJSONMixin(h)))))));return t.__decorate([s.property({type:String,readOnly:!0})],O.prototype,"geometryType",void 0),t.__decorate([s.property({type:["show","hide"]})],O.prototype,"listMode",void 0),t.__decorate([s.property({type:["IntegratedMeshLayer"]})],O.prototype,"operationalLayerType",void 0),t.__decorate([s.property({json:{read:!1},readOnly:!0})],O.prototype,"type",void 0),t.__decorate([s.property({type:L.I3SNodePageDefinition,readOnly:!0})],O.prototype,"nodePages",void 0),t.__decorate([s.property({type:[L.I3SMaterialDefinition],readOnly:!0})],O.prototype,"materialDefinitions",void 0),t.__decorate([s.property({type:[L.I3STextureSetDefinition],readOnly:!0})],O.prototype,"textureSetDefinitions",void 0),t.__decorate([s.property({type:[L.I3SGeometryDefinition],readOnly:!0})],O.prototype,"geometryDefinitions",void 0),t.__decorate([s.property({readOnly:!0})],O.prototype,"serviceUpdateTimeStamp",void 0),t.__decorate([s.property({type:T}),y.persistable({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],O.prototype,"modifications",void 0),t.__decorate([a.reader(["web-scene","portal-item"],"modifications")],O.prototype,"readModifications",null),t.__decorate([s.property(S.elevationInfo)],O.prototype,"elevationInfo",void 0),t.__decorate([s.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],O.prototype,"path",void 0),O=t.__decorate([p.subclass("esri.layers.IntegratedMeshLayer")],O),O}));
