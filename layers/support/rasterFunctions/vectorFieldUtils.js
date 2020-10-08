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

define(["require","exports","../PixelBlock"],(function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.convertVectorFieldUnit=t.convertVectorFieldData=t.getUnitConversionFactor=t.isValidPixelBlock=void 0;var r=180/Math.PI;t.isValidPixelBlock=function(e){return e&&"esri.layers.support.PixelBlock"===e.declaredClass&&e.pixels&&e.pixels.length>0};var o=new Map;function a(e){return(450-e)%360}function n(e,t){void 0===t&&(t="geographic");var i=e[0],o=e[1],n=Math.sqrt(i*i+o*o),l=Math.atan2(o,i)*r;return l=(360+l)%360,"geographic"===t&&(l=a(l)),[n,l]}function l(e,t){void 0===t&&(t="geographic");var i=e[1];"geographic"===t&&(i=a(i)),i%=360;var o=e[0];return[o*Math.cos(i/r),o*Math.sin(i/r)]}o.set("meter-per-second",1),o.set("kilometer-per-hour",.277778),o.set("knots",.514444),o.set("feet-per-second",.3048),o.set("mile-per-hour",.44704),t.getUnitConversionFactor=function(e,t){return o.get(t)/o.get(e)||1},t.convertVectorFieldData=function(e,r,o,a){var c,s;if(void 0===o&&(o="geographic"),void 0===a&&(a=1),!t.isValidPixelBlock(e))return e;for(var p=e.pixels,d=e.width,u=e.height,v=d*u,h=p[0],g=p[1],x=i.createEmptyBand(e.pixelType,v),f=i.createEmptyBand(e.pixelType,v),k=0,P=0;P<u;P++)for(var m=0;m<d;m++)"vector-uv"===r?(c=n([h[k],g[k]],o),x[k]=c[0],f[k]=c[1],x[k]*=a):(s=l([h[k],g[k]],o),x[k]=s[0],f[k]=s[1],x[k]*=a,f[k]*=a),k++;var y=new i({pixelType:e.pixelType,width:e.width,height:e.height,mask:e.mask,validPixelCount:e.validPixelCount,maskIsAlpha:e.maskIsAlpha,pixels:[x,f]});return y.updateStatistics(),y},t.convertVectorFieldUnit=function(e,i,r){if(void 0===r&&(r=1),1===r||!t.isValidPixelBlock(e))return e;for(var o=e.clone(),a=o.pixels,n=o.width,l=o.height,c=a[0],s=a[1],p=0,d=0;d<l;d++)for(var u=0;u<n;u++)"vector-uv"===i?(c[p]*=r,s[p]*=r):c[p]*=r,p++;return o.updateStatistics(),o}}));