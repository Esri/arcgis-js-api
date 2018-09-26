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

define(["require","exports","./previewSymbol2D","./previewSymbol3D","./previewWebStyleSymbol"],function(e,r,l,i,t){function o(e,r){switch(e.type){case"web-style":return t.previewWebStyleSymbol(e,o,r);case"label-3d":case"line-3d":case"mesh-3d":case"point-3d":case"polygon-3d":return i.previewSymbol3D(e,r);default:return l.previewSymbol2D(e,r)}}Object.defineProperty(r,"__esModule",{value:!0}),r.renderPreviewHTML=o});