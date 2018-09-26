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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","./Background","./ColorBackground"],function(e,r,n,t){Object.defineProperty(r,"__esModule",{value:!0});var o={base:n,key:"type",typeMap:{color:t}};r.backgroundProperty={types:o,json:{read:function(e){return function(r,n,t){if(!r)return r;for(var o in e.typeMap)if(r.type===o){var a=new e.typeMap[o];return a.read(r,t),a}}}(o),write:{overridePolicy:function(e,r,n){return{enabled:!n||!n.isPresentation}}}}}});