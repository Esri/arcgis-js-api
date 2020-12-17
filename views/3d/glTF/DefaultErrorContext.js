/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../core/Logger","../../../core/Error"],(function(r,e,t){"use strict";const n=e.getLogger("esri.views.3d.glTF");let o=function(){function r(){}var e=r.prototype;return e.error=function(r){throw new t("gltf-loader-error",r)},e.errorUnsupported=function(r){throw new t("gltf-loader-unsupported-feature",r)},e.errorUnsupportedIf=function(r,e){r&&this.errorUnsupported(e)},e.assert=function(r,e){r||this.error(e)},e.warn=function(r){n.warn(r)},e.warnUnsupported=function(r){this.warn("[Unsupported Feature] "+r)},e.warnUnsupportedIf=function(r,e){r&&this.warnUnsupported(e)},r}();r.DefaultErrorContext=o,Object.defineProperty(r,"__esModule",{value:!0})}));
