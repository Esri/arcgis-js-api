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

define(["require","exports"],(function(t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.getOptimalThumbnailSize=void 0;var e={width:600,height:400};i.getOptimalThumbnailSize=function(t,i){var h=(i=i||e).width,d=i.height,r=h/d;return r<1.5?d=h/1.5:r>1.5&&(h=1.5*d),h>t.width&&(d*=t.width/h,h=t.width),d>t.height&&(h*=t.height/d,d=t.height),{width:Math.round(h),height:Math.round(d)}}}));