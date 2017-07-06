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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","./PropertyOrigin","./utils","./extensions/serializableProperty"],function(r,e,i,t,n){function o(r,e,i,t,n){var o={};return e.write.writer.call(r,t,o,i,n),o}function a(r,e,t,n,o,a){if(!n||!n.write)return!1;var f=r.get(t);if(void 0===f)return!1;if(!o&&n.write.overridePolicy){var l=n.write.overridePolicy.call(r,f,t,a);void 0!==l&&(o=l)}if(o||(o=n.write),!o||o.enabled===!1)return!1;if(!o.allowNull&&null===f)return!1;if(!o.ignoreOrigin&&a&&a.origin){var u=e.store.originOf(t);if(u<i.nameToId(a.origin))return!1}return!0}function f(r,e,i,o){var f=t.getProperties(r),l=f.metadatas,u=n.originSpecificWritePropertyDefinition(l[e],o);return u?a(r,f,e,u,i,o):!1}function l(r,e,f){if(r&&"function"==typeof r.toJSON&&(!r.toJSON.isDefaultToJSON||!r.write))return t.merge(e,r.toJSON());var l=t.getProperties(r),u=l.metadatas;for(var g in u){var p=n.originSpecificWritePropertyDefinition(u[g],f);if(a(r,l,g,p,null,f)){var s=r.get(g),c=p.write.target||g,d=o(r,p,c,s,f);Object.keys(d).length>0&&(e=t.merge(e,d),f&&f.writtenProperties&&f.writtenProperties.push({target:r,propName:g,oldOrigin:i.idToReadableName(l.store.originOf(g)),newOrigin:f.origin}))}}return e}Object.defineProperty(e,"__esModule",{value:!0}),e.willPropertyWrite=f,e.write=l,e["default"]=l});