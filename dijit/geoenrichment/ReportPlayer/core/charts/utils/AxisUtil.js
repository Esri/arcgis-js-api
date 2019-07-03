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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define([],function(){function a(a,e,n,r){for(var i=0,t=0;(i+1)*e<=a;)i++;for(;i*e+(t+1)*n<=a;)t++;return i*e+t*n+(r?n:-n)}var e,n={};return n.getPrettifyYAxisParameters=function(n,r,i){i=i||{};var t=i.baseLineValue||0,o=i.dataLabelsSize&&n<t,m=i.dataLabelsSize&&r>t;i.nonZeroInclusive&&0===t||(n=Math.min(n,t),r=Math.max(r,t));var s=Math.abs(r-n);if(!e){e=[];for(var h=-20;h<20;h++){var l=Math.pow(10,h);e.push(1*l,2*l,5*l)}}for(var u,v,x=0;x<e.length;x++){var f=e[x],p=e[x+1];if(s>f&&s<=p){u=p/5,v=u/5;break}}var c={majorTickStep:u,minorTickStep:v,min:0===n?0:a(Math.abs(n),u,v,n<0)*(n>0?1:-1),max:0===r?0:a(Math.abs(r),u,v,r>0)*(r>0?1:-1),includeZero:0===t&&!i.nonZeroInclusive,fixUpper:"none",fixLower:"none"};if(0===t&&(i.renderColumnBarsInOppositeDirections?c.min=-c.max:i.previewBelowZero&&!i.nonZeroInclusive&&(c.min=Math.min(c.min,.5*-v))),i.dataLabelsSize){var M=i.chartSize,b=i.dataLabelsSize,d=o&&m||i.renderColumnBarsInOppositeDirections,I=Math.abs(c.max-c.min);if(d){var S=Math.abs(t-c.min),L=Math.abs(c.max-t),z=M*S/I,B=M*L/I,Z=S*(z/Math.max(5,z-b)-1),w=L*(B/Math.max(5,B-b)-1),C=c.min-1.1*Z,D=c.max+w,O=Math.max(C/c.min,D/c.max);c.min*=O,c.max*=O}else{var k=I*(M/Math.max(5,M-b)-1);c.min-=o||i.renderColumnBarsInOppositeDirections?1.1*k:0,c.max+=m||i.renderColumnBarsInOppositeDirections?k:0}}return c},n});