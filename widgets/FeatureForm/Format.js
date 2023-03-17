/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/date","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass"],(function(r,e,o,t,a,s,p,c){"use strict";let u=function(e){function o(r){var o;return(o=e.call(this,r)||this).digitSeparator=!1,o.dateFormat=null,o.places=null,o}return r._inheritsLoose(o,e),o}(t.JSONSupport);e.__decorate([a.property()],u.prototype,"digitSeparator",void 0),e.__decorate([a.property({json:{read:{source:"dateFormat",reader:o.fromJSON}}})],u.prototype,"dateFormat",void 0),e.__decorate([a.property()],u.prototype,"places",void 0),u=e.__decorate([c.subclass("esri.widgets.FeatureForm.Format")],u);return u}));
