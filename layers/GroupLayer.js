// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../core/loadAll","../core/MultiOriginJSONSupport","../core/accessorSupport/decorators","../core/accessorSupport/utils","./Layer","./mixins/OperationalLayer","./mixins/PortalLayer","../support/LayersMixin","@dojo/framework/shim/Promise"],function(i,e,t,r,o,s,n,l,a,p,y,c,u,h){return function(i){function e(e){var t=i.call(this,e)||this;return t._visibilityHandles={},t.fullExtent=void 0,t.operationalLayerType="GroupLayer",t.spatialReference=void 0,t.type="group",t._visibilityWatcher=t._visibilityWatcher.bind(t),t}return t(e,i),e.prototype.initialize=function(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)},e.prototype._writeLayers=function(i,e,t,r){var o=[];if(!i)return o;i.forEach(function(i){if("write"in i&&i.write){var e=i.write(null,r);e&&e.layerType&&o.push(e)}}),e.layers=o},Object.defineProperty(e.prototype,"portalItem",{set:function(i){this._set("portalItem",i)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"visibilityMode",{set:function(i){var e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)},enumerable:!0,configurable:!0}),e.prototype.load=function(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),this.when()},e.prototype.loadAll=function(){var i=this;return n.loadAll(this,function(e){e(i.layers)})},e.prototype.layerAdded=function(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0)},e.prototype.layerRemoved=function(i){var e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)},e.prototype._turnOffOtherLayers=function(i){this.layers.forEach(function(e){e!==i&&(e.visible=!1)})},e.prototype._enforceVisibility=function(i,e){if(p.getProperties(this).initialized){var t=this.layers,r=t.find(function(i){return i.visible});switch(i){case"exclusive":t.length&&!r&&(r=t.getItemAt(0),r.visible=!0),this._turnOffOtherLayers(r);break;case"inherited":t.forEach(function(i){i.visible=e})}}},e.prototype._visibleWatcher=function(i){"inherited"===this.visibilityMode&&this.layers.forEach(function(e){e.visible=i})},e.prototype._visibilityWatcher=function(i,e,t,r){var o=r;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(o):this._isAnyLayerVisible()||(o.visible=!0);break;case"inherited":o.visible=this.visible}},e.prototype._isAnyLayerVisible=function(){return this.layers.some(function(i){return i.visible})},r([a.property()],e.prototype,"fullExtent",void 0),r([a.property({json:{read:!1,write:{ignoreOrigin:!0}}})],e.prototype,"layers",void 0),r([a.writer("layers")],e.prototype,"_writeLayers",null),r([a.property({type:["GroupLayer"]})],e.prototype,"operationalLayerType",void 0),r([a.property({json:{origins:{"web-scene":{read:!1,write:!1}}}})],e.prototype,"portalItem",null),r([a.property()],e.prototype,"spatialReference",void 0),r([a.property({json:{read:!1},readOnly:!0,value:"group"})],e.prototype,"type",void 0),r([a.property({type:String,value:"independent",json:{write:!0}})],e.prototype,"visibilityMode",null),e=r([a.subclass("esri.layers.GroupLayer")],e)}(a.declared(c.OperationalLayer(u.PortalLayer(h.LayersMixin(l.MultiOriginJSONMixin(y))))))});