// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../core/declare","../core/screenUtils","./Symbol"],function(e,t,r){var o=e(r,{declaredClass:"esri.symbols.MarkerSymbol",properties:{angle:{value:0,json:{read:function(e){return e&&-1*e},write:function(e,t){t.angle=e&&-1*e}}},type:{},xoffset:{value:0,cast:t.toPt,json:{writable:!0}},yoffset:{value:0,cast:t.toPt,json:{writable:!0}},size:{value:9,cast:function(e){return"auto"===e?e:t.toPt(e)},json:{writable:!0}}}});return o});