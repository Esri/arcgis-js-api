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

define(["require","exports","../../lang","../metadata"],function(r,t,e,o){function n(r){return void 0===r&&(r={}),function(t,n){var i=t.constructor.prototype,a=Object.getOwnPropertyDescriptor(t,n);a&&(a.get||a.set)&&(r=e.clone(r),a.set&&(r.set=a.set),a.get&&(r.get=a.get));var s=o.getPropertyMetadata(i,n);for(var c in r){var g=r[c];Array.isArray(g)?s[c]=(s[c]||[]).concat(g):s[c]=g}}}function i(r,t,e){var n=o.getPropertyMetadata(r.constructor.prototype,e);n.json||(n.json={});var i=n.json;return void 0!==t&&(i.origins||(i.origins={}),i.origins[t]||(i.origins[t]={}),i=i.origins[t]),i}t.property=n,t.propertyJSONMeta=i});