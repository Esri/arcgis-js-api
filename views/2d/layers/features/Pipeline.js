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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/tsSupport/generatorHelper","../../../../core/Accessor","../../../../core/asyncUtils","../../../../core/promiseUtils","../../../../core/accessorSupport/decorators","../../../../layers/support/TileInfo","../../../../support/arcadeUtils","../../ViewState","./controllers","./processors","./support/TileStore","../../tiling/TileInfoView"],function(e,t,r,o,n,i,s,l,c,p,u,a,f,d,h,v,y){Object.defineProperty(t,"__esModule",{value:!0});var S=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.controller=null,t.processor=null,t.remoteClient=null,t.serviceAndViewInfo=null,t.tileStore=null,t.viewState=null,t}return r(t,e),t.prototype.initialize=function(){var e=this;this.watch("updating",function(t){e.remoteClient.invoke("setUpdating",t)})},t.prototype.destroy=function(){this.controller&&this.controller.destroy(),this.processor&&this.processor.destroy()},Object.defineProperty(t.prototype,"updating",{get:function(){var e=this,t=e.controller,r=e.processor;return!t||!r||t.updating||r.updating||!1},enumerable:!0,configurable:!0}),t.prototype.startup=function(e){var t=new y(u.fromJSON(e.tileInfo));this.serviceAndViewInfo=e,this.tileStore=new v.default(t)},t.prototype.configure=function(e){return l.safeCast(this._configure(e))},t.prototype.setViewState=function(e){var t=f.fromJSON(e);this._set("viewState",t),this.tileStore.setViewState(t),this.controller&&this.controller.setViewState(t)},t.prototype._configure=function(e){return n(this,void 0,void 0,function(){var t,r,o;return i(this,function(n){switch(n.label){case 0:return[4,c.all([l.safeCast(this._handleControllerConfig(e.controller)),l.safeCast(this._handleProcessorConfig(e.processor))])];case 1:return t=n.sent(),r=t[0],o=t[1],(r||o)&&(this.controller.processor=this.processor),[2]}})})},t.prototype._handleControllerConfig=function(e){return n(this,void 0,void 0,function(){return i(this,function(t){return e?[2,this._createController(e)]:[2,null]})})},t.prototype._handleProcessorConfig=function(e){return n(this,void 0,void 0,function(){var t,r;return i(this,function(o){return e?(t=this._createProcessor(e),r="symbol"===e.type&&e.hasGeometryExpr,[2,r?a.enableGeometryOperations().then(function(){return t}):t]):[2,null]})})},t.prototype._createController=function(e){return n(this,void 0,void 0,function(){var t,r,o,n,s,l;return i(this,function(i){switch(i.label){case 0:return t=this,r=t.remoteClient,o=t.tileStore,n=t.serviceAndViewInfo,s={remoteClient:r,tileStore:o,serviceAndViewInfo:n},[4,d.createController(e.type,s)];case 1:return l=i.sent(),this.controller&&this.controller.destroy(),l.configuration=e,l.setViewState(this.viewState),this.controller=l,[2,l]}})})},t.prototype._createProcessor=function(e){return n(this,void 0,void 0,function(){var t,r,o,n,s,l;return i(this,function(i){switch(i.label){case 0:return t=this,r=t.remoteClient,o=t.tileStore,n=t.serviceAndViewInfo,s={remoteClient:r,tileStore:o,serviceAndViewInfo:n},[4,h.createProcessor(e.type,s)];case 1:return l=i.sent(),this.processor&&this.processor.destroy(),l.configuration=e,this.processor=l,[2,l]}})})},o([p.property()],t.prototype,"controller",void 0),o([p.property()],t.prototype,"processor",void 0),o([p.property({dependsOn:["controller.updating","processor.updating"]})],t.prototype,"updating",null),o([p.property()],t.prototype,"viewState",void 0),t=o([p.subclass()],t)}(p.declared(s));t.default=S});