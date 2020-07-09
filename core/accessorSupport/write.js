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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../arrayUtils","../Error","../Logger","../promiseUtils","./PropertyOrigin","./utils","./extensions/serializableProperty"],(function(r,e,i,t,n,o,a,u,s){Object.defineProperty(e,"__esModule",{value:!0});var l=n.getLogger("esri.core.accessorSupport.write");function f(r,e,n,o,u,s){if(!o||!o.write)return!1;var f=r.get(n);if(!u&&o.write.overridePolicy){var g=o.write.overridePolicy.call(r,f,n,s);void 0!==g&&(u=g)}if(u||(u=o.write),!u||!1===u.enabled)return!1;if((null===f&&!u.allowNull||void 0===f)&&u.isRequired){var p=new t("web-document-write:property-required","Missing value for required property '"+n+"' on '"+r.declaredClass+"'",{propertyName:n,target:r});return p&&s&&s.messages?s.messages.push(p):p&&!s&&l.error(p.name,p.message),!1}if(void 0===f)return!1;if(null===f&&!u.allowNull)return!1;if(function(r,e,t,n,o){var a=n.default;if(void 0===a)return!1;if(null!=n.defaultEquals)return n.defaultEquals(o);if("function"==typeof a){if(Array.isArray(o)){var u=a.call(r,e,t);return i.equals(u,o)}return!1}return a===o}(r,n,s,o,f))return!1;if(void 0!==o.default)return!0;if(!u.ignoreOrigin&&s&&s.origin&&e.store.originOf(n)<a.nameToId(s.origin))return!1;return!0}function g(r,e,i){if(r&&"function"==typeof r.toJSON&&(!r.toJSON.isDefaultToJSON||!r.write))return u.merge(e,r.toJSON());var t=u.getProperties(r),n=t.metadatas,l=function(l){var g=s.originSpecificWritePropertyDefinition(n[l],i);if(!f(r,t,l,g,null,i))return"continue";var p=r.get(l),c="string"==typeof g.write.target?g.write.target:l,d=function(r,e,i,t,n){var o={};return e.write.writer.call(r,t,o,i,n),o}(r,g,c,p,i);Object.keys(d).length>0&&(e=u.merge(e,d),i&&i.resources&&i.resources.pendingOperations&&i.resources.pendingOperations.length&&o.all(i.resources.pendingOperations).then((function(){return u.merge(e,d)})),i&&i.writtenProperties&&i.writtenProperties.push({target:r,propName:l,oldOrigin:a.idToReadableName(t.store.originOf(l)),newOrigin:i.origin}))};for(var g in n)l(g);return e}e.willPropertyWrite=function(r,e,i,t){var n=u.getProperties(r),o=n.metadatas,a=s.originSpecificWritePropertyDefinition(o[e],t);return!!a&&f(r,n,e,a,i,t)},e.write=g,e.default=g}));