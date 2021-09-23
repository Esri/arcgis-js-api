/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Graphic","../../../core/Logger","../../../core/maybe","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../core/sql/WhereClause","../../../rest/support/Query","./I3SMeshView3D","./LayerView3D","./i3s/attributeEditing","./i3s/I3SGeometryUtil","./i3s/I3SMeshViewFilter","./i3s/I3SQueryEngine","./i3s/I3SQueryFeatureAdapter","./i3s/I3SQueryFeatureStore","./i3s/I3SUtil","./support/DefinitionExpressionSceneLayerView","./support/fieldProperties","./support/PopupSceneLayerView","./support/SceneLayerViewRequiredFields","../support/updatingProperties","../../layers/SceneLayerView","../../layers/support/FeatureFilter","../../support/floorFilterUtils","../../support/Scheduler"],(function(e,t,r,i,s,n,o,l,a,u,d,c,p,h,y,f,g,F,_,v,S,w,E,I,b,C,x,m,Q){"use strict";const q=i.getLogger("esri.views.3d.layers.SceneLayerView3D"),D=w.defineFieldProperties();let V=function(t){function i(){var e;return(e=t.apply(this,arguments)||this).type="scene-layer-3d",e.lodFactor=1,e.progressiveLoadFactor=1,e._elevationContext="scene",e._isIntegratedMesh=!1,e._supportsLabeling=!0,e._interactiveEditingSessions=new Map,e._queryEngine=null,e}e._inheritsLoose(i,t);var n=i.prototype;return n.initialize=function(){this.fieldsHelper=new I.SceneLayerViewRequiredFields({layerView:this}),this.updatingHandles.add(this.layer,"rangeInfos",(e=>this._rangeInfosChanged(e)),2),this.updatingHandles.add(this.layer,"renderer",(e=>this.updatingHandles.addPromise(this._rendererChange(e))),2);for(const e of["parsedDefinitionExpression","filter","viewFilter.parsedWhereClause","viewFilter.parsedGeometry","viewFilter.sortedObjectIds","floorFilterClause"])this.updatingHandles.add(this,e,(()=>this._filterChange()));for(const e of["filter","viewFilter.parsedGeometry"])this.updatingHandles.add(this,e,(()=>this._geometryFilterChange()));this.handles.add(this.layer.on("apply-edits",(e=>this.updatingHandles.addPromise(e.result)))),this.handles.add(this.layer.on("edits",(e=>this._handleEdits(e))))},n.destroy=function(){this.fieldsHelper=s.destroyMaybe(this.fieldsHelper)},n._rangeInfosChanged=function(e){null!=e&&e.length>0&&q.warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")},n.createQuery=function(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return s.isSome(this.filter)?this.filter.createQuery(e):new d(e)},n.queryExtent=function(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),null==t?void 0:t.signal)},n.queryFeatureCount=function(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),null==t?void 0:t.signal)},n.queryFeatures=function(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),null==t?void 0:t.signal).then((e=>{if(null==e||!e.features)return e;const t=this.layer;for(const r of e.features)r.layer=t,r.sourceLayer=t;return e}))},n.queryObjectIds=function(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),null==t?void 0:t.signal)},n._ensureQueryEngine=function(){return this._queryEngine||(this._queryEngine=this._createQueryEngine()),this._queryEngine},n._createQueryEngine=function(){const e=y.createGetFeatureExtent(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new g.default({layerView:this,priority:Q.TaskPriority.FEATURE_QUERY_ENGINE,spatialIndex:new _.default({featureAdapter:new F.I3SQueryFeatureAdapter({objectIdField:this.layer.objectIdField,attributeStorageInfo:this.layer.attributeStorageInfo,getFeatureExtent:e}),forAllFeatures:(e,t)=>this._forAllFeatures(((t,r,i)=>e({id:t,index:r,meta:i})),t,2),getFeatureExtent:e,sourceSpatialReference:v.getIndexCrs(this.layer),viewSpatialReference:this.view.spatialReference})})},n.highlight=function(e){const r=this._highlights;if(e instanceof d){const{set:t,handle:i}=r.acquireSet();return this.queryObjectIds(e).then((e=>r.setFeatureIds(t,e))),i}return t.prototype.highlight.call(this,e)},n.createInteractiveEditSession=function(e){return h.createInteractiveEditSession(this.attributeEditingContext,e)},n._createLayerGraphic=function(e){const t=new r(null,null,e);return t.layer=this.layer,t.sourceLayer=this.layer,t},n.canResume=function(){return t.prototype.canResume.call(this)&&(!this._controller||this._controller.rootNodeVisible)},n.getFilters=function(){const e=t.prototype.getFilters.call(this);return this.floorFilterClause&&this.addSqlFilter(e,this.floorFilterClause,this.logError),this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),s.isSome(this.viewFilter)&&this.viewFilter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e},n._ensureQuery=function(e){return this._addDefinitionExpressionToQuery(s.isNone(e)?this.createQuery():d.from(e))},n._handleEdits=function(e){h.processAttributeEdits(this.attributeEditingContext,e)},n.computeNodeFiltering=function(e){const t=this.viewFilter;return s.isNone(t)||t.isMBSGeoemtryVisible(e,this.view.spatialReference,this._controller.crsIndex)?0:1},e._createClass(i,[{key:"filter",get:function(){return s.isSome(this.viewFilter)?this.viewFilter.filter:null},set:function(e){!s.isNone(e)&&f.I3SMeshViewFilter.checkSupport(e)?s.isSome(this.viewFilter)?this.viewFilter.filter=e:this.viewFilter=new f.I3SMeshViewFilter({filter:e,layerFieldsIndex:this.layer.fieldsIndex,loadAsyncModule:e=>this._loadAsyncModule(e),applyFilters:()=>this._applyFilters(!0),addSqlFilter:(e,t)=>this.addSqlFilter(e,t,this.logError)}):this.viewFilter=null}},{key:"requiredFields",get:function(){var e,t;return null!=(e=null==(t=this.fieldsHelper)?void 0:t.requiredFields)?e:[]}},{key:"floorFilterClause",get:function(){const e=m.getFloorFilterClause(this);return s.isSome(e)?u.WhereClause.create(e,this.layer.fieldsIndex):null}},{key:"lodCrossfadeinDuration",get:function(){var e,t;return null!=(e=null==(t=this.view)?void 0:t.qualitySettings.sceneService["3dObject"].lodCrossfadeinDuration)?e:0}},{key:"lodCrossfadeoutDuration",get:function(){var e,t;return null!=(e=null==(t=this.view)?void 0:t.qualitySettings.sceneService["3dObject"].lodCrossfadeoutDuration)?e:0}},{key:"lodCrossfadeUncoveredDuration",get:function(){var e,t;return null!=(e=null==(t=this.view)?void 0:t.qualitySettings.sceneService["3dObject"].lodCrossfadeUncoveredDuration)?e:0}},{key:"attributeEditingContext",get:function(){return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:this._getObjectIdField(),forEachNode:e=>this._forAllNodes((t=>s.isSome(t)?e(t.node,t.featureIds):null)),attributeStorageInfo:this.i3slayer.attributeStorageInfo,attributeOverrides:this.attributeOverrides,getAttributeData:e=>this.getAttributeData(e),setAttributeData:(e,t)=>this.setAttributeData(e,t),clearMemCache:()=>this.clearMemCache()}}},{key:"hasGeometryFilter",get:function(){const e=this.viewFilter;return s.isSome(e)&&s.isSome(e.parsedGeometry)}}]),i}(c.I3SMeshView3D(S.DefinitionExpressionSceneLayerView(E.PopupSceneLayerView(p.LayerView3D(C)))));return t.__decorate([n.property({aliasOf:"layer"})],V.prototype,"i3slayer",void 0),t.__decorate([n.property()],V.prototype,"suspended",void 0),t.__decorate([n.property(b.updatingProgress)],V.prototype,"updatingProgress",void 0),t.__decorate([n.property({type:x})],V.prototype,"filter",null),t.__decorate([n.property()],V.prototype,"viewFilter",void 0),t.__decorate([n.property(D.requiredFields)],V.prototype,"requiredFields",null),t.__decorate([n.property(D.availableFields)],V.prototype,"availableFields",void 0),t.__decorate([n.property()],V.prototype,"fieldsHelper",void 0),t.__decorate([n.property()],V.prototype,"floorFilterClause",null),t.__decorate([n.property({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.3dObject.lodFactor"})],V.prototype,"lodFactor",void 0),t.__decorate([n.property({readOnly:!0,aliasOf:"_controller.updatingProgress"})],V.prototype,"updatingProgressValue",void 0),V=t.__decorate([a.subclass("esri.views.3d.layers.SceneLayerView3D")],V),V}));
