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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports"],function(e,t){function r(e){if(e)return e.get("sourceLayer")||e.get("layer")}function a(e){var t=o[e];return t?{transform:"rotate("+t.rotate+"deg) scaleX("+t.scaleX+")"}:{}}Object.defineProperty(t,"__esModule",{value:!0});var o={1:{rotate:0,scaleX:1},2:{rotate:0,scaleX:-1},3:{rotate:180,scaleX:1},4:{rotate:180,scaleX:-1},5:{rotate:90,scaleX:-1},6:{rotate:90,scaleX:1},7:{rotate:-90,scaleX:-1},8:{rotate:-90,scaleX:1}};t.getSourceLayer=r,t.getOrientationStyles=a});