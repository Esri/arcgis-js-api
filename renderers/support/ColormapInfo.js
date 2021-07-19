/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,p,s,c,l,u){"use strict";let n=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).value=null,e.label=null,e.color=null,e}return e._inheritsLoose(o,r),o}(t.JSONSupport);return r.__decorate([p.property({type:Number,json:{write:!0}})],n.prototype,"value",void 0),r.__decorate([p.property({type:String,json:{write:!0}})],n.prototype,"label",void 0),r.__decorate([p.property({type:o,json:{type:[c.Integer],write:!0}})],n.prototype,"color",void 0),n=r.__decorate([u.subclass("esri.renderers.support.ColormapInfo")],n),n}));
