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

define([],function(){function r(r,e,n,a){for(var i=0,t=0;(i+1)*e<=r;)i++;for(;i*e+(t+1)*n<=r;)t++;return i*e+t*n+(a?n:-n)}var e,n={};return n.getPrettifyYAxisParameters=function(n,a,i){i=i||{};var t=i.baseLineValue||0;n=Math.min(n,t),a=Math.max(a,t);var o=Math.abs(a-n);if(!e){e=[];for(var m=-20;m<20;m++){var f=Math.pow(10,m);e.push(1*f,2*f,5*f)}}for(var h,s,u=0;u<e.length;u++){var v=e[u],p=e[u+1];if(o>v&&o<=p){h=p/5,s=h/5;break}}var M={majorTickStep:h,minorTickStep:s,min:0===n?0:r(Math.abs(n),h,s,n<0)*(n>0?1:-1),max:0===a?0:r(Math.abs(a),h,s,a>0)*(a>0?1:-1),includeZero:0===t,fixUpper:"none",fixLower:"none"};return 0===t&&(i.renderColumnBarsInOppositeDirections?M.min=-M.max:i.goBelowZero?M.min=Math.min(M.min,.9*-s):i.previewBelowZero&&(M.min=Math.min(M.min,.5*-s))),M},n});