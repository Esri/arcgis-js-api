// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","./extensions/aliasedProperty","./extensions/computedProperty","./extensions/serializableProperty"],(function(e,t,r,a,o){Object.defineProperty(t,"__esModule",{value:!0});var s=[r.default,a.default,o.default];t.processPrototypeMetadatas=function(e,t){for(var r=Object.getOwnPropertyNames(e),a=0,o=s;a<o.length;a++){var n=o[a];if(n.processPrototypePropertyMetadata)for(var p=0,c=r;p<c.length;p++){var i=c[p],d=e[i];n.processPrototypePropertyMetadata(i,d,e,t)}}},t.processClassMetadatas=function(e,t){for(var r=Object.getOwnPropertyNames(e),a=0,o=s;a<o.length;a++){var n=o[a];if(n.processClassPropertyMetadata)for(var p=0,c=r;p<c.length;p++){var i=c[p],d=e[i];n.processClassPropertyMetadata(i,d,e,t)}}},t.instanceCreated=function(e,t){for(var r=Object.getOwnPropertyNames(t),a=0,o=s;a<o.length;a++){var n=o[a];n.instanceCreated&&n.instanceCreated(e,t,r)}}}));