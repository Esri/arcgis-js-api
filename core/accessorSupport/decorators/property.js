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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../has","../../lang","../../Logger","../metadata"],(function(e,r,t,o,a,n){Object.defineProperty(r,"__esModule",{value:!0});var s=a.getLogger("esri.core.accessorSupport.decorators.property");r.property=function(e){return void 0===e&&(e={}),function(r,a){var p=r.constructor.prototype;if(p!==Function.prototype){var i=Object.getOwnPropertyDescriptor(r,a);i&&(i.get||i.set)?(e=o.clone(e),i.set&&(e.set=i.set),i.get&&(e.get=i.get)):i&&i.hasOwnProperty("value")&&(e=o.clone(e),t("dojo-debug-messages")&&e.hasOwnProperty("value")&&s.warn('@property() will redefine the value of "'+a+'" on "'+r.constructor.name+'" already defined in the metadata',e),e.value=i.value);var c=n.getPropertyMetadata(p,a);n.mergeProperty(c,e)}else t("dojo-debug-messages")&&s.error("Inappropriate use of @property() on a static field: "+r.name+"."+a+". Accessor does not support static properties.")}},r.propertyJSONMeta=function(e,r,t){var o=n.getPropertyMetadata(e.constructor.prototype,t);o.json||(o.json={});var a=o.json;return void 0!==r&&(a.origins||(a.origins={}),a.origins[r]||(a.origins[r]={}),a=a.origins[r]),a}}));