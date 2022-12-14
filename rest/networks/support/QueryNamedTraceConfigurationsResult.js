/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../networks/support/NamedTraceConfiguration"],(function(r,e,o,t,s,a,n,c){"use strict";let u=function(e){function o(r){var o;return(o=e.call(this,r)||this).namedTraceConfigurations=[],o}return r._inheritsLoose(o,e),o}(o.JSONSupport);e.__decorate([t.property({type:[c],json:{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}}})],u.prototype,"namedTraceConfigurations",void 0),u=e.__decorate([n.subclass("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")],u);return u}));
