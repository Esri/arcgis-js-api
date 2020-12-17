/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport"],(function(r,e,t,o,s,c,p,u,i,n,l){"use strict";let a=function(e){function t(r){var t;return(t=e.call(this,r)||this).itemId=null,t.url=null,t}return r._inheritsLoose(t,e),t}(l.JSONSupport);return e.__decorate([c.property({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],a.prototype,"itemId",void 0),e.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"url",void 0),a=e.__decorate([p.subclass("esri.tasks.support.DataFile")],a),a}));
