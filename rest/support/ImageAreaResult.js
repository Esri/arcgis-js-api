/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","./BaseImageMeasureResult"],(function(e,r,s,t,a,o,u){"use strict";let p=function(r){function s(){var e;return(e=r.apply(this,arguments)||this).area=null,e.perimeter=null,e}return e._inheritsLoose(s,r),s}(u.BaseImageMeasureResult);r.__decorate([s.property({type:u.ImageMeasureResultAreaValue,json:{read:!0,write:!0}})],p.prototype,"area",void 0),r.__decorate([s.property({type:u.ImageMeasureResultLengthValue,json:{read:!0,write:!0}})],p.prototype,"perimeter",void 0),p=r.__decorate([o.subclass("esri.rest.support.ImageAreaResult")],p);return p}));
