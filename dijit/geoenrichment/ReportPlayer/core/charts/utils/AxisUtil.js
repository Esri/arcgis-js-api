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

define([],function(){function a(a,e,r,i){for(var n=0,t=0;(n+1)*e<=a;)n++;for(;n*e+(t+1)*r<=a;)t++;return n*e+t*r+(i?r:-r)}var e,r={};return r.getPrettifyYAxisParameters=function(r,i,n){n=n||{};var t=n.baseLineValue||0,m=n.dataLabelsSize&&r<t,o=n.dataLabelsSize&&i>t;r=Math.min(r,t),i=Math.max(i,t);var s=Math.abs(i-r);if(!e){e=[];for(var h=-20;h<20;h++){var x=Math.pow(10,h);e.push(1*x,2*x,5*x)}}for(var f,p,M=0;M<e.length;M++){var l=e[M],u=e[M+1];if(s>l&&s<=u){f=u/5,p=f/5;break}}var v={majorTickStep:f,minorTickStep:p,min:0===r?0:a(Math.abs(r),f,p,r<0)*(r>0?1:-1),max:0===i?0:a(Math.abs(i),f,p,i>0)*(i>0?1:-1),includeZero:0===t,fixUpper:"none",fixLower:"none"};if(0===t&&(n.renderColumnBarsInOppositeDirections?v.min=-v.max:n.previewBelowZero&&(v.min=Math.min(v.min,.5*-p))),n.dataLabelsSize){var b=n.chartSize,c=n.dataLabelsSize,d=m&&o||n.renderColumnBarsInOppositeDirections,S=Math.abs(v.max-v.min);if(d){var L=Math.abs(t-v.min),z=Math.abs(v.max-t),B=b*L/S,w=b*z/S,C=L*(B/Math.max(5,B-c)-1),D=z*(w/Math.max(5,w-c)-1),I=v.min-1.1*C,O=v.max+D,k=Math.max(I/v.min,O/v.max);v.min*=k,v.max*=k}else{var g=S*(b/Math.max(5,b-c)-1);v.min-=m||n.renderColumnBarsInOppositeDirections?1.1*g:0,v.max+=o||n.renderColumnBarsInOppositeDirections?g:0}}return v},r});