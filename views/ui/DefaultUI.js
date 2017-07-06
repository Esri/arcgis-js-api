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

/**
             * An array of strings representing the default
             * widgets visible when a {@link module:esri/views/MapView} or
             * {@link module:esri/views/SceneView} is created. The default widgets differ between MapView
             * and SceneView.
             *
             * **Default Value (for MapView):** ["attribution", "zoom"]
             *
             * **Default Value (for SceneView):** ["attribution", "navigation-toggle", "compass", "zoom"]
             *
             * ::: esri-md class="panel trailer-1"
             * Esri requires that when you use an ArcGIS Online basemap in your app, the map must include Esri attribution and you must be licensed to use the content.
             * For detailed guidelines on working with attribution, please visit the official [attribution in your app](https://developers.arcgis.com/terms/attribution/) documentation.
             * For information on terms of use, see the [Terms of Use FAQ](https://developers.arcgis.com/terms/faq/).
             * :::
             *
             * @name components
             * @instance
             *
             * @type {string[]}
             */

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/watchUtils","./UI","./Component","../../widgets/Attribution","../../widgets/Compass","../../widgets/Zoom","../../widgets/NavigationToggle","dojo/dom-geometry"],function(t,o,e,i,n,r,s,a,p,c,u,d,h){function f(t){return t&&void 0!==t.view}var v=function(t){function o(o){var e=t.call(this)||this;return e._defaultPositionLookup=null,e.components=[],e}return e(o,t),o.prototype.initialize=function(){this._handles.add([r.init(this,"components",this._componentsWatcher.bind(this)),r.init(this,"view",this._updateViewAwareWidgets.bind(this))])},o.prototype._findComponentPosition=function(t){if(!this._defaultPositionLookup){var o=h.isBodyLtr();this._defaultPositionLookup={attribution:"manual",compass:o?"top-left":"top-right","navigation-toggle":o?"top-left":"top-right",zoom:o?"top-left":"top-right"}}return this._defaultPositionLookup[t]},o.prototype._removeComponents=function(t){var o=this;t.forEach(function(t){var e=o.find(t);e&&(o.remove(e),e.destroy())})},o.prototype._updateViewAwareWidgets=function(t){var o=this;this.components.forEach(function(e){var i=o.find(e),n=i&&i.widget;f(n)&&n.set("view",t)})},o.prototype._componentsWatcher=function(t,o){this._removeComponents(o),this._addComponents(t)},o.prototype._addComponents=function(t){var o=this;this.initialized&&t.forEach(function(t){return o.add(o._createComponent(t),o._findComponentPosition(t))})},o.prototype._createComponent=function(t){var o=this._createWidget(t);return o?new a({id:t,node:o}):void 0},o.prototype._createWidget=function(t){return"attribution"===t?this._createAttribution():"compass"===t?this._createCompass():"navigation-toggle"===t?this._createNavigationToggle():"zoom"===t?this._createZoom():void 0},o.prototype._createAttribution=function(){return new p({view:this.view})},o.prototype._createCompass=function(){return new c({view:this.view})},o.prototype._createNavigationToggle=function(){return new d({view:this.view})},o.prototype._createZoom=function(){return new u({view:this.view})},o}(n.declared(s));return i([n.property()],v.prototype,"components",void 0),v=i([n.subclass("esri.views.ui.DefaultUI")],v)});