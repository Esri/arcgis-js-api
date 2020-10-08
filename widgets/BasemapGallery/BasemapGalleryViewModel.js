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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/Collection","../../core/Handles","../../core/Loadable","../../core/promiseUtils","../../core/watchUtils","../../core/accessorSupport/decorators","../../support/basemapUtils","./support/basemapCompatibilityUtils","./support/BasemapGalleryItem","./support/LocalBasemapsSource","./support/PortalBasemapsSource"],(function(t,e,o,i,r,a,n,s,p,c,u,l,y,d){"use strict";var m=i.ofType(l);return function(t){function e(e){var o=t.call(this,e)||this;return o._handles=new r,o.activeBasemap=null,o.items=new m,o.source=new d,o.view=null,o}return o.__extends(e,t),e.prototype.initialize=function(){var t=this,e=function(){return t._recreateItems()};this._handles.add([s.watch(this,["compatibilityFunction","state"],(function(){return t._updateItems()})),s.on(this,"source.basemaps","change",e,e)])},e.prototype.destroy=function(){this._handles.destroy(),this._handles=null},Object.defineProperty(e.prototype,"compatibilityFunction",{get:function(){return void 0===this._get("compatibilityFunction")?"3d"===this.get("view.type")?u.default3DCompatibility:u.default2DCompatibility:this._get("compatibilityFunction")},set:function(t){this._set("compatibilityFunction",t)},enumerable:!1,configurable:!0}),e.prototype.castSource=function(t){return Array.isArray(t)||i.isCollection(t)?new y({basemaps:t}):function(t){return t&&"esri.portal.Portal"===t.declaredClass}(t)?new d({portal:t}):function(t){return t&&!(t instanceof d)&&(!!t.portal||!!t.query)}(t)?new d(t):function(t){return t&&"basemaps"in t&&"state"in t&&"refresh"in t}(t)?t:null},Object.defineProperty(e.prototype,"state",{get:function(){return this.get("view.ready")&&this.source?"ready":"disabled"},enumerable:!1,configurable:!0}),e.prototype.basemapEquals=function(t,e){return c.contentEquals(t,e)},e.prototype.refresh=function(){this._recreateItems()},e.prototype.load=function(t){return this.addResolvingPromise(a.isLoadable(this.source)?this.source.load(t):n.resolve()),n.resolve(this)},e.prototype._recreateItems=function(){var t=this.get("source.basemaps"),e=this.view,o=this.compatibilityFunction;this.items.removeAll().forEach((function(t){return t.destroy()})),this.items.addMany(t.map((function(t){return new l({basemap:t,compatibilityFunction:o,view:e})})))},e.prototype._updateItems=function(){var t=this;this.items.forEach((function(e){e.compatibilityFunction=t.compatibilityFunction,e.view=t.view}))},o.__decorate([p.property({aliasOf:"view.map.basemap"})],e.prototype,"activeBasemap",void 0),o.__decorate([p.property({dependsOn:["view.type"]})],e.prototype,"compatibilityFunction",null),o.__decorate([p.property({readOnly:!0,type:m})],e.prototype,"items",void 0),o.__decorate([p.property()],e.prototype,"source",void 0),o.__decorate([p.cast("source")],e.prototype,"castSource",null),o.__decorate([p.property({readOnly:!0,dependsOn:["view.ready"]})],e.prototype,"state",null),o.__decorate([p.property()],e.prototype,"view",void 0),e=o.__decorate([p.subclass("esri.widgets.BasemapGallery.BasemapGalleryViewModel")],e)}(a)}));