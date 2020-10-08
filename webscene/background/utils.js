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

define(["require","exports","./Background","./ColorBackground"],(function(e,r,o,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.backgroundProperty=void 0;var n,a={base:o,key:"type",typeMap:{color:t}};r.backgroundProperty={types:a,json:{read:(n=a,function(e,r,o){if(!e)return e;for(var t in n.typeMap)if(e.type===t){var a=new n.typeMap[t];return a.read(e,o),a}}),write:{overridePolicy:function(e,r,o){return{enabled:!o||!o.isPresentation}}}}}}));