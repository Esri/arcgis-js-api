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

define(["require","exports","tslib"],(function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.getSourceLayer=function(e){if(e)return e.get("sourceLayer")||e.get("layer")},n.graphicCallback=function(e,n){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){return[2,"function"==typeof e?e.call(null,n):e]}))}))},n.shouldOpenInNewTab=function(e){if(void 0===e&&(e=""),e){return!/^(?:mailto:|tel:)/.test(e.trim().toLowerCase())}};var r=/^\s*expression\//i;function i(e){return r.test(e)}n.isExpressionField=i,n.getFieldInfoLabel=function(e,n){var t=function(e,n){if(!i(n)||!e)return null;var t,o=n.replace(r,"").toLowerCase();return e.some((function(e){return e.name.toLowerCase()===o&&(t=e,!0)})),t}(n,null==e?void 0:e.fieldName);return t?t.title||null:e?e.label||e.fieldName:null}}));