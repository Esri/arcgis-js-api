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

define([],(function(){var t={};function n(t){return Array.isArray(t)?t:[t.x,t.y]}function r(t){return Array.isArray(t)?t:[t.x,t.y,t.x+t.w,t.y+t.h]}function e(t){return Array.isArray(t)?{x:t[0],y:t[1],w:t[2]-t[0],h:t[3]-t[1]}:t}function o(t){return[[t[0],t[1]],[t[2],t[1]],[t[2],t[3]],[t[0],t[3]],[t[0]+(t[2]-t[0])/2,t[1]+(t[3]-t[1])/2]]}return t.rotatePointAroundPoint=function(r,e,o){var i=t.degToRad(o),c=n(r),u=n(e),a=Math.cos(i)*(u[0]-c[0])-Math.sin(i)*(u[1]-c[1])+c[0],s=Math.sin(i)*(u[0]-c[0])+Math.cos(i)*(u[1]-c[1])+c[1];return Array.isArray(r)?[a,s]:{x:a,y:s}},t.degToRad=function(t){return t*Math.PI/180},t.radToDeg=function(t){return 180*t/Math.PI},t.cosDeg=function(n){return Math.cos(t.degToRad(n))},t.sinDeg=function(n){return Math.sin(t.degToRad(n))},t.angleTo180_180Range=function(t){return t+=180,(t%=360)<0&&(t=360+t),t-=180},t.angleTo0_360Range=function(t){return(t%=360)<0&&(t=360+t),t},t.calcVectorLength=function(t){var n=t[0]-t[2],r=t[1]-t[3];return Math.sqrt(n*n+r*r)},t.addPointToVector=function(t,r){return r=n(r),(t=t.slice())[0]+=r[0],t[1]+=r[1],t[2]+=r[0],t[3]+=r[1],t},t.subtractPointFromVector=function(t,r){return r=n(r),(t=t.slice())[0]-=r[0],t[1]-=r[1],t[2]-=r[0],t[3]-=r[1],t},t.putVectorToOrigin=function(n){return t.subtractPointFromVector(n,[n[0],n[1]])},t.normalizeVector=function(n){n=t.putVectorToOrigin(n);var r=t.calcVectorLength(n);return n[2]/=r,n[3]/=r,n},t.calcDotProduct=function(n,r){return n=t.putVectorToOrigin(n),r=t.putVectorToOrigin(r),n[2]*r[2]+n[3]*r[3]},t.calcAngleBetweenVectors=function(n,r){return n=t.normalizeVector(n),r=t.normalizeVector(r),Math.acos(t.calcDotProduct(n,r))},t.addLengthToVector=function(n,r){var e=t.calcVectorLength(n),o=[n[0],n[1]];return(n=t.normalizeVector(n))[2]*=e+r,n[3]*=e+r,t.addPointToVector(n,o)},t.rotateVectorAroundPoint=function(r,e,o){e=n(e);var i=t.rotatePointAroundPoint(e,[r[0],r[1]],o),c=t.rotatePointAroundPoint(e,[r[2],r[3]],o);return[i[0],i[1],c[0],c[1]]},t.toLineABC=function(t){var n=t[3]-t[1],r=t[0]-t[2];return[n,r,-n*t[0]-r*t[1]]},t.intersect2Lines=function(n,r){var e=t.toLineABC(n),o=t.toLineABC(r),i=e[0],c=e[1],u=e[2],a=o[0],s=o[1],f=o[2],P=i*s-a*c;return 0===P?null:[(f*c-u*s)/P,(a*u-i*f)/P]},t.intersectLineWithRect=function(n,r){var e=o(r),i=e[0],c=e[1],u=e[2],a=e[3],s=[];function f(e,o){var i=t.intersect2Lines(n,[e[0],e[1],o[0],o[1]]);i&&t.isPointInRect(r,i)&&s.push(i)}if(f(i,c),f(c,u),f(u,a),f(a,i),2!==s.length)return null;var P=[s[0][0],s[0][1],s[1][0],s[1][1]];return t.calcVectorLength(P)?P:null},t.isPointInRect=function(t,e){t=r(t),e=n(e);var o=t[2]-t[0],i=t[3]-t[1];return!(e[0]<t[0]||e[0]>t[0]+o||e[1]<t[1]||e[1]>t[1]+i)},t.isRectInRect=function(n,e){return t.checkRectsIntersect([n,e])&&o(r(n)).every((function(n){return t.isPointInRect(e,n)}))},t.checkRectsIntersect=function(n){return(n=n.map(r)).every((function(r){var e=o(r);return n.every((function(n){return r===n||(e.some((function(r){return t.isPointInRect(n,r)}))||o(n).some((function(n){return t.isPointInRect(r,n)})))}))}))},t.getRotatedRectBox=function(n,i){var c=!Array.isArray(n),u=o(n=r(n)),a=u[0],s=u[1],f=u[2],P=u[3],h=u[4];return a=t.rotatePointAroundPoint(h,a,i),s=t.rotatePointAroundPoint(h,s,i),f=t.rotatePointAroundPoint(h,f,i),P=t.rotatePointAroundPoint(h,P,i),n=t.getPointsExtent([a,s,f,P]),c?e(n):n},t.uniteRects=function(n){var i=!Array.isArray(n[0]);n=n.map(r);var c=[];n.forEach((function(t){c=c.concat(o(t))}));var u=t.getPointsExtent(c);return i?e(u):u},t.getPointsExtent=function(t){var r=!Array.isArray(t[0]),o=1/0,i=-1/0,c=1/0,u=-1/0;t.forEach((function(t){t=n(t),o=Math.min(o,t[0]),i=Math.max(i,t[0]),c=Math.min(c,t[1]),u=Math.max(u,t[1])}));var a=[o,c,i,u];return r?e(a):a},t}));
