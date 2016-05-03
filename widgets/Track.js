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

define(["./Track/TrackViewModel","./support/viewModelWiring","./Widget","../core/watchUtils","dijit/a11yclick","dijit/_TemplatedMixin","dojo/on","dojo/dom-class","dojo/dom-attr","dojo/i18n!./Track/nls/Track","dojo/text!./Track/templates/Track.html"],function(e,t,i,o,a,r,n,s,c,d,g){var l={base:"esri-track esri-widget-button",text:"esri-icon-font-fallback-text",icon:"esri-icon",loading:"esri-rotating esri-icon-loading-indicator",startTrackingIcon:"esri-icon-locate",stopTrackingIcon:"esri-icon-pause",disabled:"esri-disabled"},p=i.createSubclass([r],{properties:{viewModel:{type:e},geolocationOptions:{dependsOn:["viewModel.geolocationOptions"]},goToLocationEnabled:{dependsOn:["viewModel.goToLocationEnabled"]},graphic:{dependsOn:["viewModel.graphic"]},tracking:{dependsOn:["viewModel.tracking"]},view:{dependsOn:["viewModel.view"]}},declaredClass:"esri.widgets.Track",baseClass:l.base,templateString:g,postCreate:function(){this.inherited(arguments),this.own(n(this.domNode,a,this._toggleTracking.bind(this)),o.init(this.viewModel,"state",function(e){"feature-unsupported"===e&&(this.visible=!1);var t="tracking"===e;s.toggle(this.domNode,l.disabled,"disabled"===e),s.toggle(this._iconNode,l.startTrackingIcon,!t),s.toggle(this._iconNode,l.stopTrackingIcon,t),s.toggle(this._iconNode,l.loading,"waiting"===e);var i=t?this._i18n.stopTracking:this._i18n.startTracking;c.set(this._iconNode,"title",i),c.set(this._textNode,"textContent",i)}.bind(this))),t.setUpEventDelegates(this,["track","track-error"])},_css:l,_i18n:d,_getGeolocationOptionsAttr:t.createGetterDelegate("geolocationOptions"),_setGeolocationOptionsAttr:t.createSetterDelegate("geolocationOptions"),_getGoToLocationEnabledAttr:t.createGetterDelegate("goToLocationEnabled"),_setGoToLocationEnabledAttr:t.createSetterDelegate("goToLocationEnabled"),_getGraphicAttr:t.createGetterDelegate("graphic"),_setGraphicAttr:t.createSetterDelegate("graphic"),_getTrackingAttr:t.createGetterDelegate("tracking"),_setTrackingAttr:t.createSetterDelegate("tracking"),_getViewAttr:t.createGetterDelegate("view"),_setViewAttr:t.createSetterDelegate("view"),start:t.createMethodDelegate("start"),stop:t.createMethodDelegate("stop"),_toggleTracking:function(){var e=this.viewModel;if(e)return e.tracking?void this.viewModel.stop():void this.viewModel.start()}});return p});