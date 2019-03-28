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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports"],function(e,t){function a(e){return e*u}function n(e){return e*o}function r(e,a){return Math.abs(e-a)<=t.EPSILON*Math.max(1,Math.abs(e),Math.abs(a))}Object.defineProperty(t,"__esModule",{value:!0}),t.EPSILON=1e-6,t.RANDOM=Math.random;var u=Math.PI/180,o=180/Math.PI;t.toRadian=a,t.toDegree=n,t.equals=r});