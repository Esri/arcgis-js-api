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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/lang","./FitUtil"],function(t,e){var o={},r=["before-centered","before","after-centered","after","above","above-centered","above-alt","below","below-centered","below-alt"];return o.POSITIONS=r,o.getBestPositionBigAroundSmall=function(t,e,a){function n(r){function n(t,r){return o.checkFitsInView({x:t,y:r,w:e.w,h:e.h},{viewPortOffset:u})}function i(t,e){var o=n(t[0],e[0]);if(o.totalAdjust){var r=n(t[1],e[1]);f=r.totalAdjust&&o.totalAdjust<r.totalAdjust?o:r}else f=o;f===o?(c=t[0],d=e[0]):(c=t[1],d=e[1])}var c,d,f;switch(r){case"before-centered":c=t.x-e.w-s,d=t.y-(e.h-t.h)/2;break;case"before":c=t.x-e.w-s,i([c,c],[t.y,t.y+t.h-e.h]);break;case"after-centered":c=t.x+t.w+s,d=t.y-(e.h-t.h)/2;break;case"after":c=t.x+t.w+s,i([c,c],[t.y,t.y+t.h-e.h]);break;case"above":d=t.y-e.h-s,i([t.x,t.x+t.w-e.w],[d,d]);break;case"above-centered":c=t.x-(e.w-t.w)/2,d=t.y-e.h-s;break;case"above-alt":d=t.y-e.h-s,i([t.x+t.w-e.w,t.x],[d,d]);break;case"below":d=t.y+t.h+s,i([t.x,t.x+t.w-e.w],[d,d]);break;case"below-centered":c=t.x-(e.w-t.w)/2,d=t.y+t.h+s;break;case"below-alt":d=t.y+t.h+s,i([t.x+t.w-e.w,t.x],[d,d])}return f=f||n(c,d),!f.fits&&a.useStrictFit?null:{x:c+f.adjustX,y:d+f.adjustY,totalAdjust:f.totalAdjust,position:r}}a=a||{};var i,s=a.offset||0,u=a.viewPortOffset||0;if(a.orient&&a.orient.some(function(t){var e=n(t);if(e&&!e.totalAdjust)return i=e,!0}),i)return i;var c=[];return r.some(function(t){if((i=n(t))&&!i.totalAdjust)return!0;i&&(c.push(i),i=null)}),i||(c.sort(function(t,e){return t.totalAdjust-e.totalAdjust}),c[0])},o.checkFitsInView=function(t,e){var o=e&&e.viewPortOffset||0,r=0,a=0;return t.x<o?r=-t.x+o:t.x+t.w>document.body.clientWidth-o&&(r=document.body.clientWidth-o-(t.x+t.w)),t.y<o?a=-t.y+o:t.y+t.h>document.body.clientHeight-o&&(a=document.body.clientHeight-o-(t.y+t.h)),{fits:0===r&&0===a,adjustX:r,adjustY:a,totalAdjust:Math.abs(r)+Math.abs(a)}},o.findBestAllowedSizeBigAroundBox=function(o,r,a){o=t.mixin({},o),a=a||{};var n=a.offset||0,i=a.viewPortOffset||0;o.x-=i+n,o.y-=i+n,o.w+=2*n,o.h+=2*n;var s=document.body.clientWidth-2*i,u=document.body.clientHeight-2*i,c=[e.fitBox(r,{w:o.x,h:u}),e.fitBox(r,{w:s-o.x-o.w,h:u}),e.fitBox(r,{w:s,h:o.y}),e.fitBox(r,{w:s,h:u-o.y-o.h})];return c.sort(function(t,e){return t.ratio<e.ratio?1:-1}),c[0]},o});