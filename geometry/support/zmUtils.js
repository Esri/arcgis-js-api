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

define([],function(){function a(a,h,n){var r=a.hasZ,s=a.hasM;Array.isArray(h)?4!==h.length||s||r?3===h.length&&n&&!s?(r=!0,s=!1):3===h.length&&s&&r&&(s=!1,r=!1):(s=!0,r=!0):(r=!(!r&&h.hasZ&&(!s||h.hasM)),s=!(!s&&h.hasM&&(!r||h.hasZ))),a.hasZ=r,a.hasM=s}return{updateSupportFromPoint:a}});