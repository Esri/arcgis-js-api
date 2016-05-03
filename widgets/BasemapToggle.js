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

define(["../core/watchUtils","./BasemapToggle/BasemapToggleViewModel","./support/viewModelWiring","./Widget","dijit/_TemplatedMixin","dijit/a11yclick","dojo/dom-attr","dojo/dom-class","dojo/dom-style","dojo/on","dojo/i18n!./BasemapToggle/nls/BasemapToggle","dojo/text!./BasemapToggle/templates/BasemapToggle.html"],function(e,t,a,i,s,l,o,g,d,m,r,n){var p={base:"esri-basemap-toggle",basemapImage:"esri-basemap-toggle__image",titleVisible:"esri-basemap-toggle__title--visible",secondaryBasemapImage:"esri-basemap-toggle__image--secondary",basemapImageContainer:"esri-basemap-toggle__container",basemapImageOverlay:"esri-basemap-toggle__image-overlay",basemapTitle:"esri-basemap-toggle__title",disabled:"esri-disabled"},c=i.createSubclass([s],{properties:{viewModel:{type:t},activeBasemap:{dependsOn:["viewModel.activeBasemap"]},nextBasemap:{dependsOn:["viewModel.nextBasemap"]},view:{dependsOn:["viewModel.view"]}},baseClass:p.base,declaredClass:"esri.widgets.BasemapToggle",templateString:n,postCreate:function(){this.inherited(arguments),this.own(m(this.domNode,l,this.viewModel.toggle),e.init(this,"viewModel.activeBasemap, viewModel.nextBasemap",function(){this._updateImage()}),e.init(this,"viewModel.state",function(e){g.toggle(this.domNode,p.disabled,"disabled"===e)})),a.setUpEventDelegates(this,"toggle")},_css:p,_i18n:r,_getActiveBasemapAttr:a.createGetterDelegate("activeBasemap"),_setActiveBasemapAttr:a.createSetterDelegate("activeBasemap"),_getNextBasemapAttr:a.createGetterDelegate("nextBasemap"),_setNextBasemapAttr:a.createSetterDelegate("nextBasemap"),titleVisible:!1,_setTitleVisibleAttr:function(e){g.toggle(this._basemapTitleNode,p.titleVisible,!!e),this._set("titleVisible",e)},_getViewAttr:a.createGetterDelegate("view"),_setViewAttr:a.createSetterDelegate("view"),toggle:a.createMethodDelegate("toggle"),_updateImage:function(){var e=this.viewModel,t=e.activeBasemap,a=e.nextBasemap;a&&t&&(o.set(this.domNode,{"data-basemap-id":a.id}),d.set(this._imageBackgroundNode,{backgroundImage:a.thumbnailUrl?"url("+a.thumbnailUrl+")":""}),d.set(this._secondaryImageBackgroundNode,{backgroundImage:t.thumbnailUrl?"url("+t.thumbnailUrl+")":""}),o.set(this._basemapTitleNode,{title:a.title||"",textContent:a.title||""}))}});return c});