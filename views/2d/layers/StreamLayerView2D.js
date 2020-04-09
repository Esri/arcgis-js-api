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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Error","../../../core/maybe","../../../core/accessorSupport/decorators","../../../tasks/support/FeatureSet","./FeatureLayerView2D","./support/util"],(function(e,r,t,n,o,i,a,s,p,c,u,l,d){function y(e,r){if(p.isNone(e)&&p.isNone(r))return null;var t={};return p.isSome(r)&&(t.geometry=r.toJSON()),p.isSome(e)&&(t.where=e),t}return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._enabledDataReceived=!1,r.errorString=null,r.connectionStatus="disconnected",r}return t(r,e),r.prototype.initialize=function(){var e=this;this.handles.add([this.layer.watch("purgeOptions",(function(){return e._renderingConfigHashChanged()}))])},r.prototype.destroy=function(){this.connectionStatus="disconnected"},Object.defineProperty(r.prototype,"connectionError",{get:function(){if(this.errorString)return new s("stream-controller",this.errorString)},enumerable:!0,configurable:!0}),r.prototype.on=function(e,r){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));var t=this.inherited(arguments,[e,r]),n=this;return{remove:function(){t.remove(),"data-received"===e&&(n._proxy.closed||n.hasEventListener("data-received")||n._proxy.enableEvent("data-received",!1))}}},r.prototype.queryLatestObservations=function(e,r){var t=this;return this._proxy.queryLatestObservations(this._cleanUpQuery(e),r).then((function(e){var r=u.fromJSON(e);return r.features.forEach((function(e){e.layer=t.layer,e.sourceLayer=t.layer})),r}))},r.prototype._createClientOptions=function(){var e=this,r=this.inherited(arguments);return o({},r,{setProperty:function(r){e.set(r.propertyName,r.value)}})},r.prototype._createTileRendererHash=function(){var e=this.inherited(arguments),r=this.layer,t=JSON.stringify(r.geometryDefinition)+"."+r.definitionExpression,n=r.purgeOptions&&JSON.stringify(r.purgeOptions);return e+"."+t+"."+n},r.prototype._createServiceOptions=function(){return a(this,void 0,void 0,(function(){var e,r,t,n,o,a;return i(this,(function(i){return e=this.layer,r=e.objectIdField,t=e.fields.map((function(e){return e.toJSON()})),n=d.toJSONGeometryType(e.geometryType),o=e.timeInfo&&e.timeInfo.toJSON()||null,a=e.spatialReference?e.spatialReference.toJSON():null,[2,{type:"stream",fields:t,geometryType:n,objectIdField:r,timeInfo:o,source:this.layer.parsedUrl.path,content:this.layer.parsedUrl.query,serviceFilter:y(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:a}]}))}))},n([c.property()],r.prototype,"errorString",void 0),n([c.property({dependsOn:["errorString"],readOnly:!0})],r.prototype,"connectionError",null),n([c.property()],r.prototype,"connectionStatus",void 0),r=n([c.subclass("esri.views.2d.layers.StreamLayerView2D")],r)}(c.declared(l))}));