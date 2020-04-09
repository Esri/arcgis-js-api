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

define(["require","exports","./extensions/aliasedProperty","./extensions/computedProperty","./extensions/serializableProperty"],(function(e,t,r,a,o){Object.defineProperty(t,"__esModule",{value:!0});var s=[r.default,a.default,o.default];t.processPrototypeMetadatas=function(e,t){for(var r=0,a=s;r<a.length;r++){var o=a[r];if(o.processPrototypePropertyMetadata)for(var n in e){var i=e[n];o.processPrototypePropertyMetadata(n,i,e,t)}}},t.processClassMetadatas=function(e,t){for(var r=0,a=s;r<a.length;r++){var o=a[r];if(o.processClassPropertyMetadata)for(var n in e){var i=e[n];o.processClassPropertyMetadata(n,i,e,t)}}},t.instanceCreated=function(e,t){for(var r=Object.getOwnPropertyNames(t),a=0,o=s;a<o.length;a++){var n=o[a];n.instanceCreated&&n.instanceCreated(e,t,r)}}}));