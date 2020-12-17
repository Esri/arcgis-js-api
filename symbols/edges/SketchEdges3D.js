/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","./Edges3D"],(function(e,r,o,s,t,c,n,u,p,i,a,l){"use strict";var d;let h=d=function(r){function o(e){var o;return(o=r.call(this,e)||this).type="sketch",o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new d(this.cloneProperties())},o}(l);return r.__decorate([n.enumeration({sketch:"sketch"},{readOnly:!0})],h.prototype,"type",void 0),h=d=r.__decorate([u.subclass("esri.symbols.edges.SketchEdges3D")],h),h}));
