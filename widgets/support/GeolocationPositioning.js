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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../Graphic","../../core/Accessor","../../core/Error","../../core/Evented","../../core/geolocationUtils","../../core/promiseUtils","../../core/accessorSupport/decorators","../../symbols/PictureMarkerSymbol","./GoTo"],function(t,e,o,i,r,n,a,c,p,s,l,u,d){return function(e){function n(){var o=null!==e&&e.apply(this,arguments)||this;return o._geolocationUsable=!0,o._iconPath=t.toUrl("../../images/support/sdk_gps_location.png"),o.geolocationOptions=null,o.goToLocationEnabled=!0,o.graphic=new r({symbol:new u({url:o._iconPath,width:21,height:21})}),o.scale=null,o.useHeadingEnabled=!0,o.view=null,o}return o(n,e),n.prototype.initialize=function(){p.supported()||(this._geolocationUsable=!1)},n.prototype.destroy=function(){this._clear(),this.view=null},n.prototype._clear=function(){this.view&&this.view.graphics.remove(this.graphic)},n.prototype._getScaleWithinConstraints=function(t,e){if(!e)return t;if("2d"===e.type){var o=e.constraints,i=o.effectiveMaxScale,r=o.effectiveMinScale;return Math.min(r,Math.max(i,t))}return t},n.prototype._getScale=function(t){var e=this.scale,o="number"==typeof e?e:2500;return this._getScaleWithinConstraints(o,t)},n.prototype._getHeading=function(t,e){var o=e.spatialReference,i=o&&(o.isWebMercator||o.isWGS84),r=t.coords&&t.coords.heading;if(!(!i||"number"!=typeof r||r<0||r>360))return r},n.prototype._addHeading=function(t){var e=t.heading,o=t.target,i=t.view;if(i&&"number"==typeof e)return"3d"===i.type?void(o.heading=e):void("2d"===i.type&&(o.rotation=360-e))},n.prototype._animatePoint=function(t,e,o){if(!this.goToLocationEnabled)return s.resolve(e);var i=this.view,r=this.useHeadingEnabled?this._getHeading(e,i):void 0,n={target:t,scale:o};return this._addHeading({heading:r,target:n,view:i}),this.callGoTo({target:n}).then(function(){return e})},n.prototype._setPosition=function(t){var e=this;return p.positionToPoint({position:t,view:this.view}).then(function(o){var i=e.graphic,r=t.timestamp,n=t.coords,a=n.accuracy,c=n.altitude,p=n.altitudeAccuracy,s=n.heading,l=n.latitude,u=n.longitude,d=n.speed,g={timestamp:r,accuracy:a,altitude:c,altitudeAccuracy:p,heading:s,latitude:l,longitude:u,speed:d};i&&(i.geometry=o,i.attributes=g);var h=e._getScale(e.view);return e._animatePoint(o,t,h)}).catch(function(){return s.reject(new a("positioning:invalid-point","Cannot position invalid point"))})},i([l.property()],n.prototype,"geolocationOptions",void 0),i([l.property()],n.prototype,"goToLocationEnabled",void 0),i([l.property()],n.prototype,"graphic",void 0),i([l.property()],n.prototype,"scale",void 0),i([l.property()],n.prototype,"useHeadingEnabled",void 0),i([l.property()],n.prototype,"view",void 0),n=i([l.subclass("esri.widgets.support.GeolocationPositioning")],n)}(l.declared(n,c,d))});