/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/Accessor","./gamepad/GamepadSettings"],(function(e,r,o,s,t,c,p,u,a,n,i,l){"use strict";let d=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).gamepad=new l,e}return e._inheritsLoose(o,r),o}(i);return r.__decorate([c.property({readOnly:!0})],d.prototype,"gamepad",void 0),d=r.__decorate([p.subclass("esri.views.input.Input")],d),d}));
