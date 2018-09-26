// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","exports","dojo/has","../../lang","../../Logger","../metadata"],function(e,r,o,t,a,n){function s(e){return void 0===e&&(e={}),function(r,a){var s=r.constructor.prototype;if(s===Function.prototype)return void(o("dojo-debug-messages")&&p.error("Inappropriate use of @property() on a static field: "+r.name+"."+a+". Accessor does not support static properties."));var i=Object.getOwnPropertyDescriptor(r,a);i&&(i.get||i.set)?(e=t.clone(e),i.set&&(e.set=i.set),i.get&&(e.get=i.get)):i&&i.hasOwnProperty("value")&&(e=t.clone(e),o("dojo-debug-messages")&&e.hasOwnProperty("value")&&p.warn('@property() will redefine the value of "'+a+'" on "'+r.constructor.name+'" already defined in the metadata',e),e.value=i.value);var c=n.getPropertyMetadata(s,a);for(var u in e){var d=e[u];Array.isArray(d)?c[u]=(c[u]||[]).concat(d):c[u]=d}}}function i(e,r,o){var t=n.getPropertyMetadata(e.constructor.prototype,o);t.json||(t.json={});var a=t.json;return void 0!==r&&(a.origins||(a.origins={}),a.origins[r]||(a.origins[r]={}),a=a.origins[r]),a}Object.defineProperty(r,"__esModule",{value:!0});var p=a.getLogger("esri.core.accessorSupport.decorators.property");r.property=s,r.propertyJSONMeta=i});