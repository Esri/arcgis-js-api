/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","./Pattern3D","./styles"],(function(e,t,r,s,o,c,p,n,l){"use strict";var y;let a=y=function(t){function r(e){var r;return(r=t.call(this,e)||this).type="style",r.style="solid",r}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new y({style:this.style})},r}(n);return t.__decorate([r.property({type:["style"]})],a.prototype,"type",void 0),t.__decorate([r.property({type:l,json:{read:!0,write:!0}})],a.prototype,"style",void 0),a=y=t.__decorate([p.subclass("esri.symbols.patterns.StylePattern3D")],a),a}));
