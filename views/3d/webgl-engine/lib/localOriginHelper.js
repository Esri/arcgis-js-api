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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports"],(function(e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.applyToViewMatrix=i.applyToModelMatrix=void 0,i.applyToModelMatrix=function(e,i){var o=i,r=-e[0],t=-e[1],a=-e[2],p=o[3],l=o[7],n=o[11],u=o[15];o[0]+=p*r,o[1]+=p*t,o[2]+=p*a,o[4]+=l*r,o[5]+=l*t,o[6]+=l*a,o[8]+=n*r,o[9]+=n*t,o[10]+=n*a,o[12]+=u*r,o[13]+=u*t,o[14]+=u*a},i.applyToViewMatrix=function(e,i){var o=i,r=e[0],t=e[1],a=e[2];o[12]+=r*o[0]+t*o[4]+a*o[8],o[13]+=r*o[1]+t*o[5]+a*o[9],o[14]+=r*o[2]+t*o[6]+a*o[10],o[14]+=r*o[3]+t*o[7]+a*o[11]}}));