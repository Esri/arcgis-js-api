/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,p,n,i){"use strict";let c=function(r){function o(e){var o;return(o=r.call(this,e)||this).expression=null,o.title=null,o.returnType=null,o}return e._inheritsLoose(o,r),o}(o.ClonableMixin(t.JSONSupport));r.__decorate([s.property({type:String,json:{write:!0}})],c.prototype,"expression",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],c.prototype,"title",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],c.prototype,"returnType",void 0),c=r.__decorate([i.subclass("esri.layers.support.ExpressionInfo")],c);return c}));
