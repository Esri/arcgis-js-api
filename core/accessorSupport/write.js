// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./PropertyOrigin","./utils","./extensions/serializableProperty"],function(r,e,i,t,n){function o(r){return r&&r.writable&&!!r.write}function u(r,e,i,t){var n={};return void 0===i||null===i&&!e.writeNull||e.write.call(r,i,n,t),n}function a(r,e,t,n){var o=r.store.originOf(e);return t.writeAlways||void 0===n||void 0===n.origin||o>=i.nameToId(n.origin)}function f(r,e,i){if(void 0===i&&(i=[]),-1!==i.indexOf(r))return i;i.push(r);var t=e[r];return t&&t.writeWith?(t.writeWith.forEach(function(r){f(r,e,i)}),i):i}function l(r,e,i){var t=f(r,e);return t.some(function(r){return i[r]})}function s(r,e,f){var s=t.getProperties(r),c=s.metadatas,g={},v=[],d={};for(var p in c){var w=n.originSpecificWritePropertyDefinition(c[p],f);if(d[p]=w,o(w))if(a(s,p,w,f)){var h=u(r,w,r.get(p),f);Object.keys(h).length>0&&(e=t.merge(e,h),g[p]=!0)}else w.writeWith&&v.push(p)}var O=v.filter(function(r){return l(r,d,g)});if(O.forEach(function(i){var n=r.get(i),o=d[i],a=u(r,o,n,f);Object.keys(a).length>0&&(e=t.merge(e,a),g[i]=!0)}),f&&f.writtenProperties)for(var m in g)f.writtenProperties.push({target:r,propName:m,oldOrigin:i.idToReadableName(s.store.originOf(m)),newOrigin:f.origin});return e}e.write=s,Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=s});