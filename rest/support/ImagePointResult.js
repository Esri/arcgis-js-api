/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","./BaseImageMeasureResult","../../geometry/Point"],(function(e,r,t,s,o,u,a,n,p){"use strict";let c=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).point=null,e}return e._inheritsLoose(t,r),t}(n.BaseImageMeasureResult);r.__decorate([s.property({type:p,json:{name:"point.value",read:!0,write:!0}})],c.prototype,"point",void 0),c=r.__decorate([a.subclass("esri.rest.support.ImagePointResult")],c);return c}));
