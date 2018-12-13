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

define(["require","exports","../../../core/Warning","./PointSizeFixedSizeAlgorithm","./PointSizeSplatAlgorithm"],function(e,n,t,i,r){function o(e){return e?a[e.type]||null:null}function u(e,n,i){var r=o(e);if(r){var u=new r;return u.read(e,i),u}return i&&i.messages&&e&&i.messages.push(new t("pointsizealgorithm:unsupported","Point size algorithms of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:i})),null}function l(e){var n=o(e);return n?n.fromJSON(e):null}Object.defineProperty(n,"__esModule",{value:!0});var a={pointCloudFixedSizeAlgorithm:i.default,pointCloudSplatAlgorithm:r.default};n.read=u,n.fromJSON=l});