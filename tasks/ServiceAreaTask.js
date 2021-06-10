/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","./Task","../rest/serviceArea","./mixins/NAServiceDescription"],(function(r,e,s,o,t,c,i,u,n,p,l,a,v){"use strict";let d=function(e){function s(r){var s;return(s=e.call(this,r)||this).url=null,s}return r._inheritsLoose(s,e),s.prototype.solve=function(r,e){return a.solve(this.url,r,e)},s}(v.NAServiceDescriptionMixin(l));return e.__decorate([c.property()],d.prototype,"url",void 0),d=e.__decorate([i.subclass("esri.tasks.ServiceAreaTask")],d),d}));
