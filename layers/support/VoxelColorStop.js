/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,p,c,i,u){"use strict";let n=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).color=null,e.position=0,e}return e._inheritsLoose(o,r),o}(t.JSONSupport);r.__decorate([s.property({type:o,json:{type:[i.Integer],write:{enabled:!0,isRequired:!0}}})],n.prototype,"color",void 0),r.__decorate([s.property({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],n.prototype,"position",void 0),n=r.__decorate([u.subclass("esri.layers.support.VoxelColorStop")],n);return n}));
