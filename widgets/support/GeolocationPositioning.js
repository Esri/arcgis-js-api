// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../Graphic","../../core/Accessor","../../core/Error","../../core/Evented","../../core/promiseUtils","../../symbols/PictureMarkerSymbol","../../core/geolocationUtils"],function(o,e,t,i,r,n,p,a,s,c,l,u){var d=function(e){function p(){var t=null!==e&&e.apply(this,arguments)||this;return t._geolocationUsable=!0,t._iconPath=o.toUrl("../../images/support/sdk_gps_location.png"),t.geolocationOptions=null,t.goToLocationEnabled=!0,t.graphic=new n({symbol:new l({url:t._iconPath,width:21,height:21})}),t.scale=null,t.useHeadingEnabled=!0,t.view=null,t}return t(p,e),p.prototype.initialize=function(){u.supported()||(this._geolocationUsable=!1)},p.prototype.destroy=function(){this._clear(),this.view=null},p.prototype._clear=function(){this.view&&this.view.graphics.remove(this.graphic)},p.prototype._getScale=function(o){var e=5e4,t=o&&o.coords&&o.coords.accuracy;return this.scale||t||e},p.prototype._getHeading=function(o,e){var t=e.spatialReference,i=t&&(t.isWebMercator||t.isWGS84),r=o.coords&&o.coords.heading;return!i||"number"!=typeof r||0>r||r>360?void 0:r},p.prototype._animatePoint=function(o,e,t){if(!this.goToLocationEnabled)return c.resolve(e);var i=this.view,r=this.useHeadingEnabled?this._getHeading(e,i):void 0,n={target:o,scale:t};return void 0!==r&&"3d"===i.type&&(n.heading=r),void 0!==r&&"2d"===i.type&&(i.rotation=r),i.goTo(n).then(function(){return e})},p.prototype._setPosition=function(o){var e=this;return u.positionToPoint(o,this.view).then(function(t){e.graphic&&(e.graphic.geometry=t);var i=e._getScale(o);return e._animatePoint(t,o,i),o}).otherwise(function(){return c.reject(new a("positioning:invalid-point","Cannot position invalid point"))})},i([r.property()],p.prototype,"geolocationOptions",void 0),i([r.property()],p.prototype,"goToLocationEnabled",void 0),i([r.property()],p.prototype,"graphic",void 0),i([r.property()],p.prototype,"scale",void 0),i([r.property()],p.prototype,"useHeadingEnabled",void 0),i([r.property()],p.prototype,"view",void 0),p=i([r.subclass("esri.widgets.support.GeolocationPositioning")],p)}(r.declared(p,s));return d});