/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Evented","../../../../core/HandleOwner","../../../../core/Logger","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/set","../../../../core/accessorSupport/decorators/subclass"],(function(e,r,s,o,t,n,c,i,u,a){"use strict";let l=function(r){function s(){return r.apply(this,arguments)||this}return e._inheritsLoose(s,r),s.prototype.onFeature=function(e){this.emit("feature",e)},s}(s.EventedMixin(o.HandleOwner));l=r.__decorate([a.subclass("esri.layers.graphics.sources.connections.StreamConnection")],l);return l}));
