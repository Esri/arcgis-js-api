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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Collection","../../core/Handles","../../core/Loadable","../../core/promiseUtils","../../core/watchUtils","../../core/accessorSupport/decorators","../../support/basemapUtils","./support/basemapCompatibilityUtils","./support/BasemapGalleryItem","./support/LocalBasemapsSource","./support/PortalBasemapsSource"],function(t,e,o,r,i,n,s,a,p,u,c,l,d,y,m,f){function h(t){return t&&"esri.portal.Portal"===t.declaredClass}function b(t){return t&&!(t instanceof f)&&(!!t.portal||!!t.query)}function v(t){return t&&"basemaps"in t&&"state"in t&&"refresh"in t}function w(t){return"function"==typeof t.load}var g=n.ofType(y);return function(t){function e(e){var o=t.call(this)||this;return o._handles=new s,o.activeBasemap=null,o.items=new g,o.source=new f,o.view=null,o}return o(e,t),e.prototype.initialize=function(){var t=this;this._handles.add([u.init(this,["compatibilityFunction","state"],function(){return t._updateItems()}),u.on(this,"source.basemaps","change",function(){return t._updateItems()})])},e.prototype.destroy=function(){this._handles.destroy(),this._handles=null},Object.defineProperty(e.prototype,"compatibilityFunction",{get:function(){if(void 0===this._get("compatibilityFunction")){return"3d"===this.get("view.type")?d.default3DCompatibility:d.default2DCompatibility}return this._get("compatibilityFunction")},set:function(t){this._set("compatibilityFunction",t)},enumerable:!0,configurable:!0}),e.prototype.castSource=function(t){return Array.isArray(t)||n.isCollection(t)?new m({basemaps:t}):h(t)?new f({portal:t}):b(t)?new f(t):v(t)?t:null},Object.defineProperty(e.prototype,"state",{get:function(){return this.get("view.ready")&&this.source?"ready":"disabled"},enumerable:!0,configurable:!0}),e.prototype.load=function(){return this.addResolvingPromise(w(this.source)?this.source.load():p.resolve()),this.when()},e.prototype.basemapEquals=function(t,e){return l.contentEquals(t,e)},e.prototype.refresh=function(){this._updateItems()},e.prototype._updateItems=function(){if("disabled"!==this.state){var t=this.get("source.basemaps"),e=this,o=e.view,r=e.compatibilityFunction;this.items.removeAll().forEach(function(t){return t.destroy()}),this.items.addMany(t.map(function(t){return new y({basemap:t,compatibilityFunction:r,view:o})}))}},r([c.property({aliasOf:"view.map.basemap"})],e.prototype,"activeBasemap",void 0),r([c.property({dependsOn:["view.type"]})],e.prototype,"compatibilityFunction",null),r([c.property({readOnly:!0,type:g})],e.prototype,"items",void 0),r([c.property()],e.prototype,"source",void 0),r([c.cast("source")],e.prototype,"castSource",null),r([c.property({readOnly:!0,dependsOn:["view.ready"]})],e.prototype,"state",null),r([c.property()],e.prototype,"view",void 0),e=r([c.subclass("esri.widgets.BasemapGallery.BasemapGalleryViewModel")],e)}(c.declared(i,a))});