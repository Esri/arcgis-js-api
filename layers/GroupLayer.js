// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../core/loadAll","../core/maybe","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/accessorSupport/decorators","../core/accessorSupport/utils","./Layer","./mixins/OperationalLayer","./mixins/PortalLayer","../support/LayersMixin","../webdoc/support/writeUtils","@dojo/framework/shim/Promise"],(function(e,i,t,r,o,s,n,a,l,p,y,c,u,d){return function(e){function i(i){var t=e.call(this,i)||this;return t._visibilityHandles={},t.fullExtent=void 0,t.operationalLayerType="GroupLayer",t.spatialReference=void 0,t.type="group",t._visibilityWatcher=t._visibilityWatcher.bind(t),t}return t.__extends(i,e),i.prototype.initialize=function(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)},i.prototype._writeLayers=function(e,i,t,r){var s=[];if(!e)return s;e.forEach((function(e){var i=d.getLayerJSON(e,r.webmap?r.webmap.getLayerJSONFromResourceInfo(e):null,r);o.isSome(i)&&i.layerType&&s.push(i)})),i.layers=s},Object.defineProperty(i.prototype,"portalItem",{set:function(e){this._set("portalItem",e)},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"visibilityMode",{set:function(e){var i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible)},enumerable:!0,configurable:!0}),i.prototype.load=function(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},e)),n.resolve(this)},i.prototype.loadAll=function(){var e=this;return r.loadAll(this,(function(i){i(e.layers)}))},i.prototype.layerAdded=function(e){e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this._visibilityHandles[e.uid]=e.watch("visible",this._visibilityWatcher,!0)},i.prototype.layerRemoved=function(e){var i=this._visibilityHandles[e.uid];i&&(i.remove(),delete this._visibilityHandles[e.uid]),this._enforceVisibility(this.visibilityMode,this.visible)},i.prototype._turnOffOtherLayers=function(e){this.layers.forEach((function(i){i!==e&&(i.visible=!1)}))},i.prototype._enforceVisibility=function(e,i){if(l.getProperties(this).initialized){var t=this.layers,r=t.find((function(e){return e.visible}));switch(e){case"exclusive":t.length&&!r&&((r=t.getItemAt(0)).visible=!0),this._turnOffOtherLayers(r);break;case"inherited":t.forEach((function(e){e.visible=i}))}}},i.prototype._visibleWatcher=function(e){"inherited"===this.visibilityMode&&this.layers.forEach((function(i){i.visible=e}))},i.prototype._visibilityWatcher=function(e,i,t,r){var o=r;switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(o):this._isAnyLayerVisible()||(o.visible=!0);break;case"inherited":o.visible=this.visible}},i.prototype._isAnyLayerVisible=function(){return this.layers.some((function(e){return e.visible}))},t.__decorate([a.property()],i.prototype,"fullExtent",void 0),t.__decorate([a.property({json:{read:!1,write:{ignoreOrigin:!0}}})],i.prototype,"layers",void 0),t.__decorate([a.writer("layers")],i.prototype,"_writeLayers",null),t.__decorate([a.property({type:["GroupLayer"]})],i.prototype,"operationalLayerType",void 0),t.__decorate([a.property({json:{origins:{"web-document":{read:!1,write:!1}}}})],i.prototype,"portalItem",null),t.__decorate([a.property()],i.prototype,"spatialReference",void 0),t.__decorate([a.property({json:{read:!1},readOnly:!0,value:"group"})],i.prototype,"type",void 0),t.__decorate([a.property({type:String,value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],i.prototype,"visibilityMode",null),i=t.__decorate([a.subclass("esri.layers.GroupLayer")],i)}(y.OperationalLayer(c.PortalLayer(u.LayersMixin(s.MultiOriginJSONMixin(p)))))}));