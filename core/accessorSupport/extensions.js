// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","./extensions/aliasedProperty","./extensions/computedProperty","./extensions/serializableProperty"],function(e,t,r,a,o){function s(e,t){for(var r=0,a=p;r<a.length;r++){var o=a[r];if(o.processPrototypePropertyMetadata)for(var s in e){var n=e[s];o.processPrototypePropertyMetadata(s,n,e,t)}}}function n(e,t){for(var r=0,a=p;r<a.length;r++){var o=a[r];if(o.processClassPropertyMetadata)for(var s in e){var n=e[s];o.processClassPropertyMetadata(s,n,e,t)}}}function i(e,t){for(var r=Object.getOwnPropertyNames(t),a=0,o=p;a<o.length;a++){var s=o[a];s.instanceCreated&&s.instanceCreated(e,t,r)}}Object.defineProperty(t,"__esModule",{value:!0});var p=[r.default,a.default,o.default];t.processPrototypeMetadatas=s,t.processClassMetadatas=n,t.instanceCreated=i});