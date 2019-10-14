// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

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
 * ![attribution](../../assets/img/apiref/widgets/attribution.png)
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
 * @see [Attribution.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Attribution.tsx)
 * @see [Attribution.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Attribution.scss)
 * @see module:esri/widgets/Attribution/AttributionViewModel
 * @see {@link module:esri/views/View#ui View.ui}
 * @see module:esri/views/ui/DefaultUI
 */

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./Attribution/nls/Attribution","../core/watchUtils","../core/accessorSupport/decorators","./Widget","./Attribution/AttributionViewModel","./support/widget"],function(e,t,i,r,o,s,n,a,p,c){var d={base:"esri-attribution esri-widget",anchor:"esri-widget__anchor",poweredBy:"esri-attribution__powered-by",sources:"esri-attribution__sources",open:"esri-attribution--open",sourcesOpen:"esri-attribution__sources--open",link:"esri-attribution__link",widgetIcon:"esri-icon-description",interactive:"esri-interactive"};return function(e){function t(t){var i=e.call(this)||this;return i._isOpen=!1,i._attributionTextOverflowed=!1,i._prevSourceNodeHeight=0,i.iconClass=d.widgetIcon,i.itemDelimiter=" | ",i.label=o.widgetLabel,i.view=null,i.viewModel=new p,i}return i(t,e),t.prototype.postInitialize=function(){var e=this;this.own(s.on(this,"viewModel.items","change",function(){return e.scheduleRender()}))},Object.defineProperty(t.prototype,"attributionText",{get:function(){return this.viewModel.items.reduce(function(e,t){return-1===e.indexOf(t.text)&&e.push(t.text),e},[]).join(this.itemDelimiter)},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e,t=(e={},e[d.open]=this._isOpen,e);return c.tsx("div",{bind:this,class:this.classes(d.base,t),onclick:this._toggleState,onkeydown:this._toggleState},this._renderSourcesNode(),c.tsx("div",{class:d.poweredBy},"Powered by"," ",c.tsx("a",{class:this.classes(d.link,d.anchor),href:"http://www.esri.com/",target:"_blank",rel:"noreferrer"},"Esri")))},t.prototype._renderSourcesNode=function(){var e,t=this._isOpen,i=this._isInteractive(),r=i?0:-1,o=this.attributionText,s=i?"button":void 0,n=(e={},e[d.sourcesOpen]=t,e[d.interactive]=i,e);return c.tsx("div",{afterCreate:this._afterSourcesNodeCreate,afterUpdate:this._afterSourcesNodeUpdate,bind:this,class:this.classes(d.sources,n),innerHTML:o,role:s,tabIndex:r})},t.prototype._afterSourcesNodeCreate=function(e){this._prevSourceNodeHeight=e.clientWidth},t.prototype._afterSourcesNodeUpdate=function(e){var t=!1,i=e.clientHeight,r=e.clientWidth,o=e.scrollWidth,s=o>=r,n=this._attributionTextOverflowed!==s;if(this._attributionTextOverflowed=s,n&&(t=!0),this._isOpen){var a=i<this._prevSourceNodeHeight;this._prevSourceNodeHeight=i,a&&(this._isOpen=!1,t=!0)}t&&this.scheduleRender()},t.prototype._toggleState=function(){this._isInteractive()&&(this._isOpen=!this._isOpen)},t.prototype._isInteractive=function(){return this._isOpen||this._attributionTextOverflowed},r([n.property({dependsOn:["viewModel.items.length","itemDelimiter"],readOnly:!0}),c.renderable()],t.prototype,"attributionText",null),r([n.property()],t.prototype,"iconClass",void 0),r([n.property(),c.renderable()],t.prototype,"itemDelimiter",void 0),r([n.property()],t.prototype,"label",void 0),r([n.aliasOf("viewModel.view")],t.prototype,"view",void 0),r([n.property({type:p}),c.renderable(["state","view.size"])],t.prototype,"viewModel",void 0),r([c.accessibleHandler()],t.prototype,"_toggleState",null),t=r([n.subclass("esri.widgets.Attribution")],t)}(n.declared(a))});