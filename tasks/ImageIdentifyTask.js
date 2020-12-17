/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","./Task","../rest/imageService"],(function(e,r,s,t,o,c,u,i,n,p,a,l){"use strict";let d=function(r){function s(){return r.apply(this,arguments)||this}return e._inheritsLoose(s,r),s.prototype.execute=function(e,r){return l.identify(this.url,e,r)},s}(a);return d=r.__decorate([u.subclass("esri.tasks.ImageIdentifyTask")],d),d}));
