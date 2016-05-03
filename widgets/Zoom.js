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

define(["../core/sniff","../core/watchUtils","./support/viewModelWiring","./Widget","./Zoom/ZoomViewModel","dijit/_TemplatedMixin","dijit/a11yclick","dojo/dom","dojo/dom-class","dojo/dom-attr","dojo/on","dojo/i18n!./Zoom/nls/Zoom","dojo/text!./Zoom/templates/Zoom.html"],function(e,o,t,i,n,a,s,d,h,l,m,r,c){var u={base:"esri-zoom",button:"esri-button esri-widget-button",disabled:"esri-disabled",interactive:"esri-interactive",iconText:"esri-icon-font-fallback-text",icon:"esri-icon",isLayoutHorizontal:"esri-zoom--horizontal",zoomInIcon:"esri-icon-plus",zoomOutIcon:"esri-icon-minus"},_={horizontal:"horizontal",vertical:"vertical"},g=i.createSubclass([a],{properties:{viewModel:{type:n},view:{dependsOn:["viewModel.view"]}},declaredClass:"esri.widgets.Zoom",baseClass:u.base,templateString:c,constructor:function(){this._handleZoomOutClick=this._handleZoomOutClick.bind(this),this._handleZoomInClick=this._handleZoomInClick.bind(this),this._handleStateChange=this._handleStateChange.bind(this),this._handleZoomInChange=this._handleZoomInChange.bind(this),this._handleZoomOutChange=this._handleZoomOutChange.bind(this)},postCreate:function(){this.inherited(arguments),e("css-user-select")||d.setSelectable(this.domNode,!1),this.own(m(this._zoomInNode,s,this._handleZoomInClick),m(this._zoomOutNode,s,this._handleZoomOutClick),o.init(this.viewModel,"state",this._handleStateChange),o.init(this.viewModel,"canZoomIn",this._handleZoomInChange),o.init(this.viewModel,"canZoomOut",this._handleZoomOutChange))},_css:u,_i18n:r,layout:_.vertical,_setLayoutAttr:function(e){e!==_.horizontal&&(e=_.vertical),h.toggle(this.domNode,u.isLayoutHorizontal,e===_.horizontal),this._set("layout",e)},_getViewAttr:t.createGetterDelegate("view"),_setViewAttr:t.createSetterDelegate("view"),zoomIn:t.createMethodDelegate("zoomIn"),zoomOut:t.createMethodDelegate("zoomOut"),_handleStateChange:function(e){var o="ready"===e;o?(l.set(this._zoomInNode,"tabindex",0),l.set(this._zoomOutNode,"tabindex",0),h.add(this._zoomInNode,u.interactive),h.add(this._zoomOutNode,u.interactive)):(l.remove(this._zoomInNode,"tabindex"),l.remove(this._zoomOutNode,"tabindex"),h.remove(this._zoomInNode,u.interactive),h.remove(this._zoomOutNode,u.interactive)),h.toggle(this.domNode,u.disabled,!o)},_handleZoomInChange:function(e){h.toggle(this._zoomInNode,u.disabled,!e),h.toggle(this._zoomInNode,u.interactive,e)},_handleZoomOutChange:function(e){h.toggle(this._zoomOutNode,u.disabled,!e),h.toggle(this._zoomOutNode,u.interactive,e)},_handleZoomInClick:function(){this.viewModel.zoomIn()},_handleZoomOutClick:function(){this.viewModel.zoomOut()}});return g});