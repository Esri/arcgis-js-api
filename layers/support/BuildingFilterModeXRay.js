/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","./BuildingFilterMode"],(function(r,e,o,t,s,c,p,u,n,i,a){"use strict";var l;let y=l=function(e){function o(){var r;return(r=e.apply(this,arguments)||this).type="x-ray",r}return r._inheritsLoose(o,e),o.prototype.clone=function(){return new l},o}(a);return e.__decorate([c.property({type:["x-ray"],readOnly:!0,json:{write:!0}})],y.prototype,"type",void 0),y=l=e.__decorate([p.subclass("esri.layers.support.BuildingFilterModeXRay")],y),y}));
