/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/accessorSupport/decorators/property","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/subclass","../rest/imageService","./Task"],(function(e,r,s,t,o,c,u,n,i){"use strict";let a=function(r){function s(){return r.apply(this,arguments)||this}return e._inheritsLoose(s,r),s.prototype.execute=function(e,r){return n.identify(this.url,e,r)},s}(i);return a=r.__decorate([u.subclass("esri.tasks.ImageIdentifyTask")],a),a}));
