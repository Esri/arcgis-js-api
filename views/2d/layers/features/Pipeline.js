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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/promiseUtils","../../../../core/accessorSupport/decorators","../../../../layers/support/TileInfo","./controllers","./processors","./TileStore"],function(e,r,t,o,n,i,s,l,p,c,u){Object.defineProperty(r,"__esModule",{value:!0});var d=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.controller=null,r.processor=null,r.remoteClient=null,r.serviceAndViewInfo=null,r.tileStore=null,r}return t(r,e),r.prototype.initialize=function(){var e=this;this.watch("updating",function(r){e.remoteClient.invoke("setUpdating",r)})},r.prototype.destroy=function(){this.controller&&this.controller.destroy(),this.processor&&this.processor.destroy()},Object.defineProperty(r.prototype,"updating",{get:function(){var e=this,r=e.controller,t=e.processor;return!r||!t||r.updating||t.updating||!1},enumerable:!0,configurable:!0}),r.prototype.startup=function(e){var r=l.fromJSON(e.tileInfo);this.serviceAndViewInfo=e,this.tileStore=new u.default(r)},r.prototype.configure=function(e){var r=this,t=this,o=t.controller,n=t.processor,s=e.controller,l=e.processor,u=[null,null];return s&&(u[0]=p.createController(s.type,{remoteClient:this.remoteClient,tileStore:this.tileStore,serviceAndViewInfo:this.serviceAndViewInfo})),l&&(u[1]=c.createProcessor(l.type,{remoteClient:this.remoteClient,tileStore:this.tileStore,serviceAndViewInfo:this.serviceAndViewInfo})),i.all(u).then(function(e){var t=e[0],i=e[1];t&&(o&&o.destroy(),r.controller=o=t,o.configuration=s,i||(r.controller.processor=r.processor)),i&&(n&&n.destroy(),r.processor=n=i,n.configuration=l,o.processor=n)})},r.prototype.registerTile=function(e){this.tileStore.add(e)},r.prototype.unregisterTile=function(e){this.tileStore.delete(e)},o([s.property({dependsOn:["controller.updating","processor.updating"]})],r.prototype,"updating",null),o([s.property()],r.prototype,"controller",void 0),o([s.property()],r.prototype,"processor",void 0),r=o([s.subclass()],r)}(s.declared(n));r.default=d});