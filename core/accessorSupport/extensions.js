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

define(["require","exports","./extensions/computedProperty","./extensions/serializableProperty"],(function(e,t,a,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.instanceCreated=t.processClassMetadatas=t.processPrototypeMetadatas=void 0;var s=[a.default,r.default];t.processPrototypeMetadatas=function(e,t){for(var a=0,r=s;a<r.length;a++){var o=r[a];if(o.processPrototypePropertyMetadata)for(var n in e){var p=e[n];o.processPrototypePropertyMetadata(n,p,e,t)}}},t.processClassMetadatas=function(e,t){for(var a=0,r=s;a<r.length;a++){var o=r[a];if(o.processClassPropertyMetadata)for(var n in e){var p=e[n];o.processClassPropertyMetadata(n,p,e,t)}}},t.instanceCreated=function(e,t){for(var a=Object.getOwnPropertyNames(t),r=0,o=s;r<o.length;r++){var n=o[r];n.instanceCreated&&n.instanceCreated(e,t,a)}}}));