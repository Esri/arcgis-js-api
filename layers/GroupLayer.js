// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","./Layer","../core/MultiOriginJSONSupport","./mixins/PortalLayer","./mixins/OperationalLayer","../support/LayersMixin","../core/accessorSupport/utils","../core/accessorSupport/decorators"],function(i,e,t,r,o,s,l,n,a,p,y){var c=function(i){function e(e){var t=i.call(this)||this;return t._visibilityHandles={},t.fullExtent=void 0,t.operationalLayerType="GroupLayer",t.spatialReference=void 0,t.type="group",t._visibilityWatcher=t._visibilityWatcher.bind(t),t}return t(e,i),e.prototype.initialize=function(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)},e.prototype._writeLayers=function(i,e,t,r){var o=[];return i?(i.forEach(function(i){if(i.write){var e=i.write(null,r);e&&e.layerType&&o.push(e)}}),void(e.layers=o)):o},Object.defineProperty(e.prototype,"visibilityMode",{set:function(i){var e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)},enumerable:!0,configurable:!0}),e.prototype.load=function(){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]})),this},e.prototype.layerAdded=function(i,e){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0)},e.prototype.layerRemoved=function(i,e){var t=this._visibilityHandles[i.uid];t&&(t.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)},e.prototype._turnOffOtherLayers=function(i){this.layers.forEach(function(e){e!==i&&(e.visible=!1)})},e.prototype._enforceVisibility=function(i,e){if(p.getProperties(this).initialized){var t=this.layers,r=t.find(function(i){return i.visible});switch(i){case"exclusive":t.length&&!r&&(r=t.getItemAt(0),r.visible=!0),this._turnOffOtherLayers(r);break;case"inherited":t.forEach(function(i){i.visible=e})}}},e.prototype._visibleWatcher=function(i){"inherited"===this.visibilityMode&&this.layers.forEach(function(e){e.visible=i})},e.prototype._visibilityWatcher=function(i,e,t,r){var o=r;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(o):this._isAnyLayerVisible()||(o.visible=!0);break;case"inherited":o.visible=this.visible}},e.prototype._isAnyLayerVisible=function(){return this.layers.some(function(i){return i.visible})},e}(y.declared(o,a,s,n,l));return r([y.shared({"2d":"../views/layers/GroupLayerView","3d":"../views/layers/GroupLayerView"})],c.prototype,"viewModulePaths",void 0),r([y.property()],c.prototype,"fullExtent",void 0),r([y.property({json:{read:!1,write:{ignoreOrigin:!0}}})],c.prototype,"layers",void 0),r([y.writer("layers")],c.prototype,"_writeLayers",null),r([y.property()],c.prototype,"operationalLayerType",void 0),r([y.property({json:{write:!1}})],c.prototype,"portalItem",void 0),r([y.property()],c.prototype,"spatialReference",void 0),r([y.property({json:{read:!1}})],c.prototype,"type",void 0),r([y.property({json:{read:!1,write:!1}})],c.prototype,"url",void 0),r([y.property({value:"independent",json:{write:!0}})],c.prototype,"visibilityMode",null),c=r([y.subclass("esri.layers.GroupLayer")],c)});