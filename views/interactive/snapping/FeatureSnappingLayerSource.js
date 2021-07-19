/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,c,p,s,a){"use strict";let i=function(r){function o(e){var o;return(o=r.call(this,e)||this).layer=null,o.enabled=!0,o.updating=!1,o.availability=1,o}return e._inheritsLoose(o,r),o}(o);return r.__decorate([t.property({constructOnly:!0})],i.prototype,"layer",void 0),r.__decorate([t.property()],i.prototype,"enabled",void 0),r.__decorate([t.property()],i.prototype,"updating",void 0),r.__decorate([t.property()],i.prototype,"availability",void 0),i=r.__decorate([a.subclass("esri.views.interactive.snapping.SnappingLayerSource")],i),i}));
