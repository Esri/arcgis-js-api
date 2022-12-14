/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/Collection","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","./GamepadInputDevice"],(function(e,o,r,t,c,s,n,p,a){"use strict";let i=function(o){function r(...e){var r;return(r=o.call(this,...e)||this).devices=new t,r.enabledFocusMode="document",r}return e._inheritsLoose(r,o),r}(r);o.__decorate([c.property({type:t.ofType(a),readOnly:!0})],i.prototype,"devices",void 0),o.__decorate([c.property({type:["document","view","none"]})],i.prototype,"enabledFocusMode",void 0),i=o.__decorate([p.subclass("esri.views.input.gamepad.GamepadSettings")],i);return i}));
