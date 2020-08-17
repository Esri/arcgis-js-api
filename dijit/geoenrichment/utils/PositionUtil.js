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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/lang","./FitUtil"],(function(t,e){var o={},r=["before-centered","before","after-centered","after","above","above-centered","above-alt","below","below-centered","below-alt"];return o.POSITIONS=r,o.getBestPositionBigAroundSmall=function(t,e,a){var n,i=(a=a||{}).offset||0,s=a.viewPortOffset||0;function u(r){var n,u,c;function d(t,r){return o.checkFitsInView({x:t,y:r,w:e.w,h:e.h},{viewPortOffset:s})}function f(t,e){var o=d(t[0],e[0]);if(o.totalAdjust){var r=d(t[1],e[1]);c=r.totalAdjust&&o.totalAdjust<r.totalAdjust?o:r}else c=o;c===o?(n=t[0],u=e[0]):(n=t[1],u=e[1])}switch(r){case"before-centered":n=t.x-e.w-i,u=t.y-(e.h-t.h)/2;break;case"before":f([n=t.x-e.w-i,n],[t.y,t.y+t.h-e.h]);break;case"after-centered":n=t.x+t.w+i,u=t.y-(e.h-t.h)/2;break;case"after":f([n=t.x+t.w+i,n],[t.y,t.y+t.h-e.h]);break;case"above":u=t.y-e.h-i,f([t.x,t.x+t.w-e.w],[u,u]);break;case"above-centered":n=t.x-(e.w-t.w)/2,u=t.y-e.h-i;break;case"above-alt":u=t.y-e.h-i,f([t.x+t.w-e.w,t.x],[u,u]);break;case"below":u=t.y+t.h+i,f([t.x,t.x+t.w-e.w],[u,u]);break;case"below-centered":n=t.x-(e.w-t.w)/2,u=t.y+t.h+i;break;case"below-alt":u=t.y+t.h+i,f([t.x+t.w-e.w,t.x],[u,u])}return!(c=c||d(n,u)).fits&&a.useStrictFit?null:{x:n+c.adjustX,y:u+c.adjustY,totalAdjust:c.totalAdjust,position:r}}if(a.orient&&a.orient.some((function(t){var e=u(t);if(e&&!e.totalAdjust)return n=e,!0})),n)return n;var c=[];return r.some((function(t){if((n=u(t))&&!n.totalAdjust)return!0;n&&(c.push(n),n=null)})),n||(c.sort((function(t,e){return t.totalAdjust-e.totalAdjust})),c[0])},o.checkFitsInView=function(t,e){var o=e&&e.viewPortOffset||0,r=0,a=0;return t.x<o?r=-t.x+o:t.x+t.w>document.body.clientWidth-o&&(r=document.body.clientWidth-o-(t.x+t.w)),t.y<o?a=-t.y+o:t.y+t.h>document.body.clientHeight-o&&(a=document.body.clientHeight-o-(t.y+t.h)),{fits:0===r&&0===a,adjustX:r,adjustY:a,totalAdjust:Math.abs(r)+Math.abs(a)}},o.findBestAllowedSizeBigAroundBox=function(o,r,a){o=t.mixin({},o);var n=(a=a||{}).offset||0,i=a.viewPortOffset||0;o.x-=i+n,o.y-=i+n,o.w+=2*n,o.h+=2*n;var s=document.body.clientWidth-2*i,u=document.body.clientHeight-2*i,c=[e.fitBox(r,{w:o.x,h:u}),e.fitBox(r,{w:s-o.x-o.w,h:u}),e.fitBox(r,{w:s,h:o.y}),e.fitBox(r,{w:s,h:u-o.y-o.h})];return c.sort((function(t,e){return t.ratio<e.ratio?1:-1})),c[0]},o}));
