// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["require","exports","../Error","../Logger","./PropertyOrigin","./utils","./extensions/serializableProperty"],function(e,r,i,t,n,o,a){function u(e,r,i,t,n){var o={};return r.write.writer.call(e,t,o,i,n),o}function s(e,r,t,o,a,u){if(!o||!o.write)return!1;var s=e.get(t);if(void 0===s)return!1;if(!a&&o.write.overridePolicy){var f=o.write.overridePolicy.call(e,s,t,u);void 0!==f&&(a=f)}if(a||(a=o.write),!a||!1===a.enabled)return!1;if(null===s){if(a.allowNull)return!0;if(a.isRequired){var l=new i("web-document-write:property-required","Missing value for required property '"+t+"' on '"+e.declaredClass+"'",{propertyName:t,target:e});l&&u&&u.messages?u.messages.push(l):l&&!u&&p.error(l.name,l.message)}return!1}if(!a.ignoreOrigin&&u&&u.origin){if(r.store.originOf(t)<n.nameToId(u.origin))return!1}return!0}function f(e,r,i,t){var n=o.getProperties(e),u=n.metadatas,f=a.originSpecificWritePropertyDefinition(u[r],t);return!!f&&s(e,n,r,f,i,t)}function l(e,r,i){if(e&&"function"==typeof e.toJSON&&(!e.toJSON.isDefaultToJSON||!e.write))return o.merge(r,e.toJSON());var t=o.getProperties(e),f=t.metadatas;for(var l in f){var g=a.originSpecificWritePropertyDefinition(f[l],i);if(s(e,t,l,g,null,i)){var p=e.get(l),c="string"==typeof g.write.target?g.write.target:l,d=u(e,g,c,p,i);Object.keys(d).length>0&&(r=o.merge(r,d),i&&i.writtenProperties&&i.writtenProperties.push({target:e,propName:l,oldOrigin:n.idToReadableName(t.store.originOf(l)),newOrigin:i.origin}))}}return r}function g(e){return function(r){return{enabled:r!==e}}}Object.defineProperty(r,"__esModule",{value:!0});var p=t.getLogger("esri.core.accessorSupport.write");r.willPropertyWrite=f,r.write=l,r.disableWriteDefaultPolicy=g,r.default=l});