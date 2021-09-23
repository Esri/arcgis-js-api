/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","./Symbol3DMaterial"],(function(e,o,r,l,t,i,c,s,a,u,n){"use strict";var p;e.Symbol3DFillMaterial=p=function(e){function r(){return e.apply(this,arguments)||this}return o._inheritsLoose(r,e),r.prototype.clone=function(){return new p({color:l.isSome(this.color)?this.color.clone():null,colorMixMode:this.colorMixMode})},r}(n.default),r.__decorate([a.enumeration({multiply:"multiply",replace:"replace",tint:"tint"})],e.Symbol3DFillMaterial.prototype,"colorMixMode",void 0),e.Symbol3DFillMaterial=p=r.__decorate([u.subclass("esri.symbols.support.Symbol3DFillMaterial")],e.Symbol3DFillMaterial);var y=e.Symbol3DFillMaterial;e.default=y,Object.defineProperty(e,"__esModule",{value:!0})}));
