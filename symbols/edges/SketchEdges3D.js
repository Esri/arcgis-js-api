/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","./Edges3D"],(function(e,r,o,s,t,c,n,u,p){"use strict";var a;let i=a=function(r){function o(e){var o;return(o=r.call(this,e)||this).type="sketch",o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new a(this.cloneProperties())},o}(p);return r.__decorate([n.enumeration({sketch:"sketch"},{readOnly:!0})],i.prototype,"type",void 0),i=a=r.__decorate([u.subclass("esri.symbols.edges.SketchEdges3D")],i),i}));
