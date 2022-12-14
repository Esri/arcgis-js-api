/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(r,e,o,t,s,p,c){"use strict";let u=function(e){function o(r){var o;return(o=e.call(this,r)||this).layerId=null,o.subLayerIds=null,o.title=null,o}return r._inheritsLoose(o,e),o}(o.JSONSupport);e.__decorate([t.property({json:{write:!0}})],u.prototype,"layerId",void 0),e.__decorate([t.property({json:{write:!0}})],u.prototype,"subLayerIds",void 0),e.__decorate([t.property({json:{write:!0}})],u.prototype,"title",void 0),u=e.__decorate([c.subclass("esri.rest.support.LegendLayer")],u);return u}));
