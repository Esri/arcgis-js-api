// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./global","dojo/sniff","./now"],function(e,n,t,i,o){var r,a=i("ff"),u=i("ie"),f=i("webkit"),m=i("opera"),s=o(),b=t.requestAnimationFrame;return b||(r=f&&"webkit"||a&&"moz"||m&&"o"||u&&"ms",b=t[r+"RequestAnimationFrame"],b||(b=function(e){var n=o(),i=Math.max(0,16-(n-s)),r=t.setTimeout(function(){e(o())},i);return s=n+i,r})),b});