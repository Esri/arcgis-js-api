/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/has","../../../../core/maybe","../../../../core/Logger","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/decorators/subclass","../../../../core/Error","../../../../core/urlUtils","../../../../core/uuid","../../../../portal/support/resourceExtension","../../../../core/promiseUtils","../../../../rest/query/operations/zscale","./StreamConnection"],(function(e,t,o,n,r,s,c,i,a,l,d,u,h,p,f,k){"use strict";const y=s.getLogger("esri.layers.graphics.sources.connections.WebSocketConnection");var _;(_=e.ReadyState||(e.ReadyState={}))[_.CONNECTING=0]="CONNECTING",_[_.OPEN=1]="OPEN",_[_.CLOSING=2]="CLOSING",_[_.CLOSED=3]="CLOSED",e.WebSocketConnection=function(o){function n(e){var t;(t=o.call(this)||this).errorString=null;const{geometryType:n,spatialReference:r,sourceSpatialReference:s}=e;return t._config=e,t._featureZScaler=f.getGeometryZScaler(n,s,r),t._open(),t}t._inheritsLoose(n,o);var s=n.prototype;return s._open=async function(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()},s.destroy=function(){r.isSome(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null},s._tryCreateWebSocket=async function(e=this._config.source.path,t=1e3,o=0){try{if(this.destroyed)return;this._websocket=await this._createWebSocket(e),this.notifyChange("connectionStatus")}catch(n){const r=t/1e3;return this._config.maxReconnectionAttempts&&o>=this._config.maxReconnectionAttempts?(y.error(new l("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(y.error(new l("websocket-connection",`Failed to connect. Attempting to reconnect in ${r}s`,n)),await p.after(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),o+1))}},s._createWebSocket=function(e){const t=new WebSocket(e),o=new Promise(((e,o)=>{t.onopen=()=>e(t),t.onclose=e=>o(e)}));return o.then((()=>{if(this.destroyed)return t.onclose=()=>{},void t.close();t.onclose=e=>this._onClose(e),t.onerror=e=>this._onError(e),t.onmessage=e=>this._onMessage(e)})),o},s._handshake=async function(e=1e4){const t=this._websocket;if(r.isNone(t))return;const o=p.createResolver(),n=t.onmessage,{filter:s,outFields:c,spatialReference:i}=this._config;return o.timeout(e),t.onmessage=e=>{var r;let a=null;try{a=JSON.parse(e.data)}catch(d){}a&&"object"==typeof a||(y.error(new l("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),o.reject(),this.destroy()),(null==(r=a.spatialReference)?void 0:r.wkid)!==(null==i?void 0:i.wkid)&&(y.error(new l("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${i.wkid}`,e.data)),o.reject(),this.destroy()),"json"!==a.format&&(y.error(new l("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),o.reject(),this.destroy()),s&&a.filter!==s&&y.error(new l("websocket-connection","Tried to set filter, but server doesn't support it")),c&&a.outFields!==c&&y.error(new l("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=n,o.resolve()},t.send(JSON.stringify({filter:s,outFields:c,format:"json",spatialReference:{wkid:i.wkid}})),o.promise},s._onMessage=function(e){try{const t=JSON.parse(e.data);if("featureResult"!==t.type)throw new l("websocket-connection","Protocol violation - Expected to find message of type 'featureResult'",t);for(const e of t.features)this._featureZScaler&&this._featureZScaler(e.geometry),this.onFeature(e)}catch(t){return y.error(new l("websocket-connection","Failed to parse message",t)),void this.destroy()}},s._onError=function(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),y.error("websocket-connection",t)},s._onClose=function(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&y.error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()},t._createClass(n,[{key:"connectionStatus",get:function(){if(r.isNone(this._websocket))return"disconnected";switch(this._websocket.readyState){case e.ReadyState.CONNECTING:case e.ReadyState.OPEN:return"connected";case e.ReadyState.CLOSING:case e.ReadyState.CLOSED:return"disconnected"}}}]),n}(k),o.__decorate([i.property()],e.WebSocketConnection.prototype,"connectionStatus",null),o.__decorate([i.property()],e.WebSocketConnection.prototype,"errorString",void 0),e.WebSocketConnection=o.__decorate([a.subclass("esri.layers.graphics.sources.connections.WebSocketConnection")],e.WebSocketConnection),Object.defineProperty(e,"__esModule",{value:!0})}));
