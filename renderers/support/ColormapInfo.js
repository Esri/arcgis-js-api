/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass"],(function(r,e,o,t,p,s,c,l){"use strict";let u=function(e){function o(){var r;return(r=e.apply(this,arguments)||this).value=null,r.label=null,r.color=null,r}return r._inheritsLoose(o,e),o}(t.JSONSupport);e.__decorate([p.property({type:Number,json:{write:!0}})],u.prototype,"value",void 0),e.__decorate([p.property({type:String,json:{write:!0}})],u.prototype,"label",void 0),e.__decorate([p.property({type:o,json:{type:[s.Integer],write:!0}})],u.prototype,"color",void 0),u=e.__decorate([l.subclass("esri.renderers.support.ColormapInfo")],u);return u}));
