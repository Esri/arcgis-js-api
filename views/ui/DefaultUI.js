// COPYRIGHT © 2016 Esri
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
     * For detailed guidelines on working with attribution, please visit the official [attribution in your app](https://developers.arcgis.com/terms/attribution) documentation.
     * For information on terms of use, see the [Terms of Use FAQ](https://developers.arcgis.com/terms/faq/).
     * :::
     *
     * @name components
     * @instance
     *
     * @type {string[]}
     */

define(["../../core/watchUtils","../../widgets/Attribution","../../widgets/Compass","../../widgets/NavigationToggle","../../widgets/Zoom","./Component","./UI","dojo/_base/lang","dojo/dom-geometry"],function(t,i,e,o,n,s,a,r,d){return a.createSubclass({declaredClass:"esri.views.ui.DefaultUI",constructor:function(){this._addComponents=this._addComponents.bind(this),this._componentsWatcher=this._componentsWatcher.bind(this),this._updateViewAwareWidgets=this._updateViewAwareWidgets.bind(this)},getDefaults:function(){return r.mixin(this.inherited(arguments),{components:[]})},initialize:function(){this._handles.add([t.init(this,"components",this._componentsWatcher),t.init(this,"view",this._updateViewAwareWidgets)])},_defaultPositionLookup:null,_componentsSetter:function(t){this._set("components",t||[])},_findComponentPosition:function(t){if(!this._defaultPositionLookup){var i=d.isBodyLtr();this._defaultPositionLookup={attribution:"manual",compass:i?"top-left":"top-right","navigation-toggle":i?"top-left":"top-right",zoom:i?"top-left":"top-right"}}return this._defaultPositionLookup[t]},_removeComponents:function(t){t.forEach(function(t){var i=this.find(t);i&&(this.remove(i),i.destroy())},this)},_updateViewAwareWidgets:function(t){this.components.forEach(function(i){var e=this.find(i),o=e&&e.widget;o&&(o.viewModel&&o.viewModel.hasOwnProperty("view")?o.viewModel.view=t:o.hasOwnProperty("view")&&o.set("view",t))},this)},_componentsWatcher:function(t,i){this._removeComponents(i),this._addComponents(t)},_addComponents:function(t){this.initialized&&t.forEach(function(t){this.add(this._createComponent(t),this._findComponentPosition(t))},this)},_createComponent:function(t){var i=this._createWidget(t);return i?new s({id:t,node:i}):void 0},_createWidget:function(t){return"attribution"===t?this._createAttribution():"compass"===t?this._createCompass():"navigation-toggle"===t?this._createNavigationToggle():"zoom"===t?this._createZoom():void 0},_createAttribution:function(){var t=new i({viewModel:{view:this.view}});return t.startup(),t},_createCompass:function(){var t=new e({viewModel:{view:this.view}});return t.startup(),t},_createNavigationToggle:function(){var t=new o({viewModel:{view:this.view}});return t.startup(),t},_createZoom:function(){var t=new n({viewModel:{view:this.view}});return t.startup(),t}})});