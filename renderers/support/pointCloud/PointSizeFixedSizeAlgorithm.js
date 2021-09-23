/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/enumeration","../../../core/accessorSupport/decorators/subclass","./PointSizeAlgorithm"],(function(e,o,i,r,t,s,l,n,p,u){"use strict";var d;e.PointSizeFixedSizeAlgorithm=d=function(e){function i(){var o;return(o=e.apply(this,arguments)||this).type="fixed-size",o.size=0,o.useRealWorldSymbolSizes=null,o}return o._inheritsLoose(i,e),i.prototype.clone=function(){return new d({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})},i}(u.default),i.__decorate([n.enumeration({pointCloudFixedSizeAlgorithm:"fixed-size"})],e.PointSizeFixedSizeAlgorithm.prototype,"type",void 0),i.__decorate([r.property({type:Number,nonNullable:!0,json:{write:!0}})],e.PointSizeFixedSizeAlgorithm.prototype,"size",void 0),i.__decorate([r.property({type:Boolean,json:{write:!0}})],e.PointSizeFixedSizeAlgorithm.prototype,"useRealWorldSymbolSizes",void 0),e.PointSizeFixedSizeAlgorithm=d=i.__decorate([p.subclass("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],e.PointSizeFixedSizeAlgorithm);var c=e.PointSizeFixedSizeAlgorithm;e.default=c,Object.defineProperty(e,"__esModule",{value:!0})}));
