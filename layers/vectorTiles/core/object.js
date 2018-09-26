// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","exports"],function(e,n){function r(e,n){return i(e.split("."),!1,n)}function t(e,n,r){var t=e.split("."),u=t.pop(),f=i(t,!0,r);f&&u&&(f[u]=n)}function i(e,n,r){for(var t=r,i=0,u=e;i<u.length;i++){var f=u[i];if(!(f in t)){if(!n)return;t[f]={}}t=t[f]}return t}Object.defineProperty(n,"__esModule",{value:!0}),n.getDeepValue=r,n.setDeepValue=t});