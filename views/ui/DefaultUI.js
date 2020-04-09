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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/watchUtils","../../core/accessorSupport/decorators","./Component","./UI","../../widgets/Attribution","../../widgets/Compass","../../widgets/NavigationToggle","../../widgets/Zoom"],(function(t,e,o,i,n,r,a,s,p,d,c,u){return function(t){function e(e){var o=t.call(this,e)||this;return o._defaultPositionLookup={attribution:"manual",compass:"top-leading","navigation-toggle":"top-leading",zoom:"top-leading"},o.components=[],o}return o(e,t),e.prototype.initialize=function(){this._handles.add([n.init(this,"components",this._componentsWatcher.bind(this)),n.init(this,"view",this._updateViewAwareWidgets.bind(this))])},e.prototype._removeComponents=function(t){var e=this;t.forEach((function(t){var o=e._find(t);o&&(e.remove(o),o.destroy())}))},e.prototype._updateViewAwareWidgets=function(t){var e=this;this.components.forEach((function(o){var i=e._find(o),n=i&&i.widget;(function(t){return t&&void 0!==t.view})(n)&&(n.view=t)}))},e.prototype._componentsWatcher=function(t,e){this._removeComponents(e),this._addComponents(t),this._adjustPadding(t)},e.prototype._adjustPadding=function(t){if(-1===t.indexOf("attribution")&&!this._isOverridden("padding")){var e=this.padding.top;this.padding=e}},e.prototype._addComponents=function(t){var e=this;this.initialized&&t.forEach((function(t){return e.add(e._createComponent(t),e._defaultPositionLookup[t])}))},e.prototype._createComponent=function(t){var e=this._createWidget(t);if(e)return new a({id:t,node:e})},e.prototype._createWidget=function(t){return"attribution"===t?this._createAttribution():"compass"===t?this._createCompass():"navigation-toggle"===t?this._createNavigationToggle():"zoom"===t?this._createZoom():void 0},e.prototype._createAttribution=function(){return new p({view:this.view})},e.prototype._createCompass=function(){return new d({view:this.view})},e.prototype._createNavigationToggle=function(){return new c({view:this.view})},e.prototype._createZoom=function(){return new u({view:this.view})},i([r.property()],e.prototype,"components",void 0),e=i([r.subclass("esri.views.ui.DefaultUI")],e)}(r.declared(s))}));