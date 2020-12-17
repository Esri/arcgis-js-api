/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/has","../../../../core/Logger","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/decorators/subclass","../../../../core/urlUtils","../../../../core/uuid","../../../../portal/support/resourceExtension","../../../../core/Evented","../../../../core/HandleOwner"],(function(e,r,o,s,t,c,n,u,i,a,p,l){"use strict";let d=function(r){function o(){return r.apply(this,arguments)||this}return e._inheritsLoose(o,r),o.prototype.onFeature=function(e){this.emit("feature",e)},o}(p.EventedMixin(l.HandleOwner));return d=r.__decorate([n.subclass("esri.layers.graphics.sources.connections.StreamConnection")],d),d}));
