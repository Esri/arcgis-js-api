/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,c,p,i){"use strict";let n=function(r){function o(e){var o;return(o=r.call(this,e)||this).visible=!0,o}return e._inheritsLoose(o,r),o.prototype.clone=function(){},o}(o.JSONSupport);return r.__decorate([t.property({type:["line"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],n.prototype,"type",void 0),r.__decorate([t.property({readOnly:!0})],n.prototype,"visible",void 0),n=r.__decorate([i.subclass("esri.symbols.callouts.Callout3D")],n),n}));
