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

define(["require","exports","./propUtils"],function(e,r,n){function o(e){var r="string"==typeof e?n.splitProps(e):e;return function(e,o){e._renderableProps||(e._renderableProps=[]);var p=e._renderableProps;return r?void p.push.apply(p,n.normalizePropNames(r,o)):void p.push(o)}}Object.defineProperty(r,"__esModule",{value:!0}),r.renderable=o});