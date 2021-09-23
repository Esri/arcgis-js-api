/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,p,c,n){"use strict";let u=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).enabled=!1,e.range=null,e}return e._inheritsLoose(o,r),o}(o.JSONSupport);return r.__decorate([t.property({type:Boolean,json:{default:!1,write:!0}})],u.prototype,"enabled",void 0),r.__decorate([t.property({type:[Number],json:{write:!0}})],u.prototype,"range",void 0),u=r.__decorate([n.subclass("esri.layers.support.VoxelRangeFilter")],u),u}));
