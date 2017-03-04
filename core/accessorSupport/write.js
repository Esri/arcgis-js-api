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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./PropertyOrigin","./utils","./extensions/serializableProperty"],function(r,e,i,t,n){function o(r,e,i,t,n){var o={};return e.write.writer.call(r,t,o,i,n),o}function a(r,e,t,n,o,a){if(!n||!n.write)return!1;var l=r.get(t);if(void 0===l)return!1;if(!o&&n.write.overridePolicy){var f=n.write.overridePolicy.call(r,l,t,a);void 0!==f&&(o=f)}if(o||(o=n.write),!o||o.enabled===!1)return!1;if(!o.allowNull&&null===l)return!1;if(!o.ignoreOrigin&&a&&a.origin){var u=e.store.originOf(t);if(u<i.nameToId(a.origin))return!1}return!0}function l(r,e,i,o){var l=t.getProperties(r),f=l.metadatas,u=n.originSpecificWritePropertyDefinition(f[e],o);return u?a(r,l,e,u,i,o):!1}function f(r,e,l){var f=t.getProperties(r),u=f.metadatas;for(var g in u){var p=n.originSpecificWritePropertyDefinition(u[g],l);if(a(r,f,g,p,null,l)){var s=r.get(g),c=p.write.target||g,d=o(r,p,c,s,l);Object.keys(d).length>0&&(e=t.merge(e,d),l&&l.writtenProperties&&l.writtenProperties.push({target:r,propName:g,oldOrigin:i.idToReadableName(f.store.originOf(g)),newOrigin:l.origin}))}}return e}e.willPropertyWrite=l,e.write=f,Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=f});