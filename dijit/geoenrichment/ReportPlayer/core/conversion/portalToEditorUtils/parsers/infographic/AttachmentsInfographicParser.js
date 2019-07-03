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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["../../../ConversionUtil"],function(t){var a={};return a.portalToEditor=function(a,i){return{type:a.attributes.type,useCircularMask:a.attributes.useCircularMask,alwaysShowCaptions:a.attributes.alwaysShowCaptions,scaleToCover:a.attributes.scaleToCover,style:{width:t.ptToPx(a.attributes.width),height:t.ptToPx(a.attributes.height),padding:a.attributes.padding?t.ptToPx(a.attributes.padding):void 0,backgroundColor:a.attributes.backgroundColor}}},a});