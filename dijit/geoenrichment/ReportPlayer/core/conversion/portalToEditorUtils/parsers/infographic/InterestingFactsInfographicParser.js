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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["../../../ConversionUtil"],function(t){var i={};return i.portalToEditor=function(i,r){return{type:i.attributes.type,style:{width:t.ptToPx(i.attributes.width),height:t.ptToPx(i.attributes.height),padding:i.attributes.padding?t.ptToPx(i.attributes.padding):void 0,backgroundColor:i.attributes.backgroundColor}}},i});