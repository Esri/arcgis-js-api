// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../../core/Warning","./PointCloudValueFilter","./PointCloudBitfieldFilter","./PointCloudReturnFilter"],function(e,t,n,r,i,o,u){function l(e){return e?p[e.type]||null:null}function a(e,t,n){return e&&Array.isArray(e)?e.map(function(e){var t=l(e);if(t){var i=new t;return i.read(e,n),i}n&&n.messages&&e&&n.messages.push(new r("point-cloud-filter:unsupported","Point cloud filters of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:n}))}):void 0}function d(e,t,r,i){var o=e.map(function(e){return e.write({},i)});n.setObject(r,o,t)}function f(e){var t=l(e);return t?t.fromJSON(e):null}Object.defineProperty(t,"__esModule",{value:!0});var p={pointCloudValueFilter:i,pointCloudBitfieldFilter:o,pointCloudReturnFilter:u};t.read=a,t.write=d,t.fromJSON=f});