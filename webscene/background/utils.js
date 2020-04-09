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

define(["require","exports","./Background","./ColorBackground"],(function(e,r,n,o){Object.defineProperty(r,"__esModule",{value:!0});var t,a={base:n,key:"type",typeMap:{color:o}};r.backgroundProperty={types:a,json:{read:(t=a,function(e,r,n){if(!e)return e;for(var o in t.typeMap)if(e.type===o){var a=new t.typeMap[o];return a.read(e,n),a}}),write:{overridePolicy:function(e,r,n){return{enabled:!n||!n.isPresentation}}}}}}));