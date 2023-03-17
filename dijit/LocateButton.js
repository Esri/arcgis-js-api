// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","dojo/Evented","dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../config","dijit/_WidgetBase","dijit/a11yclick","dijit/_TemplatedMixin","dojo/on","dojo/Deferred","dojo/text!./templates/LocateButton.html","dojo/i18n!../nls/jsapi","dojo/dom-class","dojo/dom-style","dojo/dom-attr","../geometry/webMercatorUtils","../geometry/Point","../SpatialReference","../graphic","../symbols/PictureMarkerSymbol","../tasks/ProjectParameters"],(function(t,i,e,o,s,n,r,c,a,h,l,g,u,d,p,m,_,v,f,w,k,T,j){var L=e("esri.dijit.LocateButton",[c,h,i],{templateString:u,options:{theme:"LocateButton",map:null,visible:!0,highlightLocation:!0,symbol:new T(t.toUrl("./images/sdk_gps_location.png"),28,28),infoTemplate:null,scale:null,useTracking:!1,clearOnTrackingStop:!1,setScale:!0,centerAt:!0,timeout:15e3,graphicsLayer:null,geolocationOptions:{maximumAge:0,timeout:15e3,enableHighAccuracy:!0}},constructor:function(t,i){var e=o.mixin({},this.options,t);this.domNode=i,this._i18n=d;var s=navigator.geolocation,n=window.hasOwnProperty("isSecureContext"),r=n&&window.isSecureContext||!n&&"https:"===window.location.protocol;r&&s||(e.visible=!1),s||console.log("LocateButton::navigator.geolocation unsupported."),r||console.log("LocateButton::navigator.geolocation requires a secure origin."),this.set("map",e.map),this.set("theme",e.theme),this.set("visible",e.visible),this.set("scale",e.scale),this.set("highlightLocation",e.highlightLocation),this.set("symbol",e.symbol),this.set("infoTemplate",e.infoTemplate),this.set("geolocationOptions",e.geolocationOptions),this.set("useTracking",e.useTracking),this.set("setScale",e.setScale),this.set("centerAt",e.centerAt),this.set("timeout",e.timeout),this.set("graphicsLayer",e.graphicsLayer),this.set("clearOnTrackingStop",e.clearOnTrackingStop),this.watch("theme",this._updateThemeWatch),this.watch("visible",this._visible),this.watch("tracking",this._locate),this.watch("useTracking",o.hitch(this,(function(){this.get("tracking")&&!this.get("useTracking")&&this._stopTracking(),this._setTitle()}))),this._css={container:"locateContainer",locate:"zoomLocateButton",loading:"loading",tracking:"tracking"}},postCreate:function(){this.inherited(arguments),this.own(l(this._locateNode,a,o.hitch(this,this.locate)))},startup:function(){this.inherited(arguments),this.get("map")||(this.set("visible",!1),console.log("LocateButton::map required")),this.get("map").loaded?this._init():l.once(this.get("map"),"load",o.hitch(this,(function(){this._init()})))},destroy:function(){this.clear(),this._graphicsEvent&&this._graphicsEvent.remove(),this._removeWatchPosition(),this.inherited(arguments)},clear:function(){var t=this.get("highlightGraphic"),i=this.get("graphicsLayer");t&&(i?i.remove(t):this.get("map").graphics.remove(t),this.set("highlightGraphic",null))},locate:function(){return this.get("useTracking")&&this.set("tracking",!this.get("tracking")),this._locate()},show:function(){this.set("visible",!0)},hide:function(){this.set("visible",!1)},_setTitle:function(){this.get("useTracking")?this.get("tracking")?_.set(this._locateNode,"title",this._i18n.widgets.locateButton.locate.stopTracking):_.set(this._locateNode,"title",this._i18n.widgets.locateButton.locate.tracking):_.set(this._locateNode,"title",this._i18n.widgets.locateButton.locate.title)},_removeWatchPosition:function(){this.get("watchId")&&(navigator.geolocation.clearWatch(this.get("watchId")),this.set("watchId",null)),this._removePrivateVars()},_stopTracking:function(){p.remove(this._locateNode,this._css.tracking),this._removeWatchPosition(),this.get("clearOnTrackingStop")&&this.clear(),this._hideLoading()},_positionToObject:function(t){return t?{coords:o.mixin({},t.coords),timestamp:t.timestamp}:{}},_startTracking:function(){p.add(this._locateNode,this._css.tracking),this._removeWatchPosition();var t=navigator.geolocation.watchPosition(o.hitch(this,(function(t){t=this._positionToObject(t),this._setPosition(t).then(o.hitch(this,(function(t){this._locateEvent(t)})),o.hitch(this,(function(t){t||(t=new Error("LocateButton::Error setting the position.")),this._locateError(t)})))})),o.hitch(this,(function(t){this.set("tracking",!1),t||(t=new Error("LocateButton::Could not get tracking position.")),this._locateError(t)})),this.get("geolocationOptions"));this.set("watchId",t)},_removePrivateVars:function(){this._graphic=null,this._position=null,this._scale=null},_getCurrentPosition:function(){var t=new g;this._removePrivateVars();var i=setTimeout(o.hitch(this,(function(){clearTimeout(i);var e=new Error("LocateButton::time expired for getting location.");t.reject(e)})),this.get("timeout"));return navigator.geolocation.getCurrentPosition(o.hitch(this,(function(e){e=this._positionToObject(e),clearTimeout(i),this._setPosition(e).then(o.hitch(this,(function(i){t.resolve(i)})),o.hitch(this,(function(i){i||(i=new Error("LocateButton::Error setting map position.")),t.reject(i)})))})),o.hitch(this,(function(i){i||(i=new Error("LocateButton::Could not get current position.")),t.reject(i)})),this.get("geolocationOptions")),t.promise},_locate:function(){var t=new g;if(this._showLoading(),navigator.geolocation)this.get("useTracking")?this.get("tracking")?(this._startTracking(),t.resolve({tracking:!0})):(this._stopTracking(),t.resolve({tracking:!1})):this._getCurrentPosition().then(o.hitch(this,(function(i){this._locateEvent(i),t.resolve(i)})),o.hitch(this,(function(i){i||(i=new Error("LocateButton::Could not get current position.")),this._locateError(i),t.reject(i)})));else{var i=new Error("LocateButton::geolocation unsupported");this._locateError(i),t.reject(i)}return this._setTitle(),t.promise},_projectPoint:function(t){var i=new g,e=this.get("map").spatialReference,s=e.wkid;if(e.isWebMercator()){var n=v.geographicToWebMercator(t);i.resolve(n)}else if(r.defaults.geometryService&&4326!==s){var c=new j;c.geometries=[t],c.outSR=e,r.defaults.geometryService.project(c).then(o.hitch(this,(function(t){t&&t.length?i.resolve(t[0]):i.reject(new Error("LocateButton::Point was not projected."))})),(function(t){t||(t=new Error("LocateButton::please specify a geometry service on esri/config to project.")),i.reject(t)}))}else i.resolve(t);return i.promise},_getScale:function(t){var i=this.get("scale");return t&&t.coords?i||t.coords.accuracy||5e4:i||5e4},_createPoint:function(t){var i;if(t&&t.coords){var e=t.coords.latitude,o=t.coords.longitude;i=new f([o,e],new w({wkid:4326}))}return i},_setPosition:function(t){var i,e,s=new g;if(this._removePrivateVars(),this._position=t,t&&t.coords){var n=this._createPoint(t);n&&(e=this._createGraphic(n,t),this._graphic=e);var r=this._getScale(t);this._scale=r,n?this._projectPoint(n).then(o.hitch(this,(function(i){e=this._createGraphic(i,t),this._graphic=e;var n={graphic:e,scale:r,position:t};this.get("setScale")&&this.get("map").setScale(r),this.get("centerAt")?this.get("map").centerAt(i).then(o.hitch(this,(function(){s.resolve(n)})),o.hitch(this,(function(t){t||(t=new Error("LocateButton::Could not center map.")),s.reject(t)}))):s.resolve(n)})),o.hitch(this,(function(t){t||(t=new Error("LocateButton::Error projecting point.")),s.reject(t)}))):(i=new Error("LocateButton::Invalid point"),s.reject(i))}else i=new Error("LocateButton::Invalid position"),s.reject(i);return s.promise},_createGraphic:function(t,i){var e;if(t){var o={position:i};e=new k(t,this.get("symbol"),o,this.get("infoTemplate"))}return e},_locateEvent:function(t){if(t.graphic){var i=this.get("highlightGraphic"),e=this.get("graphicsLayer");i?(i.setGeometry(t.graphic.geometry),i.setAttributes(t.graphic.attributes),i.setInfoTemplate(t.graphic.infoTemplate),i.setSymbol(t.graphic.symbol)):(i=t.graphic,this.get("highlightLocation")&&(e?e.add(i):this.get("map").graphics.add(i))),this.set("highlightGraphic",i)}this._hideLoading(),this.emit("locate",t)},_locateError:function(t){var i={graphic:this._graphic,scale:this._scale,position:this._position,error:t};this._hideLoading(),this.emit("locate",i)},_showLoading:function(){this.get("useTracking")||p.add(this._locateNode,this._css.loading)},_hideLoading:function(){this.get("useTracking")||p.remove(this._locateNode,this._css.loading)},_init:function(){this._visible(),this._setTitle(),this.get("tracking")&&this.get("useTracking")&&this._locate(),this.set("loaded",!0),this.emit("load",{})},_updateThemeWatch:function(t,i,e){p.remove(this.domNode,i),p.add(this.domNode,e)},_visible:function(){this.get("visible")?m.set(this.domNode,"display","block"):m.set(this.domNode,"display","none")}});return s("extend-esri")&&o.setObject("dijit.LocateButton",L,n),L}));