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

define(["require","exports","../../Logger","../ensureType","../get","../metadata","../set"],(function(e,r,t,n,a,o,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ensureRange=r.propertyJSONMeta=r.property=void 0;var s=t.getLogger("esri.core.accessorSupport.decorators.property");function u(e,r){return function(t){var n=+e(t);return null!=r.step&&(n=Math.round(n/r.step)*r.step),null!=r.min&&(n=Math.max(r.min,n)),null!=r.max&&(n=Math.min(r.max,n)),n}}r.property=function(e){return void 0===e&&(e={}),function(r,t,p){if(r===Function.prototype)throw new Error("Inappropriate use of @property() on a static field: "+r.name+"."+t+". Accessor does not support static properties.");var f=o.getOwnPropertyMetadata(r,t);p&&(p.get||p.set?(f.get=p.get||f.get,f.set=p.set||f.set):"value"in p&&("value"in e&&s.warn('@property() will redefine the value of "'+t+'" on "'+r.constructor.name+'" already defined in the metadata',e),f.value=e.value=p.value)),null!=e.readOnly&&(f.readOnly=e.readOnly);var y=e.aliasOf;if(y){var l,d="string"==typeof y?y:y.source,c="string"==typeof y?null:!0===y.overridable;f.dependsOn=[d],f.get=function(){var e=a.default(this,d);if("function"==typeof e){l||(l=d.split(".").slice(0,-1).join("."));var r=a.default(this,l);r&&(e=e.bind(r))}return e},f.readOnly||(f.set=c?function(e){void 0!==e?this._override(t,e):this._clearOverride(t)}:function(e){i.default(this,d,e)})}var g=e.type,v=e.types;f.cast||(g?f.cast=function(e){var r=0,t=e;if(n.isLongFormType(e))return n.ensureLongFormType(e);for(;Array.isArray(t)&&1===t.length&&"string"!=typeof t[0]&&"number"!=typeof t[0];)t=t[0],r++;var a=t;if(n.isOneOf(a))return 0===r?n.ensureOneOf(a):n.ensureNArrayTyped(n.ensureOneOf(a),r);if(1===r)return n.ensureArray(a);if(r>1)return n.ensureNArray(a,r);var o=e;if(o.from)return o.from;return n.default(o)}(g):v&&(Array.isArray(v)?f.cast=n.ensureArrayTyped(n.ensureOneOfType(v[0])):f.cast=n.ensureOneOfType(v))),e.range&&(f.cast=u(f.cast,e.range)),o.mergeProperty(f,e)}},r.propertyJSONMeta=function(e,r,t){var n=o.getOwnPropertyMetadata(e,t);n.json||(n.json={});var a=n.json;return void 0!==r&&(a.origins||(a.origins={}),a.origins[r]||(a.origins[r]={}),a=a.origins[r]),a},r.ensureRange=u}));