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

define(["require","exports","../ensureType","./serializableProperty/originAliases","./serializableProperty/reader","./serializableProperty/shorthands","./serializableProperty/writer"],(function(r,i,e,n,o,t,a){"use strict";function s(r,i,e){var n=r&&r.json;if(r&&r.json&&r.json.origins&&e){var o=r.json.origins[e.origin];o&&("any"===i||i in o)&&(n=o)}return n}function p(r){var i=function(r){if(r.type)return function(r){if(!r.type)return;var i=0,n=r.type;for(;Array.isArray(n)&&!e.isOneOf(n);)n=n[0],i++;return{type:n,ndimArray:i}}(r);return function(r){if(!r.types)return;var i=0,e=r.types;for(;Array.isArray(e);)e=e[0],i++;return{types:e,ndimArray:i}}(r)}(r);if(r.json.origins)for(var n in r.json.origins){var t=r.json.origins[n];o.create(i,t,!1),a.create(i,t)}o.create(i,r.json,!0),a.create(i,r.json)}Object.defineProperty(i,"__esModule",{value:!0}),i.SerializablePropertyExtension=i.originSpecificPropertyDefinition=i.originSpecificWritePropertyDefinition=i.originSpecificReadPropertyDefinition=void 0,i.originSpecificReadPropertyDefinition=function(r,i){return s(r,"read",i)},i.originSpecificWritePropertyDefinition=function(r,i){return s(r,"write",i)},i.originSpecificPropertyDefinition=s,i.SerializablePropertyExtension={processPrototypePropertyMetadata:function(r,i){t.process(i)&&(n.process(i),p(i))}},i.default=i.SerializablePropertyExtension}));