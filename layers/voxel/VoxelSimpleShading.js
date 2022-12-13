/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,c,p){"use strict";let a=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).diffuseFactor=.5,e.specularFactor=.5,e}return e._inheritsLoose(o,r),o}(o.JSONSupport);r.__decorate([t.property({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],a.prototype,"diffuseFactor",void 0),r.__decorate([t.property({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],a.prototype,"specularFactor",void 0),a=r.__decorate([p.subclass("esri.layers.voxel.VoxelSimpleShading")],a);return a}));
