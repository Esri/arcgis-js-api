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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports","../polyfill/tsSupport/exportstar","./parser","./tokenizer","./types"],(function(e,r,t,o,n,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.tokenize=r.parse=void 0,t(i,r),r.parse=function(e,r,t){return new o.Parser(e,r,t).parseScript()},r.tokenize=function(e,r,t){var o=new n.Tokenizer(e,r),i=[],s=void 0;try{for(var a=void 0;a=o.getNextToken();)t&&(a=t(a)),i.push(a)}catch(e){o.errorHandler.tolerate(e)}return o.errorHandler.tolerant&&(s=o.errors()),{tokens:i,errors:s}}}));