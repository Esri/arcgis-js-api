/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Logger","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/set","../core/accessorSupport/decorators/subclass","../rest/imageService","./Task"],(function(e,r,s,t,c,o,u,i,n,a){"use strict";let p=function(r){function s(){return r.apply(this,arguments)||this}return e._inheritsLoose(s,r),s.prototype.execute=function(e,r){return n.identify(this.url,e,r)},s}(a);p=r.__decorate([i.subclass("esri.tasks.ImageIdentifyTask")],p);return p}));
