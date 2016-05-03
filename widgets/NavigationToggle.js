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

define(["dojo/dom-class","dojo/dom-attr","dojo/on","dijit/_TemplatedMixin","dijit/a11yclick","../core/watchUtils","./support/viewModelWiring","./Widget","./NavigationToggle/NavigationToggleViewModel","dojo/i18n!./NavigationToggle/nls/NavigationToggle","dojo/text!./NavigationToggle/templates/NavigationToggle.html"],function(t,e,i,o,a,n,g,l,s,r,d){var v={base:"esri-navigation-toggle",button:"esri-navigation-toggle__button esri-widget-button",activeButton:"esri-navigation-toggle__button--active",panButton:"esri-navigation-toggle__button--pan",rotateButton:"esri-navigation-toggle__button--rotate",isLayoutHorizontal:"esri-navigation-toggle--horizontal",rotationIcon:"esri-icon-rotate",panIcon:"esri-icon-pan",disabled:"esri-disabled"},c={vertical:"vertical",horizontal:"horizontal"};return l.createSubclass([o],{properties:{view:{dependsOn:["viewModel.view"]},viewModel:{type:s}},declaredClass:"esri.widgets.NavigationToggle",baseClass:v.base,templateString:d,postCreate:function(){this.inherited(arguments),this.own(n.init(this,"viewModel.state",this._handleState),n.init(this,"viewModel.navigationMode",this._applyPrimaryButton),i(this.domNode,a,this.viewModel.toggle))},_css:v,_i18n:r,layout:c.vertical,_setLayoutAttr:function(e){e!==c.horizontal&&(e=c.vertical),t.toggle(this.domNode,v.isLayoutHorizontal,e===c.horizontal),this._set("layout",e)},_getViewAttr:g.createGetterDelegate("view"),_setViewAttr:g.createSetterDelegate("view"),toggle:g.createMethodDelegate("toggle"),_handleState:function(i){var o="disabled"===i;t.toggle(this.domNode,v.disabled,o),e.set(this.domNode,"tabindex",o?"":0)},_applyPrimaryButton:function(e){var i="pan"===e;t.toggle(this._panButtonNode,v.activeButton,i),t.toggle(this._rotateButtonNode,v.activeButton,!i)}})});