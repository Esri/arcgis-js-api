/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","./Association"],(function(e,o,r,t,s,c,p,i,n){"use strict";let a=function(o){function r(e){var r;return(r=o.call(this,e)||this).maxGeometryCountExceeded=!1,r.associations=[],r}return e._inheritsLoose(r,o),r}(r.JSONSupport);return o.__decorate([t.property({type:Boolean,json:{write:!0}})],a.prototype,"maxGeometryCountExceeded",void 0),o.__decorate([t.property({type:[n],json:{write:!0}})],a.prototype,"associations",void 0),a=o.__decorate([i.subclass("esri.rest.networks.support.AssociationGeometriesResult")],a),a}));
