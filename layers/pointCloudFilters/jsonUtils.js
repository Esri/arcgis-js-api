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

define(["require","exports","../../core/object","../../core/Warning","./PointCloudBitfieldFilter","./PointCloudReturnFilter","./PointCloudValueFilter"],(function(e,t,r,n,i,o,u){Object.defineProperty(t,"__esModule",{value:!0});var l={pointCloudValueFilter:u,pointCloudBitfieldFilter:i,pointCloudReturnFilter:o};function a(e){return e&&l[e.type]||null}t.read=function(e,t,r){if(e&&Array.isArray(e))return e.map((function(e){var t=a(e);if(t){var i=new t;return i.read(e,r),i}r&&r.messages&&e&&r.messages.push(new n("point-cloud-filter:unsupported","Point cloud filters of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r}))}))},t.write=function(e,t,n,i){var o=e.map((function(e){return e.write({},i)}));r.setDeepValue(n,o,t)},t.fromJSON=function(e){var t=a(e);return t?t.fromJSON(e):null}}));