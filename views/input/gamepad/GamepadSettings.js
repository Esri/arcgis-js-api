/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/Collection","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","./GamepadInputDevice"],(function(e,o,r,t,c,s,n,p,a,i){"use strict";let u=function(o){function r(...e){var r;return(r=o.call(this,...e)||this).devices=new t,r.enabledFocusMode="document",r}return e._inheritsLoose(r,o),r}(r);o.__decorate([c.property({type:t.ofType(i),readOnly:!0})],u.prototype,"devices",void 0),o.__decorate([c.property({type:["document","view","none"]})],u.prototype,"enabledFocusMode",void 0),u=o.__decorate([a.subclass("esri.views.input.gamepad.GamepadSettings")],u);return u}));
