// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/Color","dojo/has","./kernel"],(function(o,r,e,n){var a=o([r],{declaredClass:"esri.Color"});a.toJsonColor=function(o){return o&&[o.r,o.g,o.b,o.a>1?o.a:Math.round(255*o.a)]},a.toDojoColor=function(o){return o&&new a([o[0],o[1],o[2],o[3]/255])};var l,t=["named","blendColors","fromRgb","fromHex","fromArray","fromString"];for(l=0;l<t.length;l++)a[t[l]]=r[t[l]];return e("extend-esri")&&(n.Color=a),a}));