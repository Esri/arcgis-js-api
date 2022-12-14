/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,p,i,c){"use strict";let a=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).opacity=1,e.position=0,e}return e._inheritsLoose(o,r),o}(o.ClonableMixin(t.JSONSupport));r.__decorate([s.property({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],a.prototype,"opacity",void 0),r.__decorate([s.property({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"position",void 0),a=r.__decorate([c.subclass("esri.layers.voxel.VoxelOpacityStop")],a);return a}));
