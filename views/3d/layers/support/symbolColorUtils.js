// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/mathUtils","../../../../core/maybe"],function(e,r,t,n){function o(e){switch(e){case"multiply":return 1;case"ignore":return 2;case"replace":return 3;case"tint":return 4;default:return 1}}function a(e,r,o){if(n.isNone(e)||2===r)return o[0]=255,o[1]=255,o[2]=255,void(o[3]=255);var a=t.clamp(Math.round(e[3]*c),0,c),d=0===a||4===r?0:3===r?i:l;o[0]=t.clamp(Math.round(e[0]*u),0,u),o[1]=t.clamp(Math.round(e[1]*u),0,u),o[2]=t.clamp(Math.round(e[2]*u),0,u),o[3]=a+d}Object.defineProperty(r,"__esModule",{value:!0}),r.parseColorMixMode=o,r.encodeSymbolColor=a;var u=255,c=85,i=c,l=2*c});