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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../Logger","../ensureType","../get","../metadata","../set"],(function(e,r,t,n,a,o,i){Object.defineProperty(r,"__esModule",{value:!0});var s=t.getLogger("esri.core.accessorSupport.decorators.property");r.property=function(e){return void 0===e&&(e={}),function(r,t,u){if(r===Function.prototype)throw new Error("Inappropriate use of @property() on a static field: "+r.name+"."+t+". Accessor does not support static properties.");var p=o.getOwnPropertyMetadata(r,t);u&&(u.get||u.set?(p.get=u.get||p.get,p.set=u.set||p.set):"value"in u&&("value"in e&&s.warn('@property() will redefine the value of "'+t+'" on "'+r.constructor.name+'" already defined in the metadata',e),p.value=e.value=u.value)),"readOnly"in e&&(p.readOnly=e.readOnly);var f=e.aliasOf;if(f){var y,d="string"==typeof f?f:f.source,l="string"==typeof f?null:!0===f.overridable;p.dependsOn=[d],p.get=function(){var e=a.default(this,d);if("function"==typeof e){y||(y=d.split(".").slice(0,-1).join("."));var r=a.default(this,y);r&&(e=e.bind(r))}return e},p.readOnly||(p.set=l?function(e){void 0!==e?this._override(t,e):this._clearOverride(t)}:function(e){i.default(this,d,e)})}var c,g,v=e.type,O=e.types;p.cast||(v?p.cast=function(e){var r=0,t=e;if(n.isLongFormType(e))return n.ensureLongFormType(e);for(;Array.isArray(t)&&1===t.length&&"string"!=typeof t[0]&&"number"!=typeof t[0];)t=t[0],r++;var a=t;if(n.isOneOf(a))return 0===r?n.ensureOneOf(a):n.ensureNArrayTyped(n.ensureOneOf(a),r);if(1===r)return n.ensureArray(a);if(r>1)return n.ensureNArray(a,r);var o=e;if(o.from)return o.from;return n.default(o)}(v):O&&(Array.isArray(O)?p.cast=n.ensureArrayTyped(n.ensureOneOfType(O[0])):p.cast=n.ensureOneOfType(O))),e.range&&(p.cast=(c=p.cast,g=e.range,function(e){var r=+c(e);return null!=g.step&&(r=Math.round(r/g.step)*g.step),null!=g.min&&(r=Math.max(g.min,r)),null!=g.max&&(r=Math.min(g.max,r)),r})),o.mergeProperty(p,e)}},r.propertyJSONMeta=function(e,r,t){var n=o.getOwnPropertyMetadata(e,t);n.json||(n.json={});var a=n.json;return void 0!==r&&(a.origins||(a.origins={}),a.origins[r]||(a.origins[r]={}),a=a.origins[r]),a}}));