/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import r from"../../../core/Error.js";import e from"../../../core/Logger.js";const o=e.getLogger("esri.views.3d.glTF");class t{error(e){throw new r("gltf-loader-error",e)}errorUnsupported(e){throw new r("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(r,e){r&&this.errorUnsupported(e)}assert(r,e){r||this.error(e)}warn(r){o.warn(r)}warnUnsupported(r){this.warn("[Unsupported Feature] "+r)}warnUnsupportedIf(r,e){r&&this.warnUnsupported(e)}}export{t as DefaultErrorContext};
