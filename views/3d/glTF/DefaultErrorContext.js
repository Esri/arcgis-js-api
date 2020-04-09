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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/Error","../../../core/Logger"],(function(r,e,o,t){Object.defineProperty(e,"__esModule",{value:!0});var n=t.getLogger("esri.views.3d.glTF"),p=function(){function r(){}return r.prototype.error=function(r){throw new o("gltf-loader-error",r)},r.prototype.errorUnsupported=function(r){throw new o("gltf-loader-unsupported-feature",r)},r.prototype.errorUnsupportedIf=function(r,e){r&&this.errorUnsupported(e)},r.prototype.assert=function(r,e){r||this.error(e)},r.prototype.warn=function(r){n.warn(r)},r.prototype.warnUnsupported=function(r){this.warn("[Unsupported Feature] "+r)},r.prototype.warnUnsupportedIf=function(r,e){r&&this.warnUnsupported(e)},r}();e.DefaultErrorContext=p}));