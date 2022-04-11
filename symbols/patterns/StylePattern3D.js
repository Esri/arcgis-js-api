/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./Pattern3D","./styles"],(function(e,t,r,s,o,c,p,n,l){"use strict";var a;let y=a=function(t){function r(e){var r;return(r=t.call(this,e)||this).type="style",r.style="solid",r}return e._inheritsLoose(r,t),r.prototype.clone=function(){const e={style:this.style};return new a(e)},r}(n);t.__decorate([r.property({type:["style"]})],y.prototype,"type",void 0),t.__decorate([r.property({type:l,json:{read:!0,write:!0}})],y.prototype,"style",void 0),y=a=t.__decorate([p.subclass("esri.symbols.patterns.StylePattern3D")],y);return y}));
