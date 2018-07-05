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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../core/promiseUtils","../../core/Warning"],function(e,r,n,t){function i(e,r){var i=e&&e.getAtOrigin&&e.getAtOrigin("renderer",r.origin);return i&&"unique-value"===i.type&&i.styleOrigin?i.populateFromStyle().catch(function(n){r&&r.messages&&r.messages.push(new t("renderer:style-reference","Failed to create unique value renderer from style reference: "+n.message,{error:n,context:r})),e.clear("renderer",r.origin)}).then(function(){return null}):n.resolve(null)}Object.defineProperty(r,"__esModule",{value:!0}),r.loadStyleRenderer=i});