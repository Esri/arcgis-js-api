/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","../geometry/SpatialReference","./Task","../rest/locator/addressToLocations","../rest/locator/addressesToLocations","../rest/locator/locationToAddress","../rest/locator/suggestLocations"],(function(e,t,o,r,s,a,c,i,n,u,l,p,d,f,h,S){"use strict";let R=function(t){function o(e){var o;return(o=t.call(this,e)||this).outSpatialReference=null,o.url=null,o}e._inheritsLoose(o,t);var r=o.prototype;return r.addressToLocations=function(e,t){!e.outSpatialReference&&this.outSpatialReference&&(e.outSpatialReference=this.outSpatialReference);const o={...this.requestOptions,...t};return d.addressToLocations(this.url,e,o)},r.suggestLocations=function(e,t){const o={...this.requestOptions,...t};return S.suggestLocations(this.url,e,o)},r.addressesToLocations=function(e,t){!e.outSpatialReference&&this.outSpatialReference&&(e.outSpatialReference=this.outSpatialReference);const o={...this.requestOptions,...t};return f.addressesToLocations(this.url,e,o)},r.locationToAddress=function(e,t){!e.outSpatialReference&&this.outSpatialReference&&(e.outSpatialReference=this.outSpatialReference);const o={...this.requestOptions,...t};return h.locationToAddress(this.url,e,o)},o}(p);return t.__decorate([a.property({type:l})],R.prototype,"outSpatialReference",void 0),t.__decorate([a.property()],R.prototype,"url",void 0),R=t.__decorate([c.subclass("esri.tasks.Locator")],R),R}));
