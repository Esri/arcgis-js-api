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

define(["../core/watchUtils","./Compass/CompassViewModel","./support/viewModelWiring","./Widget","dijit/_TemplatedMixin","dijit/a11yclick","dojo/dom-attr","dojo/dom-class","dojo/dom-style","dojo/i18n!./Compass/nls/Compass","dojo/text!./Compass/templates/Compass.html"],function(t,e,i,o,s,a,n,d,r,l,c){var h={base:"esri-compass esri-widget-button",text:"esri-icon-font-fallback-text",icon:"esri-compass__icon",rotationIcon:"esri-icon-dial",northIcon:"esri-icon-compass",interactive:"esri-interactive",disabled:"esri-disabled"};return o.createSubclass([s],{properties:{viewModel:{type:e},view:{dependsOn:["viewModel.view"]}},declaredClass:"esri.widgets.Compass",baseClass:h.base,templateString:c,constructor:function(){this._applyRotation=this._applyRotation.bind(this),this._handleClick=this._handleClick.bind(this),this._handleState=this._handleState.bind(this)},postCreate:function(){this.inherited(arguments),this.own(t.init(this.viewModel,"state",this._handleState),t.when(this.viewModel,"orientation",this._applyRotation),this.on(a,this._handleClick))},_css:h,_i18n:l,_getViewAttr:i.createGetterDelegate("view"),_setViewAttr:i.createSetterDelegate("view"),reset:i.createMethodDelegate("reset"),_applyRotation:function(t){var e="rotateZ("+t.z+"deg)";r.set(this._iconNode,{transform:e,mozTransform:e,webkitTransform:e,oTransform:e,msTransform:e})},_handleClick:function(){this.viewModel.reset()},_handleState:function(t){var e="disabled"===t,i="rotation"===t?"rotation":"compass";d.toggle(this.domNode,h.disabled,e),d.toggle(this.domNode,h.interactive,!e),n.set(this.domNode,"tabindex",e?"":0),d.toggle(this._iconNode,h.northIcon,i),d.toggle(this._iconNode,h.rotationIcon,!i)}})});