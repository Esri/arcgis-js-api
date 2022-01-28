/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,p,c,a){"use strict";let n=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).enabled=!1,e.range=null,e}return e._inheritsLoose(o,r),o}(o.JSONSupport);r.__decorate([t.property({type:Boolean,json:{default:!1,write:!0}})],n.prototype,"enabled",void 0),r.__decorate([t.property({type:[Number],json:{write:!0}})],n.prototype,"range",void 0),n=r.__decorate([a.subclass("esri.layers.support.VoxelRangeFilter")],n);return n}));
