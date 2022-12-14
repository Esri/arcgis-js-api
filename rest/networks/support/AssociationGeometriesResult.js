/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","./Association"],(function(e,o,r,t,s,c,p,i){"use strict";let n=function(o){function r(e){var r;return(r=o.call(this,e)||this).maxGeometryCountExceeded=!1,r.associations=[],r}return e._inheritsLoose(r,o),r}(r.JSONSupport);o.__decorate([t.property({type:Boolean,json:{write:!0}})],n.prototype,"maxGeometryCountExceeded",void 0),o.__decorate([t.property({type:[i],json:{write:!0}})],n.prototype,"associations",void 0),n=o.__decorate([p.subclass("esri.rest.networks.support.AssociationGeometriesResult")],n);return n}));
