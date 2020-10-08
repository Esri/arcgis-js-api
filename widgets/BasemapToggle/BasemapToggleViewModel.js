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

define(["require","exports","tslib","../../core/compilerUtils","../../core/Evented","../../core/watchUtils","../../core/accessorSupport/decorators","../../support/basemapDefinitions","../../support/basemapUtils","../../support/basemapUtils"],(function(e,t,a,r,o,s,i,n,p,l){"use strict";return function(e){function t(t){var a=e.call(this,t)||this;return a._basemapCache={},a.nextBasemap=l.ensureType("hybrid",a._basemapCache),a.view=null,a.toggle=a.toggle.bind(a),a}return a.__extends(t,e),t.prototype.initialize=function(){s.init(this,"nextBasemap",(function(e){e&&!e.loaded&&e.load().catch((function(){}))}))},t.prototype.destroy=function(){this.view=null,l.destroyCache(this._basemapCache),this._basemapCache=null},Object.defineProperty(t.prototype,"activeBasemap",{get:function(){return l.ensureType(this.get("view.map.basemap")||"topo",this._basemapCache)},enumerable:!1,configurable:!0}),t.prototype.castNextBasemap=function(e){return l.ensureType(e,this._basemapCache)},Object.defineProperty(t.prototype,"state",{get:function(){return this.get("view.ready")?"ready":"disabled"},enumerable:!1,configurable:!0}),t.prototype.toggle=function(){if("disabled"!==this.state){var e=this.activeBasemap,t=this.nextBasemap;this.view.map.basemap=t,this.nextBasemap=e,this.emit("toggle",{previous:e,current:t})}},t.getThumbnailUrl=function(e){if(!e)return null;var t=e.thumbnailUrl;if(t)return t;var a=p.getWellKnownBasemapId(e);if(a)return n.esriBasemapDefinitions[a].thumbnailUrl;var o=e.baseLayers.find((function(e){return!!r.typeCast(e)().get("portalItem.thumbnailUrl")}));return o?r.typeCast(o)().get("portalItem.thumbnailUrl"):null},a.__decorate([i.property({dependsOn:["view.map.basemap"],readOnly:!0})],t.prototype,"activeBasemap",null),a.__decorate([i.property()],t.prototype,"nextBasemap",void 0),a.__decorate([i.cast("nextBasemap")],t.prototype,"castNextBasemap",null),a.__decorate([i.property({dependsOn:["view.ready"],readOnly:!0})],t.prototype,"state",null),a.__decorate([i.property()],t.prototype,"view",void 0),a.__decorate([i.property()],t.prototype,"toggle",null),t=a.__decorate([i.subclass("esri.widgets.BasemapToggle.BasemapToggleViewModel")],t)}(o.EventedAccessor)}));