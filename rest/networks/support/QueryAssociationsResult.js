/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/accessorSupport/decorators/subclass","./Association"],(function(r,s,o,e,t,c,i,p){"use strict";let u=function(s){function o(r){var o;return(o=s.call(this,r)||this).associations=[],o}return r._inheritsLoose(o,s),o}(o.JSONSupport);s.__decorate([e.property({type:[p],json:{write:!0}})],u.prototype,"associations",void 0),u=s.__decorate([i.subclass("esri.rest.networks.support.QueryAssociationsResult")],u);return u}));
