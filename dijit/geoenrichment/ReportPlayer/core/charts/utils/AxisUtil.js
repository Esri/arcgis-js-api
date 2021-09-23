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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define([],(function(){var a,e={};function i(a,e,i,n){for(var r=0,t=0;(r+1)*e<=a;)r++;for(;r*e+(t+1)*i<=a;)t++;return r*e+t*i+(n?i:-i)}return(e.getPrettifyYAxisParameters=function(e,n,r){var t=(r=r||{}).baseLineValue||0;r.nonZeroInclusive&&0===t||(e=Math.min(e,t),n=Math.max(n,t));var o,m,s=Math.abs(n-e);if(!a){a=[];for(var l=-20;l<20;l++){var b=Math.pow(10,l);a.push(1*b,2*b,5*b)}}if(0===s)o=100,m=10;else for(var h=0;h<a.length;h++){var x=a[h],v=a[h+1];if(s>x&&s<=v){m=(o=v/5)/5;break}}var M={majorTickStep:o,minorTickStep:m,min:0===e?0:i(Math.abs(e),o,m,e<0)*(e>0?1:-1),max:0===n?0:i(Math.abs(n),o,m,n>0)*(n>0?1:-1),includeZero:0===t&&!r.nonZeroInclusive,fixUpper:"none",fixLower:"none"};if(0===t&&(r.renderColumnBarsInOppositeDirections?M.min=-M.max:r.previewBelowZero&&!r.nonZeroInclusive&&(M.min=Math.min(M.min,.5*-m))),r.dataLabelsSizeBelow||r.dataLabelsSizeAbove){var d=r.chartSize,f=r.dataLabelsSizeBelow&&r.dataLabelsSizeAbove||r.renderColumnBarsInOppositeDirections,u=Math.abs(M.max-M.min);if(f){var p=Math.abs(t-M.min),c=Math.abs(M.max-t),S=d*p/u,L=d*c/u,z=S*Math.abs(e-M.min)/p,B=L*Math.abs(M.max-n)/c,w=p*(S/Math.max(10,S-Math.max(0,r.dataLabelsSizeBelow-z))-1),I=c*(L/Math.max(10,L-Math.max(0,r.dataLabelsSizeAbove-B))-1),A=M.min-1.1*w,Z=M.max+I,C=Math.max(A/M.min,Z/M.max);M.min=Math.min(A,M.min*C),M.max=Math.max(M.max,M.max*C)}else{var D=u*(d/Math.max(10,d-(r.dataLabelsSizeBelow||r.dataLabelsSizeAbove))-1);M.min-=r.dataLabelsSizeBelow||r.renderColumnBarsInOppositeDirections?1.1*D:0,M.max+=r.dataLabelsSizeAbove||r.renderColumnBarsInOppositeDirections?D:0}}return M},e)}));