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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../core/asyncUtils","../core/loadAll","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/accessorSupport/decorators","../core/accessorSupport/utils","./Layer","./mixins/OperationalLayer","./mixins/PortalLayer","../support/LayersMixin"],function(e,i,t,r,o,s,n,l,a,p,y,c,u,h,d,v){return function(i){function a(e){var t=i.call(this)||this;return t._visibilityHandles={},t.fullExtent=void 0,t.operationalLayerType="GroupLayer",t.spatialReference=void 0,t.type="group",t._visibilityWatcher=t._visibilityWatcher.bind(t),t}return t(a,i),a.prototype.initialize=function(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)},a.prototype._writeLayers=function(e,i,t,r){var o=[];if(!e)return o;e.forEach(function(e){if("write"in e&&e.write){var i=e.write(null,r);i&&i.layerType&&o.push(i)}}),i.layers=o},Object.defineProperty(a.prototype,"portalItem",{set:function(e){this._set("portalItem",e)},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"visibilityMode",{set:function(e){var i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible)},enumerable:!0,configurable:!0}),a.prototype.load=function(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},e)),this.when()},a.prototype.loadAll=function(){var e=this;return n.safeCast(l.loadAll(this,function(i){i(e.layers)}))},a.prototype.layerAdded=function(e){e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this._visibilityHandles[e.uid]=e.watch("visible",this._visibilityWatcher,!0)},a.prototype.layerRemoved=function(e){var i=this._visibilityHandles[e.uid];i&&(i.remove(),delete this._visibilityHandles[e.uid]),this._enforceVisibility(this.visibilityMode,this.visible)},a.prototype.importLayerViewModule=function(i){return s(this,void 0,void 0,function(){return o(this,function(t){switch(i.type){case"2d":case"3d":return[2,p.create(function(i){return e(["../views/layers/GroupLayerView"],i)})]}return[2]})})},a.prototype._turnOffOtherLayers=function(e){this.layers.forEach(function(i){i!==e&&(i.visible=!1)})},a.prototype._enforceVisibility=function(e,i){if(c.getProperties(this).initialized){var t=this.layers,r=t.find(function(e){return e.visible});switch(e){case"exclusive":t.length&&!r&&(r=t.getItemAt(0),r.visible=!0),this._turnOffOtherLayers(r);break;case"inherited":t.forEach(function(e){e.visible=i})}}},a.prototype._visibleWatcher=function(e){"inherited"===this.visibilityMode&&this.layers.forEach(function(i){i.visible=e})},a.prototype._visibilityWatcher=function(e,i,t,r){var o=r;switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(o):this._isAnyLayerVisible()||(o.visible=!0);break;case"inherited":o.visible=this.visible}},a.prototype._isAnyLayerVisible=function(){return this.layers.some(function(e){return e.visible})},r([y.property()],a.prototype,"fullExtent",void 0),r([y.property({json:{read:!1,write:{ignoreOrigin:!0}}})],a.prototype,"layers",void 0),r([y.writer("layers")],a.prototype,"_writeLayers",null),r([y.property({type:["GroupLayer"]})],a.prototype,"operationalLayerType",void 0),r([y.property({json:{origins:{"web-scene":{read:!1,write:!1}}}})],a.prototype,"portalItem",null),r([y.property()],a.prototype,"spatialReference",void 0),r([y.property({json:{read:!1},readOnly:!0,value:"group"})],a.prototype,"type",void 0),r([y.property({type:String,value:"independent",json:{write:!0}})],a.prototype,"visibilityMode",null),a=r([y.subclass("esri.layers.GroupLayer")],a)}(y.declared(u,v,a,h,d))});