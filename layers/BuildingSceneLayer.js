/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import r from"../core/Collection.js";import t from"../core/CollectionFlattener.js";import s from"../core/Error.js";import{clone as i}from"../core/lang.js";import{loadAll as o}from"../core/loadAll.js";import a from"../core/Logger.js";import{isSome as l}from"../core/maybe.js";import{MultiOriginJSONMixin as n}from"../core/MultiOriginJSONSupport.js";import{throwIfAbortError as p}from"../core/promiseUtils.js";import{join as y}from"../core/urlUtils.js";import{property as u}from"../core/accessorSupport/decorators/property.js";import"../core/accessorSupport/ensureType.js";import{reader as d}from"../core/accessorSupport/decorators/reader.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";import m from"../geometry/SpatialReference.js";import h from"./Layer.js";import b from"./buildingSublayers/BuildingComponentSublayer.js";import f from"./buildingSublayers/BuildingGroupSublayer.js";import{APIKeyMixin as v}from"./mixins/APIKeyMixin.js";import{ArcGISService as S}from"./mixins/ArcGISService.js";import{OperationalLayer as g}from"./mixins/OperationalLayer.js";import{PortalLayer as j}from"./mixins/PortalLayer.js";import{ScaleRangeLayer as w}from"./mixins/ScaleRangeLayer.js";import{SceneService as O,SaveOperationType as I}from"./mixins/SceneService.js";import L from"./support/BuildingFilter.js";import x from"./support/BuildingSummaryStatistics.js";import{sceneLayerFullExtent as T,readOnlyService as A,elevationInfo as E}from"./support/commonProperties.js";import{FetchAssociatedFeatureLayer as F}from"./support/FetchAssociatedFeatureLayer.js";const B=a.getLogger("esri.layers.BuildingSceneLayer"),_=r.ofType(L),P=i(f.sublayersProperty);P.json.origins["web-scene"]={type:[b],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},P.json.origins["portal-item"]={type:[b],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let K=class extends(O(S(g(j(w(n(v(h)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new t({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new _,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy()}readSublayers(e,r,t){const s=f.readSublayers(e,r,t);return f.forEachSublayer(s,(e=>e.layer=this)),this.sublayerOverrides&&(this.applySublayerOverrides(s,this.sublayerOverrides),this.sublayerOverrides=null),s}applySublayerOverrides(e,{overrides:r,context:t}){f.forEachSublayer(e,(e=>e.read(r.get(e.id),t)))}readSublayerOverrides(e,r){const t=new Map;for(const i of e)null!=i&&"object"==typeof i&&"number"==typeof i.id?t.set(i.id,i):r.messages.push(new s("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:i}));return{overrides:t,context:r}}writeSublayerOverrides(e,r,t){const s=[];f.forEachSublayer(this.sublayers,(e=>{const r=e.write({},t);Object.keys(r).length>1&&s.push(r)})),s.length>0&&(r.sublayers=s)}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach((e=>{r.sublayers.push(i(e))}))}write(e,r){return e=super.write(e,r),!r||"web-scene"!==r.origin&&"portal-item"!==r.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&("web-scene"===r.origin||"portal-item"===r.origin)&&null!=e&&Array.isArray(e.sublayers)){const t=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,t):this.sublayerOverrides=t}}readSummaryStatistics(e,r){if("string"==typeof r.statisticsHRef){const e=y(this.parsedUrl.path,r.statisticsHRef);return new x({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=l(e)?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(p).then((()=>this._fetchService(r))).then((()=>this._fetchAssociatedFeatureService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}loadAll(){return o(this,(e=>{f.forEachSublayer(this.sublayers,(r=>{"building-group"!==r.type&&e(r)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,r){return this._debouncedSaveOperations(I.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(I.SAVE,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new s("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&B.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&B.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const r=new F(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await r.fetchPortalItem()}catch(t){B.warn("Associated feature service item could not be loaded",t)}}};e([u({type:["BuildingSceneLayer"]})],K.prototype,"operationalLayerType",void 0),e([u({readOnly:!0})],K.prototype,"allSublayers",void 0),e([u(P)],K.prototype,"sublayers",void 0),e([d("service","sublayers")],K.prototype,"readSublayers",null),e([u({type:_,nonNullable:!0,json:{write:!0}})],K.prototype,"filters",void 0),e([u({type:String,json:{write:!0}})],K.prototype,"activeFilterId",void 0),e([u({readOnly:!0,type:x})],K.prototype,"summaryStatistics",void 0),e([d("summaryStatistics",["statisticsHRef"])],K.prototype,"readSummaryStatistics",null),e([u({type:[String],json:{read:!1}})],K.prototype,"outFields",void 0),e([u(T)],K.prototype,"fullExtent",void 0),e([u({type:["show","hide","hide-children"]})],K.prototype,"listMode",void 0),e([u(A(m))],K.prototype,"spatialReference",void 0),e([u(E)],K.prototype,"elevationInfo",null),e([u({json:{read:!1},readOnly:!0})],K.prototype,"type",void 0),e([u()],K.prototype,"associatedFeatureServiceItem",void 0),K=e([c("esri.layers.BuildingSceneLayer")],K);const R=K;export{R as default};