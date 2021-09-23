/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Graphic","../../../core/Accessor","../../../core/Collection","../../../core/handleUtils","../../../core/Logger","../../../core/maybe","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../layers/buildingSublayers/BuildingGroupSublayer","./BuildingComponentSublayerView3D","./BuildingSublayerView3D","./LayerView3D","./i3s/BuildingFilterUtil","./i3s/I3SUtil","../support/updatingProperties","../../layers/BuildingSceneLayerView"],(function(e,r,i,t,s,n,o,a,l,u,c,p,y,d,h,g,f,b,w,V,_,m){"use strict";const C=o.getLogger("esri.views.3d.layers.BuildingSceneLayerView3D"),v=f.BuildingSublayerView3DMixin(t);let S=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).type="building-scene-3d",e.sublayerViews=new s,e._abortController=l.createAbortController(),e._loadingComponents=0,e}e._inheritsLoose(t,r);var o=t.prototype;return o.isUpdating=function(){return this._loadingComponents>0||this.sublayerViews&&this.sublayerViews.some((e=>e.updating))},o.initialize=function(){V.checkSpatialReference(this.layer.spatialReference,this.view.spatialReference,this.view.viewingMode),this.initializeSubLayerViews(this.layer.sublayers,this)},o.destroy=function(){this.sublayerViews&&(this.sublayerViews.forEach((e=>e.destroy())),this.sublayerViews=null),this._abortController.abort(),this._abortController=null},o.initializeSubLayerViews=function(e,r){const i=this,t=this.view;e.forEach((e=>{if(!e.isEmpty)if("building-group"===e.type){const i=new v({sublayer:e,view:t,parent:r});this.initializeSubLayerViews(e.sublayers,i)}else"mesh"===e.geometryType&&(this._loadingComponents++,e.load({signal:this._abortController.signal}).then((()=>{const s=new g({sublayer:e,layerView:i,view:t,parent:r});this.sublayerViews.push(s),this.handles.add([u.init(s,"updating",(()=>this.notifyChange("updating")),!0),u.init(s,"updatingProgress",(()=>this.notifyChange("updatingProgressValue")),!0)])})).catch((r=>{l.isAbortError(r)||C.error(`Error while creating view for sublayer ${e.id}\nLayer: ${this.layer.url}\n`,r)})).then((()=>{this._loadingComponents--,this.notifyChange("updating"),this.notifyChange("updatingProgressValue")})))}))},o.getGraphicFromIntersectorMetadata=function(e){for(const r of this.sublayerViews.items)if(r.sublayer.uid===e.sublayerUid)return r.getGraphicFromIntersectorMetadata(e);return null},o.fetchPopupFeatures=function(){var r=e._asyncToGenerator((function*(e,r){if(!a.isSome(r)||!r.clientGraphics||0===r.clientGraphics.length)return;const i=this._findComponent(r.clientGraphics[0].sourceLayer);return a.isNone(i)?void 0:i.fetchPopupFeatures(e,r)}));function i(e,i){return r.apply(this,arguments)}return i}(),o.whenGraphicBounds=function(e){const r=this._findComponent(e.sourceLayer);return a.isNone(r)?Promise.reject():r.whenGraphicBounds(e)},o._findComponent=function(e){return this.sublayerViews.find((r=>e===r.sublayer))},o.highlight=function(e){e instanceof i?e=[e]:e instanceof s&&(e=e.toArray());const r=[];if(Array.isArray(e)&&e.length>0&&e[0]instanceof i){const i=e,t=new Map;for(const e of i){let r=t.get(e.sourceLayer);null==r&&(r=[],t.set(e.sourceLayer,r)),r.push(e)}this.sublayerViews.forEach((e=>{const i=t.get(e.sublayer);i&&r.push(e.highlight(i))}))}return n.handlesGroup(r)},o.getUsedMemory=function(){return this.sublayerViews.reduce(((e,r)=>e+r.getUsedMemory()),0)},o.getUnloadedMemory=function(){return this.sublayerViews.reduce(((e,r)=>e+r.getUnloadedMemory()),0)},o.ignoresMemoryFactor=function(){return!1},e._createClass(t,[{key:"filterExpression",get:function(){const e=this.layer.activeFilterId,r=null!=e?this.layer.filters.find((r=>r.id===e)):null,i=null!=r?r.filterBlocks.find((e=>"solid"===e.filterMode.type)):null;return i?i.filterExpression:null}},{key:"filterExpressions",get:function(){const e=this.layer.activeFilterId,r=null!=e?this.layer.filters.find((r=>r.id===e)):null;return r&&r.filterBlocks?r.filterBlocks.toArray().map((e=>[e.filterExpression,w.parseFilterMode(e)])):[]}},{key:"updatingProgressValue",get:function(){const e=this.sublayerViews,r=this._loadingComponents+(e?e.length:0);return e.reduce(((e,r)=>e+r.updatingProgress),0)/r}}]),t}(b.LayerView3D(m));return r.__decorate([c.property()],S.prototype,"sublayerViews",void 0),r.__decorate([c.property({readOnly:!0})],S.prototype,"filterExpression",null),r.__decorate([c.property({readOnly:!0})],S.prototype,"filterExpressions",null),r.__decorate([c.property(_.updatingProgress)],S.prototype,"updatingProgress",void 0),r.__decorate([c.property({readOnly:!0,dependsOn:[]})],S.prototype,"updatingProgressValue",null),S=r.__decorate([d.subclass("esri.views.3d.layers.BuildingSceneLayerView3D")],S),S}));
