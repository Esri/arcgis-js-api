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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Collection","../../core/Handles","../../core/Loadable","../../core/promiseUtils","../../core/watchUtils","../../core/accessorSupport/decorators","../../support/basemapUtils","./support/basemapCompatibilityUtils","./support/BasemapGalleryItem","./support/LocalBasemapsSource","./support/PortalBasemapsSource"],function(e,t,o,r,i,n,s,a,p,u,c,l,d,y,m,f){function h(e){return e&&"esri.portal.Portal"===e.declaredClass}function b(e){return e&&!(e instanceof f)&&(!!e.portal||!!e.query)}function v(e){return e&&"basemaps"in e&&"state"in e&&"refresh"in e}function w(e){return"function"==typeof e.load}var g=n.ofType(y);return function(e){function t(t){var o=e.call(this)||this;return o._handles=new s,o.activeBasemap=null,o.items=new g,o.source=new f,o.view=null,o}return o(t,e),t.prototype.initialize=function(){var e=this;this._handles.add([u.init(this,["compatibilityFunction","state"],function(){return e._updateItems()}),u.on(this,"source.basemaps","change",function(){return e._updateItems()})])},t.prototype.destroy=function(){this._handles.destroy(),this._handles=null},Object.defineProperty(t.prototype,"compatibilityFunction",{get:function(){if(void 0===this._get("compatibilityFunction")){return"3d"===this.get("view.type")?d.default3DCompatibility:void 0}return this._get("compatibilityFunction")},set:function(e){this._set("compatibilityFunction",e)},enumerable:!0,configurable:!0}),t.prototype.castSource=function(e){return Array.isArray(e)||n.isCollection(e)?new m({basemaps:e}):h(e)?new f({portal:e}):b(e)?new f(e):v(e)?e:null},Object.defineProperty(t.prototype,"state",{get:function(){return this.get("view.ready")&&this.source?"ready":"disabled"},enumerable:!0,configurable:!0}),t.prototype.load=function(){return this.addResolvingPromise(w(this.source)?this.source.load():p.resolve()),this.when()},t.prototype.basemapEquals=function(e,t){return l.contentEquals(e,t)},t.prototype.refresh=function(){this._updateItems()},t.prototype._updateItems=function(){if("disabled"!==this.state){var e=this.get("source.basemaps"),t=this,o=t.view,r=t.compatibilityFunction;this.items.removeAll().forEach(function(e){return e.destroy()}),this.items.addMany(e.map(function(e){return new y({basemap:e,compatibilityFunction:r,view:o})}))}},r([c.property({aliasOf:"view.map.basemap"})],t.prototype,"activeBasemap",void 0),r([c.property({dependsOn:["view.type"]})],t.prototype,"compatibilityFunction",null),r([c.property({readOnly:!0,type:g})],t.prototype,"items",void 0),r([c.property()],t.prototype,"source",void 0),r([c.cast("source")],t.prototype,"castSource",null),r([c.property({readOnly:!0,dependsOn:["view.ready"]})],t.prototype,"state",null),r([c.property()],t.prototype,"view",void 0),t=r([c.subclass("esri.widgets.BasemapGallery.BasemapGalleryViewModel")],t)}(c.declared(i,a))});