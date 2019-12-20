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

define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../util/DecodeNormal.glsl","../../shaderModules/interfaces"],function(e,r,n,o,l){function a(e,r){0===r.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(l.glsl(d||(d=n(["\n      vec3 normalModel() {\n        return normal;\n      }\n    "],["\n      vec3 normalModel() {\n        return normal;\n      }\n    "]))))),1===r.normalType&&(e.include(o.DecodeNormal),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(l.glsl(t||(t=n(["\n      vec3 normalModel() {\n        return decodeNormal(normalCompressed);\n      }\n    "],["\n      vec3 normalModel() {\n        return decodeNormal(normalCompressed);\n      }\n    "])))))}Object.defineProperty(r,"__esModule",{value:!0}),r.NormalAttribute=a;var d,t});