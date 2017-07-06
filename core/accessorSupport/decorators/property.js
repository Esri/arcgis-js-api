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

define(["require","exports","dojo/has","../../lang","../metadata"],function(r,e,t,o,n){function s(r){return void 0===r&&(r={}),function(e,t){var s=e.constructor.prototype;if(s===Function.prototype)return void(i&&console.error("[accessor] inappropriate use of @property() on a static field: "+e.name+"."+t+". Accessor does not support static properties."));var a=Object.getOwnPropertyDescriptor(e,t);a&&(a.get||a.set)&&(r=o.clone(r),a.set&&(r.set=a.set),a.get&&(r.get=a.get));var p=n.getPropertyMetadata(s,t);for(var c in r){var u=r[c];Array.isArray(u)?p[c]=(p[c]||[]).concat(u):p[c]=u}}}function a(r,e,t){var o=n.getPropertyMetadata(r.constructor.prototype,t);o.json||(o.json={});var s=o.json;return void 0!==e&&(s.origins||(s.origins={}),s.origins[e]||(s.origins[e]={}),s=s.origins[e]),s}Object.defineProperty(e,"__esModule",{value:!0});var i=t("dojo-debug-messages");e.property=s,e.propertyJSONMeta=a});