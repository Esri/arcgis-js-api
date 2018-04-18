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

/**
 * The Attribution displays attribution text for the layers in a map.
 * The text displayed for the layers is either a list of data providers
 * or sources as defined in the layer's custom attribution data, or the copyright text.
 * This widget automatically updates based on layer visibility and map extent and
 * displays a single line of attribution that can be expanded with a single click
 * to view all data sources.
 *
 * An instance of the Attribution widget is available in every
 * {@link module:esri/views/MapView} and {@link module:esri/views/SceneView} by default.
 * See {@link module:esri/views/ui/DefaultUI} for more details.
 *
 * ![attribution](../assets/img/apiref/widgets/attribution.png)
 *
 * ::: esri-md class="panel trailer-1"
 * Esri requires that when you use an ArcGIS Online basemap in your app, the map must include Esri attribution and you must be licensed to use the content.
 * For detailed guidelines on working with attribution, please visit the official [attribution in your app](https://developers.arcgis.com/terms/attribution/) documentation.
 * For information on terms of use, see the [Terms of Use FAQ](https://developers.arcgis.com/terms/faq/).
 * :::
 *
 * @module esri/widgets/Attribution
 * @since 4.0
 *
 * @see [Attribution.tsx (widget view)]({{ JSAPI_BOWER_URL }}/widgets/Attribution.tsx)
 * @see [Attribution.scss]({{ JSAPI_BOWER_URL }}/themes/base/widgets/_Attribution.scss)
 * @see module:esri/widgets/Attribution/AttributionViewModel
 * @see {@link module:esri/views/View#ui View.ui}
 * @see module:esri/views/ui/DefaultUI
 */

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./Attribution/nls/Attribution","../core/watchUtils","../core/accessorSupport/decorators","./Widget","./Attribution/AttributionViewModel","./support/widget"],function(e,t,i,r,o,n,s,a,p,d){var c={base:"esri-attribution esri-widget",poweredBy:"esri-attribution__powered-by",sources:"esri-attribution__sources",open:"esri-attribution--open",sourcesOpen:"esri-attribution__sources--open",link:"esri-attribution__link",widgetIcon:"esri-icon-description",interactive:"esri-interactive"};return function(e){function t(t){var i=e.call(this)||this;return i._isOpen=!1,i._attributionTextOverflowed=!1,i._prevSourceNodeHeight=0,i.iconClass=c.widgetIcon,i.itemDelimiter=" | ",i.label=o.widgetLabel,i.view=null,i.viewModel=new p,i}return i(t,e),t.prototype.postInitialize=function(){var e=this;this.own(n.on(this,"viewModel.items","change",function(){return e.scheduleRender()}))},Object.defineProperty(t.prototype,"attributionText",{get:function(){return this.viewModel.items.reduce(function(e,t){return-1===e.indexOf(t.text)&&e.push(t.text),e},[]).join(this.itemDelimiter)},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=(t={},t[c.open]=this._isOpen,t);return d.tsx("div",{bind:this,class:c.base,classes:e,onclick:this._toggleState,onkeydown:this._toggleState},this._renderSourcesNode(),d.tsx("div",{class:c.poweredBy},"Powered by ",d.tsx("a",{target:"_blank",href:"http://www.esri.com/",class:c.link},"Esri")));var t},t.prototype._renderSourcesNode=function(){var e=this._isOpen,t=this._isInteractive(),i=t?0:-1,r=this.attributionText,o=t?"button":void 0,n=(s={},s[c.sourcesOpen]=e,s[c.interactive]=t,s);return d.tsx("div",{afterCreate:this._afterSourcesNodeCreate,afterUpdate:this._afterSourcesNodeUpdate,bind:this,class:c.sources,classes:n,innerHTML:r,role:o,tabIndex:i});var s},t.prototype._afterSourcesNodeCreate=function(e){this._prevSourceNodeHeight=e.clientWidth},t.prototype._afterSourcesNodeUpdate=function(e){var t=!1,i=e.clientHeight,r=e.clientWidth,o=e.scrollWidth,n=o>=r,s=this._attributionTextOverflowed!==n;if(this._attributionTextOverflowed=n,s&&(t=!0),this._isOpen){var a=i<this._prevSourceNodeHeight;this._prevSourceNodeHeight=i,a&&(this._isOpen=!1,t=!0)}t&&this.scheduleRender()},t.prototype._toggleState=function(){this._isInteractive()&&(this._isOpen=!this._isOpen)},t.prototype._isInteractive=function(){return this._isOpen||this._attributionTextOverflowed},r([s.property({dependsOn:["viewModel.items.length","itemDelimiter"],readOnly:!0}),d.renderable()],t.prototype,"attributionText",null),r([s.property()],t.prototype,"iconClass",void 0),r([s.property(),d.renderable()],t.prototype,"itemDelimiter",void 0),r([s.property()],t.prototype,"label",void 0),r([s.aliasOf("viewModel.view")],t.prototype,"view",void 0),r([s.property({type:p}),d.renderable(["state","view.size"])],t.prototype,"viewModel",void 0),r([d.accessibleHandler()],t.prototype,"_toggleState",null),t=r([s.subclass("esri.widgets.Attribution")],t)}(s.declared(a))});