/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Logger","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/set","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","./Edges3D"],(function(e,r,s,o,t,c,n,u,a,i){"use strict";var p;let l=p=function(r){function s(e){var s;return(s=r.call(this,e)||this).type="sketch",s}return e._inheritsLoose(s,r),s.prototype.clone=function(){return new p(this.cloneProperties())},s}(i);r.__decorate([u.enumeration({sketch:"sketch"},{readOnly:!0})],l.prototype,"type",void 0),l=p=r.__decorate([a.subclass("esri.symbols.edges.SketchEdges3D")],l);return l}));
