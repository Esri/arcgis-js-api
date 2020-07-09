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

define(["require","exports","tslib","../../../core/maybe","../support/WorkerHandle"],(function(t,r,e,u,a){Object.defineProperty(r,"__esModule",{value:!0});var i=function(t){function r(r){return t.call(this,"PointCloudWorker","transform",r)||this}return e.__extends(r,t),r.prototype.getTransferList=function(t){var r=[t.geometryBuffer];if(u.isSome(t.primaryAttributeData)&&t.primaryAttributeData.buffer&&r.push(t.primaryAttributeData.buffer),u.isSome(t.modulationAttributeData)&&t.modulationAttributeData.buffer&&r.push(t.modulationAttributeData.buffer),u.isSome(t.filterAttributesData))for(var e=0,a=t.filterAttributesData;e<a.length;e++){var i=a[e];u.isSome(i)&&i.buffer&&r.push(i.buffer)}for(var o=0,f=t.userAttributesData;o<f.length;o++){(i=f[o]).buffer&&r.push(i.buffer)}return r},r}(a.WorkerHandle);r.PointCloudWorkerHandle=i}));