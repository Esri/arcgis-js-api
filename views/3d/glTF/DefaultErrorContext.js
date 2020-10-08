// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../core/Error","../../../core/Logger"],(function(r,t,e,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultErrorContext=void 0;var n=o.getLogger("esri.views.3d.glTF"),p=function(){function r(){}return r.prototype.error=function(r){throw new e("gltf-loader-error",r)},r.prototype.errorUnsupported=function(r){throw new e("gltf-loader-unsupported-feature",r)},r.prototype.errorUnsupportedIf=function(r,t){r&&this.errorUnsupported(t)},r.prototype.assert=function(r,t){r||this.error(t)},r.prototype.warn=function(r){n.warn(r)},r.prototype.warnUnsupported=function(r){this.warn("[Unsupported Feature] "+r)},r.prototype.warnUnsupportedIf=function(r,t){r&&this.warnUnsupported(t)},r}();t.DefaultErrorContext=p}));