/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","./Edges3D"],(function(e,r,o,s,t,c,n,u,i){"use strict";var p;let a=p=function(r){function o(e){var o;return(o=r.call(this,e)||this).type="solid",o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new p(this.cloneProperties())},o}(i);return r.__decorate([n.enumeration({solid:"solid"},{readOnly:!0})],a.prototype,"type",void 0),a=p=r.__decorate([u.subclass("esri.symbols.support.SolidEdges3D")],a),a}));
