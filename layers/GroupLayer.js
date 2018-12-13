// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/asyncUtils","../core/loadAll","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/accessorSupport/decorators","../core/accessorSupport/utils","./Layer","./mixins/OperationalLayer","./mixins/PortalLayer","../support/LayersMixin"],function(i,e,t,r,o,s,n,l,a,p,y,c,u,h){return function(e){function n(i){var t=e.call(this)||this;return t._visibilityHandles={},t.fullExtent=void 0,t.operationalLayerType="GroupLayer",t.spatialReference=void 0,t.type="group",t._visibilityWatcher=t._visibilityWatcher.bind(t),t}return t(n,e),n.prototype.initialize=function(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)},n.prototype._writeLayers=function(i,e,t,r){var o=[];if(!i)return o;i.forEach(function(i){if(i.write){var e=i.write(null,r);e&&e.layerType&&o.push(e)}}),e.layers=o},Object.defineProperty(n.prototype,"visibilityMode",{set:function(i){var e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)},enumerable:!0,configurable:!0}),n.prototype.load=function(){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]})),this.when()},n.prototype.loadAll=function(){var i=this;return o.safeCast(s.loadAll(this,function(e){e(i.layers)}))},n.prototype.layerAdded=function(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0)},n.prototype.layerRemoved=function(i){var e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)},n.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":case"3d":return l.create(function(e){i(["../views/layers/GroupLayerView"],e)})}},n.prototype._turnOffOtherLayers=function(i){this.layers.forEach(function(e){e!==i&&(e.visible=!1)})},n.prototype._enforceVisibility=function(i,e){if(p.getProperties(this).initialized){var t=this.layers,r=t.find(function(i){return i.visible});switch(i){case"exclusive":t.length&&!r&&(r=t.getItemAt(0),r.visible=!0),this._turnOffOtherLayers(r);break;case"inherited":t.forEach(function(i){i.visible=e})}}},n.prototype._visibleWatcher=function(i){"inherited"===this.visibilityMode&&this.layers.forEach(function(e){e.visible=i})},n.prototype._visibilityWatcher=function(i,e,t,r){var o=r;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(o):this._isAnyLayerVisible()||(o.visible=!0);break;case"inherited":o.visible=this.visible}},n.prototype._isAnyLayerVisible=function(){return this.layers.some(function(i){return i.visible})},r([a.property()],n.prototype,"fullExtent",void 0),r([a.property({json:{read:!1,write:{ignoreOrigin:!0}}})],n.prototype,"layers",void 0),r([a.writer("layers")],n.prototype,"_writeLayers",null),r([a.property({type:["GroupLayer"]})],n.prototype,"operationalLayerType",void 0),r([a.property({json:{write:!1}})],n.prototype,"portalItem",void 0),r([a.property()],n.prototype,"spatialReference",void 0),r([a.property({json:{read:!1},readOnly:!0,value:"group"})],n.prototype,"type",void 0),r([a.property({type:String,value:"independent",json:{write:!0}})],n.prototype,"visibilityMode",null),n=r([a.subclass("esri.layers.GroupLayer")],n)}(a.declared(y,h,n,c,u))});