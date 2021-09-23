/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","./ClassificationDefinition"],(function(e,r,o,t,s,i,c,n,a){"use strict";let p=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).classificationDefinition=null,e.where=null,e}return e._inheritsLoose(o,r),o}(o.JSONSupport);return r.__decorate([t.property({type:a,json:{read:{source:"classificationDef"},write:{target:"classificationDef"}}})],p.prototype,"classificationDefinition",void 0),r.__decorate([t.property({type:String,json:{write:!0}})],p.prototype,"where",void 0),p=r.__decorate([n.subclass("esri.rest.support.GenerateRendererParameters")],p),p}));
