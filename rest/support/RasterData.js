/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(r,e,o,t,s,p,c,u){"use strict";let a=function(e){function o(r){var o;return(o=e.call(this,r)||this).format=null,o.itemId=null,o.url=null,o}return r._inheritsLoose(o,e),o}(o.JSONSupport);return e.__decorate([t.property()],a.prototype,"format",void 0),e.__decorate([t.property({json:{read:{source:"itemID"},write:{target:"itemID"}}})],a.prototype,"itemId",void 0),e.__decorate([t.property()],a.prototype,"url",void 0),a=e.__decorate([u.subclass("esri/rest/support/RasterData")],a),a}));
