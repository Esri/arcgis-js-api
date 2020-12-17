/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","./Edges3D"],(function(e,r,o,s,t,c,n,u,i,p,l,a){"use strict";var d;let y=d=function(r){function o(e){var o;return(o=r.call(this,e)||this).type="solid",o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new d(this.cloneProperties())},o}(a);return r.__decorate([n.enumeration({solid:"solid"},{readOnly:!0})],y.prototype,"type",void 0),y=d=r.__decorate([u.subclass("esri.symbols.support.SolidEdges3D")],y),y}));
