/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Evented","../../../../core/HandleOwner","../../../../core/accessorSupport/decorators/property","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/Logger","../../../../core/accessorSupport/decorators/subclass"],(function(e,r,o,s,t,n,c,u,i){"use strict";let a=function(r){function o(){return r.apply(this,arguments)||this}return e._inheritsLoose(o,r),o.prototype.onFeature=function(e){this.emit("feature",e)},o}(o.EventedMixin(s.HandleOwner));return a=r.__decorate([i.subclass("esri.layers.graphics.sources.connections.StreamConnection")],a),a}));
