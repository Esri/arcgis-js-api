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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports"],(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var h={width:600,height:400};e.getOptimalThumbnailSize=function(t,e){var i=(e=e||h).width,d=e.height,r=i/d;return r<1.5?d=i/1.5:r>1.5&&(i=1.5*d),i>t.width&&(d*=t.width/i,i=t.width),d>t.height&&(i*=t.height/d,d=t.height),{width:Math.round(i),height:Math.round(d)}}}));