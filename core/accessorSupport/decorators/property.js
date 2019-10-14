// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../has","../../lang","../../Logger","../metadata"],function(e,r,t,o,a,n){function s(e){return void 0===e&&(e={}),function(r,a){var s=r.constructor.prototype;if(s===Function.prototype)return void(t("dojo-debug-messages")&&i.error("Inappropriate use of @property() on a static field: "+r.name+"."+a+". Accessor does not support static properties."));var p=Object.getOwnPropertyDescriptor(r,a);p&&(p.get||p.set)?(e=o.clone(e),p.set&&(e.set=p.set),p.get&&(e.get=p.get)):p&&p.hasOwnProperty("value")&&(e=o.clone(e),t("dojo-debug-messages")&&e.hasOwnProperty("value")&&i.warn('@property() will redefine the value of "'+a+'" on "'+r.constructor.name+'" already defined in the metadata',e),e.value=p.value);var c=n.getPropertyMetadata(s,a);n.mergeProperty(c,e)}}function p(e,r,t){var o=n.getPropertyMetadata(e.constructor.prototype,t);o.json||(o.json={});var a=o.json;return void 0!==r&&(a.origins||(a.origins={}),a.origins[r]||(a.origins[r]={}),a=a.origins[r]),a}Object.defineProperty(r,"__esModule",{value:!0});var i=a.getLogger("esri.core.accessorSupport.decorators.property");r.property=s,r.propertyJSONMeta=p});