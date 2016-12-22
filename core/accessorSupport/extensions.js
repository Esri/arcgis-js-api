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

define(["require","exports","./extensions/aliasedProperty","./extensions/computedProperty","./extensions/serializableProperty"],function(e,t,r,a,o){function s(e,t){for(var r=Object.getOwnPropertyNames(e),a=0,o=c;a<o.length;a++){var s=o[a];if(s.processPrototypePropertyMetadata)for(var n=0,p=r;n<p.length;n++){var i=p[n],d=e[i];s.processPrototypePropertyMetadata(i,d,e,t)}}}function n(e,t){for(var r=Object.getOwnPropertyNames(e),a=0,o=c;a<o.length;a++){var s=o[a];if(s.processClassPropertyMetadata)for(var n=0,p=r;n<p.length;n++){var i=p[n],d=e[i];s.processClassPropertyMetadata(i,d,e,t)}}}function p(e,t){for(var r=Object.getOwnPropertyNames(t),a=0,o=c;a<o.length;a++){var s=o[a];s.instanceCreated&&s.instanceCreated(e,t,r)}}var c=[r["default"],a["default"],o["default"]];t.processPrototypeMetadatas=s,t.processClassMetadatas=n,t.instanceCreated=p});