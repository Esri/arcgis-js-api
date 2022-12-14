/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Logger","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/Error","../../core/has","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","./Edges3D"],(function(e,r,o,s,t,c,n,i,u,l){"use strict";var a;let p=a=function(r){function o(e){var o;return(o=r.call(this,e)||this).type="solid",o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new a(this.cloneProperties())},o}(l);r.__decorate([i.enumeration({solid:"solid"},{readOnly:!0})],p.prototype,"type",void 0),p=a=r.__decorate([u.subclass("esri.symbols.support.SolidEdges3D")],p);return p}));
