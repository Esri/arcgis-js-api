/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport"],(function(e,r,o,t,s,c,p,i,u,n,l){"use strict";let a=function(r){function o(e){var o;return(o=r.call(this,e)||this).visible=!0,o}return e._inheritsLoose(o,r),o.prototype.clone=function(){},o}(l.JSONSupport);return r.__decorate([c.property({type:["line"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],a.prototype,"type",void 0),r.__decorate([c.property({readOnly:!0})],a.prototype,"visible",void 0),a=r.__decorate([p.subclass("esri.symbols.callouts.Callout3D")],a),a}));
