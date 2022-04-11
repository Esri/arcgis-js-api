/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(r,e,t,o,s,p,c,u){"use strict";let a=function(e){function t(r){var t;return(t=e.call(this,r)||this).format=null,t.itemId=null,t.url=null,t}return r._inheritsLoose(t,e),t}(t.JSONSupport);e.__decorate([o.property()],a.prototype,"format",void 0),e.__decorate([o.property({json:{read:{source:"itemID"},write:{target:"itemID"}}})],a.prototype,"itemId",void 0),e.__decorate([o.property()],a.prototype,"url",void 0),a=e.__decorate([u.subclass("esri.rest.support.RasterData")],a);return a}));
