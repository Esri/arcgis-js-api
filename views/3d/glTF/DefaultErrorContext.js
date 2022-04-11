/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../core/Error","../../../core/Logger"],(function(r,e,t){"use strict";const o=t.getLogger("esri.views.3d.glTF");let n=function(){function r(){}var t=r.prototype;return t.error=function(r){throw new e("gltf-loader-error",r)},t.errorUnsupported=function(r){throw new e("gltf-loader-unsupported-feature",r)},t.errorUnsupportedIf=function(r,e){r&&this.errorUnsupported(e)},t.assert=function(r,e){r||this.error(e)},t.warn=function(r){o.warn(r)},t.warnUnsupported=function(r){this.warn("[Unsupported Feature] "+r)},t.warnUnsupportedIf=function(r,e){r&&this.warnUnsupported(e)},r}();r.DefaultErrorContext=n,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
