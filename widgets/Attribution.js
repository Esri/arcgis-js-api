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

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./support/widget","./Widget","./Attribution/AttributionViewModel"],function(e,t,r,i,o,s,n,a,c){var p={base:"esri-attribution esri-widget",poweredBy:"esri-attribution__powered-by",sources:"esri-attribution__sources",open:"esri-attribution--open",sourcesOpen:"esri-attribution__sources--open",link:"esri-attribution__link",interactive:"esri-interactive"},u=function(e){function t(t){var r=e.call(this)||this;return r._isOpen=!1,r._attributionTextOverflowed=!1,r._prevSourceNodeHeight=0,r.view=null,r.viewModel=new c,r}return i(t,e),t.prototype.render=function(){var e=(t={},t[p.open]=this._isOpen,t);return n.jsxFactory.createElement("div",{bind:this,"class":p.base,classes:e,onclick:this._toggleState,onkeydown:this._toggleState},this._renderSourcesNode(),n.jsxFactory.createElement("div",{"class":p.poweredBy},"Powered by ",n.jsxFactory.createElement("a",{target:"_blank",href:"http://www.esri.com/","class":p.link},"Esri")));var t},t.prototype._renderSourcesNode=function(){var e=this._isOpen,t=this._isInteractive(),i=t?0:-1,o=this.get("viewModel.attributionText"),s=(c={},c[p.sourcesOpen]=e,c[p.interactive]=t,c),a={afterCreate:this._afterSourcesNodeCreate,afterUpdate:this._afterSourcesNodeUpdate,bind:this,"class":p.sources,classes:s,key:t?"interactive":"non-interactive",tabIndex:i};return t&&(a.role="button"),n.jsxFactory.createElement("div",r({},a),o);var c},t.prototype._afterSourcesNodeCreate=function(e){this._prevSourceNodeHeight=e.clientWidth},t.prototype._afterSourcesNodeUpdate=function(e){var t=!1,r=e.clientHeight,i=e.clientWidth,o=e.scrollWidth,s=o>i,n=this._attributionTextOverflowed!==s;if(this._attributionTextOverflowed=s,n&&(t=!0),this._isOpen){var a=r<this._prevSourceNodeHeight;this._prevSourceNodeHeight=r,a&&(this._isOpen=!1,t=!0)}t&&this.renderNow()},t.prototype._toggleState=function(){this._isInteractive()&&(this._isOpen=!this._isOpen)},t.prototype._isInteractive=function(){return this._isOpen||this._attributionTextOverflowed},t}(s.declared(a));return o([s.aliasOf("viewModel.view")],u.prototype,"view",void 0),o([s.property({type:c}),n.renderable(["attributionText","state","view.size"])],u.prototype,"viewModel",void 0),o([n.accessibleHandler()],u.prototype,"_toggleState",null),u=o([s.subclass("esri.widgets.Attribution")],u)});