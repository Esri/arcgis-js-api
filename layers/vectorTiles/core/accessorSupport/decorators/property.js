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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","exports","dojo/has","../../lang","../../Logger","../metadata"],(function(e,r,o,t,a,n){Object.defineProperty(r,"__esModule",{value:!0});var s=a.getLogger("esri.core.accessorSupport.decorators.property");r.property=function(e){return void 0===e&&(e={}),function(r,a){var i=r.constructor.prototype;if(i!==Function.prototype){var p=Object.getOwnPropertyDescriptor(r,a);p&&(p.get||p.set)?(e=t.clone(e),p.set&&(e.set=p.set),p.get&&(e.get=p.get)):p&&p.hasOwnProperty("value")&&(e=t.clone(e),o("dojo-debug-messages")&&e.hasOwnProperty("value")&&s.warn('@property() will redefine the value of "'+a+'" on "'+r.constructor.name+'" already defined in the metadata',e),e.value=p.value);var c=n.getPropertyMetadata(i,a);for(var u in e){var g=e[u];Array.isArray(g)?c[u]=(c[u]||[]).concat(g):c[u]=g}}else o("dojo-debug-messages")&&s.error("Inappropriate use of @property() on a static field: "+r.name+"."+a+". Accessor does not support static properties.")}},r.propertyJSONMeta=function(e,r,o){var t=n.getPropertyMetadata(e.constructor.prototype,o);t.json||(t.json={});var a=t.json;return void 0!==r&&(a.origins||(a.origins={}),a.origins[r]||(a.origins[r]={}),a=a.origins[r]),a}}));