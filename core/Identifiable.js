/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","./accessorSupport/decorators/subclass"],(function(e,t,i,n){"use strict";let r=0;const s=e=>{let s=function(e){function i(...i){var n;return n=e.call(this,...i)||this,Object.defineProperty(t._assertThisInitialized(n),"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+r++}),n}return t._inheritsLoose(i,e),i}(e);return s=i.__decorate([n.subclass("esri.core.Identifiable")],s),s};e.Identifiable=function(e){function i(){return e.apply(this,arguments)||this}return t._inheritsLoose(i,e),i}(s(function(){return function(){}}())),e.Identifiable=i.__decorate([n.subclass("esri.core.Identifiable")],e.Identifiable),e.IdentifiableMixin=s,Object.defineProperty(e,"__esModule",{value:!0})}));
