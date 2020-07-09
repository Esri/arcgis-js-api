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

define(["require","exports","tslib","../../shaderModules/interfaces"],(function(e,a,n,o){var l;Object.defineProperty(a,"__esModule",{value:!0}),a.IsNaN=function(e){var a=o.glsl(l||(l=n.__makeTemplateObject(["\n    bool isNaN( float val )\n    {\n      return ( val < 0.0 || 0.0 < val || val == 0.0 ) ? false : true;\n      // important: some nVidias failed to cope with version below.\n      // Probably wrong optimization.\n      /*return ( val <= 0.0 || 0.0 <= val ) ? false : true;*/\n    }\n  "],["\n    bool isNaN( float val )\n    {\n      return ( val < 0.0 || 0.0 < val || val == 0.0 ) ? false : true;\n      // important: some nVidias failed to cope with version below.\n      // Probably wrong optimization.\n      /*return ( val <= 0.0 || 0.0 <= val ) ? false : true;*/\n    }\n  "])));e.fragment.code.add(a),e.vertex.code.add(a)}}));