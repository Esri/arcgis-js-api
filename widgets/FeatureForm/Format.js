/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/date","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(r,e,o,t,a,s,c,p,u){"use strict";let i=function(e){function o(r){var o;return(o=e.call(this,r)||this).digitSeparator=!1,o.dateFormat=null,o.places=null,o}return r._inheritsLoose(o,e),o}(t.JSONSupport);e.__decorate([a.property()],i.prototype,"digitSeparator",void 0),e.__decorate([a.property({json:{read:{source:"dateFormat",reader:o.fromJSON}}})],i.prototype,"dateFormat",void 0),e.__decorate([a.property()],i.prototype,"places",void 0),i=e.__decorate([u.subclass("esri.widgets.FeatureForm.Format")],i);return i}));
