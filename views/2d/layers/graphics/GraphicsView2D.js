/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../../../chunks/tslib.es6.js";import t from"../../../../core/Accessor.js";import{bidiText as s}from"../../../../core/BidiText.js";import{HandleOwnerMixin as i}from"../../../../core/HandleOwner.js";import r from"../../../../core/has.js";import{isSome as o,isNone as a}from"../../../../core/maybe.js";import{throwIfAborted as h,isAbortError as n,throwIfAbortError as l}from"../../../../core/promiseUtils.js";import{watch as d}from"../../../../core/reactiveUtils.js";import{property as p}from"../../../../core/accessorSupport/decorators/property.js";import"../../../../core/arrayUtils.js";import"../../../../core/accessorSupport/ensureType.js";import{subclass as c}from"../../../../core/accessorSupport/decorators/subclass.js";import g from"../../../../geometry/SpatialReference.js";import{width as u,height as m,create as _}from"../../../../geometry/support/aaBoundingRect.js";import{closeRingsAndFixWinding as f}from"../../../../geometry/support/coordsUtils.js";import{getJsonType as y,isPolygon as S,isPolyline as b,isExtent as w,isPoint as T,isMultipoint as v}from"../../../../geometry/support/jsonUtils.js";import{normalizeCentralMeridianForDisplay as I}from"../../../../geometry/support/normalizeUtilsSync.js";import{getInfo as U}from"../../../../geometry/support/spatialReferenceUtils.js";import{checkProjectionSupport as G,project as M}from"../../../../layers/graphics/data/projectionSupport.js";import{symbolToCIM as C}from"../../../../symbols/cim/CIMSymbolHelper.js";import{errorPolylineSymbol2D as j,errorPolygonSymbol2D as P,errorPointSymbol2D as x}from"../../../../symbols/support/defaults.js";import{FILTER_FLAG_0 as A}from"../../engine/webgl/definitions.js";import{WGLSymbologyType as R}from"../../engine/webgl/enums.js";import{GraphicTile as q}from"../../engine/webgl/GraphicTile.js";import{TileData as D}from"../../engine/webgl/TileData.js";import F from"../../engine/webgl/WGLDisplayObject.js";import{MeshData as z}from"../../engine/webgl/mesh/MeshData.js";import{WGLMeshFactory as O}from"../../engine/webgl/mesh/factories/WGLMeshFactory.js";import{WGLTemplateStore as H}from"../../engine/webgl/mesh/templates/WGLTemplateStore.js";import{createMatcher as k}from"../../engine/webgl/util/Matcher.js";import{createMatcherSchema as E,createSymbolSchemaOptions as N}from"../features/schemaUtils.js";import V from"../features/support/AttributeStore.js";import{ComputedAttributeStorage as B}from"../features/support/ComputedAttributeStorage.js";import{GraphicsReader as L}from"../features/support/GraphicsReader.js";import W from"./GraphicStore.js";import{intersectingInternationalDateline as J,isMarkerSymbol as Z,isTextSymbol as K,polygonFromExtent as Q,TILE_SIZE as X,PIXEL_BUFFER as Y}from"./graphicsUtils.js";import{expandSymbol as $}from"../support/cimSymbolUtils.js";import{GraphicsView as ee}from"../../../layers/GraphicsView.js";import{getWebGLCapabilities as te}from"../../../webgl/capabilities.js";import{createSymbolSchema as se}from"../features/createSymbolSchema.js";const ie=r("esri-2d-graphic-debug");function re(e,t,s){if(s.has(e))return s.get(e);const i={tile:t,addedOrModified:[],removed:[]};return s.set(e,i),i}let oe=class extends(ee(i(t))){constructor(e){super(e),this._storage=new B,this._displayIds=new Map,this._controller=new AbortController,this._tiles=new Map,this._graphicStoreUpdate=!1,this._graphicsSet=new Set,this._matcher=Promise.resolve(null),this._tileUpdateSet=new Set,this._tilesToUpdate=new Map,this._graphicIdToAbortController=new Map,this._attached=!1,this._updatingGraphicsTimer=null,this._hashToExpandedSymbol=new Map,this._hashToExpandedSymbolPromise=new Map,this._hashToCIMSymbolPromise=new Map,this._hashToCIM=new Map,this._processing=!1,this._needsProcessing=!1,this._pendingUpdate={added:new Set,updated:new Set,removed:new Set},this.lastUpdateId=-1,this.updateRequested=!1,this.graphicUpdateHandler=this.graphicUpdateHandler.bind(this)}destroy(){this._updatingGraphicsTimer&&(clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=null,this.notifyChange("updating")),this._controller.abort(),this.container.destroy(),this._set("graphics",null),this._graphicStore.clear(),this._attributeStore=null,this._hashToExpandedSymbol.clear(),this.view=null,this.renderer=null,this._hashToCIM.clear(),this._hashToCIMSymbolPromise.clear(),this._hashToExpandedSymbolPromise.clear()}_createMatcher(e,t,s){if(e){const i=E({indexCount:0,fields:{}},"feature",e);this._matcher=k(i,t,null,s)}}_createDisplayId(e){return this._displayIds.has(e)||this._displayIds.set(e,this._storage.createDisplayId()),this._displayIds.get(e)}initialize(){this._attributeStore=new V({type:"local",initialize:e=>Promise.resolve(this.container.attributeView.initialize(e)),update:e=>this.container.attributeView.requestUpdate(e),render:()=>this.container.requestRender()},te("2d"),(()=>this.notifyChange("updating"))),this.container.hasHighlight=()=>this._attributeStore.hasHighlight;const e=e=>{this._createDisplayId(e.uid),this._setFilterState(e.uid,e.visible)},t=e=>{const t=this._displayIds.get(e.uid);this._displayIds.delete(e.uid),this._storage.releaseDisplayId(t)},s=new H(this.container.getMaterialItems.bind(this.container),this.view.featuresTilingScheme.tileInfo);this._graphicStore=new W(this.view.featuresTilingScheme,this.view.state.scale,this.uid,this.graphics,e,t,this._hashToCIM),this._meshFactory=new O(null,this.uid,s),this._templateStore=s,this.handles.add([d((()=>this.renderer),(e=>{this._createMatcher(e,s,this.container.stage.resourceManager);for(const t of this.graphics)this._pendingUpdate.updated.add(t);this.requestUpdate()})),this.view.graphicsTileStore.on("update",(e=>this._onTileUpdate(e))),this.container.on("attach",(()=>{ie&&this.container.enableRenderingBounds((()=>this._graphicStore.getAllBounds())),this.graphics.items.length>0&&this._graphicsChangeHandler({target:this.graphics,added:this.graphics.items,removed:[],moved:[]}),this.handles.add(this.graphics.on("change",(e=>this._graphicsChangeHandler(e))),"graphics");const e=this.container.stage.resourceManager;this._createMatcher(this.renderer,s,e),this._graphicStore.setResourceManager(e),this._attached=!0,this.notifyChange("updating")}))]);const i=this.view.graphicsTileStore.tiles;this._onTileUpdate({added:i,removed:[]})}get updating(){return!this._attached||null!==this._updatingGraphicsTimer||this._tileUpdateSet.size>0||this._tilesToUpdate.size>0||this._attributeStore.isUpdating()}hitTest(e){if(!this.view||!this.view.position)return[];const{resolution:t,rotation:s}=this.view.state;return this._graphicStore.hitTest(e.x,e.y,2,t,s)}update(e){h(this._controller.signal);const t=e.state,{resolution:s}=t;if(this._graphicStore.updateLevel(s),this._graphicStoreUpdate=!0,this.updateRequested=!1,this._pendingUpdate.updated.size>0){if(!this._processing)return void this._updateGraphics();this._needsProcessing=!0}}viewChange(){this.requestUpdate()}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.requestUpdateCallback())}processUpdate(e){this.updateRequested&&(this.updateRequested=!1,this.update(e))}graphicUpdateHandler(e){const{graphic:t,property:s,newValue:i}=e;switch(s){case"attributes":case"geometry":case"symbol":this._pendingUpdate.updated.add(t),this.requestUpdate();break;case"visible":this._setFilterState(t.uid,i),this._attributeStore.sendUpdates()}}setHighlight(e){const t=e.map((e=>this._displayIds.get(e)));this._attributeStore.setHighlight(e,t)}_getIntersectingTiles(e){const t=this._graphicStore.getBounds(e);if(!t||0===u(t)||0===m(t))return[];const s=J(t,this.view.spatialReference);return o(s)?[...new Set([...this.view.graphicsTileStore.boundsIntersections(s[0]),...this.view.graphicsTileStore.boundsIntersections(s[1])])]:this.view.graphicsTileStore.boundsIntersections(t)}async _updateTile(e){h(this._controller.signal);const t=e.tile,s=this._getGraphicsData(this._templateStore,t,e.addedOrModified),i=await this._processGraphics(t,s);return h(this._controller.signal),this._patchTile(t.key,{type:"update",addOrUpdate:i,remove:e.removed,end:!0,clear:!1,sort:!1}),i}_patchTile(e,t){if(!this._tiles.has(e))return;const s=this._tiles.get(e);this.container.onTileData(s,t),this.container.requestRender()}_graphicsChangeHandler(e){const t=this._pendingUpdate;for(const s of e.added)t.added.add(s);for(const s of e.moved)t.updated.add(s);for(const s of e.removed)this._pendingUpdate.added.has(s)?t.added.delete(s):t.removed.add(s);this._processing?this._needsProcessing=!0:this._updateGraphics()}_getGraphicsToUpdate(){const e={added:[],removed:[],updated:[]};if(!this.graphics)return e;const t=this._pendingUpdate;for(const s of this.graphics.items)t.added.has(s)?e.added.push(s):t.updated.has(s)&&e.updated.push(s);for(const s of t.removed)this._graphicStore.has(s)&&e.removed.push(s);return t.added.clear(),t.removed.clear(),t.updated.clear(),e}async _updateGraphics(){this._processing=!0;const{added:e,removed:t,updated:s}=this._getGraphicsToUpdate(),i=this._tilesToUpdate;let r;try{if(!this._graphicStoreUpdate){const e=this.view.state,{resolution:t}=e;this._graphicStore.updateLevel(t)}const o=[],a=new Array(e.length+t.length);for(let e=0;e<s.length;e++){const t=s[e],h=this._getIntersectingTiles(t);for(const e of h){r=e.id;re(r,e,i).removed.push(this._displayIds.get(t.uid))}o.push(this._updateGraphic(t,null)),a[e]=t}const h=s.length;for(let t=0;t<e.length;t++){const s=e[t];a[h+t]=s,this._graphicsSet.add(s),o.push(this._addGraphic(s))}for(const e of t){this._abortProcessingGraphic(e.uid);const t=this._getIntersectingTiles(e);for(const s of t){r=s.id;re(r,s,i).removed.push(this._displayIds.get(e.uid))}this._graphicsSet.delete(e),this._graphicStore.remove(e)}let n;this._flipUpdatingGraphics(),await Promise.all(o);for(let e=0;e<a.length;e++){n=a[e];const t=this._getIntersectingTiles(n);for(const e of t){r=e.id;re(r,e,i).addedOrModified.push(n)}}this._graphicStore.updateZ();const l=[];for(const[e,t]of i)l.push(this._updateTile(t));await Promise.all(l)}catch(o){n(o),0}for(const a of t)try{const e=await this._getSymbolForGraphic(a,null);if(e){const t=e.hash();this._hashToExpandedSymbol.delete(t)}}catch(o){n(o),0}i.clear(),this.notifyChange("updating"),this._processing=!1,this._needsProcessing&&(this._needsProcessing=!1,this._updateGraphics())}_getArcadeInfo(e){const t=(e.attributes?Object.keys(e.attributes):[]).map((t=>({name:t,alias:t,type:"string"==typeof e.attributes[t]?"esriFieldTypeString":"esriFieldTypeDouble"})));return a(e.geometry)?null:{geometryType:y(e.geometry),spatialReference:g.fromJSON(e.geometry.spatialReference),fields:t}}_getSymbolForGraphic(e,t){return h(this._controller.signal),o(e.symbol)?Promise.resolve(e.symbol):o(this.renderer)?this.renderer.getSymbolAsync(e,{scale:this.view.scale,signal:o(t)?t.signal:null}):Promise.resolve(this._getNullSymbol(e))}_getCIMSymbol(e,t,s){let i=this._hashToCIM.get(t);if(i)return Promise.resolve(i);const r=C(e);if(o(r)){if("CIMSymbolReference"===r.type)return i=r,this._hashToCIM.set(t,i),Promise.resolve(i);let e=this._hashToCIMSymbolPromise.get(t);return e||(e=r.fetchCIMSymbol(s).then((e=>(this._hashToCIM.set(t,e.data),this._hashToCIMSymbolPromise.delete(t),e))).catch((e=>(this._hashToCIMSymbolPromise.delete(t),l(e),null))),this._hashToCIMSymbolPromise.set(t,e),e)}return Promise.resolve(null)}_expandCIMSymbol(e,t,s,i){const r=this._hashToExpandedSymbol.get(s);if(r)return Promise.resolve(r);let o=this._hashToExpandedSymbolPromise.get(s);if(o)return o;const a=this.container.stage,h=this._getArcadeInfo(t),n=N(null),l=se(e,n);return o=$(l,h,a.resourceManager,i),this._hashToExpandedSymbolPromise.set(s,o),o.then((e=>(this._hashToExpandedSymbol.set(s,e),this._hashToExpandedSymbolPromise.delete(s),e))),o}async _getSymbolResources(e,t){h(this._controller.signal);return this.container.stage?this._getSymbolForGraphic(e,t).then((i=>{const r=i.hash();return this._getCIMSymbol(i,r,t).then((i=>a(i)?null:this._expandCIMSymbol(i,e,r,t).then((e=>{const t=e.layers.filter((e=>"text"===e.type&&"string"==typeof e.text));if(t&&t.length>0){const i=new Array(t.length);for(let e=0;e<t.length;e++){const r=t[e],o=[],[a]=s(r.text);r.text=a;for(let e=0;e<a.length;e++)o.push(a.charCodeAt(e));i[e]={symbol:r,id:e,glyphIds:o}}const o=new Map;return this.container.getMaterialItems(i).then((s=>{for(let e=0;e<t.length;e++){const i=t[e];o.set(i.cim,{text:i.text,mosaicItem:s[e].mosaicItem})}return{symbol:e,textInfo:o,hash:r}}))}return{symbol:e,hash:r}}))))})).catch((e=>(l(e),null))):null}async _projectAndNormalizeGeometry(e,t){if(h(this._controller.signal),a(e.geometry)||"mesh"===e.geometry.type)return null;let s=e.geometry;if(S(s)){const e=s.rings;s.rings=e}else if(b(s)){const e=s.paths;s.paths=e}else if(w(s)){const i=await this._getSymbolForGraphic(e,t);if(h(this._controller.signal),Z(i.type)||K(i.type)){s=s.center}else s=Q(s)}await G(s.spatialReference,this.view.spatialReference);const i=I(s),r=M(i,s.spatialReference,this.view.spatialReference);return f(r),r}_onTileUpdate(e){const t=U(this.view.spatialReference);if(e.added&&e.added.length>0)for(const s of e.added)this._addNewTile(s,t);if(e.removed&&e.removed.length>0)for(const s of e.removed)this._removeTile(s.key)}async _addGraphic(e){this._abortProcessingGraphic(e.uid),h(this._controller.signal);const t=new AbortController;this._graphicIdToAbortController.set(e.uid,t);const s={signal:t.signal};try{await this._addOrUpdateGraphic(e,s),h(this._controller.signal),this._graphicIdToAbortController.delete(e.uid)}catch(i){if(this._graphicIdToAbortController.delete(e.uid),!n(i))throw i}}_updateGraphic(e,t){h(this._controller.signal);const s=this._projectAndNormalizeGeometry(e,t),i=this._getSymbolResources(e,t);return Promise.all([s,i]).then((([t,s])=>{h(this._controller.signal),this._graphicStore.addOrModify(e,s,t)}))}_addOrUpdateGraphic(e,t){h(this._controller.signal);const s=this._projectAndNormalizeGeometry(e,t),i=this._getSymbolResources(e,t);return Promise.all([s,i]).then((([t,s])=>{h(this._controller.signal),this._graphicsSet.has(e)&&this._graphicStore.addOrModify(e,s,t)}))}_addTile(e){const t=this.view.featuresTilingScheme.getTileBounds(_(),e),s=new q(e,t[0],t[3]);return this._tiles.set(e,s),this.container.addChild(s),s}async _addNewTile(e,t){const s=this._addTile(e.key),i=this._graphicStore.queryTileData(this._templateStore,e);if(0===i.length)return;if(t){const s=Math.round((t.valid[1]-t.valid[0])/e.resolution);for(const e of i)e.geometry&&(T(e.geometry)||v(e.geometry))&&this._wrapPoints(e,s)}const r=e.key;this._tileUpdateSet.add(e.key),this.notifyChange("updating");try{const t={type:"update",clear:!1,addOrUpdate:await this._processGraphics(e,i),remove:[],end:!0,sort:!1};s.patch(t),this._tileUpdateSet.delete(r),this.notifyChange("updating")}catch(o){if(this._tileUpdateSet.delete(r),this.notifyChange("updating"),!n(o))throw o}}_removeTile(e){if(!this._tiles.has(e))return;const t=this._tiles.get(e);this.container.removeChild(t),t.destroy(),this._tiles.delete(e)}_setFilterState(e,t){const s=this._displayIds.get(e),i=this._attributeStore.getHighlightFlag(e);this._attributeStore.setData(s,0,0,i|(t?A:0))}_getGraphicsData(e,t,s){const i=this.view,r=U(i.spatialReference),o=this._graphicStore.getGraphicsData(e,t,s);if(r){const e=Math.round((r.valid[1]-r.valid[0])/t.resolution);for(const t of o)t.geometry&&(T(t.geometry)||v(t.geometry))&&this._wrapPoints(t,e)}return o}_wrapPoints(e,t){const s=e.geometry;v(s)?this._wrapMultipoint(s,t):this._wrapPoint(e,t)}_wrapMultipoint(e,t){const s=e.points,i=[];let r=0,o=0;for(const[a,h]of s){if(i.push([a+r,h]),r=0,t===X){const e=5*Y;a+o<e?(i.push([t,0]),r=-t):a+o>X-e&&(i.push([-t,0]),r=t)}else a+o<-Y?(i.push([t,0]),r=-t):a+o>X+Y&&(i.push([-t,0]),r=t);o+=a}e.points=i}_wrapPoint(e,t){const s=e.geometry;if(t===X){const i=5*Y;s.x<i?e.geometry={points:[[s.x,s.y],[t,0]]}:s.x>X-i&&(e.geometry={points:[[s.x,s.y],[-t,0]]})}else s.x<-Y?e.geometry={points:[[s.x,s.y],[t,0]]}:s.x>X+Y&&(e.geometry={points:[[s.x,s.y],[-t,0]]})}_processGraphics(e,t,s){if(!(t&&t.length)||!this._meshFactory)return null;const i=L.from(t,this.uid),r=this._meshFactory;return this._matcher.then((t=>r.analyzeGraphics(i,this.container.stage.resourceManager,t,null,null,s).then((()=>(this._attributeStore.sendUpdates(),this._processAnalyzedGraphics(e,i))))))}_processAnalyzedGraphics(e,t){const s=this._meshFactory,i=t.getSize(),r=t.getCursor(),o={features:i,records:i,metrics:0},a=new z(e.key.id,o,R.DEFAULT,!1,!1),h=[];for(;r.next();){const t=r.readGraphic();t.insertAfter=-1===t.insertAfter?-1:this._displayIds.get(t.insertAfter),t.displayId=this._displayIds.get(t.attributes[this.uid]);const i=new F(t.displayId);i.insertAfter=t.insertAfter,h.push(i),s.writeGraphic(a,r,e.level,this.container.stage.resourceManager)}const n=e.tileInfoView.tileInfo.isWrappable,l=a.serialize(n);if(1!==l.length)return new D;const d=l[0].message;return D.fromVertexData(d,h)}_abortProcessingGraphic(e){if(this._graphicIdToAbortController.has(e)){this._graphicIdToAbortController.get(e).abort()}}_getNullSymbol(e){const t=e.geometry;return b(t)?j:S(t)||w(t)?P:x}_flipUpdatingGraphics(){this._updatingGraphicsTimer&&clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=setTimeout((()=>{this._updatingGraphicsTimer=null,this.notifyChange("updating")}),160),this.notifyChange("updating")}};e([p({constructOnly:!0})],oe.prototype,"requestUpdateCallback",void 0),e([p()],oe.prototype,"container",void 0),e([p({constructOnly:!0})],oe.prototype,"graphics",void 0),e([p()],oe.prototype,"updating",null),e([p()],oe.prototype,"view",void 0),e([p()],oe.prototype,"updateRequested",void 0),oe=e([c("esri.views.2d.layers.support.GraphicsView2D")],oe);const ae=oe;export{ae as default};