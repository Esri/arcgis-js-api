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

define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../util/ScreenSizePerspective.glsl","../../shaderModules/interfaces"],function(e,l,t,r,c){function n(e,l){var n=e.vertex.code;l.verticalOffsetEnabled&&(e.vertex.uniforms.add("verticalOffset","vec4"),l.screenSizePerspectiveEnabled&&(e.include(r.ScreenSizePerspective),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),n.add(c.glsl(i||(i=t(["\n    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {\n      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);\n    "],["\n    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {\n      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);\n    "])))),0===l.viewingMode?n.add(c.glsl(a||(a=t(["\n      vec3 worldNormal = normalize(worldPos + localOrigin);\n    "],["\n      vec3 worldNormal = normalize(worldPos + localOrigin);\n    "])))):n.add(c.glsl(s||(s=t(["\n      vec3 worldNormal = vec3(0.0, 0.0, 1.0);\n    "],["\n      vec3 worldNormal = vec3(0.0, 0.0, 1.0);\n    "])))),l.screenSizePerspectiveEnabled?n.add(c.glsl(o||(o=t(["\n      float cosAngle = dot(worldNormal, normalize(worldPos - camPos));\n      float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);\n    "],["\n      float cosAngle = dot(worldNormal, normalize(worldPos - camPos));\n      float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);\n    "])))):n.add(c.glsl(f||(f=t(["\n      float verticalOffsetScreenHeight = verticalOffset.x;\n    "],["\n      float verticalOffsetScreenHeight = verticalOffset.x;\n    "])))),n.add(c.glsl(v||(v=t(["\n      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);\n      return worldNormal * worldOffset;\n    }\n    "],["\n      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);\n      return worldNormal * worldOffset;\n    }\n    "])))))}Object.defineProperty(l,"__esModule",{value:!0}),l.VerticalOffset=n;var i,a,s,o,f,v});