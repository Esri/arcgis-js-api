/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass"],(function(e,o,r,t,s,p,c,i,l){"use strict";let n=function(o){function r(){var e;return(e=o.apply(this,arguments)||this).color=null,e.position=0,e}return e._inheritsLoose(r,o),r}(t.ClonableMixin(s.JSONSupport));o.__decorate([p.property({type:r,json:{type:[c.Integer],write:{enabled:!0,isRequired:!0}}})],n.prototype,"color",void 0),o.__decorate([p.property({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],n.prototype,"position",void 0),n=o.__decorate([l.subclass("esri.layers.voxel.VoxelColorStop")],n);return n}));
