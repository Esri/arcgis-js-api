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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["./dom-style"],(function(e){return{checkNode:function(t){return e.cacheComputedStyle(t),"hidden"===e.get(t,"visibility")||"none"===e.get(t,"display")||Number(e.get(t,"opacity"))<=.01?(e.clearCache(t),!1):(e.clearCache(t),!0)},checkRect:function(e){var t=!!e.style.getBackground().opacity,r=e.style.getBorder().radius>0&&(e.style.getBorder().ew>0||e.style.getBorder().eh>0);return(e.style.getPaddings().bw>0||e.style.getPaddings().bh>0)&&(t||r)},checkBorder:function(e){return!!e.width&&!!e.opacity}}}));
