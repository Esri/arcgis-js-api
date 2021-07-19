/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass"],(function(r,e,o,s,t,c,p,a){"use strict";let n=function(e){function o(){var r;return(r=e.apply(this,arguments)||this).affectsPixelSize=!1,r}r._inheritsLoose(o,e);var s=o.prototype;return s.forwardTransform=function(r){return r},s.inverseTransform=function(r){return r},o}(o.JSONSupport);return e.__decorate([s.property()],n.prototype,"affectsPixelSize",void 0),e.__decorate([s.property({json:{write:!0}})],n.prototype,"spatialReference",void 0),n=e.__decorate([a.subclass("esri.layers.support.rasterTransforms.BaseRasterTransform")],n),n}));
