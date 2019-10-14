// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../core/Error","../../core/has"],function(e,r,t,s,i){function n(e){return e=t({},o,e),i("esri-webgl")?!e.supportsMajorWebPerformanceCaveat&&i("esri-webgl-major-performance-caveat")?new s("webgl:major-performance-caveat-detected","Your WebGL implementation doesn't seem to support hardware accelerated rendering. Check your browser settings or if your GPU is blacklisted."):i("esri-webgl-high-precision-fragment")?i("esri-webgl-vertex-shader-samplers")?i("esri-webgl-element-index-uint")?i("esri-webgl-standard-derivatives")?i("esri-webgl-instanced-arrays")?null:new s("webgl:instanced-arrays-required","WebGL support for instanced rendering is required but not supported."):new s("webgl:standard-derivatives-required","WebGL support for standard derivatives is required but not supported."):new s("webgl:element-index-uint-required","WebGL support for uint vertex indices is required but not supported."):new s("webgl:vertex-shader-samplers-required","WebGL support for vertex shader samplers is required but not supported."):new s("webgl:high-precision-fragment-required","WebGL support for high precision fragment shaders is required but not supported."):new s("webgl:required","WebGL is required but not supported.")}Object.defineProperty(r,"__esModule",{value:!0});var o={supportsMajorWebPerformanceCaveat:!1};r.check=n});