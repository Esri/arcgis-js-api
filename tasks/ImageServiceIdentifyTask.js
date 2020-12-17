/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/deprecate","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","./Task","../rest/imageServiceIdentify"],(function(e,r,s,t,c,o,i,a,n,u,p,l,d){"use strict";const g=t.getLogger("esri.tasks.ImageServiceIdentifyTask");i.deprecatedModule(g,"esri/tasks/ImageServiceIdentifyTask",{replacement:"esri/tasks/ImageIdentifyTask"});let f=function(r){function s(){return r.apply(this,arguments)||this}return e._inheritsLoose(s,r),s.prototype.execute=function(e,r){return d.imageServiceIdentify(this.url,e,r)},s}(l);return f=r.__decorate([a.subclass("esri.tasks.ImageServiceIdentifyTask")],f),f}));
