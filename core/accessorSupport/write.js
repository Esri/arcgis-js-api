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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../arrayUtils","../Error","../Logger","./PropertyOrigin","./utils","./extensions/serializableProperty"],function(r,e,i,t,o,n,a,u){function l(r,e,i,t,o){var n={};return e.write.writer.call(r,t,n,i,o),n}function s(r,e,i,o,a,u){if(!o||!o.write)return!1;var l=r.get(i);if(!a&&o.write.overridePolicy){var s=o.write.overridePolicy.call(r,l,i,u);void 0!==s&&(a=s)}if(a||(a=o.write),!a||!1===a.enabled)return!1;if((null===l&&!a.allowNull||void 0===l)&&a.isRequired){var g=new t("web-document-write:property-required","Missing value for required property '"+i+"' on '"+r.declaredClass+"'",{propertyName:i,target:r});return g&&u&&u.messages?u.messages.push(g):g&&!u&&c.error(g.name,g.message),!1}if(void 0===l)return!1;if(null===l&&!a.allowNull)return!1;if(!a.ignoreOrigin&&u&&u.origin){if(e.store.originOf(i)<n.nameToId(u.origin))return!1}return!f(r,i,u,o,l)}function f(r,e,t,o,n){var a=o.default;if(void 0===a)return!1;if("function"==typeof a){if(Array.isArray(n)){var u=a.call(r,e,t);return i.equals(u,n)}return!1}return a===n}function g(r,e,i,t){var o=a.getProperties(r),n=o.metadatas,l=u.originSpecificWritePropertyDefinition(n[e],t);return!!l&&s(r,o,e,l,i,t)}function p(r,e,i){if(r&&"function"==typeof r.toJSON&&(!r.toJSON.isDefaultToJSON||!r.write))return a.merge(e,r.toJSON());var t=a.getProperties(r),o=t.metadatas;for(var f in o){var g=u.originSpecificWritePropertyDefinition(o[f],i);if(s(r,t,f,g,null,i)){var p=r.get(f),c="string"==typeof g.write.target?g.write.target:f,d=l(r,g,c,p,i);Object.keys(d).length>0&&(e=a.merge(e,d),i&&i.writtenProperties&&i.writtenProperties.push({target:r,propName:f,oldOrigin:n.idToReadableName(t.store.originOf(f)),newOrigin:i.origin}))}}return e}Object.defineProperty(e,"__esModule",{value:!0});var c=o.getLogger("esri.core.accessorSupport.write");e.willPropertyWrite=g,e.write=p,e.default=p});