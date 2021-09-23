/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../assets","../../Graphic","../../core/Accessor","../../core/Error","../../core/Evented","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","../../symbols/PictureMarkerSymbol","./geolocationUtils","./GoTo"],(function(e,t,o,i,n,r,a,s,c,p,l,d,u,g,h){"use strict";const _=2500;let y=function(t){function n(){var e;return(e=t.apply(this,arguments)||this)._geolocationUsable=!0,e._iconPath=o.getAssetUrl("esri/images/support/sdk_gps_location.png"),e.geolocationOptions=null,e.goToLocationEnabled=!0,e.graphic=new i({symbol:new u({url:e._iconPath,width:21,height:21})}),e.scale=null,e.useHeadingEnabled=!0,e.view=null,e}e._inheritsLoose(n,t);var a=n.prototype;return a.initialize=function(){g.supported()||(this._geolocationUsable=!1)},a.destroy=function(){this._clear(),this.view=null},a._clear=function(){this.view&&this.view.graphics.remove(this.graphic)},a._getScaleWithinConstraints=function(e,t){if(!t)return e;if("2d"===t.type){const{effectiveMaxScale:o,effectiveMinScale:i}=t.constraints;return Math.min(i,Math.max(o,e))}return e},a._getScale=function(e){const{scale:t}=this,o="number"==typeof t?t:_;return this._getScaleWithinConstraints(o,e)},a._getHeading=function(e,t){const o=t&&t.spatialReference,i=o&&(o.isWebMercator||o.isGeographic),n=e.coords&&e.coords.heading;if(!(!i||"number"!=typeof n||isNaN(n)||n<0||n>360))return n},a._addHeading=function(e){const{heading:t,target:o,view:i}=e;i&&"number"==typeof t&&!isNaN(t)&&("3d"!==i.type?"2d"===i.type&&(o.rotation=360-t):o.heading=t)},a._animatePoint=function(e,t,o,i){const{view:n}=this;if(!this.goToLocationEnabled||!n)return Promise.resolve(t);const r=this.useHeadingEnabled?this._getHeading(t,n):void 0,a={target:e,scale:o};return this._addHeading({heading:r,target:a,view:n}),this.callGoTo({target:a,options:i}).then((()=>t))},a._setPosition=function(){var t=e._asyncToGenerator((function*(e,t){try{const o=yield g.positionToPoint({position:e,view:this.view},t),{graphic:i}=this,{timestamp:n}=e,{coords:r}=e,{accuracy:a,altitude:s,altitudeAccuracy:c,heading:p,latitude:l,longitude:d,speed:u}=r,h={timestamp:n,accuracy:a,altitude:s,altitudeAccuracy:c,heading:p,latitude:l,longitude:d,speed:u};i&&(i.geometry=o,i.attributes=h);const _=this._getScale(this.view);return this._animatePoint(o,e,_,t)}catch(o){throw new r("positioning:invalid-point","Cannot position invalid point",{error:o})}}));function o(e,o){return t.apply(this,arguments)}return o}(),n}(h.GoToMixin(a.EventedMixin(n)));return t.__decorate([s.property()],y.prototype,"_geolocationUsable",void 0),t.__decorate([s.property()],y.prototype,"geolocationOptions",void 0),t.__decorate([s.property()],y.prototype,"goToLocationEnabled",void 0),t.__decorate([s.property()],y.prototype,"graphic",void 0),t.__decorate([s.property()],y.prototype,"scale",void 0),t.__decorate([s.property()],y.prototype,"useHeadingEnabled",void 0),t.__decorate([s.property()],y.prototype,"view",void 0),y=t.__decorate([d.subclass("esri.widgets.support.GeolocationPositioning")],y),y}));
