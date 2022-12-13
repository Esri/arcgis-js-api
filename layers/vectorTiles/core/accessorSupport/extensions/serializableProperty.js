// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","./serializableProperty/originAliases","./serializableProperty/reader","./serializableProperty/shorthands","./serializableProperty/writer"],(function(r,e,i,o,n,t){function a(r,e,i){var o=r&&r.json;if(r&&r.json&&r.json.origins&&i){var n=r.json.origins[i.origin];n&&e in n&&(o=n)}return o}Object.defineProperty(e,"__esModule",{value:!0}),e.originSpecificReadPropertyDefinition=function(r,e){return a(r,"read",e)},e.originSpecificWritePropertyDefinition=function(r,e){return a(r,"write",e)},e.SerializablePropertyExtension={processPrototypePropertyMetadata:function(r,e,a,s){n.process(e)&&(i.process(e),function(r,e){for(var i=e.type,n=0;Array.isArray(i);)i=i[0],n++;if(e.json.origins)for(var a in e.json.origins){var s=e.json.origins[a];o.create(i,n,r,s),t.create(i,n,r,s)}o.create(i,n,r,e.json),t.create(i,n,r,e.json)}(r,e))}},e.default=e.SerializablePropertyExtension}));