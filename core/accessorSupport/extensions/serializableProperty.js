// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../ensureType","./serializableProperty/originAliases","./serializableProperty/reader","./serializableProperty/shorthands","./serializableProperty/writer"],function(r,e,i,n,o,t,s){function a(r,e){return c(r,"read",e)}function p(r,e){return c(r,"write",e)}function c(r,e,i){var n=r&&r.json;if(r&&r.json&&r.json.origins&&i){var o=r.json.origins[i.origin];o&&("any"===e||e in o)&&(n=o)}return n}function f(r,e){for(var n=e.type,t=0;Array.isArray(n)&&!i.isOneOf(n);)n=n[0],t++;if(e.json.origins)for(var a in e.json.origins){var p=e.json.origins[a];o.create(n,t,r,p),s.create(n,t,r,p)}o.create(n,t,r,e.json),s.create(n,t,r,e.json)}Object.defineProperty(e,"__esModule",{value:!0}),e.originSpecificReadPropertyDefinition=a,e.originSpecificWritePropertyDefinition=p,e.originSpecificPropertyDefinition=c,e.SerializablePropertyExtension={processPrototypePropertyMetadata:function(r,e){t.process(e)&&(n.process(e),f(r,e))}},e.default=e.SerializablePropertyExtension});