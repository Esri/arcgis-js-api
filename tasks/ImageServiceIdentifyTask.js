/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/deprecate","../core/Logger","../core/accessorSupport/decorators/property","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","../rest/imageServiceIdentify","./Task"],(function(e,r,s,t,c,o,i,a,n,u){"use strict";const p=t.getLogger("esri.tasks.ImageServiceIdentifyTask");s.deprecatedModule(p,"esri/tasks/ImageServiceIdentifyTask",{replacement:"esri/tasks/ImageIdentifyTask"});let d=function(r){function s(){return r.apply(this,arguments)||this}return e._inheritsLoose(s,r),s.prototype.execute=function(e,r){return n.imageServiceIdentify(this.url,e,r)},s}(u);return d=r.__decorate([a.subclass("esri.tasks.ImageServiceIdentifyTask")],d),d}));
