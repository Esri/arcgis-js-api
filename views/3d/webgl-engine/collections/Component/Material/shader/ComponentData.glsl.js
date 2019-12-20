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

define(["require","exports","../../../../../../../core/tsSupport/makeTemplateObjectHelper","./DecodeSymbolColor.glsl","../../../../core/shaderModules/interfaces"],function(o,e,n,r,l){function t(o,e){1===e.componentData&&(o.vertex.uniforms.add("uComponentColorTex","sampler2D"),o.vertex.uniforms.add("uComponentColorTexInvDim","vec2"),o.attributes.add("componentIndex","float"),o.varyings.add("vExternalColorMixMode","mediump float"),o.varyings.add("vExternalColor","vec4"),o.include(r.DecodeSymbolColor),o.vertex.code.add(l.glsl(a||(a=n(["\n      vec4 _readComponentColor() {\n        float normalizedIndex = (componentIndex + 0.5) * uComponentColorTexInvDim.x;\n        vec2 indexCoord = vec2(\n          mod(normalizedIndex, 1.0),\n          (floor(normalizedIndex) + 0.5) * uComponentColorTexInvDim.y\n        );\n        return texture2D(uComponentColorTex, indexCoord);\n       }\n\n      vec4 forwardExternalColor(out bool castShadows) {\n        vec4 componentColor = _readComponentColor() * 255.0;\n\n        float shadowFlag = mod(componentColor.b * 255.0, 2.0);\n        componentColor.b -= shadowFlag;\n        castShadows = shadowFlag >= 1.0;\n\n        int decodedColorMixMode;\n        vExternalColor = decodeSymbolColor(componentColor, decodedColorMixMode) * 0.003921568627451; // = 1/255;\n        vExternalColorMixMode = float(decodedColorMixMode) + 0.5; // add 0.5 to avoid interpolation artifacts\n\n        return vExternalColor;\n      }\n    "],["\n      vec4 _readComponentColor() {\n        float normalizedIndex = (componentIndex + 0.5) * uComponentColorTexInvDim.x;\n        vec2 indexCoord = vec2(\n          mod(normalizedIndex, 1.0),\n          (floor(normalizedIndex) + 0.5) * uComponentColorTexInvDim.y\n        );\n        return texture2D(uComponentColorTex, indexCoord);\n       }\n\n      vec4 forwardExternalColor(out bool castShadows) {\n        vec4 componentColor = _readComponentColor() * 255.0;\n\n        float shadowFlag = mod(componentColor.b * 255.0, 2.0);\n        componentColor.b -= shadowFlag;\n        castShadows = shadowFlag >= 1.0;\n\n        int decodedColorMixMode;\n        vExternalColor = decodeSymbolColor(componentColor, decodedColorMixMode) * 0.003921568627451; // = 1/255;\n        vExternalColorMixMode = float(decodedColorMixMode) + 0.5; // add 0.5 to avoid interpolation artifacts\n\n        return vExternalColor;\n      }\n    "])))),o.fragment.code.add(l.glsl(d||(d=n(["\n      void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {\n        externalColor = vExternalColor;\n        externalColorMixMode = int(vExternalColorMixMode);\n      }\n    "],["\n      void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {\n        externalColor = vExternalColor;\n        externalColorMixMode = int(vExternalColorMixMode);\n      }\n    "]))))),0===e.componentData&&(o.vertex.uniforms.add("uExternalColor","vec4"),o.fragment.uniforms.add("uExternalColorMixMode","int"),o.varyings.add("vExternalColor","vec4"),o.vertex.code.add(l.glsl(x||(x=n(["\n      vec4 forwardExternalColor(out bool castShadows) {\n        vExternalColor = uExternalColor;\n        castShadows = true;\n        return uExternalColor;\n      }\n    "],["\n      vec4 forwardExternalColor(out bool castShadows) {\n        vExternalColor = uExternalColor;\n        castShadows = true;\n        return uExternalColor;\n      }\n    "])))),o.fragment.code.add(l.glsl(C||(C=n(["\n      void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {\n        externalColor = vExternalColor;\n        externalColorMixMode = uExternalColorMixMode;\n      }\n    "],["\n      void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {\n        externalColor = vExternalColor;\n        externalColorMixMode = uExternalColorMixMode;\n      }\n    "])))))}Object.defineProperty(e,"__esModule",{value:!0}),e.ComponentData=t;var a,d,x,C});