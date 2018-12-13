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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../core/object","../../core/Warning","./PointCloudBitfieldFilter","./PointCloudReturnFilter","./PointCloudValueFilter"],function(e,t,n,r,i,o,u){function l(e){return e?p[e.type]||null:null}function a(e,t,n){if(e&&Array.isArray(e))return e.map(function(e){var t=l(e);if(t){var i=new t;return i.read(e,n),i}n&&n.messages&&e&&n.messages.push(new r("point-cloud-filter:unsupported","Point cloud filters of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:n}))})}function f(e,t,r,i){var o=e.map(function(e){return e.write({},i)});n.setDeepValue(r,o,t)}function d(e){var t=l(e);return t?t.fromJSON(e):null}Object.defineProperty(t,"__esModule",{value:!0});var p={pointCloudValueFilter:u,pointCloudBitfieldFilter:i,pointCloudReturnFilter:o};t.read=a,t.write=f,t.fromJSON=d});