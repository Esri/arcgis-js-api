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

define(["require","exports","../../../../core/tsSupport/assignHelper"],function(e,r,a){Object.defineProperty(r,"__esModule",{value:!0});var t={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},o={pbrMetallicRoughness:t,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutOff:.5,doubleSided:!1};r.material=function(e){void 0===e&&(e={});var r=a({},t,e?e.pbrMetallicRoughness:void 0);return a({},o,e,{pbrMetallicRoughness:r})};var i={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497};r.textureSampler=function(e){return a({},i,e)}});