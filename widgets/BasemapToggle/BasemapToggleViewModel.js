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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor","../../support/basemapUtils","../../core/Evented"],function(e,t,a,r,p,o,s,n){var i=function(e){function t(t){var a=e.call(this,t)||this;return a._basemapCache={},a.nextBasemap=s.ensureType("hybrid",a._basemapCache),a.view=null,a.toggle=a.toggle.bind(a),a}return a(t,e),t.prototype.destroy=function(){this.view=null},Object.defineProperty(t.prototype,"activeBasemap",{get:function(){return s.ensureType(this.get("view.map.basemap")||"topo",this._basemapCache)},enumerable:!0,configurable:!0}),t.prototype.castNextBasemap=function(e){return s.ensureType(e,this._basemapCache)},Object.defineProperty(t.prototype,"state",{get:function(){return this.get("view.ready")?"ready":"disabled"},enumerable:!0,configurable:!0}),t.prototype.toggle=function(){if("disabled"!==this.state){var e=this.activeBasemap,t=this.nextBasemap;this.view.map.basemap=t,this.nextBasemap=e,this.emit("toggle",{previous:e,current:t})}},t}(p.declared(o,n));return r([p.property({dependsOn:["view.map.basemap"],readOnly:!0})],i.prototype,"activeBasemap",null),r([p.property()],i.prototype,"nextBasemap",void 0),r([p.cast("nextBasemap")],i.prototype,"castNextBasemap",null),r([p.property({dependsOn:["view.ready"],readOnly:!0})],i.prototype,"state",null),r([p.property()],i.prototype,"view",void 0),i=r([p.subclass("esri.widgets.BasemapToggle.BasemapToggleViewModel")],i)});