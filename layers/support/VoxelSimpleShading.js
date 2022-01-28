/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(r,e,o,t,s,p,c,a){"use strict";let u=function(e){function o(){var r;return(r=e.apply(this,arguments)||this).diffuseFactor=.5,r.specularFactor=.5,r}return r._inheritsLoose(o,e),o}(o.JSONSupport);e.__decorate([t.property({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],u.prototype,"diffuseFactor",void 0),e.__decorate([t.property({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],u.prototype,"specularFactor",void 0),u=e.__decorate([a.subclass("esri.layers.support.VoxelSimpleShading")],u);return u}));
