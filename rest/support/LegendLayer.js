/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(r,e,o,t,s,p,c,u){"use strict";let a=function(e){function o(r){var o;return(o=e.call(this,r)||this).layerId=null,o.subLayerIds=null,o.title=null,o}return r._inheritsLoose(o,e),o}(o.JSONSupport);e.__decorate([t.property({json:{write:!0}})],a.prototype,"layerId",void 0),e.__decorate([t.property({json:{write:!0}})],a.prototype,"subLayerIds",void 0),e.__decorate([t.property({json:{write:!0}})],a.prototype,"title",void 0),a=e.__decorate([u.subclass("esri/rest/support/LegendLayer")],a);return a}));
