/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass"],(function(r,e,t,o,s,p,c){"use strict";let u=function(e){function t(r){var t;return(t=e.call(this,r)||this).itemId=null,t.url=null,t}return r._inheritsLoose(t,e),t}(t.JSONSupport);e.__decorate([o.property({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],u.prototype,"itemId",void 0),e.__decorate([o.property({type:String,json:{write:!0}})],u.prototype,"url",void 0),u=e.__decorate([c.subclass("esri.rest.support.DataFile")],u);return u}));
