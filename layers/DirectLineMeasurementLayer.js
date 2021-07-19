/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/accessorSupport/decorators/property","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/subclass","./Layer"],(function(e,r,o,t,s,c,n,p){"use strict";let i=function(r){function o(e){var o;return(o=r.call(this,e)||this).type="direct-line-measurement",o.geodesicDistanceThreshold=1e5,o.startPoint=null,o.endPoint=null,o}return e._inheritsLoose(o,r),o}(p);return r.__decorate([o.property({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),r.__decorate([o.property()],i.prototype,"geodesicDistanceThreshold",void 0),r.__decorate([o.property()],i.prototype,"startPoint",void 0),r.__decorate([o.property()],i.prototype,"endPoint",void 0),i=r.__decorate([n.subclass("esri/layers/DirectLineMeasurementLayer")],i),i}));
