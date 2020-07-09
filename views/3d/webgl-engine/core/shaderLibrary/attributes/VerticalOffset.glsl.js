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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../util/ScreenSizePerspective.glsl","../../shaderModules/interfaces"],(function(e,l,t,r,c){function n(e,l){var n=e.vertex.code;l.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),l.screenSizePerspectiveEnabled&&(e.include(r.ScreenSizePerspective),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),n.add(c.glsl(v||(v=t.__makeTemplateObject(["\n    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {\n      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);\n      ","\n      ","\n      // Screen sized offset in world space, used for example for line callouts\n      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);\n      return worldNormal * worldOffset;\n    }\n\n    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {\n      return worldPos + calculateVerticalOffset(worldPos, localOrigin);\n    }\n    "],["\n    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {\n      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);\n      ","\n      ","\n      // Screen sized offset in world space, used for example for line callouts\n      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);\n      return worldNormal * worldOffset;\n    }\n\n    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {\n      return worldPos + calculateVerticalOffset(worldPos, localOrigin);\n    }\n    "])),0===l.viewingMode?c.glsl(i||(i=t.__makeTemplateObject(["vec3 worldNormal = normalize(worldPos + localOrigin);"],["vec3 worldNormal = normalize(worldPos + localOrigin);"]))):c.glsl(o||(o=t.__makeTemplateObject(["vec3 worldNormal = vec3(0.0, 0.0, 1.0);"],["vec3 worldNormal = vec3(0.0, 0.0, 1.0);"]))),l.screenSizePerspectiveEnabled?c.glsl(s||(s=t.__makeTemplateObject(["\n          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));\n          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);"],["\n          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));\n          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);"]))):c.glsl(f||(f=t.__makeTemplateObject(["\n          float verticalOffsetScreenHeight = verticalOffset.x;"],["\n          float verticalOffsetScreenHeight = verticalOffset.x;"])))))):n.add(c.glsl(d||(d=t.__makeTemplateObject(["\n    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }\n    "],["\n    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }\n    "]))))}function a(e,l,t,r){return void 0===r&&(r=O),r.screenLength=e.screenLength,r.perDistance=Math.tan(.5*l)/(.5*t),r.minWorldLength=e.minWorldLength,r.maxWorldLength=e.maxWorldLength,r}Object.defineProperty(l,"__esModule",{value:!0}),l.VerticalOffset=n,function(e){e.bindUniforms=function(e,l,t){if(l.verticalOffset){var r=a(l.verticalOffset,t.fovY,t.viewport[3]),c=t.pixelRatio||1;e.setUniform4f("verticalOffset",r.screenLength*c,r.perDistance,r.minWorldLength,r.maxWorldLength)}}}(n=l.VerticalOffset||(l.VerticalOffset={})),l.calculateVerticalOffsetFactors=a;var i,o,s,f,v,d,O={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}}));