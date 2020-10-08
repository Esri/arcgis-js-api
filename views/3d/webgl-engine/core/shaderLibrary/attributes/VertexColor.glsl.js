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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../shaderModules/interfaces"],(function(o,e,r,d){"use strict";var l,t,a;Object.defineProperty(e,"__esModule",{value:!0}),e.VertexColor=void 0,e.VertexColor=function(o,e){e.attributeColor?(o.attributes.add("color","vec4"),o.varyings.add("vColor","vec4"),o.vertex.code.add(d.glsl(l||(l=r.__makeTemplateObject(["\n      void forwardVertexColor() { vColor = color; }\n    "],["\n      void forwardVertexColor() { vColor = color; }\n    "])))),o.vertex.code.add(d.glsl(t||(t=r.__makeTemplateObject(["\n      void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }\n    "],["\n      void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }\n    "]))))):o.vertex.code.add(d.glsl(a||(a=r.__makeTemplateObject(["\n      void forwardVertexColor() {}\n      void forwardNormalizedVertexColor() {}\n    "],["\n      void forwardVertexColor() {}\n      void forwardNormalizedVertexColor() {}\n    "]))))}}));