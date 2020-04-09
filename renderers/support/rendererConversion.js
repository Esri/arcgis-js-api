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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/compilerUtils","../../core/Error","../../core/maybe","../../symbols/support/symbolConversion"],(function(r,e,n,t,o,u){function s(r){return o.isNone(r)||"simple"===r.type||"unique-value"===r.type||"class-breaks"===r.type||"dictionary"===r.type}function i(r,e){if(!e)return null;var n;if((n=Array.isArray(e)?e:[e]).length>0){var o=n.map((function(r){return r.details.symbol.type||r.details.symbol.declaredClass})).filter((function(r){return!!r}));o.sort();var u=[];return o.forEach((function(r,e){0!==e&&r===o[e-1]||u.push(r)})),new t("renderer-conversion-3d:unsupported-symbols","Renderer contains symbols ("+u.join(", ")+") which are not supported in 3D",{renderer:r,symbolErrors:n})}return null}Object.defineProperty(e,"__esModule",{value:!0}),e.isSupportedRenderer3D=s,e.validateTo3D=function(r){if(o.isNone(r))return null;if(!s(r))return new t("renderer-conversion-3d:unsupported-renderer","Unsupported renderer of type '"+(r.type||r.declaredClass)+"'",{renderer:r});switch(r.type){case"simple":return function(r){return i(r,u.to3D(r.symbol).error)}(r);case"unique-value":return function(r){var e=r.uniqueValueInfos.map((function(r){return u.to3D(r.symbol).error})).filter((function(r){return!!r})),n=u.to3D(r.defaultSymbol);n.error&&e.unshift(n.error);return i(r,e)}(r);case"class-breaks":return function(r){var e=r.classBreakInfos.map((function(r){return u.to3D(r.symbol).error})).filter((function(r){return!!r})),n=u.to3D(r.defaultSymbol);n.error&&e.unshift(n.error);return i(r,e)}(r);case"dictionary":return null;default:n.neverReached(r)}return null}}));