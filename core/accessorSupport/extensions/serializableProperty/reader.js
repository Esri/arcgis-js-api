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

define(["require","exports","../../../Logger","../../../object","../../../Warning","../../metadata","./type"],(function(e,r,t,n,o,i,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.createTypeReader=r.create=void 0;var u=t.getLogger("esri.core.accessorSupport.extensions.serializableProperty.reader");function p(e){var r,t,n,o=null!==(r=e.ndimArray)&&void 0!==r?r:0;if(o>1)return function(e){var r,t=y(e),n=f.bind(null,t),o=null!==(r=e.ndimArray)&&void 0!==r?r:0;return function(e,r,t){if(null==e)return e;e=n(e,t,o);for(var i=o,a=e;i>0&&Array.isArray(a);)i--,a=a[0];if(void 0!==a)for(var u=0;u<i;u++)e=[e];return e}}(e);if(1===o)return d(e);if("type"in e&&v(e.type)){var i=null===(n=null===(t=e.type.prototype)||void 0===t?void 0:t.itemType)||void 0===n?void 0:n.Type,a=d("function"==typeof i?{type:i}:{types:i});return function(r,t,n){var o=a(r,t,n);return o?new e.type(o):o}}return y(e)}function y(e){return"type"in e?function(e){if(e.prototype.read)return function(r,t,n){if(null==r)return r;var o=typeof r;if("object"===o){var i=new e;return i.read(r,n),i}u.error("Expected JSON value of type 'object' to deserialize type '"+e.prototype.declaredClass+"', but got '"+o+"'")};return e.fromJSON}(e.type):(r=e.types,n=null,a=null!==(t=r.errorContext)&&void 0!==t?t:"type",function(e,t,p){if(null==e)return e;var y=typeof e;if("object"===y){n||(n=function(e){var r,t,n={};for(var o in e.typeMap){var a=e.typeMap[o],u=i.getOwnClassMetadata(a.prototype);if("function"!=typeof e.key){var p=u.properties[e.key];if(p){(null===(r=p.json)||void 0===r?void 0:r.type)&&Array.isArray(p.json.type)&&1===p.json.type.length&&"string"==typeof p.json.type[0]&&(n[p.json.type[0]]=a);var y=null===(t=p.json)||void 0===t?void 0:t.write;if(y&&y.writer){var f=y.target,d="string"==typeof f?f:e.key,v={};y.writer(o,v,d),v[d]&&(n[v[d]]=a)}else n[o]=a}}}return n}(r));var f=r.key;if("string"==typeof f){var d=e[f],v=d?n[d]:r.defaultKeyValue?r.typeMap[r.defaultKeyValue]:void 0;if(!v){var l="Type '"+(d||"unknown")+"' is not supported";return p&&p.messages&&e&&p.messages.push(new o(a+":unsupported",l,{definition:e,context:p})),void u.error(l)}var s=new v;return s.read(e,p),s}}else u.error("Expected JSON value of type 'object' to deserialize, but got '"+y+"'")});var r,t,n,a}function f(e,r,t,n){return 0!==n&&Array.isArray(r)?r.map((function(r){return f(e,r,t,n-1)})):e(r,void 0,t)}function d(e){var r=y(e);return function(e,t,n){if(null==e)return e;if(Array.isArray(e)){for(var o=[],i=0,a=e;i<a.length;i++){var u=a[i],p=r(u,void 0,n);void 0!==p&&o.push(p)}return o}var y=r(e,void 0,n);return void 0!==y?[y]:void 0}}function v(e){if(!a.isCollection(e))return!1;var r=e.prototype.itemType;return!(!r||!r.Type)&&("function"==typeof r.Type?l(r.Type):s(r.Type))}function l(e){return!Array.isArray(e)&&(!!e&&e.prototype&&("read"in e.prototype||"fromJSON"in e||v(e)))}function s(e){for(var r in e.typeMap){if(!l(e.typeMap[r]))return!1}return!0}r.create=function(e,r,t){var o,i;e&&(!t&&!r.read||null!==(o=r.read)&&void 0!==o&&o.reader||!1===(null===(i=r.read)||void 0===i?void 0:i.enabled)||function(e){if("types"in e)return s(e.types);return l(e.type)}(e)&&n.setDeepValue("read.reader",p(e),r))},r.createTypeReader=p}));