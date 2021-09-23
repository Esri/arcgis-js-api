/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(r,e,o,t,p,s,c,u){"use strict";let n=function(e){function o(){var r;return(r=e.apply(this,arguments)||this).alpha=null,r.position=null,r}return r._inheritsLoose(o,e),o}(o.JSONSupport);return e.__decorate([t.property({type:Number,json:{write:!0}})],n.prototype,"alpha",void 0),e.__decorate([t.property({type:Number,json:{write:!0}})],n.prototype,"position",void 0),n=e.__decorate([u.subclass("esri.layers.support.VoxelAlphaStop")],n),n}));
