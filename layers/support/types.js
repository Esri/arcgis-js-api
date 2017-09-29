// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports"],function(e,r){function t(e,r){var t=e.constructor._meta;if(!t||!t.bases)return!1;var a=t.bases,n=Array.isArray(r);return a.some(function(e){var t=e.__accessorMetadata__;if(!t)return!1;var a=t.properties;if(!a||!a.type||!a.type.value)return!1;var u=a.type.value;return n?-1!==r.indexOf(u):u===r})}Object.defineProperty(r,"__esModule",{value:!0}),r.isOfType=t});