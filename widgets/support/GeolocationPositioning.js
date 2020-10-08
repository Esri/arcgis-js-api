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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../assets","../../Graphic","../../core/Accessor","../../core/Error","../../core/Evented","../../core/promiseUtils","../../core/accessorSupport/decorators","../../symbols/PictureMarkerSymbol","./geolocationUtils","./GoTo"],(function(t,e,o,i,r,n,a,s,c,p,d,l,u){"use strict";return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._geolocationUsable=!0,e._iconPath=i.getAssetUrl("esri/images/support/sdk_gps_location.png"),e.geolocationOptions=null,e.goToLocationEnabled=!0,e.graphic=new r({symbol:new d({url:e._iconPath,width:21,height:21})}),e.scale=null,e.useHeadingEnabled=!0,e.view=null,e}return o.__extends(e,t),e.prototype.initialize=function(){l.supported()||(this._geolocationUsable=!1)},e.prototype.destroy=function(){this._clear(),this.view=null},e.prototype._clear=function(){this.view&&this.view.graphics.remove(this.graphic)},e.prototype._getScaleWithinConstraints=function(t,e){if(!e)return t;if("2d"===e.type){var o=e.constraints,i=o.effectiveMaxScale,r=o.effectiveMinScale;return Math.min(r,Math.max(i,t))}return t},e.prototype._getScale=function(t){var e=this.scale,o="number"==typeof e?e:2500;return this._getScaleWithinConstraints(o,t)},e.prototype._getHeading=function(t,e){var o=e&&e.spatialReference,i=o&&(o.isWebMercator||o.isGeographic),r=t.coords&&t.coords.heading;if(!(!i||"number"!=typeof r||isNaN(r)||r<0||r>360))return r},e.prototype._addHeading=function(t){var e=t.heading,o=t.target,i=t.view;i&&"number"==typeof e&&!isNaN(e)&&("3d"!==i.type?"2d"===i.type&&(o.rotation=360-e):o.heading=e)},e.prototype._animatePoint=function(t,e,o,i){var r=this.view;if(!this.goToLocationEnabled||!r)return c.resolve(e);var n=this.useHeadingEnabled?this._getHeading(e,r):void 0,a={target:t,scale:o};return this._addHeading({heading:n,target:a,view:r}),this.callGoTo({target:a,options:i}).then((function(){return e}))},e.prototype._setPosition=function(t,e){return o.__awaiter(this,void 0,void 0,(function(){var i,r,n,s,c,p,d,u,g,h,_,y,v,f;return o.__generator(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,l.positionToPoint({position:t,view:this.view},e)];case 1:return i=o.sent(),r=this.graphic,n=t.timestamp,s=t.coords,c=s.accuracy,p=s.altitude,d=s.altitudeAccuracy,u=s.heading,g=s.latitude,h=s.longitude,_=s.speed,y={timestamp:n,accuracy:c,altitude:p,altitudeAccuracy:d,heading:u,latitude:g,longitude:h,speed:_},r&&(r.geometry=i,r.attributes=y),v=this._getScale(this.view),[2,this._animatePoint(i,t,v,e)];case 2:throw f=o.sent(),new a("positioning:invalid-point","Cannot position invalid point",{error:f});case 3:return[2]}}))}))},o.__decorate([p.property()],e.prototype,"_geolocationUsable",void 0),o.__decorate([p.property()],e.prototype,"geolocationOptions",void 0),o.__decorate([p.property()],e.prototype,"goToLocationEnabled",void 0),o.__decorate([p.property()],e.prototype,"graphic",void 0),o.__decorate([p.property()],e.prototype,"scale",void 0),o.__decorate([p.property()],e.prototype,"useHeadingEnabled",void 0),o.__decorate([p.property()],e.prototype,"view",void 0),e=o.__decorate([p.subclass("esri.widgets.support.GeolocationPositioning")],e)}(u.GoToMixin(s.EventedMixin(n)))}));