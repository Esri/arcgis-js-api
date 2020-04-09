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

define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","./TextureCoordinateAttribute.glsl","../util/TextureAtlasLookup.glsl","../../shaderModules/interfaces"],(function(e,t,r,u,a,o){var n,s,p;Object.defineProperty(t,"__esModule",{value:!0}),t.VertexTextureCoordinates=function(e,t){e.include(u.TextureCoordinateAttribute,t),e.fragment.code.add(o.glsl(n||(n=r(["\n  struct TextureLookupParameter {\n    vec2 uv;\n    ","\n  } vtc;\n  "],["\n  struct TextureLookupParameter {\n    vec2 uv;\n    ","\n  } vtc;\n  "])),t.supportsTextureAtlas?"vec2 size;":"")),1===t.attributeTextureCoordinates&&e.fragment.code.add(o.glsl(s||(s=r(["\n      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {\n        return texture2D(tex, params.uv);\n      }\n    "],["\n      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {\n        return texture2D(tex, params.uv);\n      }\n    "])))),2===t.attributeTextureCoordinates&&(e.include(a.TextureAtlasLookup),e.fragment.code.add(o.glsl(p||(p=r(["\n    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {\n        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);\n      }\n    "],["\n    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {\n        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);\n      }\n    "])))))}}));