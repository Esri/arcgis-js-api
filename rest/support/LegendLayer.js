/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,p,c,u){"use strict";let n=function(r){function o(e){var o;return(o=r.call(this,e)||this).layerId=null,o.subLayerIds=null,o.title=null,o}return e._inheritsLoose(o,r),o}(o.JSONSupport);return r.__decorate([t.property({json:{write:!0}})],n.prototype,"layerId",void 0),r.__decorate([t.property({json:{write:!0}})],n.prototype,"subLayerIds",void 0),r.__decorate([t.property({json:{write:!0}})],n.prototype,"title",void 0),n=r.__decorate([u.subclass("esri/rest/support/LegendLayer")],n),n}));
