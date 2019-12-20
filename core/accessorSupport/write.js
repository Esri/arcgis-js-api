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

define(["require","exports","../arrayUtils","../Error","../Logger","./PropertyOrigin","./utils","./extensions/serializableProperty"],function(r,e,i,t,n,o,a,u){function l(r,e,i,t,n){var o={};return e.write.writer.call(r,t,o,i,n),o}function f(r,e,i,n,a,u){if(!n||!n.write)return!1;var l=r.get(i);if(!a&&n.write.overridePolicy){var f=n.write.overridePolicy.call(r,l,i,u);void 0!==f&&(a=f)}if(a||(a=n.write),!a||!1===a.enabled)return!1;if((null===l&&!a.allowNull||void 0===l)&&a.isRequired){var g=new t("web-document-write:property-required","Missing value for required property '"+i+"' on '"+r.declaredClass+"'",{propertyName:i,target:r});return g&&u&&u.messages?u.messages.push(g):g&&!u&&d.error(g.name,g.message),!1}if(void 0===l)return!1;if(null===l&&!a.allowNull)return!1;if(s(r,i,u,n,l))return!1;if(void 0!==n.default)return!0;if(!a.ignoreOrigin&&u&&u.origin){if(e.store.originOf(i)<o.nameToId(u.origin))return!1}return!0}function s(r,e,t,n,o){var a=n.default;if(void 0===a)return!1;if("function"==typeof a){if(Array.isArray(o)){var u=a.call(r,e,t);return i.equals(u,o)}return!1}return a===o}function g(r,e,i,t){var n=a.getProperties(r),o=n.metadatas,l=u.originSpecificWritePropertyDefinition(o[e],t);return!!l&&f(r,n,e,l,i,t)}function p(r,e,i){if(r&&"function"==typeof r.toJSON&&(!r.toJSON.isDefaultToJSON||!r.write))return a.merge(e,r.toJSON());var t=a.getProperties(r),n=t.metadatas;for(var s in n){var g=u.originSpecificWritePropertyDefinition(n[s],i);if(f(r,t,s,g,null,i)){var p=r.get(s),d="string"==typeof g.write.target?g.write.target:s,c=l(r,g,d,p,i);Object.keys(c).length>0&&(e=a.merge(e,c),i&&i.writtenProperties&&i.writtenProperties.push({target:r,propName:s,oldOrigin:o.idToReadableName(t.store.originOf(s)),newOrigin:i.origin}))}}return e}Object.defineProperty(e,"__esModule",{value:!0});var d=n.getLogger("esri.core.accessorSupport.write");e.willPropertyWrite=g,e.write=p,e.default=p});