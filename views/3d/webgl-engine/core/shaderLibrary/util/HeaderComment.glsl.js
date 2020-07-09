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

define(["require","exports","tslib","../../../../../../core/has","../../shaderModules/interfaces"],(function(e,t,u,n,r){var d;Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderComment=function(e,t){var o=r.glsl(d||(d=u.__makeTemplateObject(["\n  /*\n  *  ","\n  *  ","\n  */\n  "],["\n  /*\n  *  ","\n  *  ","\n  */\n  "])),t.name,0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":"");n("esri-validate-shaders")&&(e.fragment.code.add(o),e.vertex.code.add(o))}}));