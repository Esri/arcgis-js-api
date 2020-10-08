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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../core/compilerUtils","../../core/Error","../../core/object","../../core/Warning","../../core/accessorSupport/extensions/serializableProperty/reader","./types"],(function(e,r,n,t,s,u,a,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.read=r.fromJSON=r.write=void 0,r.write=function(e,r,u,a){var i=function(e,r){if(!e)return null;if(!function(e,r){if(!r||"web-scene"!==r.origin)return!0;switch(e.type){case"simple":case"unique-value":case"class-breaks":return!0;case"heatmap":case"dictionary":case"dot-density":return!1;default:return n.neverReached(e),!1}}(e,r))return r.messages&&r.messages.push(new t("renderer:unsupported","Renderer of type '"+e.declaredClass+"' are not supported in scenes.",{renderer:e,context:r})),null;return e.write({},r)}(e,a);i&&s.setDeepValue(u,i,r)},r.fromJSON=function(e,r){return c(e,null,r)};var o=a.createTypeReader({types:i.rendererTypes});function c(e,r,n){return e?e&&(e.styleName||e.styleUrl)&&"uniqueValue"!==e.type?(n&&n.messages&&n.messages.push(new u("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:n})),null):o(e,r,n):null}r.read=c}));