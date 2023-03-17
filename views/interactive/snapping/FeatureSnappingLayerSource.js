/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,a,c,p){"use strict";let s=function(r){function o(e){var o;return(o=r.call(this,e)||this).layer=null,o.enabled=!0,o.updating=!1,o.availability=1,o}return e._inheritsLoose(o,r),o}(o);r.__decorate([t.property({constructOnly:!0})],s.prototype,"layer",void 0),r.__decorate([t.property()],s.prototype,"enabled",void 0),r.__decorate([t.property()],s.prototype,"updating",void 0),r.__decorate([t.property()],s.prototype,"availability",void 0),s=r.__decorate([p.subclass("esri.views.interactive.snapping.FeatureSnappingLayerSource")],s);return s}));
