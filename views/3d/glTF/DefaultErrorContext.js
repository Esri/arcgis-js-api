/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../core/Error","../../../core/Logger"],(function(r,e,t){"use strict";let o=function(){function r(){}var o=r.prototype;return o.error=function(r){throw new e("gltf-loader-error",r)},o.errorUnsupported=function(r){throw new e("gltf-loader-unsupported-feature",r)},o.errorUnsupportedIf=function(r,e){r&&this.errorUnsupported(e)},o.assert=function(r,e){r||this.error(e)},o.warn=function(r){t.getLogger("esri.views.3d.glTF").warn(r)},o.warnUnsupported=function(r){this.warn("[Unsupported Feature] "+r)},o.warnUnsupportedIf=function(r,e){r&&this.warnUnsupported(e)},r}();r.DefaultErrorContext=o,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
