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

define([],function(){function a(a,e,i,n){for(var r=0,t=0;(r+1)*e<=a;)r++;for(;r*e+(t+1)*i<=a;)t++;return r*e+t*i+(n?i:-i)}var e,i={};return i.getPrettifyYAxisParameters=function(i,n,r){r=r||{};var t=r.baseLineValue||0;r.nonZeroInclusive&&0===t||(i=Math.min(i,t),n=Math.max(n,t));var o=Math.abs(n-i);if(!e){e=[];for(var m=-20;m<20;m++){var s=Math.pow(10,m);e.push(1*s,2*s,5*s)}}var l,b;if(0===o)l=100,b=10;else for(var h=0;h<e.length;h++){var v=e[h],x=e[h+1];if(o>v&&o<=x){l=x/5,b=l/5;break}}var M={majorTickStep:l,minorTickStep:b,min:0===i?0:a(Math.abs(i),l,b,i<0)*(i>0?1:-1),max:0===n?0:a(Math.abs(n),l,b,n>0)*(n>0?1:-1),includeZero:0===t&&!r.nonZeroInclusive,fixUpper:"none",fixLower:"none"};if(0===t&&(r.renderColumnBarsInOppositeDirections?M.min=-M.max:r.previewBelowZero&&!r.nonZeroInclusive&&(M.min=Math.min(M.min,.5*-b))),r.dataLabelsSizeBelow||r.dataLabelsSizeAbove){var d=r.chartSize,f=r.dataLabelsSizeBelow&&r.dataLabelsSizeAbove||r.renderColumnBarsInOppositeDirections,u=Math.abs(M.max-M.min);if(f){var p=Math.abs(t-M.min),c=Math.abs(M.max-t),S=d*p/u,L=d*c/u,z=Math.abs(i-M.min),B=Math.abs(M.max-n),w=S*z/p,I=L*B/c,A=p*(S/Math.max(10,S-Math.max(0,r.dataLabelsSizeBelow-w))-1),Z=c*(L/Math.max(10,L-Math.max(0,r.dataLabelsSizeAbove-I))-1),C=M.min-1.1*A,D=M.max+Z,O=Math.max(C/M.min,D/M.max);M.min=Math.min(C,M.min*O),M.max=Math.max(M.max,M.max*O)}else{var k=u*(d/Math.max(10,d-(r.dataLabelsSizeBelow||r.dataLabelsSizeAbove))-1);M.min-=r.dataLabelsSizeBelow||r.renderColumnBarsInOppositeDirections?1.1*k:0,M.max+=r.dataLabelsSizeAbove||r.renderColumnBarsInOppositeDirections?k:0}}return M},i});