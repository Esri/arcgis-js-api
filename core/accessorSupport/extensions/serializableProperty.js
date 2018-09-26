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

define(["require","exports","../ensureType","./serializableProperty/originAliases","./serializableProperty/reader","./serializableProperty/shorthands","./serializableProperty/writer"],function(r,e,i,n,o,t,s){function a(r,e){return p(r,"read",e)}function f(r,e){return p(r,"write",e)}function p(r,e,i){var n=r&&r.json;if(r&&r.json&&r.json.origins&&i){var o=r.json.origins[i.origin];o&&e in o&&(n=o)}return n}function c(r,e){var n=e.type,t=0;if(!i.isOneOf(n))for(;Array.isArray(n);)n=n[0],t++;if(e.json.origins)for(var a in e.json.origins){var f=e.json.origins[a];o.create(n,t,r,f),s.create(n,t,r,f)}o.create(n,t,r,e.json),s.create(n,t,r,e.json)}Object.defineProperty(e,"__esModule",{value:!0}),e.originSpecificReadPropertyDefinition=a,e.originSpecificWritePropertyDefinition=f,e.SerializablePropertyExtension={processPrototypePropertyMetadata:function(r,e,i,o){t.process(e)&&(n.process(e),c(r,e))}},e.default=e.SerializablePropertyExtension});