// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/lang","./FitUtil"],(function(t,e){var o={},r=["before-centered","before","after-centered","after","above","above-centered","above-alt","below","below-centered","below-alt"];return o.POSITIONS=r,o.getBestPositionBigAroundSmall=function(t,e,a){var n,i=(a=a||{}).offset||0,s=a.viewPortOffset||0;function c(r){var n,c,u;function l(t,r){return o.checkFitsInView({x:t,y:r,w:e.w,h:e.h},{viewPortOffset:s,useBodyScroll:a.useBodyScroll})}function d(t,e){var o=l(t[0],e[0]);if(o.totalAdjust){var r=l(t[1],e[1]);u=r.totalAdjust&&o.totalAdjust<r.totalAdjust?o:r}else u=o;u===o?(n=t[0],c=e[0]):(n=t[1],c=e[1])}switch(r){case"before-centered":n=t.x-e.w-i,c=t.y-(e.h-t.h)/2;break;case"before":d([n=t.x-e.w-i,n],[t.y,t.y+t.h-e.h]);break;case"after-centered":n=t.x+t.w+i,c=t.y-(e.h-t.h)/2;break;case"after":d([n=t.x+t.w+i,n],[t.y,t.y+t.h-e.h]);break;case"above":c=t.y-e.h-i,d([t.x,t.x+t.w-e.w],[c,c]);break;case"above-centered":n=t.x-(e.w-t.w)/2,c=t.y-e.h-i;break;case"above-alt":c=t.y-e.h-i,d([t.x+t.w-e.w,t.x],[c,c]);break;case"below":c=t.y+t.h+i,d([t.x,t.x+t.w-e.w],[c,c]);break;case"below-centered":n=t.x-(e.w-t.w)/2,c=t.y+t.h+i;break;case"below-alt":c=t.y+t.h+i,d([t.x+t.w-e.w,t.x],[c,c])}return!(u=u||l(n,c)).fits&&a.useStrictFit?null:{x:n+u.adjustX,y:c+u.adjustY,totalAdjust:u.totalAdjust,position:r}}if(a.orient&&a.orient.some((function(t){var e=c(t);if(e&&!e.totalAdjust)return n=e,!0})),n)return n;var u=[];return r.some((function(t){if((n=c(t))&&!n.totalAdjust)return!0;n&&(u.push(n),n=null)})),n||(u.sort((function(t,e){return t.totalAdjust-e.totalAdjust})),u[0])},o.checkFitsInView=function(t,e){var o=(e=e||{})&&e.viewPortOffset||0,r=e.useBodyScroll?document.body.scrollWidth:document.body.clientWidth,a=e.useBodyScroll?document.body.scrollHeight:document.body.clientHeight,n=0,i=0;return t.x<o?n=-t.x+o:t.x+t.w>r-o&&(n=r-o-(t.x+t.w)),t.y<o?i=-t.y+o:t.y+t.h>a-o&&(i=a-o-(t.y+t.h)),{fits:0===n&&0===i,adjustX:n,adjustY:i,totalAdjust:Math.abs(n)+Math.abs(i)}},o.findBestAllowedSizeBigAroundBox=function(o,r,a){o=t.mixin({},o);var n=(a=a||{}).offset||0,i=a.viewPortOffset||0;o.x-=i+n,o.y-=i+n,o.w+=2*n,o.h+=2*n;var s=(a.useBodyScroll?document.body.scrollWidth:document.body.clientWidth)-2*i,c=(a.useBodyScroll?document.body.scrollHeight:document.body.clientHeight)-2*i,u=[e.fitBox(r,{w:o.x,h:c}),e.fitBox(r,{w:s-o.x-o.w,h:c}),e.fitBox(r,{w:s,h:o.y}),e.fitBox(r,{w:s,h:c-o.y-o.h})];return u.sort((function(t,e){return t.ratio<e.ratio?1:-1})),u[0]},o}));