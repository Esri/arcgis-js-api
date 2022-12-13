/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./ClassificationDefinition"],(function(e,r,t,o,s,i,c,n){"use strict";let a=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).classificationDefinition=null,e.where=null,e}return e._inheritsLoose(t,r),t}(t.JSONSupport);r.__decorate([o.property({type:n,json:{read:{source:"classificationDef"},write:{target:"classificationDef"}}})],a.prototype,"classificationDefinition",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],a.prototype,"where",void 0),a=r.__decorate([c.subclass("esri.rest.support.GenerateRendererParameters")],a);return a}));
