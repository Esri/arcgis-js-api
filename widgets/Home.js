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

define(["./Home/HomeViewModel","./support/viewModelWiring","./Widget","dijit/_TemplatedMixin","dijit/a11yclick","dojo/dom-class","dojo/on","dojo/i18n!./Home/nls/Home","dojo/text!./Home/templates/Home.html"],function(e,t,i,o,s,d,n,a,r){var l={base:"esri-home esri-widget-button",text:"esri-icon-font-fallback-text",homeIcon:"esri-icon esri-icon-home",loadingIcon:"esri-rotating esri-icon-loading-indicator",disabled:"esri-disabled"},c=i.createSubclass([o],{properties:{view:{dependsOn:["viewModel.view"]},viewModel:{type:e},viewpoint:{dependsOn:["viewModel.viewpoint"]}},declaredClass:"esri.widgets.Home",baseClass:l.base,templateString:r,postCreate:function(){this.inherited(arguments),this.own(n(this.domNode,s,this.viewModel.go),this.viewModel.watch("state",function(e){d.toggle(this._homeIconNode,l.loadingIcon,"going-home"===e),d.toggle(this.domNode,l.disabled,"disabled"===e)}.bind(this)))},_css:l,_i18n:a,_getViewAttr:t.createGetterDelegate("view"),_setViewAttr:t.createSetterDelegate("view"),_getViewpointAttr:t.createGetterDelegate("viewpoint"),_setViewpointAttr:t.createSetterDelegate("viewpoint"),go:t.createMethodDelegate("go")});return c});