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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define([],function(){var t={},e=[["after","above"],["after","mid"],["before","above"],["before","mid"],["mid","above"],["after","below"],["before","below"],["mid","below"]];return t.getBestPositionBigAroundSmall=function(t,a,o){function r(e,r){var i,d;switch(e){case"before":i=t.x-n-a.w;break;case"mid":i=t.x-(a.w-t.w)/2;break;case"after":i=t.x+t.w+n}switch(r){case"above":d=t.y-n-a.h;break;case"mid":d=t.y-(a.h-t.h)/2;break;case"below":d=t.y+t.h+n}var s=function(t,e){var o=0,r=0;return t<u?o=-t+u:t+a.w>document.body.clientWidth-u&&(o=document.body.clientWidth-u-(t+a.w)),e<u?r=-e+u:e+a.h>document.body.clientHeight-u&&(r=document.body.clientHeight-u-(e+a.h)),{adjustX:o,adjustY:r,totalAdjust:Math.abs(o)+Math.abs(r),fits:0===o&&0===r}}(i,d);return s.fits?{x:i,y:d}:"mid"===e&&0!==s.adjustX&&0===s.adjustY?{x:i+s.adjustX,y:d}:"mid"===r&&0!==s.adjustY&&0===s.adjustX?{x:i,y:d+s.adjustY}:o.useStrictFit?null:{x:i+s.adjustX,y:d+s.adjustY,totalAdjust:s.totalAdjust}}o=o||{};var i,d,n=o.offset||0,u=o.viewPortOffset||0,s=o.orient&&o.orient.length?o.orient:["after"];-1!==s.indexOf("before")&&(i="before"),-1!==s.indexOf("after")&&(i="after"),-1!==s.indexOf("above")&&(d="above"),-1!==s.indexOf("below")&&(d="below"),i=i||"mid",d=d||"mid";var f=r(i,d);if(f&&!f.totalAdjust)return f;f=null;var b=[];return e.some(function(t){if((f=r(t[0],t[1]))&&!f.totalAdjust)return!0;f&&(b.push(f),f=null)}),f||(b.sort(function(t,e){return t.totalAdjust-e.totalAdjust}),b[0])},t});