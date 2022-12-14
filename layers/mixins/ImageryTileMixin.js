/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{rasterRendererTypes as t}from"../../rasterRenderers.js";import r from"../../request.js";import i from"../../core/Logger.js";import{isNone as s,isSome as n}from"../../core/maybe.js";import{aliasOf as o}from"../../core/accessorSupport/decorators/aliasOf.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{property as a}from"../../core/accessorSupport/decorators/property.js";import{subclass as l}from"../../core/accessorSupport/decorators/subclass.js";import{getInfo as m}from"../../geometry/support/spatialReferenceUtils.js";import{sanitizeUrl as d}from"../support/arcgisLayerUrl.js";import{url as u}from"../support/commonProperties.js";import p from"../support/DimensionalDefinition.js";import h from"../support/RasterJobHandler.js";import c from"../support/TileInfo.js";import{getDefaultMultidimensionalDefinition as f,isMultiSliceOrRangeDefinition as y}from"../support/rasterDatasets/multidimensionalUtils.js";import{convertVectorFieldData as b}from"../support/rasterFunctions/vectorFieldUtils.js";import{normalizeRendererJSON as g,getDefaultInterpolation as I,getDefaultBandCombination as J,createDefaultRenderer as _}from"../../renderers/support/rasterRendererHelper.js";import x from"../../renderers/support/RasterSymbolizer.js";import{createFlowMesh as v}from"../../views/2d/engine/flow/dataUtils.js";import R from"../../geometry/Extent.js";import S from"../../geometry/SpatialReference.js";const j=i.getLogger("esri.layers.mixins.ImageryTileMixin"),H=i=>{let H=class extends i{constructor(){super(...arguments),this._rasterJobHandler={instance:null,refCount:0,connectionPromise:null},this.bandIds=null,this.copyright=null,this.fullExtent=null,this.interpolation="nearest",this.multidimensionalDefinition=null,this.raster=null,this.rasterInfo=null,this.sourceJSON=null,this.spatialReference=null,this.tileInfo=null,this.symbolizer=null}set url(e){this._set("url",d(e,j))}set renderer(e){this._set("renderer",e),this.updateRenderer()}async convertVectorFieldData(e,t){if(s(e))return null;const r=this._rasterJobHandler.instance,i=this.rasterInfo.dataType;return r?r.convertVectorFieldData({pixelBlock:e,dataType:i},t):b(e,i)}async createFlowMesh(e,t){const r=this._rasterJobHandler.instance;return r?r.createFlowMesh(e,t):v(e.meshType,e.simulationSettings,e.flowData,n(t.signal)?t.signal:(new AbortController).signal)}normalizeRasterFetchOptions(e){const{multidimensionalInfo:t}=this.rasterInfo;if(s(t))return e;let r=e.multidimensionalDefinition||this.multidimensionalDefinition;!s(r)&&r.length||(r=f(this.raster.rasterInfo));const i=e.timeExtent||this.timeExtent;if(n(r)&&n(i)&&(n(i.start)||n(i.end))){r=r.map((e=>e.clone()));const o=t.variables.find((({name:e})=>e===r[0].variableName))?.dimensions?.find((({name:e})=>"StdTime"===e)),a=r.find((({dimensionName:e})=>"StdTime"===e));if(!o||!a)return{...e,multidimensionalDefinition:null};const{start:l,end:m}=i,d=s(l)?null:l.getTime(),u=s(m)?null:m.getTime(),p=d??u,h=u??d;if(n(o.values)){const e=o.values.filter((e=>{if(Array.isArray(e)){if(p===h)return e[0]<=p&&e[1]>=p;const t=e[0]<=p&&e[1]>p||e[0]<h&&e[1]>=h,r=e[0]>=p&&e[1]<=h||e[0]<p&&e[1]>h;return t||r}return p===h?e===p:e>=p&&e<=h}));if(e.length){const t=e.sort(((e,t)=>{if(p===h)return(e[0]??e)-(t[0]??t);return Math.abs((e[1]??e)-h)-Math.abs((t[1]??t)-h)}))[0];a.values=[t]}else r=null}else if(o.hasRegularIntervals&&o.extent){const[e,t]=o.extent;p>t||h<e?r=null:a.values=p===h?[p]:[Math.max(e,p),Math.min(t,h)]}}return{...e,multidimensionalDefinition:r}}async updateRenderer(){if(!this.loaded)return;if(JSON.stringify(this._cachedRendererJson)===JSON.stringify(this.renderer))return;const e=this._rasterJobHandler.instance;e&&(this.symbolizer.rendererJSON=g(this.renderer.toJSON()),this.symbolizer.bind(),await e.updateSymbolizer(this.symbolizer),this._cachedRendererJson=this.renderer.toJSON())}async applyRenderer(e,t){const r=e&&e.pixelBlock;if(!(n(r)&&r.pixels&&r.pixels.length>0))return null;let i;await this.updateRenderer();const s=this._rasterJobHandler.instance,{bandIds:o}=this;return i=s?await s.symbolize({...e,simpleStretchParams:t,bandIds:o}):this.symbolizer.symbolize({...e,simpleStretchParams:t,bandIds:o}),i}getTileUrl(e,t,r){return"RasterTileServer"===this.raster.datasetFormat?`${this.url}/tile/${e}/${t}/${r}`:""}getCompatibleTileInfo(e,t,r=!1){if(!this.loaded||s(t))return null;if(r&&e.equals(this.spatialReference))return this.tileInfo;const i=m(e);return c.create({size:256,spatialReference:e,origin:i?{x:i.origin[0],y:i.origin[1]}:{x:t.xmin,y:t.ymax}})}getCompatibleFullExtent(e){return this.loaded?(this._compatibleFullExtent&&this._compatibleFullExtent.spatialReference.equals(e)||(this._compatibleFullExtent=this.raster.computeExtent(e)),this._compatibleFullExtent):null}async fetchTile(e,t,i,o={}){if(o.requestAsImageElement){const s=this.getTileUrl(e,t,i);return r(s,{responseType:"image",query:{...this.refreshParameters,...this.raster.ioConfig.customFetchParameters},signal:o.signal}).then((e=>e.data))}if(n(this.rasterInfo.multidimensionalInfo)&&(o=this.normalizeRasterFetchOptions(o),s(o.multidimensionalDefinition))){const r=o.tileInfo||this.rasterInfo.storageInfo.tileInfo;return{extent:this.raster.getTileExtentFromTileInfo(e,t,i,r),pixelBlock:null}}return await this._initJobHandler(),"raster-shaded-relief"===this.renderer.type&&(o={...o,buffer:{cols:1,rows:1}}),this.raster.fetchTile(e,t,i,o)}async fetchPixels(e,t,r,i={}){return n(this.rasterInfo.multidimensionalInfo)&&(i=this.normalizeRasterFetchOptions(i),s(i.multidimensionalDefinition))?{extent:e,pixelBlock:null}:(await this._initJobHandler(),this.raster.fetchPixels(e,t,r,i))}async identify(e,t={}){if(n(this.rasterInfo.multidimensionalInfo)){if(!(this.rasterInfo.hasMultidimensionalTranspose&&!!(y(t.multidimensionalDefinition)||t.transposedVariableName||t.timeExtent))&&(t=this.normalizeRasterFetchOptions(t),s(t.multidimensionalDefinition)))return{location:e,value:null}}return this.raster.identify(e,t)}increaseRasterJobHandlerUsage(){this._rasterJobHandler.refCount++}decreaseRasterJobHandlerUsage(){this._rasterJobHandler.refCount--,this._rasterJobHandler.refCount<=0&&this._shutdownJobHandler()}hasStandardTime(){const e=this.rasterInfo.multidimensionalInfo;if(s(e)||"standard-time"!==this.rasterInfo.dataType)return!1;const t=this.multidimensionalDefinition[0]?.variableName;return e.variables.some((e=>e.name===t&&e.dimensions.some((e=>"StdTime"===e.name))))}getStandardTimeValue(e){return new Date(24*(e-25569)*3600*1e3).toString()}_configDefaultSettings(){this._configDefaultInterpolation(),this.multidimensionalDefinition||(this.multidimensionalDefinition=f(this.raster.rasterInfo)),this._configDefaultRenderer()}_initJobHandler(){if(null!=this._rasterJobHandler.connectionPromise)return this._rasterJobHandler.connectionPromise;const e=new h;return this._rasterJobHandler.connectionPromise=e.initialize().then((()=>{this._rasterJobHandler.instance=e,this.raster.rasterJobHandler=e,this.renderer&&this.updateRenderer()})).catch((()=>null)),this._rasterJobHandler.connectionPromise}_shutdownJobHandler(){this._rasterJobHandler.instance&&this._rasterJobHandler.instance.destroy(),this._rasterJobHandler.instance=null,this._rasterJobHandler.connectionPromise=null,this._rasterJobHandler.refCount=0,this.raster.rasterJobHandler=null,this._cachedRendererJson=null}_configDefaultInterpolation(){if(null==this.interpolation){const e=I(this.rasterInfo,this.raster.tileType,this.sourceJSON?.defaultResamplingMethod);this._set("interpolation",e)}}_configDefaultRenderer(){const e=this.raster.rasterInfo;if(this.bandIds||(this.bandIds=J(e)),!this.renderer){const t=_(e,{bandIds:this.bandIds,variableName:n(this.multidimensionalDefinition)?this.multidimensionalDefinition[0]?.variableName:null});"WCSServer"===this.raster.datasetFormat&&"raster-stretch"===t.type&&(e.statistics?.[0].max>1e24||e.statistics?.[0].min<-1e24)&&(t.dynamicRangeAdjustment=!0,t.statistics=null,"none"===t.stretchType&&(t.stretchType="min-max")),this.renderer=t}this.symbolizer?(this.symbolizer.rendererJSON=g(this.renderer.toJSON()),this.symbolizer.rasterInfo=e):this.symbolizer=new x({rendererJSON:this.renderer.toJSON(),rasterInfo:e});const t=this.symbolizer.bind();t.success||j.warn("imagery-tile-mixin",t.error||"The given renderer is not supported by the layer.")}};return e([a()],H.prototype,"_cachedRendererJson",void 0),e([a()],H.prototype,"_compatibleFullExtent",void 0),e([a()],H.prototype,"_rasterJobHandler",void 0),e([a()],H.prototype,"bandIds",void 0),e([a({json:{origins:{service:{read:{source:"copyrightText"}}}}})],H.prototype,"copyright",void 0),e([a({type:R,json:{read:!1}}),o("rasterInfo.extent")],H.prototype,"fullExtent",void 0),e([a()],H.prototype,"interpolation",void 0),e([a()],H.prototype,"ioConfig",void 0),e([a({type:[p]})],H.prototype,"multidimensionalDefinition",void 0),e([a()],H.prototype,"raster",void 0),e([a({readOnly:!0}),o("raster.rasterInfo")],H.prototype,"rasterInfo",void 0),e([a()],H.prototype,"sourceJSON",void 0),e([a({type:S,json:{read:!1}}),o("rasterInfo.spatialReference")],H.prototype,"spatialReference",void 0),e([a({type:c,json:{read:!1}}),o("rasterInfo.storageInfo.tileInfo")],H.prototype,"tileInfo",void 0),e([a(u)],H.prototype,"url",null),e([a({types:t})],H.prototype,"renderer",null),e([a()],H.prototype,"symbolizer",void 0),H=e([l("esri.layers.ImageryTileMixin")],H),H};export{H as ImageryTileMixin};