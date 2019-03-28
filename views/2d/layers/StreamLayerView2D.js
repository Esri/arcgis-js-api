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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/assignHelper","../../../core/Collection","../../../core/Error","../../../core/Evented","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../../../tasks/support/FeatureSet","./FeatureLayerView2D","./features/controllers"],function(e,r,t,n,o,i,c,a,s,p,u,l,y){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.errorString=null,r.connectionStatus="disconnected",r.graphics=new i,r}return t(r,e),r.prototype.initialize=function(){var e=this;this.when().then(function(){var r=e.watch("layer.filter",function(r){s.all([y.getControllerConfiguration(e.layer,e.filter),e._proxy.when()]).then(function(r){var t=r[0],n=r[1];e.tileRenderer.clear(),n.configure({controller:t})})});e.handles.add(r)})},r.prototype.destroy=function(){this.connectionStatus="disconnected"},Object.defineProperty(r.prototype,"connectionError",{get:function(){if(this.errorString)return new c("stream-controller",this.errorString)},enumerable:!0,configurable:!0}),r.prototype.on=function(e,r){"data-received"===e&&this._proxy.enableEvent("data-received",!0);var t=this.inherited(arguments),n=this;return{remove:function(){t.remove(),n.hasEventListener("data-received")||n._proxy.enableEvent("data-received",!1)}}},r.prototype.queryLatestObservations=function(e){var r=this;return this._proxy.queryLatestObservations(this._cleanUpQuery(e)).then(function(e){var t=u.fromJSON(e);return t.features.forEach(function(e){e.layer=r.layer,e.sourceLayer=r.layer}),t})},r.prototype.connect=function(){return s.resolve()},r.prototype.disconnect=function(){},r.prototype._createClientOptions=function(){var e=this,r=this.inherited(arguments);return o({},r,{emitEvent:function(r){e.emit(r.name,r.event)},setProperty:function(r){e.set(r.propertyName,r.value)}})},n([p.property()],r.prototype,"errorString",void 0),n([p.property({dependsOn:["errorString"],readOnly:!0})],r.prototype,"connectionError",null),n([p.property()],r.prototype,"connectionStatus",void 0),n([p.property({readOnly:!0})],r.prototype,"graphics",void 0),r=n([p.subclass("esri.views.2d.layers.StreamLayerView2D")],r)}(p.declared(l,a))});