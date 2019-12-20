// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","dojo/i18n!./nls/Locate","../../PopupTemplate","../../core/Error","../../core/geolocationUtils","../../core/Handles","../../core/promiseUtils","../../core/watchUtils","../../core/accessorSupport/decorators","../Popup/actions","../support/GeolocationPositioning"],function(e,t,o,r,a,l,i,n,c,s,p,d,u,h,f,g){var m={title:i.currentLocation,fieldInfos:[{fieldName:"timestamp",label:i.timestamp,format:{dateFormat:"short-date-short-time"}},{fieldName:"latitude",label:i.latitude,format:{places:4,digitSeparator:!0}},{fieldName:"longitude",label:i.longitude,format:{places:4,digitSeparator:!0}},{fieldName:"accuracy",label:i.accuracy,format:{places:0,digitSeparator:!0}},{fieldName:"altitude",label:i.altitude,format:{places:0,digitSeparator:!0}},{fieldName:"altitudeAccuracy",label:i.altitudeAccuracy,format:{places:0,digitSeparator:!0}},{fieldName:"heading",label:i.heading,format:{places:0,digitSeparator:!0}},{fieldName:"speed",label:i.speed,format:{places:0,digitSeparator:!0}}],actions:[f.removeSelectedFeature.clone()],content:[{type:"fields"}]};return function(e){function t(t){var o=e.call(this,t)||this;return o._locateController=null,o._handles=new p,o.locate=o.locate.bind(o),o.graphic&&(o.graphic.popupTemplate=new n(m)),o._handles.add(u.on(o,"view.popup","trigger-action",function(e){return f.triggerAction({event:e,view:o.view})})),o}return o(t,e),t.prototype.destroy=function(){this.cancelLocate(),this._handles.destroy(),this._handles=null},Object.defineProperty(t.prototype,"state",{get:function(){return this._geolocationUsable?this.get("view.ready")?this._locateController?"locating":"ready":"disabled":"feature-unsupported"},enumerable:!0,configurable:!0}),t.prototype.locate=function(){return l(this,void 0,void 0,function(){var e,t,o;return a(this,function(r){switch(r.label){case 0:if(this.cancelLocate(),"disabled"===this.state)throw new c("locate:disabled-state","Cannot locate when disabled.");if("feature-unsupported"===this.state)throw new c("locate:feature-unsupported-state","Cannot locate in unsecure domain.");e=d.createAbortController(),this._locateController=e,r.label=1;case 1:return r.trys.push([1,4,,5]),[4,s.getCurrentPosition(this.geolocationOptions)];case 2:return t=r.sent(),[4,this._setPosition(t,{signal:e.signal})];case 3:return t=r.sent(),this._locateController!==e?[2,null]:(this.graphic&&(this.graphic=this.graphic.clone(),this.view.graphics.push(this.graphic)),this.emit("locate",{position:t}),this._locateController=null,[2,t]);case 4:throw o=r.sent(),this._locateController=null,this.emit("locate-error",{error:o}),o;case 5:return[2]}})})},t.prototype.cancelLocate=function(){this._clear(),this._locateController&&this._locateController.abort(),this._locateController=null},r([h.property()],t.prototype,"_locateController",void 0),r([h.property({dependsOn:["view.ready","_locateController","_geolocationUsable"],readOnly:!0})],t.prototype,"state",null),r([h.property()],t.prototype,"locate",null),r([h.property()],t.prototype,"cancelLocate",null),t=r([h.subclass("esri.widgets.Locate.LocateViewModel")],t)}(h.declared(g))});