/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","./networkEnums"],(function(r,e,o,t,s,c,n,p,i){"use strict";let u=function(e){function o(r){return e.call(this,r)||this}return r._inheritsLoose(o,e),o}(o.JSONSupport);e.__decorate([t.property({json:{read:{source:"string"}}})],u.prototype,"text",void 0),e.__decorate([n.enumeration(i.directionsStringTypeJsonMap,{name:"stringType"})],u.prototype,"type",void 0),u=e.__decorate([p.subclass("esri.rest.support.DirectionsString")],u);return u}));
