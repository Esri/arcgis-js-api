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

define(["require","exports","tslib","../../../../core/compilerUtils"],(function(e,a,r,i){Object.defineProperty(a,"__esModule",{value:!0});var t={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},s={pbrMetallicRoughness:t,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},n={ESRI_externalColorMixMode:"tint"};a.material=function(e){void 0===e&&(e={});var a=r.__assign(r.__assign({},t),e.pbrMetallicRoughness),o=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:i.neverReached(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}(r.__assign(r.__assign({},n),e.extras));return r.__assign(r.__assign(r.__assign({},s),e),{pbrMetallicRoughness:a,extras:o})};var o={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497};a.textureSampler=function(e){return r.__assign(r.__assign({},o),e)}}));