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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

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
 * @module esri/widgets/Attribution
 * @since 4.0
 *
 * @see [Attribution.js (widget view)]({{ JSAPI_BOWER_URL }}/widgets/Attribution.js)
 * @see [Attribution.css]({{ JSAPI_BOWER_URL }}/widgets/Attribution/css/Attribution.css)
 * @see [Attribution.scss]({{ JSAPI_BOWER_URL }}/widgets/Attribution/css/Attribution.scss)
 * @see module:esri/widgets/Attribution/AttributionViewModel
 * @see {@link module:esri/views/View#ui View.ui}
 * @see module:esri/views/ui/DefaultUI
 */

define(["../core/watchUtils","./Attribution/AttributionViewModel","./support/viewModelWiring","./Widget","dijit/_TemplatedMixin","dijit/a11yclick","dojo/dom-attr","dojo/dom-class","dojo/on","dojo/text!./Attribution/templates/Attribution.html"],function(t,e,i,s,o,r,n,a,d,u){var c={base:"esri-attribution",poweredBy:"esri-attribution__powered-by",sources:"esri-attribution__sources",open:"esri-attribution--open",sourcesOpen:"esri-attribution__sources--open",link:"esri-attribution__link",clearFix:"esri-clearfix",interactive:"esri-interactive",hidden:"esri-hidden"},h=s.createSubclass([o],{properties:{viewModel:{type:e},view:{dependsOn:["viewModel.view"]}},declaredClass:"esri.widgets.Attribution",baseClass:c.base,templateString:u,constructor:function(){this._attributionTextWatcher=this._attributionTextWatcher.bind(this),this._updateStatus=this._updateStatus.bind(this)},postCreate:function(){this.inherited(arguments),this.own(d(this._sourcesNode,r,this._toggleOpenState.bind(this)),t.init(this.viewModel,"view.size",this._updateStatus),t.init(this.viewModel,"attributionText",this._attributionTextWatcher))},_css:c,_getViewAttr:i.createGetterDelegate("view"),_setViewAttr:i.createSetterDelegate("view"),_attributionTextWatcher:function(t){this._sourcesNode.innerHTML=t,this._updateStatus()},_updateStatus:function(){var t=this.domNode,e=this._sourcesNode,i=a.contains(t,c.open);a.remove(t,c.open),a.remove(e,c.sourcesOpen),a.remove(e,c.interactive),n.set(e,{tabIndex:"",role:""}),this._hasOverflowingText()&&(a.add(e,c.interactive),i&&(a.add(t,c.open),a.add(e,c.sourcesOpen)),n.set(e,{tabIndex:0,role:"button"}))},_hasOverflowingText:function(){var t=this._sourcesNode;return t.scrollWidth>t.clientWidth},_toggleOpenState:function(){a.contains(this._sourcesNode,c.interactive)&&a.toggle(this.domNode,c.open),this._updateStatus()}});return h});