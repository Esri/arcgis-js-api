/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/date","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(r,e,o,t,s,a,c,p,u){"use strict";let i=function(e){function o(r){var o;return(o=e.call(this,r)||this).digitSeparator=!1,o.dateFormat=null,o.places=null,o}return r._inheritsLoose(o,e),o}(t.JSONSupport);return e.__decorate([s.property()],i.prototype,"digitSeparator",void 0),e.__decorate([s.property({json:{read:{source:"dateFormat",reader:o.fromJSON}}})],i.prototype,"dateFormat",void 0),e.__decorate([s.property()],i.prototype,"places",void 0),i=e.__decorate([u.subclass("esri.widgets.FeatureForm.Format")],i),i}));
