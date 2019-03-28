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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define([],function(){var e={},t=["before-centered","before","after-centered","after","above","above-centered","above-alt","below","below-centered","below-alt"];return e.POSITIONS=t,e.getBestPositionBigAroundSmall=function(e,a,r){function o(t){function o(e,t){var r=0,o=0;return e<u?r=-e+u:e+a.w>document.body.clientWidth-u&&(r=document.body.clientWidth-u-(e+a.w)),t<u?o=-t+u:t+a.h>document.body.clientHeight-u&&(o=document.body.clientHeight-u-(t+a.h)),{adjustX:r,adjustY:o,totalAdjust:Math.abs(r)+Math.abs(o),fits:0===r&&0===o}}function n(e,t){var a=o(e[0],t[0]);if(a.totalAdjust){var r=o(e[1],t[1]);i=r.totalAdjust&&a.totalAdjust<r.totalAdjust?a:r}else i=a;i===a?(c=e[0],d=t[0]):(c=e[1],d=t[1])}var c,d,i;switch(t){case"before-centered":c=e.x-a.w-s,d=e.y-(a.h-e.h)/2;break;case"before":c=e.x-a.w-s,n([c,c],[e.y,e.y+e.h-a.h]);break;case"after-centered":c=e.x+e.w+s,d=e.y-(a.h-e.h)/2;break;case"after":c=e.x+e.w+s,n([c,c],[e.y,e.y+e.h-a.h]);break;case"above":d=e.y-a.h-s,n([e.x,e.x+e.w-a.w],[d,d]);break;case"above-centered":c=e.x-(a.w-e.w)/2,d=e.y-a.h-s;break;case"above-alt":d=e.y-a.h-s,n([e.x+e.w-a.w,e.x],[d,d]);break;case"below":d=e.y+e.h+s,n([e.x,e.x+e.w-a.w],[d,d]);break;case"below-centered":c=e.x-(a.w-e.w)/2,d=e.y+e.h+s;break;case"below-alt":d=e.y+e.h+s,n([e.x+e.w-a.w,e.x],[d,d])}return i=i||o(c,d),!i.fits&&r.useStrictFit?null:{x:c+i.adjustX,y:d+i.adjustY,totalAdjust:i.totalAdjust}}r=r||{};var n,s=r.offset||0,u=r.viewPortOffset||0;if(r.orient&&r.orient.some(function(e){var t=o(e);if(t&&!t.totalAdjust)return n=t,!0}),n)return n;var c=[];return t.some(function(e){if((n=o(e))&&!n.totalAdjust)return!0;n&&(c.push(n),n=null)}),n||(c.sort(function(e,t){return e.totalAdjust-t.totalAdjust}),c[0])},e});