/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(o,r,e,t,s,p,c,u,n){"use strict";let i=function(r){function e(){var o;return(o=r.apply(this,arguments)||this).color=null,o.position=null,o}return o._inheritsLoose(e,r),e}(t.JSONSupport);return r.__decorate([s.property({type:e,json:{type:[c.Integer],write:!0}})],i.prototype,"color",void 0),r.__decorate([s.property({type:Number,json:{write:!0}})],i.prototype,"position",void 0),i=r.__decorate([n.subclass("esri.layers.support.VoxelColorStop")],i),i}));
