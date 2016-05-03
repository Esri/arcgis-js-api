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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","./extensions/aliasedProperty","./extensions/computedProperty","./extensions/serializableProperty"],function(e,r,t,a,o){function s(e,r){for(var t=0,a=f;t<a.length;t++){var o=a[t];if(o.processPrototypePropertyMetadata)for(var s=0,n=Object.getOwnPropertyNames(e);s<n.length;s++){var p=n[s],i=e[p];o.processPrototypePropertyMetadata(p,i,e,r)}}}function n(e,r){for(var t=0,a=f;t<a.length;t++){var o=a[t];if(o.processClassPropertyMetadata)for(var s=0,n=Object.getOwnPropertyNames(e);s<n.length;s++){var p=n[s],i=e[p];o.processClassPropertyMetadata(p,i,e,r)}}}function p(e,r){for(var t=0,a=f;t<a.length;t++){var o=a[t];if(o.defineProperty)for(var s=0,n=Object.getOwnPropertyNames(r);s<n.length;s++){var p=n[s],i=r[p];o.defineProperty(e,p,i,r)}}}var f=[t["default"],a["default"],o["default"]];r.processPrototypeMetadatas=s,r.processClassMetadatas=n,r.defineProperties=p});