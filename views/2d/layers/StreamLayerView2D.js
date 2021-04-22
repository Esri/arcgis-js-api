/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/maybe","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/Error","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../tasks/support/FeatureSet","./support/util","./FeatureLayerView2D"],(function(e,t,r,o,n,i,s,a,c,l,p,u,y,d,h){"use strict";function f(e,t){if(o.isNone(e)&&o.isNone(t))return null;const r={};return o.isSome(t)&&(r.geometry=t.toJSON()),o.isSome(e)&&(r.where=e),r}let m=function(t){function r(){var e;return(e=t.apply(this,arguments)||this)._enabledDataReceived=!1,e.errorString=null,e.connectionStatus="disconnected",e}e._inheritsLoose(r,t);var o=r.prototype;return o.initialize=function(){this.handles.add([this.layer.watch("purgeOptions",(()=>this._update()))])},o.destroy=function(){this.connectionStatus="disconnected"},o.on=function(e,r){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const o=t.prototype.on.call(this,e,r),n=this;return{remove(){o.remove(),"data-received"===e&&(n._proxy.closed||n.hasEventListener("data-received")||n._proxy.enableEvent("data-received",!1))}}},o.queryLatestObservations=function(e,t){if(!(this.layer.timeInfo.endField||this.layer.timeInfo.startField))throw new c("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then((e=>{const t=y.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),t}))},o._createClientOptions=function(){return{...t.prototype._createClientOptions.call(this),setProperty:e=>{this.set(e.propertyName,e.value)}}},o._createTileRendererHash=function(e){const r=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(f(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return t.prototype._createTileRendererHash.call(this,e)+r},o._createServiceOptions=async function(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),o=d.toJSONGeometryType(e.geometryType),n=e.timeInfo&&e.timeInfo.toJSON()||null,i=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:r,geometryType:o,objectIdField:t,timeInfo:n,source:this.layer.parsedUrl,serviceFilter:f(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:i,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval}},e._createClass(r,[{key:"connectionError",get:function(){if(this.errorString)return new c("stream-controller",this.errorString)}}]),r}(h);return t.__decorate([s.property()],m.prototype,"errorString",void 0),t.__decorate([s.property({readOnly:!0})],m.prototype,"connectionError",null),t.__decorate([s.property()],m.prototype,"connectionStatus",void 0),m=t.__decorate([a.subclass("esri.views.2d.layers.StreamLayerView2D")],m),m}));
