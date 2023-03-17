/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,n,p,a){"use strict";let c=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).enabled=!1,e.range=null,e}return e._inheritsLoose(o,r),o}(o.ClonableMixin(t.JSONSupport));r.__decorate([s.property({type:Boolean,json:{default:!1,write:!0}})],c.prototype,"enabled",void 0),r.__decorate([s.property({type:[Number],json:{write:!0}})],c.prototype,"range",void 0),c=r.__decorate([a.subclass("esri.layers.voxel.VoxelRangeFilter")],c);return c}));
