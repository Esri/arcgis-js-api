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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../Graphic","../../core/Accessor","../../core/Error","../../core/Evented","../../core/geolocationUtils","../../core/promiseUtils","../../core/accessorSupport/decorators","../../symbols/PictureMarkerSymbol","./GoTo"],(function(t,e,o,i,r,n,a,s,p,c,l,u,d,g,h){return function(e){function s(){var o=null!==e&&e.apply(this,arguments)||this;return o._geolocationUsable=!0,o._iconPath=t.toUrl("../../images/support/sdk_gps_location.png"),o.geolocationOptions=null,o.goToLocationEnabled=!0,o.graphic=new a({symbol:new g({url:o._iconPath,width:21,height:21})}),o.scale=null,o.useHeadingEnabled=!0,o.view=null,o}return o(s,e),s.prototype.initialize=function(){l.supported()||(this._geolocationUsable=!1)},s.prototype.destroy=function(){this._clear(),this.view=null},s.prototype._clear=function(){this.view&&this.view.graphics.remove(this.graphic)},s.prototype._getScaleWithinConstraints=function(t,e){if(!e)return t;if("2d"===e.type){var o=e.constraints,i=o.effectiveMaxScale,r=o.effectiveMinScale;return Math.min(r,Math.max(i,t))}return t},s.prototype._getScale=function(t){var e=this.scale,o="number"==typeof e?e:2500;return this._getScaleWithinConstraints(o,t)},s.prototype._getHeading=function(t,e){var o=e&&e.spatialReference,i=o&&(o.isWebMercator||o.isGeographic),r=t.coords&&t.coords.heading;if(!(!i||"number"!=typeof r||isNaN(r)||r<0||r>360))return r},s.prototype._addHeading=function(t){var e=t.heading,o=t.target,i=t.view;i&&"number"==typeof e&&!isNaN(e)&&("3d"!==i.type?"2d"===i.type&&(o.rotation=360-e):o.heading=e)},s.prototype._animatePoint=function(t,e,o,i){var r=this.view;if(!this.goToLocationEnabled||!r)return u.resolve(e);var n=this.useHeadingEnabled?this._getHeading(e,r):void 0,a={target:t,scale:o};return this._addHeading({heading:n,target:a,view:r}),this.callGoTo({target:a,options:i}).then((function(){return e}))},s.prototype._setPosition=function(t,e){return n(this,void 0,void 0,(function(){var o,i,n,a,s,c,u,d,g,h,y,v,f,_;return r(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,l.positionToPoint({position:t,view:this.view},e)];case 1:return o=r.sent(),i=this.graphic,n=t.timestamp,a=t.coords,s=a.accuracy,c=a.altitude,u=a.altitudeAccuracy,d=a.heading,g=a.latitude,h=a.longitude,y=a.speed,v={timestamp:n,accuracy:s,altitude:c,altitudeAccuracy:u,heading:d,latitude:g,longitude:h,speed:y},i&&(i.geometry=o,i.attributes=v),f=this._getScale(this.view),[2,this._animatePoint(o,t,f,e)];case 2:throw _=r.sent(),new p("positioning:invalid-point","Cannot position invalid point",{error:_});case 3:return[2]}}))}))},i([d.property()],s.prototype,"_geolocationUsable",void 0),i([d.property()],s.prototype,"geolocationOptions",void 0),i([d.property()],s.prototype,"goToLocationEnabled",void 0),i([d.property()],s.prototype,"graphic",void 0),i([d.property()],s.prototype,"scale",void 0),i([d.property()],s.prototype,"useHeadingEnabled",void 0),i([d.property()],s.prototype,"view",void 0),s=i([d.subclass("esri.widgets.support.GeolocationPositioning")],s)}(d.declared(h.GoToMixin(c.EventedMixin(s))))}));