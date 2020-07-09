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

define(["require","exports","../../../core/arrayUtils","../../../renderers/visualVariables/SizeVariable"],(function(e,l,a,i){Object.defineProperty(l,"__esModule",{value:!0});l.getClusterSizeVariable=function(e,l){if(!(e&&"visualVariables"in e&&e.visualVariables))return null;var r=a.find(e.visualVariables,(function(e){return"size"===e.type})),n=function(e,l){var a=e.featuresTilingScheme.getClosestInfoForScale(e.scale).level;return l.levels?l.levels[a]:null}(l,r);return n?new i({field:r.field,minSize:n[2].size,minDataValue:n[2].value,maxSize:n[3].size,maxDataValue:n[3].value}):null}}));