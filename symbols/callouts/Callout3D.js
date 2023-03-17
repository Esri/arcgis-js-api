/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,c,p){"use strict";let i=function(r){function o(e){var o;return(o=r.call(this,e)||this).visible=!0,o}return e._inheritsLoose(o,r),o.prototype.clone=function(){},o}(o.JSONSupport);r.__decorate([t.property({type:["line"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],i.prototype,"type",void 0),r.__decorate([t.property({readOnly:!0})],i.prototype,"visible",void 0),i=r.__decorate([p.subclass("esri.symbols.callouts.Callout3D")],i);return i}));
