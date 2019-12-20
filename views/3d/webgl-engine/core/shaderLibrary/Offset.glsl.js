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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/makeTemplateObjectHelper","../shaderModules/interfaces"],function(o,e,c,n){function r(o){o.vertex.code.add(n.glsl(l||(l=c(["\n    vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {\n      vec3 camToVert = posWorld - camPosWorld;\n\n      bool isBackface = dot(camToVert, normalWorld) > 0.0;\n      if (isBackface) {\n        posClip.z += 0.0000003 * posClip.w;\n      }\n      return posClip;\n    }\n  "],["\n    vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {\n      vec3 camToVert = posWorld - camPosWorld;\n\n      bool isBackface = dot(camToVert, normalWorld) > 0.0;\n      if (isBackface) {\n        posClip.z += 0.0000003 * posClip.w;\n      }\n      return posClip;\n    }\n  "]))))}Object.defineProperty(e,"__esModule",{value:!0}),e.Offset=r;var l});