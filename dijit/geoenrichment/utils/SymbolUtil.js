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

define(["esri/symbols/PictureFillSymbol","../ReportPlayer/dataProvider/commands/imageUtils/NodeToCanvasUtil","./PatternLibrary"],function(l,e,o){var r={};return r.simpleFillSymbolToPictureFillSymbol=function(r){if(!r)return null;var n=o.createSvgForPictureFillSymbol({fillStyle:r.style,fillColor:r.color.toCss(!1),fillAlpha:r.color.a});return e.svgNodeToCanvasFunc(n,10,10).then(function(e){try{var o=new l(e.toDataURL("image/png"),r.outline,10,10);return o.contentType="image/png",o}catch(l){return console.log(l),null}}).otherwise(function(l){return console.log(l),null})},r});