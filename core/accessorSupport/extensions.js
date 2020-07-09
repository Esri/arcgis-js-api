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

define(["require","exports","./extensions/computedProperty","./extensions/serializableProperty"],(function(e,r,t,a){Object.defineProperty(r,"__esModule",{value:!0});var o=[t.default,a.default];r.processPrototypeMetadatas=function(e,r){for(var t=0,a=o;t<a.length;t++){var s=a[t];if(s.processPrototypePropertyMetadata)for(var n in e){var p=e[n];s.processPrototypePropertyMetadata(n,p,e,r)}}},r.processClassMetadatas=function(e,r){for(var t=0,a=o;t<a.length;t++){var s=a[t];if(s.processClassPropertyMetadata)for(var n in e){var p=e[n];s.processClassPropertyMetadata(n,p,e,r)}}},r.instanceCreated=function(e,r){for(var t=Object.getOwnPropertyNames(r),a=0,s=o;a<s.length;a++){var n=s[a];n.instanceCreated&&n.instanceCreated(e,r,t)}}}));