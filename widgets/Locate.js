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

define(["./Locate/LocateViewModel","./support/viewModelWiring","./Widget","../core/watchUtils","dijit/a11yclick","dijit/_TemplatedMixin","dojo/on","dojo/dom-class","dojo/i18n!./Locate/nls/Locate","dojo/text!./Locate/templates/Locate.html"],function(e,t,o,i,a,n,l,c,s,r){var d={base:"esri-locate esri-widget-button",text:"esri-icon-font-fallback-text",icon:"esri-icon",locate:"esri-icon-locate",loading:"esri-rotating esri-icon-loading-indicator",disabled:"esri-disabled"},g=o.createSubclass([n],{properties:{viewModel:{type:e},geolocationOptions:{dependsOn:["viewModel.geolocationOptions"]},goToLocationEnabled:{dependsOn:["viewModel.goToLocationEnabled"]},graphic:{dependsOn:["viewModel.graphic"]},view:{dependsOn:["viewModel.view"]}},declaredClass:"esri.widgets.Locate",baseClass:d.base,templateString:r,postCreate:function(){this.inherited(arguments),this.own(l(this.domNode,a,this.viewModel.locate),i.init(this.viewModel,"state",function(e){"feature-unsupported"===e&&(this.visible=!1);var t="locating"===e;c.toggle(this.domNode,d.disabled,"disabled"===e),c.toggle(this._iconNode,d.loading,t),c.toggle(this._iconNode,d.locate,!t)}.bind(this))),t.setUpEventDelegates(this,["locate","locate-error"])},_css:d,_i18n:s,_getGeolocationOptionsAttr:t.createGetterDelegate("geolocationOptions"),_setGeolocationOptionsAttr:t.createSetterDelegate("geolocationOptions"),_getGoToLocationEnabledAttr:t.createGetterDelegate("goToLocationEnabled"),_setGoToLocationEnabledAttr:t.createSetterDelegate("goToLocationEnabled"),_getGraphicAttr:t.createGetterDelegate("graphic"),_setGraphicAttr:t.createSetterDelegate("graphic"),_getViewAttr:t.createGetterDelegate("view"),_setViewAttr:t.createSetterDelegate("view"),locate:t.createMethodDelegate("locate")});return g});