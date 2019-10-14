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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports"],function(t,e){function h(t,e){e=e||i;var h=e.width,r=e.height,n=h/r;return n<d?r=h/d:n>d&&(h=r*d),h>t.width&&(r*=t.width/h,h=t.width),r>t.height&&(h*=t.height/r,r=t.height),{width:Math.round(h),height:Math.round(r)}}Object.defineProperty(e,"__esModule",{value:!0});var i={width:600,height:400},d=1.5;e.getOptimalThumbnailSize=h});