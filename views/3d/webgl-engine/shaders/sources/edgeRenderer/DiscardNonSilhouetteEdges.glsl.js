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

define(["require","exports","tslib","../../../core/shaderModules/interfaces"],(function(e,o,l,r){var n,i,a,d;Object.defineProperty(o,"__esModule",{value:!0}),o.DiscardNonSilhouetteEdges=function(e,o){var t=e.vertex;o.silhouette?(t.code.add(r.glsl(n||(n=l.__makeTemplateObject(["\n      bool isSilhouetteEdge(vec3 viewDir, vec3 normalA, vec3 normalB) {\n        float faceAVisible = dot(viewDir, normalA);\n        float faceBVisible = dot(viewDir, normalB);\n        return faceAVisible * faceBVisible < 0.0;\n      }\n    "],["\n      bool isSilhouetteEdge(vec3 viewDir, vec3 normalA, vec3 normalB) {\n        float faceAVisible = dot(viewDir, normalA);\n        float faceBVisible = dot(viewDir, normalB);\n        return faceAVisible * faceBVisible < 0.0;\n      }\n    "])))),o.legacy?t.code.add(r.glsl(i||(i=l.__makeTemplateObject(["\n        bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos) {\n          vec3 viewNormalA = _modelToViewNormal(normalA);\n          vec3 viewNormalB = _modelToViewNormal(normalB);\n          vec3 viewDir = -viewPos;\n\n          if (isSilhouetteEdge(viewDir, viewNormalA, viewNormalB)) {\n            return false;\n          }\n\n          gl_Position = vec4(10.0, 10.0, 10.0, 1.0);\n          return true;\n        }\n      "],["\n        bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos) {\n          vec3 viewNormalA = _modelToViewNormal(normalA);\n          vec3 viewNormalB = _modelToViewNormal(normalB);\n          vec3 viewDir = -viewPos;\n\n          if (isSilhouetteEdge(viewDir, viewNormalA, viewNormalB)) {\n            return false;\n          }\n\n          gl_Position = vec4(10.0, 10.0, 10.0, 1.0);\n          return true;\n        }\n      "])))):t.code.add(r.glsl(a||(a=l.__makeTemplateObject(["\n        bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos) {\n          vec3 worldNormalA = _modelToWorldNormal(normalA);\n          vec3 worldNormalB = _modelToWorldNormal(normalB);\n          vec3 viewDir = -worldPos;\n\n          if (isSilhouetteEdge(viewDir, worldNormalA, worldNormalB)) {\n            return false;\n          }\n\n          gl_Position = vec4(10.0, 10.0, 10.0, 1.0);\n          return true;\n        }\n      "],["\n        bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos) {\n          vec3 worldNormalA = _modelToWorldNormal(normalA);\n          vec3 worldNormalB = _modelToWorldNormal(normalB);\n          vec3 viewDir = -worldPos;\n\n          if (isSilhouetteEdge(viewDir, worldNormalA, worldNormalB)) {\n            return false;\n          }\n\n          gl_Position = vec4(10.0, 10.0, 10.0, 1.0);\n          return true;\n        }\n      "]))))):t.code.add(r.glsl(d||(d=l.__makeTemplateObject(["\n      bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos) {\n        return false;\n      }\n    "],["\n      bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos) {\n        return false;\n      }\n    "]))))}}));