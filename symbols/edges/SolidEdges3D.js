/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Logger","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/set","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","./Edges3D"],(function(e,r,o,s,t,c,n,i,u,a){"use strict";var l;let p=l=function(r){function o(e){var o;return(o=r.call(this,e)||this).type="solid",o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new l(this.cloneProperties())},o}(a);r.__decorate([i.enumeration({solid:"solid"},{readOnly:!0})],p.prototype,"type",void 0),p=l=r.__decorate([u.subclass("esri.symbols.support.SolidEdges3D")],p);return p}));
