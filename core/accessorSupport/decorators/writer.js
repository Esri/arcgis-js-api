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

define(["require","exports","../../object","./property"],(function(e,r,t,o){Object.defineProperty(r,"__esModule",{value:!0}),r.writer=function(e,r,i){var n,p;return void 0===r?(p=e,n=[void 0]):"string"!=typeof r?(p=e,n=[void 0],i=r):(p=r,n=Array.isArray(e)?e:[e]),function(e,r){var a=e.constructor.prototype;n.forEach((function(n){var u=o.propertyJSONMeta(e,n,p);u.write&&"object"!=typeof u.write&&(u.write={}),i&&t.setDeepValue("write.target",i,u),t.setDeepValue("write.writer",a[r],u)}))}}}));