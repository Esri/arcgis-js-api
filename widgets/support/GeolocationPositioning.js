// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../Graphic","../../core/Accessor","../../core/Error","../../core/Evented","../../core/geolocationUtils","../../core/promiseUtils","../../core/accessorSupport/decorators","../../symbols/PictureMarkerSymbol","./GoTo"],function(t,e,o,i,r,n,a,p,c,s,l,d,u){return function(e){function n(){var o=null!==e&&e.apply(this,arguments)||this;return o._geolocationUsable=!0,o._iconPath=t.toUrl("../../images/support/sdk_gps_location.png"),o.geolocationOptions=null,o.goToLocationEnabled=!0,o.graphic=new r({symbol:new d({url:o._iconPath,width:21,height:21})}),o.scale=null,o.useHeadingEnabled=!0,o.view=null,o}return o(n,e),n.prototype.initialize=function(){c.supported()||(this._geolocationUsable=!1)},n.prototype.destroy=function(){this._clear(),this.view=null},n.prototype._clear=function(){this.view&&this.view.graphics.remove(this.graphic)},n.prototype._getScaleWithinConstraints=function(t,e){if(!e)return t;if("2d"===e.type){var o=e.constraints,i=o.effectiveMaxScale,r=o.effectiveMinScale;return Math.min(r,Math.max(i,t))}return t},n.prototype._getScale=function(t){var e=this.scale,o="number"==typeof e?e:2500;return this._getScaleWithinConstraints(o,t)},n.prototype._getHeading=function(t,e){var o=e.spatialReference,i=o&&(o.isWebMercator||o.isGeographic),r=t.coords&&t.coords.heading;if(!(!i||"number"!=typeof r||isNaN(r)||r<0||r>360))return r},n.prototype._addHeading=function(t){var e=t.heading,o=t.target,i=t.view;if(i&&"number"==typeof e&&!isNaN(e))return"3d"===i.type?void(o.heading=e):void("2d"===i.type&&(o.rotation=360-e))},n.prototype._animatePoint=function(t,e,o,i){if(!this.goToLocationEnabled)return s.resolve(e);var r=this.view,n=this.useHeadingEnabled?this._getHeading(e,r):void 0,a={target:t,scale:o};return this._addHeading({heading:n,target:a,view:r}),this.callGoTo({target:a,options:i}).then(function(){return e})},n.prototype._setPosition=function(t,e){var o=this;return c.positionToPoint({position:t,view:this.view},e).then(function(i){var r=o.graphic,n=t.timestamp,a=t.coords,p=a.accuracy,c=a.altitude,s=a.altitudeAccuracy,l=a.heading,d=a.latitude,u=a.longitude,g=a.speed,h={timestamp:n,accuracy:p,altitude:c,altitudeAccuracy:s,heading:l,latitude:d,longitude:u,speed:g};r&&(r.geometry=i,r.attributes=h);var y=o._getScale(o.view);return o._animatePoint(i,t,y,e)}).catch(function(){return s.reject(new a("positioning:invalid-point","Cannot position invalid point"))})},i([l.property()],n.prototype,"_geolocationUsable",void 0),i([l.property()],n.prototype,"geolocationOptions",void 0),i([l.property()],n.prototype,"goToLocationEnabled",void 0),i([l.property()],n.prototype,"graphic",void 0),i([l.property()],n.prototype,"scale",void 0),i([l.property()],n.prototype,"useHeadingEnabled",void 0),i([l.property()],n.prototype,"view",void 0),n=i([l.subclass("esri.widgets.support.GeolocationPositioning")],n)}(l.declared(n,p,u))});