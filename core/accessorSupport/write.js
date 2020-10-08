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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../arrayUtils","../Error","../Logger","../promiseUtils","./PropertyOrigin","./utils","./extensions/serializableProperty"],(function(r,e,i,t,n,o,u,a,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.write=e.willPropertyWrite=void 0;var s=n.getLogger("esri.core.accessorSupport.write");function f(r,e,n,o,a,l){if(!o||!o.write)return!1;var f=r.get(n);if(!a&&o.write.overridePolicy){var g=o.write.overridePolicy.call(r,f,n,l);void 0!==g&&(a=g)}if(a||(a=o.write),!a||!1===a.enabled)return!1;if((null===f&&!a.allowNull||void 0===f)&&a.isRequired){var d=new t("web-document-write:property-required","Missing value for required property '"+n+"' on '"+r.declaredClass+"'",{propertyName:n,target:r});return d&&l&&l.messages?l.messages.push(d):d&&!l&&s.error(d.name,d.message),!1}if(void 0===f)return!1;if(null===f&&!a.allowNull)return!1;if(function(r,e,t,n,o){var u=n.default;if(void 0===u)return!1;if(null!=n.defaultEquals)return n.defaultEquals(o);if("function"==typeof u){if(Array.isArray(o)){var a=u.call(r,e,t);return i.equals(a,o)}return!1}return u===o}(r,n,l,o,f))return!1;if(void 0!==o.default)return!0;if(!a.ignoreOrigin&&l&&l.origin&&e.store.originOf(n)<u.nameToId(l.origin))return!1;return!0}function g(r,e,i){if(r&&"function"==typeof r.toJSON&&(!r.toJSON.isDefaultToJSON||!r.write))return a.merge(e,r.toJSON());var t=a.getProperties(r),n=t.metadatas,s=function(s){var g=l.originSpecificWritePropertyDefinition(n[s],i);if(!f(r,t,s,g,void 0,i))return"continue";var d=r.get(s),p=g.write&&"string"==typeof g.write.target?g.write.target:s,c=function(r,e,i,t,n){var o,u,a={};return null===(u=null===(o=e.write)||void 0===o?void 0:o.writer)||void 0===u||u.call(r,t,a,i,n),a}(r,g,p,d,i);Object.keys(c).length>0&&(e=a.merge(e,c),i&&i.resources&&i.resources.pendingOperations&&i.resources.pendingOperations.length&&o.all(i.resources.pendingOperations).then((function(){return a.merge(e,c)})),i&&i.writtenProperties&&i.writtenProperties.push({target:r,propName:s,oldOrigin:u.idToReadableName(t.store.originOf(s)),newOrigin:i.origin}))};for(var g in n)s(g);return e}e.willPropertyWrite=function(r,e,i,t){var n=a.getProperties(r),o=n.metadatas,u=l.originSpecificWritePropertyDefinition(o[e],t);return!!u&&f(r,n,e,u,i,t)},e.write=g,e.default=g}));