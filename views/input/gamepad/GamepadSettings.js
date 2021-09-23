/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/Collection","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","./GamepadInputDevice"],(function(e,o,r,c,t,s,n,p,a,u){"use strict";let i=function(o){function r(...e){var r;return(r=o.call(this,...e)||this).devices=new c,r.enabledFocusMode="document",r}return e._inheritsLoose(r,o),r}(r);return o.__decorate([t.property({type:c.ofType(u),readOnly:!0})],i.prototype,"devices",void 0),o.__decorate([t.property({type:["document","view","none"]})],i.prototype,"enabledFocusMode",void 0),i=o.__decorate([a.subclass("esri.views.input.gamepad.GamepadSettings")],i),i}));
