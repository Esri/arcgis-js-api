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

define(["require","exports","../Error","../Logger","./PropertyOrigin","./utils","./extensions/serializableProperty"],(function(e,r,i,t,n,o,a){Object.defineProperty(r,"__esModule",{value:!0});var u=t.getLogger("esri.core.accessorSupport.write");function s(e,r,i,t,n){var o={};return r.write.writer.call(e,t,o,i,n),o}function l(e,r,t,o,a,s){if(!o||!o.write)return!1;var l=e.get(t);if(void 0===l)return!1;if(!a&&o.write.overridePolicy){var f=o.write.overridePolicy.call(e,l,t,s);void 0!==f&&(a=f)}if(a||(a=o.write),!a||!1===a.enabled)return!1;if(null===l){if(a.allowNull)return!0;if(a.isRequired){var g=new i("web-document-write:property-required","Missing value for required property '"+t+"' on '"+e.declaredClass+"'",{propertyName:t,target:e});g&&s&&s.messages?s.messages.push(g):g&&!s&&u.error(g.name,g.message)}return!1}if(!a.ignoreOrigin&&s&&s.origin&&r.store.originOf(t)<n.nameToId(s.origin))return!1;return!0}function f(e,r,i){if(e&&"function"==typeof e.toJSON&&(!e.toJSON.isDefaultToJSON||!e.write))return o.merge(r,e.toJSON());var t=o.getProperties(e),u=t.metadatas;for(var f in u){var g=a.originSpecificWritePropertyDefinition(u[f],i);if(l(e,t,f,g,null,i)){var p=e.get(f),c=s(e,g,"string"==typeof g.write.target?g.write.target:f,p,i);Object.keys(c).length>0&&(r=o.merge(r,c),i&&i.writtenProperties&&i.writtenProperties.push({target:e,propName:f,oldOrigin:n.idToReadableName(t.store.originOf(f)),newOrigin:i.origin}))}}return r}r.willPropertyWrite=function(e,r,i,t){var n=o.getProperties(e),u=n.metadatas,s=a.originSpecificWritePropertyDefinition(u[r],t);return!!s&&l(e,n,r,s,i,t)},r.write=f,r.disableWriteDefaultPolicy=function(e){return function(r){return{enabled:r!==e}}},r.default=f}));