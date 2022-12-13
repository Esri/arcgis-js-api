// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","./treeAnalysis","./lib/arcade-parser","./lib/arcade-parser"],(function(r,e,i,n,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.parseScript=void 0,e.parseScript=function(r,e){void 0===e&&(e=[]);var d=n.parse(r);if(null===d.body||void 0===d.body)throw new o.ParsingError({index:0,line:0,column:0,data:null,description:"",code:o.ParsingErrorCodes.InvalidExpression});if(0===d.body.length)throw new o.ParsingError({index:0,line:0,column:0,data:null,description:"",code:o.ParsingErrorCodes.InvalidExpression});if(0===d.body.length)throw new o.ParsingError({index:0,line:0,column:0,data:null,description:"",code:o.ParsingErrorCodes.InvalidExpression});return d.loadedModules={},i.findScriptDependencies(d,e),d}}));