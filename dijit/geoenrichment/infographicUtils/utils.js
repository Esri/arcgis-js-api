// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define([],(function(){return{getCeiling:function(t,a){if(0===t)return 0;var e;t<0?(t=-t,e=-1):e=1;var r=Math.pow(10,Math.ceil(Math.log(t)/Math.LN10)-1),n=2*Math.ceil(t/r/2)*r;return a&&Math.log(n)/Math.LN10%1==0&&(n*=2),n*e},supportsComparison:function(t,a){return"OneVar"===t||"AgePyramid"===t&&a||"RelatedVariables"===t&&a}}}));