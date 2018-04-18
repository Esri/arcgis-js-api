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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","../Error","../Logger","./PropertyOrigin","./utils","./extensions/serializableProperty"],function(e,r,i,t,o,n,a){function s(e,r,i,t,o){var n={};return r.write.writer.call(e,t,n,i,o),n}function u(e,r,t,n,a,s){if(!n||!n.write)return!1;var u=e.get(t);if(void 0===u)return!1;if(!a&&n.write.overridePolicy){var g=n.write.overridePolicy.call(e,u,t,s);void 0!==g&&(a=g)}if(a||(a=n.write),!a||!1===a.enabled)return!1;if(null===u){if(a.allowNull)return!0;if(a.isRequired){var f=new i("web-document-write:property-required","Missing value for required property '"+t+"' on '"+e.declaredClass+"'",{propertyName:t,target:e});f&&s&&s.messages?s.messages.push(f):f&&!s&&l.error(f.name,f.message)}return!1}if(!a.ignoreOrigin&&s&&s.origin){if(r.store.originOf(t)<o.nameToId(s.origin))return!1}return!0}function g(e,r,i,t){var o=n.getProperties(e),s=o.metadatas,g=a.originSpecificWritePropertyDefinition(s[r],t);return!!g&&u(e,o,r,g,i,t)}function f(e,r,i){if(e&&"function"==typeof e.toJSON&&(!e.toJSON.isDefaultToJSON||!e.write))return n.merge(r,e.toJSON());var t=n.getProperties(e),g=t.metadatas;for(var f in g){var l=a.originSpecificWritePropertyDefinition(g[f],i);if(u(e,t,f,l,null,i)){var p=e.get(f),c="string"==typeof l.write.target?l.write.target:f,d=s(e,l,c,p,i);Object.keys(d).length>0&&(r=n.merge(r,d),i&&i.writtenProperties&&i.writtenProperties.push({target:e,propName:f,oldOrigin:o.idToReadableName(t.store.originOf(f)),newOrigin:i.origin}))}}return r}Object.defineProperty(r,"__esModule",{value:!0});var l=t.getLogger("esri.core.accessorSupport.write");r.willPropertyWrite=g,r.write=f,r.default=f});