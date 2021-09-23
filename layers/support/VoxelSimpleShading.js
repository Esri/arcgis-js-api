/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,p,c,a){"use strict";let u=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).diffuseFactor=.5,e.specularFactor=.5,e}return e._inheritsLoose(o,r),o}(o.JSONSupport);return r.__decorate([t.property({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],u.prototype,"diffuseFactor",void 0),r.__decorate([t.property({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],u.prototype,"specularFactor",void 0),u=r.__decorate([a.subclass("esri.layers.support.VoxelSimpleShading")],u),u}));
