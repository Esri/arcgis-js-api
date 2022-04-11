/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(r,e,t,o,s,c,p,u){"use strict";let i=function(e){function t(r){var t;return(t=e.call(this,r)||this).itemId=null,t.url=null,t}return r._inheritsLoose(t,e),t}(t.JSONSupport);e.__decorate([o.property({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],i.prototype,"itemId",void 0),e.__decorate([o.property({type:String,json:{write:!0}})],i.prototype,"url",void 0),i=e.__decorate([u.subclass("esri.rest.support.DataFile")],i);return i}));
