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

define(["require","exports","../../../../core/mathUtils","../../../../core/maybe"],(function(e,r,o,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.encodeSymbolColor=r.parseColorMixMode=void 0,r.parseColorMixMode=function(e){switch(e){case"multiply":return 1;case"ignore":return 2;case"replace":return 3;case"tint":return 4;default:return 1}},r.encodeSymbolColor=function(e,r,i){if(t.isNone(e)||2===r)return i[0]=255,i[1]=255,i[2]=255,void(i[3]=255);var l=o.clamp(Math.round(e[3]*a),0,a),d=0===l||4===r?0:3===r?c:u;i[0]=o.clamp(Math.round(e[0]*n),0,n),i[1]=o.clamp(Math.round(e[1]*n),0,n),i[2]=o.clamp(Math.round(e[2]*n),0,n),i[3]=l+d};var n=255,a=85,c=a,u=2*a}));