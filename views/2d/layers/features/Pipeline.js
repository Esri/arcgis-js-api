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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/promiseUtils","../../../../core/accessorSupport/decorators","../../../../layers/support/TileInfo","../../ViewState","./controllers","./processors","./support/TileStore"],function(e,t,r,o,i,n,s,l,p,c,u,a){Object.defineProperty(t,"__esModule",{value:!0});var d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.controller=null,t.processor=null,t.remoteClient=null,t.serviceAndViewInfo=null,t.tileStore=null,t.viewState=null,t}return r(t,e),t.prototype.initialize=function(){var e=this;this.watch("updating",function(t){e.remoteClient.invoke("setUpdating",t)})},t.prototype.destroy=function(){this.controller&&this.controller.destroy(),this.processor&&this.processor.destroy()},Object.defineProperty(t.prototype,"updating",{get:function(){var e=this,t=e.controller,r=e.processor;return!t||!r||t.updating||r.updating||!1},enumerable:!0,configurable:!0}),t.prototype.startup=function(e){var t=l.fromJSON(e.tileInfo);this.serviceAndViewInfo=e,this.tileStore=new a.default(t)},t.prototype.configure=function(e){var t=this,r=this,o=r.controller,i=r.processor,s=e.controller,l=e.processor,p=[null,null];return s&&(p[0]=c.createController(s.type,{remoteClient:this.remoteClient,tileStore:this.tileStore,serviceAndViewInfo:this.serviceAndViewInfo})),l&&(p[1]=u.createProcessor(l.type,{remoteClient:this.remoteClient,tileStore:this.tileStore,serviceAndViewInfo:this.serviceAndViewInfo})),n.all(p).then(function(e){var r=e[0],n=e[1];r&&(o&&o===t.controller&&o.destroy(),t.controller=r,r.configuration=s,r.setViewState(t.viewState),n||(r.processor=t.processor)),n&&(i&&i===t.processor&&i.destroy(),t.processor=n,n.configuration=l,o.processor=n)})},t.prototype.setViewState=function(e){var t=p.fromJSON(e);this._set("viewState",t),this.tileStore.setViewState(t),this.controller&&this.controller.setViewState(t)},o([s.property()],t.prototype,"controller",void 0),o([s.property()],t.prototype,"processor",void 0),o([s.property({dependsOn:["controller.updating","processor.updating"]})],t.prototype,"updating",null),o([s.property()],t.prototype,"viewState",void 0),t=o([s.subclass()],t)}(s.declared(i));t.default=d});