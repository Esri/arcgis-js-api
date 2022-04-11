/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(r,e,o,t,p,s,c,l,u){"use strict";let n=function(e){function o(){var r;return(r=e.apply(this,arguments)||this).value=null,r.label=null,r.color=null,r}return r._inheritsLoose(o,e),o}(t.JSONSupport);e.__decorate([p.property({type:Number,json:{write:!0}})],n.prototype,"value",void 0),e.__decorate([p.property({type:String,json:{write:!0}})],n.prototype,"label",void 0),e.__decorate([p.property({type:o,json:{type:[l.Integer],write:!0}})],n.prototype,"color",void 0),n=e.__decorate([u.subclass("esri.renderers.support.ColormapInfo")],n);return n}));
