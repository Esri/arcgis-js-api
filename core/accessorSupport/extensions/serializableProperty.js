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

define(["require","exports","./serializableProperty/shorthands","./serializableProperty/originAliases","./serializableProperty/reader","./serializableProperty/writer"],function(r,e,i,o,n,t){function a(r,e){return p(r,"read",e)}function s(r,e){return p(r,"write",e)}function p(r,e,i){var o=r&&r.json;if(r&&r.json&&r.json.origins&&i){var n=r.json.origins[i.origin];n&&e in n&&(o=n)}return o}function c(r,e){var i=Array.isArray(e.type),o=i?e.type[0]:e.type;if(e.json.origins)for(var a in e.json.origins){var s=e.json.origins[a];n.create(o,i,r,s),t.create(o,i,r,s)}n.create(o,i,r,e.json),t.create(o,i,r,e.json)}Object.defineProperty(e,"__esModule",{value:!0}),e.originSpecificReadPropertyDefinition=a,e.originSpecificWritePropertyDefinition=s,e.SerializablePropertyExtension={processPrototypePropertyMetadata:function(r,e,n,t){i.process(e)&&(o.process(e),c(r,e))}},e["default"]=e.SerializablePropertyExtension});