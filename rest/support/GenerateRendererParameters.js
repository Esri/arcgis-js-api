/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,s,i,c){"use strict";let n=function(r){function t(e){var t;return(t=r.call(this,e)||this).classificationDefinition=null,t.where=null,t}return e._inheritsLoose(t,r),t}(t.JSONSupport);r.__decorate([o.property({json:{name:"classificationDef",write:!0}})],n.prototype,"classificationDefinition",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],n.prototype,"where",void 0),n=r.__decorate([c.subclass("esri.rest.support.GenerateRendererParameters")],n);return n}));
