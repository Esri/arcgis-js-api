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

define(["dojo/number"],(function(e){return function(r,t){var c=r.decimals||0;switch(r.units){case"pct":return e.format(t/100,{places:c,type:"percent"});case"currency":return e.format(t,{places:c,type:"currency",symbol:r.symbol||"$"});default:return"esriFieldTypeDouble"==r.type||"double"==r.type?e.format(t,{places:c}):"number"==typeof t?Number(t.toFixed(10)):t}}}));