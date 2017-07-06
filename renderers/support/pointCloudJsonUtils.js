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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../core/Warning","../PointCloudClassBreaksRenderer","../PointCloudRGBRenderer","../PointCloudStretchRenderer","../PointCloudUniqueValueRenderer"],function(e,r,n,o,t,u,d){function i(e){return e?a[e.type]||null:null}function l(e,r,o){var t=i(e);if(t){var u=new t;return u.read(e,o),u}return o&&o.messages&&e&&o.messages.push(new n("renderer:unsupported","Renderers of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:o})),null}function s(e){var r=i(e);return r?r.fromJSON(e):null}Object.defineProperty(r,"__esModule",{value:!0});var a={pointCloudClassBreaksRenderer:o,pointCloudRGBRenderer:t,pointCloudStretchRenderer:u,pointCloudUniqueValueRenderer:d};r.read=l,r.fromJSON=s});