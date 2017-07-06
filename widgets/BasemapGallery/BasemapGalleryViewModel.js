// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","./support/basemapCompatibilityUtils","../../core/accessorSupport/decorators","../../core/watchUtils","../../support/basemapUtils","./support/BasemapGalleryItem","./support/LocalBasemapsSource","./support/PortalBasemapsSource","../../core/Accessor","../../core/Collection","../../core/HandleRegistry","../../portal/Portal"],function(t,e,r,o,i,n,a,s,p,c,u,l,y,d,m){function f(t){return t&&t.isInstanceOf&&t.isInstanceOf(m)}function h(t){return t&&"basemaps"in t&&"state"in t&&"refresh"in t}var b=y.ofType(p),v=function(t){function e(e){var r=t.call(this)||this;return r._handles=new d,r.activeBasemap=null,r.items=new b,r.source=new u({portal:m.getDefault()}),r.view=null,r}return r(e,t),e.prototype.initialize=function(){var t=this;this._handles.add([a.init(this,["compatibilityFunction","state"],function(){return t._updateItems()}),a.on(this,"source.basemaps","change",function(){return t._updateItems()})])},e.prototype.destroy=function(){this._handles.destroy(),this._handles=null},Object.defineProperty(e.prototype,"compatibilityFunction",{get:function(){if(void 0===this._get("compatibilityFunction")){var t=this.get("view.type");return"3d"===t?i.default3DCompatibility:void 0}return this._get("compatibilityFunction")},set:function(t){this._set("compatibilityFunction",t)},enumerable:!0,configurable:!0}),e.prototype.castSource=function(t){return Array.isArray(t)||y.isCollection(t)?new c({basemaps:t}):f(t)?new u({portal:t}):h(t)?t:null},Object.defineProperty(e.prototype,"state",{get:function(){return this.get("view.ready")&&this.source?"ready":"disabled"},enumerable:!0,configurable:!0}),e.prototype.basemapEquals=function(t,e){return s.contentEquals(t,e)},e.prototype.refresh=function(){this._updateItems()},e.prototype._updateItems=function(){if("disabled"!==this.state){var t=this.get("source.basemaps"),e=this,r=e.view,o=e.compatibilityFunction;this.items.removeAll().forEach(function(t){return t.destroy()}),this.items.addMany(t.map(function(t){return new p({basemap:t,compatibilityFunction:o,view:r})}))}},e}(n.declared(l));return o([n.property({aliasOf:"view.map.basemap"})],v.prototype,"activeBasemap",void 0),o([n.property({dependsOn:["view.type"]})],v.prototype,"compatibilityFunction",null),o([n.property({readOnly:!0,type:b})],v.prototype,"items",void 0),o([n.property()],v.prototype,"source",void 0),o([n.cast("source")],v.prototype,"castSource",null),o([n.property({readOnly:!0,dependsOn:["view.ready"]})],v.prototype,"state",null),o([n.property()],v.prototype,"view",void 0),v=o([n.subclass("esri.widgets.BasemapGallery.BasemapGalleryViewModel")],v)});