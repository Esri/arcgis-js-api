/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,p,c,i){"use strict";let a=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).alpha=0,e.position=0,e}return e._inheritsLoose(o,r),o}(o.JSONSupport);r.__decorate([t.property({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"alpha",void 0),r.__decorate([t.property({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"position",void 0),a=r.__decorate([i.subclass("esri.layers.support.VoxelAlphaStop")],a);return a}));
