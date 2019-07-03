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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports"],function(e,i){function o(e,i){var o=i,r=-e[0],n=-e[1],t=-e[2],a=o[3],p=o[7],u=o[11],f=o[15];o[0]+=a*r,o[1]+=a*n,o[2]+=a*t,o[4]+=p*r,o[5]+=p*n,o[6]+=p*t,o[8]+=u*r,o[9]+=u*n,o[10]+=u*t,o[12]+=f*r,o[13]+=f*n,o[14]+=f*t}function r(e,i){var o=i,r=e[0],n=e[1],t=e[2];o[12]+=r*o[0]+n*o[4]+t*o[8],o[13]+=r*o[1]+n*o[5]+t*o[9],o[14]+=r*o[2]+n*o[6]+t*o[10],o[14]+=r*o[3]+n*o[7]+t*o[11]}Object.defineProperty(i,"__esModule",{value:!0}),i.applyToModelMatrix=o,i.applyToViewMatrix=r});