/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","./Task","../rest/route","./mixins/NAServiceDescription"],(function(e,r,s,o,t,c,i,u,n,p,l,a,h){"use strict";let d=function(r){function s(e){return r.call(this,e)||this}return e._inheritsLoose(s,r),s.prototype.solve=function(e,r){return a.solve(this.url,e,r)},s}(h.NAServiceDescriptionMixin(l));return d=r.__decorate([i.subclass("esri.tasks.RouteTask")],d),d}));
