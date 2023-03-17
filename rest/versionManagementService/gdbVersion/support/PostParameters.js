/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/JSONSupport","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/accessorSupport/decorators/subclass"],(function(r,e,o,s,t,c,p){"use strict";let i=function(e){function o(r){var o;return(o=e.call(this,r)||this).sessionId=void 0,o.rows=void 0,o}return r._inheritsLoose(o,e),o}(o.JSONSupport);e.__decorate([s.property({type:String,json:{write:!0}})],i.prototype,"sessionId",void 0),e.__decorate([s.property({type:[Object],json:{write:!0}})],i.prototype,"rows",void 0),i=e.__decorate([p.subclass("esri.rest.versionManagementService.gdbVersion.support.PostParameters")],i);return i}));
