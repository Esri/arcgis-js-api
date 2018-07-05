// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports"],function(o,e){function r(o,e,r){if(null==o||"ignore"===e)return r[0]=255,r[1]=255,r[2]=255,void(r[3]=255);r[0]=Math.floor(255*o[0]),r[1]=Math.floor(255*o[1]),r[2]=Math.floor(255*o[2]);var t=Math.floor(85*o[3]);r[3]=0===t?0:"tint"===e?t:"replace"===e?t+85:t+170}Object.defineProperty(e,"__esModule",{value:!0}),e.encodeSymbolColor=r});