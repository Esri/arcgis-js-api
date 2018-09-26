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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/assignHelper","../../../core/Collection","../../../core/Error","../../../core/Evented","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../../../tasks/support/FeatureSet","./FeatureLayerView2D","./features/controllers"],function(e,t,r,n,o,i,c,a,s,p,l,u,d){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.errorString=null,t.connectionStatus="disconnected",t.filter=null,t.graphics=new i,t}return r(t,e),t.prototype.initialize=function(){var e=this;this.when().then(function(){var t=e.watch("layer.filter",function(t){s.all([d.getControllerConfiguration(e.layer),e._proxy.when()]).then(function(t){var r=t[0],n=t[1];e.tileRenderer.clear(),n.configure({controller:r})})});e.handles.add(t)})},t.prototype.destroy=function(){this.connectionStatus="disconnected"},Object.defineProperty(t.prototype,"connectionError",{get:function(){if(this.errorString)return new c("stream-controller",this.errorString)},enumerable:!0,configurable:!0}),t.prototype.updateFilter=function(e){return"connected"!==this.connectionStatus?s.reject(new c("stream-layer-view: updateFilter","Cannot update filter. The connection with the stream service is closed")):(this.set("filter",e),s.resolve({filter:e}))},t.prototype.on=function(e,t){"data-received"===e&&this._proxy.enableEvent("data-received",!0);var r=this.inherited(arguments),n=this;return{remove:function(){r.remove(),n.hasEventListener("data-received")||n._proxy.enableEvent("data-received",!1)}}},t.prototype.queryLatestObservations=function(e){var t=this;return this._proxy.queryLatestObservations(this._cleanUpQuery(e)).then(function(e){var r=l.fromJSON(e);return r.features.forEach(function(e){e.layer=t.layer,e.sourceLayer=t.layer}),r})},t.prototype.connect=function(){return s.resolve()},t.prototype.disconnect=function(){},t.prototype._createClientOptions=function(){var e=this,t=this.inherited(arguments);return o({},t,{emitEvent:function(t){e.emit(t.name,t.event)},setProperty:function(t){e.set(t.propertyName,t.value)}})},n([p.property()],t.prototype,"errorString",void 0),n([p.property({dependsOn:["errorString"],readOnly:!0})],t.prototype,"connectionError",null),n([p.property()],t.prototype,"connectionStatus",void 0),n([p.aliasOf("layer.filter")],t.prototype,"filter",void 0),n([p.property({readOnly:!0})],t.prototype,"graphics",void 0),t=n([p.subclass("esri.views.2d.layers.StreamLayerView2D")],t)}(p.declared(u,a))});