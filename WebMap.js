/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["require","./chunks/_rollupPluginBabelHelpers","./chunks/tslib.es6","./core/has","./core/maybe","./core/Logger","./core/accessorSupport/ensureType","./core/accessorSupport/decorators/property","./core/accessorSupport/decorators/reader","./core/accessorSupport/decorators/subclass","./core/accessorSupport/decorators/writer","./core/Error","./core/urlUtils","./core/uuid","./portal/support/resourceExtension","./core/arrayUtils","./core/promiseUtils","./core/accessorSupport/read","./geometry/SpatialReference","./geometry/support/webMercatorUtils","./core/Collection","./kernel","./core/Promise","./core/Loadable","./portal/Portal","./core/loadAll","./portal/PortalItem","./webdoc/support/writeUtils","./support/basemapUtils","./Map","./Viewpoint","./core/MultiOriginJSONSupport","./core/watchUtils","./core/accessorSupport/originUtils","./layers/support/arcgisLayerUrl","./portal/support/portalItemUtils","./support/MapFloorInfo","./tasks/support/ProjectParameters","./webdoc/RangeInfo","./webdoc/Widgets","./webdoc/support/thumbnailUtils","./webmap/ApplicationProperties","./webmap/Bookmark","./webmap/background/ColorBackground","./webmap/InitialViewProperties","./webmap/Version"],(function(e,t,r,i,o,a,n,s,l,p,u,c,d,h,m,y,w,f,_,g,b,v,S,A,I,O,T,L,P,V,U,F,W,M,R,K,x,N,k,C,B,E,J,j,G,D){"use strict";const $=new D.Version(2,20),z="Web Map",q=b.ofType(J),H=a.getLogger("esri.WebMap"),Q=new Map;Q.set("image/jpeg","jpeg"),Q.set("image/jpg","jpg"),Q.set("image/png","png"),Q.set("image/gif","gif");const X="ArcGIS Pro",Y="ArcGIS API for JavaScript",Z="CollectorDisabled",ee="Collector",te="Data Editing",re="OfflineDisabled",ie="Offline",oe="Workforce Project",ae="Workforce Worker",ne="Workforce Dispatcher",se="Offline Map Areas",le="FieldMapsDisabled",pe="DeveloperBasemap",ue=["NatGeo_World_Map","Ocean_Basemap","USA_Topo_Maps","World_Imagery","World_Street_Map","World_Terrain_Base","World_Topo_Map","World_Hillshade","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Reference/World_Boundaries_and_Places","Reference/World_Reference_Overlay","Reference/World_Transportation"].map((e=>e.toLowerCase()));let ce=function(r){function i(e){var t;return(t=r.call(this,e)||this).applicationProperties=null,t.bookmarks=new q,t.floorInfo=null,t.initialViewProperties=new G,t.portalItem=null,t.presentation=null,t.sourceVersion=null,t.widgets=null,t.authoringApp=t.authoringAppVersion=null,t._isAuthoringAppSetByUser=t._isAuthoringAppVersionSetByUser=!1,t}t._inheritsLoose(i,r);var a=i.prototype;return a.destroy=function(){const e=this.portalItem;this.portalItem=null,null==e||e.destroy()},a.initialize=function(){if(this.when().catch((e=>{H.error("#load()","Failed to load web map",e)})),this.resourceInfo){let t;try{t=this._validateJSON(this.resourceInfo)}catch(e){return void this.addResolvingPromise(Promise.reject(e))}this.read(t)}},a.writeAuthoringApp=function(e,t){e&&this._isAuthoringAppSetByUser?t.authoringApp=e:t.authoringApp=Y},a.writeAuthoringAppVersion=function(e,t){e&&this._isAuthoringAppVersionSetByUser?t.authoringAppVersion=e:t.authoringAppVersion=v.version},a.readInitialViewProperties=function(e,t){var r;const i=new G;t.background&&(i.background=j.fromJSON(t.background));const o=null==(r=t.initialState)?void 0:r.viewpoint;if(o){if(o.rotation){D.Version.parse(t.version||"","webmap").lessThan(2,20)&&t.authoringApp===X&&(o.rotation*=-1)}i.viewpoint=U.fromJSON(o)}return t.mapRangeInfo&&(i.rangeInfo=k.fromJSON(t.mapRangeInfo)),t.spatialReference&&(i.spatialReference=_.fromJSON(t.spatialReference)),i},a.writeInitialViewProperties=function(e,t,r,i){if(!e)return;const o=e.background;o&&o.color&&(t.background=o.write(null,i)),e.viewpoint&&(t.initialState={viewpoint:e.viewpoint.write(null,i)}),e.rangeInfo&&(t.mapRangeInfo=e.rangeInfo.toJSON(i)),e.spatialReference&&(t.spatialReference=e.spatialReference.write(null,i))},a.writeLayers=function(e,t,r,i){t[r]=this._writeLayers(e,i,"operational-layers")},a.readSourceVersion=function(e,t){const[r,i]=t.version.split(".");return new D.Version(parseInt(r,10),parseInt(i,10))},a.writeSourceVersion=function(e,t,r){t[r]=`${$.major}.${$.minor}`},a.writeTables=function(e,t,r,i){const o=this._writeLayers(e,i,"tables");o.length&&(t[r]=o)},a.load=function(e){return this.addResolvingPromise(this._loadFromSource()),Promise.resolve(this)},a.loadAll=function(){return O.loadAll(this,(e=>{e(this.ground,this.basemap,this.layers,this.tables)}))},a.read=function(e,t){t={...t,origin:"web-map"};const i=this._getAuthoringPropsState();f.readLoadable(this,e,(t=>r.prototype.read.call(this,e,t)),t),this._restoreAuthoringPropsFromState(i)},a.write=function(e,t){if("loaded"!==this.loadStatus){const e=new c("webmap:not-loaded","Web map must be loaded before it can be serialized");throw H.error("#toJSON()","Web map must be loaded before it can be serialized",this.loadError||this.loadStatus),e}return this._removeDanglingLayerRefs(),t={...t,origin:"web-map",restrictedWebMapWriting:!0,webmap:this},r.prototype.write.call(this,e,t)},a.save=async function(e){e=e||{},this._validateItem(),await this._updateFromPromise,await this.load(),await this._loadLayerContainers(),await this._beforeSave(),this._validateMap();const t=this.portalItem,r={origin:"web-map",messages:[],writtenProperties:[],url:t.itemUrl&&d.urlToObject(t.itemUrl),portal:t.portal||I.getDefault()},i=this.write(null,r);return this._validateJSONForWriting(r,e),await this._updateItemProperties(t),await this._updateItem(t,i,r),await this._updateItemThumbnail(),t},a.saveAs=async function(e,t){t=t||{};const r=this._getPortalItem(e);await this._updateFromPromise,await this.load(),await this._loadLayerContainers(),await this._beforeSave(),this._validateMap();const i={origin:"web-map",messages:[],writtenProperties:[],url:null,portal:r.portal},o=this.write(null,i);this._validateJSONForWriting(i,t),await this._updateItemPropertiesForSaveAs(r);const a=this._getThumbnailState();return await this._createItem(r,o,i,t),this._restoreThumbnailFromState(a),await this._updateItemThumbnail(),r},a.updateFrom=async function(e,t){const r=this._updateFromInternal(e,t);this._updateFromPromise=r,await r;r===this._updateFromPromise&&(this._updateFromPromise=null)},a.getLayerJSONFromResourceInfo=function(e){var t,r,i,o;const a=this.resourceInfo;return this._collectAllLayersJSON(y.flatten([null==a||null==(t=a.baseMap)?void 0:t.baseMapLayers,null==a?void 0:a.operationalLayers,null==(r=this.basemap)||null==(i=r.resourceInfo)||null==(o=i.data)?void 0:o.baseMapLayers])).find((t=>t.id===e.id))},a._collectAllLayersJSON=function(e){return e.reduce(((e,t)=>(e.push(t),"GroupLayer"===t.layerType&&(e=e.concat(this._collectAllLayersJSON(t.layers||[]))),e)),[])},a._writeLayers=function(e,t,r){t={...t,layerContainerType:r};return e.map((e=>o.unwrap(L.getLayerJSON(e,"tables"===r?null:this.getLayerJSONFromResourceInfo(e),t)))).filter(Boolean).toArray()},a._loadFromSource=function(){return this.resourceInfo?this._loadFromJSON(this.resourceInfo,{origin:"web-map"}):this.portalItem&&this.portalItem.id?this._loadFromItem(this.portalItem):Promise.resolve(null)},a._loadFromItem=function(e){return e.load().catch((e=>{throw new c("webmap:load-portal-item","Failed to load portal item",{error:e})})).then((()=>{if("Web Map"!==e.type)throw new c("webmap:invalid-portal-item","Invalid portal item type '${type}', expected 'Web Map'",{type:e.type})})).then((()=>e.fetchData())).then((t=>(this.resourceInfo=t,this._readAndLoadFromJSON(t,{origin:"web-map",portal:e.portal||I.getDefault()})))).then((()=>this._computeInitialViewpoint()))},a._readAndLoadFromJSON=function(e,t){const r=this._validateJSON(e);return this.read(r,t),this._loadFromJSON(r,t)},a._validateJSON=function(e){const t=D.Version.parse(e.version||"","webmap");return $.validate(t),e.version=`${t.major}.${t.minor}`,e},a._loadFromJSON=function(t,r){const i={context:{...r,layerContainerType:"operational-layers"}};return this.portalItem&&(i.context.portal=this.portalItem.portal||I.getDefault()),new Promise((function(t,r){e(["./layers/support/layersCreator"],t,r)})).then((({populateOperationalLayers:e})=>{const r=[],o=t.operationalLayers;o&&o.length&&r.push(e(this.layers,o,i));const a={...i,context:{...i.context,layerContainerType:"tables"},defaultLayerType:"ArcGISFeatureLayer"},n=t.tables;return n&&n.length&&r.push(e(this.tables,n,a)),w.eachAlways(r).then((()=>{}))}))},a._computeInitialViewpoint=async function(){var e,t;let r=this.initialViewProperties;if(null==(e=r)||null==(t=e.viewpoint)?void 0:t.targetGeometry)return;const i=await this._getExtentFromItem();i&&(r=r?r.clone():new G,r.viewpoint=new U,r.viewpoint.targetGeometry=i,this.initialViewProperties=r)},a._getExtentFromItem=async function(){var t,r;const i=null==(t=this.initialViewProperties)?void 0:t.spatialReference,o=null==(r=this.portalItem)?void 0:r.extent;if(i&&o){if(i.isWGS84)return o.clone();if(i.isWebMercator)return g.geographicToWebMercator(o);return(await new Promise((function(t,r){e(["./portal/support/geometryServiceUtils"],t,r)}))).create(this.portalItem).then((e=>{const t=new N;return t.geometries=[o],t.outSpatialReference=i,e.project(t)})).then((e=>e[0])).catch((e=>(H.error("Error projecting item's extent:",e),null)))}return null},a._removeDanglingLayerRefs=function(){const e=this.applicationProperties,t=e&&e.viewing&&e.viewing.search,r=e=>!!this.allLayers.find((t=>t.id===e));t&&t.layers&&(t.layers=t.layers.filter((e=>r(e.id)))),t&&t.tables&&(t.tables=t.tables.filter((e=>!!this.tables.find((t=>t.id===e.id)))));const i=e&&e.editing&&e.editing.locationTracking;i&&i.info&&!r(i.info.layerId)&&(e.editing=null);const o=this.presentation&&this.presentation.slides;o&&o.forEach((e=>{e.visibleLayers&&(e.visibleLayers=e.visibleLayers.filter((e=>r(e.id))))}))},a._validateMap=function(){if(!this.basemap||!this.basemap.baseLayers.length)throw new c("webmap:save","Map does not have a valid basemap with a base layer.")},a._validateItem=function(){if(!this.portalItem)throw H.error("save: requires the portalItem property to be set"),new c("webmap:portal-item-not-set","Portal item to save to has not been set on the WebMap");this._validateItemType(this.portalItem)},a._validateItemType=function(e){if(e.type!==z)throw new c("webmap:portal-item-wrong-type",`Portal item needs to have type "${z}"`)},a._loadLayerContainers=function(){const e=[];return this.basemap&&e.push(this.basemap.load()),this.ground&&e.push(this.ground.load()),w.eachAlways(e).then((()=>{}))},a._beforeSave=async function(){const e=[];for(const t of this.allLayers)if("beforeSave"in t&&"function"==typeof t.beforeSave){const r=t.beforeSave();r&&e.push(r)}await w.eachAlways(e)},a._loadAllLayers=function(){const e=this._getAllLayersAndTables().map((e=>e.load()));return w.eachAlways(e).then((()=>{}))},a._getAllLayersAndTables=function(){return this.allLayers.concat(this.allTables)},a._validateJSONForWriting=function(e,t){let r=e.messages.filter((e=>"error"===e.type)).map((e=>new c(e.name,e.message,e.details)));if(t.ignoreUnsupported&&(r=r.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name))),r.length>0)throw new c("webmap:save","Failed to save webmap due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})},a._updateItemProperties=async function(e){e.extent=await this._getWGS84Extent(this.initialViewProperties.viewpoint.targetGeometry),await this._updateTypeKeywords(e)},a._updateItemPropertiesForSaveAs=async function(e){K.removeTypeKeyword(e,Z),K.removeTypeKeyword(e,re),K.removeTypeKeyword(e,oe),K.removeTypeKeyword(e,ae),K.removeTypeKeyword(e,ne),K.removeTypeKeyword(e,se),K.removeTypeKeyword(e,le),await this._updateItemProperties(e)},a._getWGS84Extent=async function(e){const t=e.clone().normalize();let r;if(t.length>1)for(const i of t)r?i.width>r.width&&(r=i):r=i;else r=t[0];return this._projectToWGS84(r)},a._projectToWGS84=async function(t){const r=t.spatialReference;if(r.isWGS84)return t.clone();if(r.isWebMercator)return g.webMercatorToGeographic(t);const i=await new Promise((function(t,r){e(["./portal/support/geometryServiceUtils"],t,r)})),o=await i.create(this.portalItem),a=new N;a.geometries=[t],a.outSpatialReference=_.WGS84;return(await o.project(a))[0]},a._updateTypeKeywords=async function(e){K.addTypeKeyword(e,Y),await this._loadAllLayers(),this._evalCollectorKeyword(e),this._evalDataEditingKeyword(e),this._evalOfflineKeyword(e),this._evalDeveloperBasemapKeyword(e),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))},a._evalCollectorKeyword=function(e){K.hasTypeKeyword(e,Z)||K.hasTypeKeyword(e,oe)||K.hasTypeKeyword(e,ae)||K.hasTypeKeyword(e,ne)||!this._hasEditableFeatureLayer()?K.removeTypeKeyword(e,ee):K.addTypeKeyword(e,ee)},a._evalDataEditingKeyword=function(e){this._hasEditableFeatureLayer()?K.addTypeKeyword(e,te):K.removeTypeKeyword(e,te)},a._evalOfflineKeyword=function(e){!K.hasTypeKeyword(e,re)&&this._isOfflineCapableMap()?K.addTypeKeyword(e,ie):K.removeTypeKeyword(e,ie)},a._evalDeveloperBasemapKeyword=function(e){P.hasDeveloperBasemapLayer(this.basemap)?K.addTypeKeyword(e,pe):K.removeTypeKeyword(e,pe)},a._hasEditableFeatureLayer=function(){return this._getAllLayersAndTables().some((e=>e.loaded&&this._isFeatureServiceLayer(e)&&e.capabilities.operations.supportsEditing&&e.editingEnabled))},a._isFeatureServiceLayer=function(e){return!("feature"!==e.type||!e.source||"feature-layer"!==e.source.type)},a._isOfflineCapableMap=function(){return this._getAllLayersAndTables().filter((e=>"group"!==e.type)).every((e=>e.loaded&&this._isOfflineCapableLayer(e)))},a._isOfflineCapableLayer=function(e){return this._isFeatureServiceLayer(e)&&e.capabilities.operations.supportsSync||("tile"===e.type||"vector-tile"===e.type)&&(e.capabilities.operations.supportsExportTiles||this._isExportableAGOLTileLayer(e)||P.isDeveloperBasemapLayer(e))&&e.spatialReference.equals(this.initialViewProperties.spatialReference)},a._isExportableAGOLTileLayer=function(e){return"tile"===e.type&&(R.isServerOrServicesAGOLUrl(e.url)&&ue.some((t=>e.url.toLowerCase().indexOf("/"+t+"/")>-1)))},a._updateItem=async function(e,t,r){await e.update({data:t}),this._syncUpInstanceWithItem(e,t,r)},a._createItem=async function(e,t,r,i){const o=this.portalItem,a=!!(o&&o.id&&o.portal.user),n=e.portal;if(await n._signIn(),!await this._canCopyItem(o,a,n))throw new c("webmap:save-as-copy-not-allowed","Owner of this map does not allow others to save a copy");await n.user.addItem({item:e,folder:i.folder,data:t}),this.portalItem=e,this._syncUpInstanceWithItem(e,t,r)},a._canCopyItem=async function(e,t,r){return!(o.isSome(e)&&e.id&&e.typeKeywords&&e.typeKeywords.indexOf("useOnly")>-1)||e.portal.portalHostname===r.portalHostname&&(t||await e.reload(),"admin"===e.itemControl||"update"===e.itemControl)},a._syncUpInstanceWithItem=function(e,t,r){F.MultiOriginJSONSupport.prototype.read.call(this,{version:t.version,authoringApp:t.authoringApp,authoringAppVersion:t.authoringAppVersion},{origin:"web-map",ignoreDefaults:!0,url:e.itemUrl&&d.urlToObject(e.itemUrl)}),M.updateOrigins(r),this.resourceInfo=t},a._updateItemThumbnail=async function(){this.thumbnailUrl&&this._isOverridden("thumbnailUrl")&&(await this.portalItem.updateThumbnail({thumbnail:this.thumbnailUrl,filename:this._thumbnailFilename}),this._clearThumbnailOverride())},a._getPortalItem=function(e){let t=T.from(e);return t.id&&(t=t.clone(),t.id=null),t.type||(t.type=z),t.portal||(t.portal=I.getDefault()),this._validateItemType(t),t},a._updateFromInternal=async function(e,t){t=t||{},await W.whenTrueOnce(e,"ready"),this._updateInitialViewProperties(e,t),await this._updateThumbnailUrl(e,t)},a._updateInitialViewProperties=function(e,t){var r;t.backgroundExcluded||(this.initialViewProperties.background=null==(r=e.background)?void 0:r.clone());if(this.initialViewProperties.spatialReference=e.spatialReference.clone(),t.viewpointExcluded||(this.initialViewProperties.viewpoint=new U({rotation:e.rotation,scale:t.scalePreserved?e.scale:null,targetGeometry:this._getViewExtent(e)})),!t.widgetsExcluded)for(const i of e.persistableViewModels)i.updateWebDocument(this)},a._getViewExtent=function(e){const t=e.center.clone().normalize(),r=e.extent.clone(),i=r.width/2;return r.xmin=t.x-i,r.xmax=t.x+i,r},a._updateThumbnailUrl=async function(e,t){if(t.thumbnailExcluded)return;const r=B.getOptimalThumbnailSize(e,t.thumbnailSize),i=await e.takeScreenshot({format:"png",width:r.width,height:r.height});this._setAutoGeneratedThumbnail(i.dataUrl)},a._setAutoGeneratedThumbnail=function(e){this.thumbnailUrl=e,this._thumbnailFilename=null},a._clearThumbnailOverride=function(){this._clearOverride("thumbnailUrl"),this.clear("thumbnailUrl","user"),this._thumbnailFilename=null},a._generateCustomThumbnailFilename=function(e){if(d.isDataProtocol(e)){const t=d.dataComponents(e),r=t&&t.mediaType,i=r&&Q.get(r.toLowerCase())||null,o=`thumbnail${Date.now()}`;return i?`${o}.${i}`:o}return null},a._getThumbnailState=function(){let e=this.thumbnailUrl;return e&&(e=this._isOverridden("thumbnailUrl")?e:d.addQueryParameter(e,"w","8192")),{thumbnailUrl:e,filename:this._thumbnailFilename}},a._restoreThumbnailFromState=function(e){this.thumbnailUrl=e.thumbnailUrl,this._thumbnailFilename=e.filename},a._getAuthoringPropsState=function(){return{authoringApp:this.authoringApp,authoringAppVersion:this.authoringAppVersion,isAuthoringAppSetByUser:this._isAuthoringAppSetByUser,isAuthoringAppVersionSetByUser:this._isAuthoringAppVersionSetByUser}},a._restoreAuthoringPropsFromState=function(e){e.isAuthoringAppSetByUser?this.authoringApp=e.authoringApp:this._isAuthoringAppSetByUser=!1,e.isAuthoringAppVersionSetByUser?this.authoringAppVersion=e.authoringAppVersion:this._isAuthoringAppVersionSetByUser=!1},i.fromJSON=function(e){const t=e;if(!t)throw new c("webmap:empty-resource","Expected a JSON resource but got nothing");return new this({resourceInfo:t})},t._createClass(i,[{key:"authoringApp",set:function(e){this._isAuthoringAppSetByUser=!0,this._set("authoringApp",e)}},{key:"authoringAppVersion",set:function(e){this._isAuthoringAppVersionSetByUser=!0,this._set("authoringAppVersion",e)}},{key:"thumbnailUrl",get:function(){return this.portalItem&&this.portalItem.thumbnailUrl||null},set:function(e){e?(this._override("thumbnailUrl",e),this._thumbnailFilename=this._generateCustomThumbnailFilename(e)):this._clearThumbnailOverride()}}]),i}(F.MultiOriginJSONMixin(A.LoadableMixin(S.EsriPromiseMixin(V))));return ce.VERSION=$,r.__decorate([s.property({type:E,json:{write:!0}})],ce.prototype,"applicationProperties",void 0),r.__decorate([s.property({type:String,json:{write:{allowNull:!0,ignoreOrigin:!0}}})],ce.prototype,"authoringApp",null),r.__decorate([u.writer("authoringApp")],ce.prototype,"writeAuthoringApp",null),r.__decorate([s.property({type:String,json:{write:{allowNull:!0,ignoreOrigin:!0}}})],ce.prototype,"authoringAppVersion",null),r.__decorate([u.writer("authoringAppVersion")],ce.prototype,"writeAuthoringAppVersion",null),r.__decorate([s.property({json:{read:{source:"baseMap"},write:{target:"baseMap"}}})],ce.prototype,"basemap",void 0),r.__decorate([s.property({type:q,json:{write:{overridePolicy:e=>({enabled:!!(e&&e.length>0),ignoreOrigin:!0})}}})],ce.prototype,"bookmarks",void 0),r.__decorate([s.property({type:x,json:{read:{source:"mapFloorInfo"},write:{target:"mapFloorInfo"}}})],ce.prototype,"floorInfo",void 0),r.__decorate([s.property({type:G,nonNullable:!0,json:{read:{source:["background","initialState.viewpoint","mapRangeInfo","spatialReference"]},write:{ignoreOrigin:!0,target:{background:{type:j},"initialState.viewpoint":{type:U},mapRangeInfo:{type:k},spatialReference:{type:_}}}}})],ce.prototype,"initialViewProperties",void 0),r.__decorate([l.reader("initialViewProperties")],ce.prototype,"readInitialViewProperties",null),r.__decorate([u.writer("initialViewProperties")],ce.prototype,"writeInitialViewProperties",null),r.__decorate([s.property({json:{read:!1,write:{target:"operationalLayers",ignoreOrigin:!0}}})],ce.prototype,"layers",void 0),r.__decorate([u.writer("layers")],ce.prototype,"writeLayers",null),r.__decorate([s.property({type:T})],ce.prototype,"portalItem",void 0),r.__decorate([s.property({json:{write:!0}})],ce.prototype,"presentation",void 0),r.__decorate([s.property()],ce.prototype,"resourceInfo",void 0),r.__decorate([s.property({readOnly:!0,type:D.Version,json:{read:{source:"version"},write:{allowNull:!0,ignoreOrigin:!0,target:"version",isRequired:!0}}})],ce.prototype,"sourceVersion",void 0),r.__decorate([l.reader("sourceVersion")],ce.prototype,"readSourceVersion",null),r.__decorate([u.writer("sourceVersion")],ce.prototype,"writeSourceVersion",null),r.__decorate([s.property({json:{read:!1,write:{ignoreOrigin:!0}}})],ce.prototype,"tables",void 0),r.__decorate([u.writer("tables")],ce.prototype,"writeTables",null),r.__decorate([s.property()],ce.prototype,"thumbnailUrl",null),r.__decorate([s.property({type:C,json:{write:!0}})],ce.prototype,"widgets",void 0),ce=r.__decorate([p.subclass("esri.WebMap")],ce),ce}));
