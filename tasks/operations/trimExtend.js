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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/jsonMap"],(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=new n.default({0:"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"});t.trimExtendToRESTParameters=function(e){var t=e.toJSON(),n=t.extendHow,o=t.polylines,i=t.trimExtendTo,a={};return a.extendHow=r.toJSON(n),o&&o.length&&(a.polylines=JSON.stringify(o),a.sr=JSON.stringify(o[0].spatialReference)),i&&(a.trimExtendTo=JSON.stringify(i)),a}}));