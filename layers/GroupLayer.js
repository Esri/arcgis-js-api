// COPYRIGHT © 2016 Esri
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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","./Layer","../core/MultiOriginJSONSupport","./mixins/PortalLayer","./mixins/OperationalLayer","../support/LayersMixin","../core/accessorSupport/utils","../core/accessorSupport/decorators"],function(i,e,t,r,s,o,l,n,a,p,y){function h(){return s}var c=function(i){function e(e){i.call(this),this._visibilityHandles={},this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._visibilityWatcher=this._visibilityWatcher.bind(this)}return t(e,i),e.prototype.initialize=function(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)},e.prototype._writeLayers=function(i,e,t){var r=[];return i?(i.forEach(function(i){if(i.write){var e=i.write(null,t);e&&e.layerType&&r.push(e)}}),void(e.layers=r)):r},Object.defineProperty(e.prototype,"visibilityMode",{set:function(i){this._get("visibilityMode")!==i&&this._enforceVisibility(i,this.visible),this._set("visibilityMode",i)},enumerable:!0,configurable:!0}),e.prototype.load=function(){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]})),this},e.prototype.layerAdded=function(i,e){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0)},e.prototype.layerRemoved=function(i,e){var t=this._visibilityHandles[i.uid];t&&(t.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)},e.prototype._turnOffOtherLayers=function(i){this.layers.forEach(function(e){e!==i&&(e.visible=!1)})},e.prototype._enforceVisibility=function(i,e){if(p.getProperties(this).initialized){var t=this.layers,r=t.find(function(i){return i.visible});switch(i){case"exclusive":t.length&&!r&&(r=t.getItemAt(0),r.visible=!0),this._turnOffOtherLayers(r);break;case"inherited":t.forEach(function(i){i.visible=e})}}},e.prototype._visibleWatcher=function(i){"inherited"===this.visibilityMode&&this.layers.forEach(function(e){e.visible=i})},e.prototype._visibilityWatcher=function(i,e,t,r){var s=r;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(s):this._isAnyLayerVisible()||(s.visible=!0);break;case"inherited":s.visible=this.visible}},e.prototype._isAnyLayerVisible=function(){return this.layers.some(function(i){return i.visible})},r([y.shared({"2d":"../views/layers/GroupLayerView","3d":"../views/layers/GroupLayerView"})],e.prototype,"viewModulePaths",void 0),r([y.property()],e.prototype,"fullExtent",void 0),r([y.property({json:{readable:!1,writeAlways:!0}})],e.prototype,"layers",void 0),r([y.write("layers")],e.prototype,"_writeLayers",null),r([y.property()],e.prototype,"operationalLayerType",void 0),r([y.property({json:{writable:!1}})],e.prototype,"portalItem",void 0),r([y.property()],e.prototype,"spatialReference",void 0),r([y.property({json:{readable:!1}})],e.prototype,"type",void 0),r([y.property({json:{readable:!1,writable:!1}})],e.prototype,"url",void 0),r([y.property({value:"independent",json:{writable:!0}})],e.prototype,"visibilityMode",null),e=r([y.subclass("esri.layers.GroupLayer")],e)}(y.declared(h(),a,o,n,l));return c});