// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/Error","../../core/has"],function(e,r,i,t){function s(){return t("esri-webgl")?t("esri-webgl-major-performance-caveat")?new i("webgl:major-performance-caveat-detected","Your WebGL implementation doesn't seem to support hardware accelerated rendering. Check your browser settings or if your GPU is blacklisted."):t("esri-webgl-high-precision-fragment")?t("esri-webgl-vertex-shader-samplers")?t("esri-webgl-element-index-uint")?t("esri-webgl-standard-derivatives")?t("esri-webgl-instanced-arrays")?null:new i("webgl:instanced-arrays-required","WebGL support for instanced rendering is required but not supported."):new i("webgl:standard-derivatives-required","WebGL support for standard derivatives is required but not supported."):new i("webgl:element-index-uint-required","WebGL support for uint vertex indices is required but not supported."):new i("webgl:vertex-shader-samplers-required","WebGL support for vertex shader samplers is required but not supported."):new i("webgl:high-precision-fragment-required","WebGL support for high precision fragment shaders is required but not supported."):new i("webgl:required","WebGL is required but not supported.")}Object.defineProperty(r,"__esModule",{value:!0}),r.check=s});