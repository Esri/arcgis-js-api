// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../intl","../../PopupTemplate","../../core/Error","../../core/geolocationUtils","../../core/Handles","../../core/promiseUtils","../../core/watchUtils","../../core/accessorSupport/decorators","../Popup/actions","../support/GeolocationPositioning"],(function(e,t,o,a,r,i,l,n,c,s,p,u,d){function h(){return o.__awaiter(this,void 0,void 0,(function(){var e;return o.__generator(this,(function(t){switch(t.label){case 0:return[4,a.loadMessageBundle("esri/widgets/Locate/t9n/Locate")];case 1:return e=t.sent(),[2,new r({title:e.currentLocation,fieldInfos:[{fieldName:"timestamp",label:e.timestamp,format:{dateFormat:"short-date-short-time"}},{fieldName:"latitude",label:e.latitude,format:{places:4,digitSeparator:!0}},{fieldName:"longitude",label:e.longitude,format:{places:4,digitSeparator:!0}},{fieldName:"accuracy",label:e.accuracy,format:{places:0,digitSeparator:!0}},{fieldName:"altitude",label:e.altitude,format:{places:0,digitSeparator:!0}},{fieldName:"altitudeAccuracy",label:e.altitudeAccuracy,format:{places:0,digitSeparator:!0}},{fieldName:"heading",label:e.heading,format:{places:0,digitSeparator:!0}},{fieldName:"speed",label:e.speed,format:{places:0,digitSeparator:!0}}],actions:[u.removeSelectedFeature.clone()],content:[{type:"fields"}]})]}}))}))}return function(e){function t(t){var o=e.call(this,t)||this;return o._locateController=null,o._handles=new n,o.locate=o.locate.bind(o),o}return o.__extends(t,e),t.prototype.initialize=function(){var e=this;this._handles.add([s.on(this,"view.popup","trigger-action",(function(t){return u.triggerAction({event:t,view:e.view})})),a.onLocaleChange((function(){var t,o=e,a=o.graphic,r=o.view;(null===(t=null==r?void 0:r.graphics)||void 0===t?void 0:t.includes(a))&&e._updatePopupTemplate(a)}))])},t.prototype.destroy=function(){this.cancelLocate(),this._handles.destroy(),this._handles=null},Object.defineProperty(t.prototype,"state",{get:function(){return this._geolocationUsable?this.get("view.ready")?this._locateController?"locating":"ready":"disabled":"feature-unsupported"},enumerable:!0,configurable:!0}),t.prototype.locate=function(){return o.__awaiter(this,void 0,void 0,(function(){var e,t,a;return o.__generator(this,(function(o){switch(o.label){case 0:if(this.cancelLocate(),"disabled"===this.state)throw new i("locate:disabled-state","Cannot locate when disabled.");if("feature-unsupported"===this.state)throw new i("locate:feature-unsupported-state","Cannot locate in unsecure domain.");e=c.createAbortController(),this._locateController=e,o.label=1;case 1:return o.trys.push([1,6,,7]),[4,l.getCurrentPosition(this.geolocationOptions)];case 2:return t=o.sent(),[4,this._setPosition(t,{signal:e.signal})];case 3:return t=o.sent(),this._locateController!==e?[2,null]:this.graphic?(this.graphic=this.graphic.clone(),[4,this._updatePopupTemplate(this.graphic)]):[3,5];case 4:o.sent(),this.view.graphics.push(this.graphic),o.label=5;case 5:return this.emit("locate",{position:t}),this._locateController=null,[2,t];case 6:throw a=o.sent(),this._locateController=null,this.emit("locate-error",{error:a}),a;case 7:return[2]}}))}))},t.prototype.cancelLocate=function(){this._clear(),this._locateController&&this._locateController.abort(),this._locateController=null},t.prototype._updatePopupTemplate=function(e){return o.__awaiter(this,void 0,void 0,(function(){var t,a;return o.__generator(this,(function(o){switch(o.label){case 0:return[4,h()];case 1:return t=o.sent(),a=e!==this.graphic,this.destroyed||a?[2]:(e.popupTemplate=t,[2])}}))}))},o.__decorate([p.property()],t.prototype,"_locateController",void 0),o.__decorate([p.property({dependsOn:["view.ready","_locateController","_geolocationUsable"],readOnly:!0})],t.prototype,"state",null),o.__decorate([p.property()],t.prototype,"locate",null),o.__decorate([p.property()],t.prototype,"cancelLocate",null),t=o.__decorate([p.subclass("esri.widgets.Locate.LocateViewModel")],t)}(d)}));