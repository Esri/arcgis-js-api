/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport"],(function(r,e,o,t,s,p,c,u,l,n,i){"use strict";let a=function(e){function o(r){var o;return(o=e.call(this,r)||this).layerId=null,o.subLayerIds=null,o.title=null,o}return r._inheritsLoose(o,e),o}(i.JSONSupport);return e.__decorate([p.property({json:{write:!0}})],a.prototype,"layerId",void 0),e.__decorate([p.property({json:{write:!0}})],a.prototype,"subLayerIds",void 0),e.__decorate([p.property({json:{write:!0}})],a.prototype,"title",void 0),a=e.__decorate([c.subclass("esri/tasks/support/LegendLayer")],a),a}));
