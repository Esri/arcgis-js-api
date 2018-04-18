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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Collection","../../core/Handles","../../core/watchUtils","../../core/accessorSupport/decorators","../../support/basemapUtils","./support/basemapCompatibilityUtils","./support/BasemapGalleryItem","./support/LocalBasemapsSource","./support/PortalBasemapsSource"],function(t,e,r,o,i,n,a,s,p,u,c,l,y,d){function m(t){return t&&"esri.portal.Portal"===t.declaredClass}function f(t){return t&&!(t instanceof d)&&(!!t.portal||!!t.query)}function h(t){return t&&"basemaps"in t&&"state"in t&&"refresh"in t}var b=n.ofType(l);return function(t){function e(e){var r=t.call(this)||this;return r._handles=new a,r.activeBasemap=null,r.items=new b,r.source=new d,r.view=null,r}return r(e,t),e.prototype.initialize=function(){var t=this;this._handles.add([s.init(this,["compatibilityFunction","state"],function(){return t._updateItems()}),s.on(this,"source.basemaps","change",function(){return t._updateItems()})])},e.prototype.destroy=function(){this._handles.destroy(),this._handles=null},Object.defineProperty(e.prototype,"compatibilityFunction",{get:function(){if(void 0===this._get("compatibilityFunction")){return"3d"===this.get("view.type")?c.default3DCompatibility:void 0}return this._get("compatibilityFunction")},set:function(t){this._set("compatibilityFunction",t)},enumerable:!0,configurable:!0}),e.prototype.castSource=function(t){return Array.isArray(t)||n.isCollection(t)?new y({basemaps:t}):m(t)?new d({portal:t}):f(t)?new d(t):h(t)?t:null},Object.defineProperty(e.prototype,"state",{get:function(){return this.get("view.ready")&&this.source?"ready":"disabled"},enumerable:!0,configurable:!0}),e.prototype.basemapEquals=function(t,e){return u.contentEquals(t,e)},e.prototype.refresh=function(){this._updateItems()},e.prototype._updateItems=function(){if("disabled"!==this.state){var t=this.get("source.basemaps"),e=this,r=e.view,o=e.compatibilityFunction;this.items.removeAll().forEach(function(t){return t.destroy()}),this.items.addMany(t.map(function(t){return new l({basemap:t,compatibilityFunction:o,view:r})}))}},o([p.property({aliasOf:"view.map.basemap"})],e.prototype,"activeBasemap",void 0),o([p.property({dependsOn:["view.type"]})],e.prototype,"compatibilityFunction",null),o([p.property({readOnly:!0,type:b})],e.prototype,"items",void 0),o([p.property()],e.prototype,"source",void 0),o([p.cast("source")],e.prototype,"castSource",null),o([p.property({readOnly:!0,dependsOn:["view.ready"]})],e.prototype,"state",null),o([p.property()],e.prototype,"view",void 0),e=o([p.subclass("esri.widgets.BasemapGallery.BasemapGalleryViewModel")],e)}(p.declared(i))});