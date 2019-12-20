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

define([],function(){function t(t){return Array.isArray(t)?t:[t.x,t.y]}function n(t){return Array.isArray(t)?t:[t.x,t.y,t.x+t.w,t.y+t.h]}function r(t){return Array.isArray(t)?{x:t[0],y:t[1],w:t[2]-t[0],h:t[3]-t[1]}:t}function e(t){return[[t[0],t[1]],[t[2],t[1]],[t[2],t[3]],[t[0],t[3]],[t[0]+(t[2]-t[0])/2,t[1]+(t[3]-t[1])/2]]}var o={};return o.rotatePointAroundPoint=function(n,r,e){var i=o.degToRad(e),c=t(n),u=t(r),a=Math.cos(i)*(u[0]-c[0])-Math.sin(i)*(u[1]-c[1])+c[0],s=Math.sin(i)*(u[0]-c[0])+Math.cos(i)*(u[1]-c[1])+c[1];return Array.isArray(n)?[a,s]:{x:a,y:s}},o.degToRad=function(t){return t*Math.PI/180},o.radToDeg=function(t){return 180*t/Math.PI},o.cosDeg=function(t){return Math.cos(o.degToRad(t))},o.sinDeg=function(t){return Math.sin(o.degToRad(t))},o.angleTo180_180Range=function(t){return t+=180,t%=360,t<0&&(t=360+t),t-=180},o.angleTo0_360Range=function(t){return t%=360,t<0&&(t=360+t),t},o.calcVectorLength=function(t){var n=t[0]-t[2],r=t[1]-t[3];return Math.sqrt(n*n+r*r)},o.addPointToVector=function(n,r){return r=t(r),n=n.slice(),n[0]+=r[0],n[1]+=r[1],n[2]+=r[0],n[3]+=r[1],n},o.subtractPointFromVector=function(n,r){return r=t(r),n=n.slice(),n[0]-=r[0],n[1]-=r[1],n[2]-=r[0],n[3]-=r[1],n},o.putVectorToOrigin=function(t){return o.subtractPointFromVector(t,[t[0],t[1]])},o.normalizeVector=function(t){t=o.putVectorToOrigin(t);var n=o.calcVectorLength(t);return t[2]/=n,t[3]/=n,t},o.calcDotProduct=function(t,n){return t=o.putVectorToOrigin(t),n=o.putVectorToOrigin(n),t[2]*n[2]+t[3]*n[3]},o.calcAngleBetweenVectors=function(t,n){return t=o.normalizeVector(t),n=o.normalizeVector(n),Math.acos(o.calcDotProduct(t,n))},o.addLengthToVector=function(t,n){var r=o.calcVectorLength(t),e=[t[0],t[1]];return t=o.normalizeVector(t),t[2]*=r+n,t[3]*=r+n,o.addPointToVector(t,e)},o.rotateVectorAroundPoint=function(n,r,e){r=t(r);var i=o.rotatePointAroundPoint(r,[n[0],n[1]],e),c=o.rotatePointAroundPoint(r,[n[2],n[3]],e);return[i[0],i[1],c[0],c[1]]},o.toLineABC=function(t){var n=t[3]-t[1],r=t[0]-t[2];return[n,r,-n*t[0]-r*t[1]]},o.intersect2Lines=function(t,n){var r=o.toLineABC(t),e=o.toLineABC(n),i=r[0],c=r[1],u=r[2],a=e[0],s=e[1],f=e[2],P=i*s-a*c;return 0===P?null:[(f*c-u*s)/P,(a*u-i*f)/P]},o.intersectLineWithRect=function(t,n){function r(r,e){var i=o.intersect2Lines(t,[r[0],r[1],e[0],e[1]]);i&&o.isPointInRect(n,i)&&f.push(i)}var i=e(n),c=i[0],u=i[1],a=i[2],s=i[3],f=[];if(r(c,u),r(u,a),r(a,s),r(s,c),2!==f.length)return null;var P=[f[0][0],f[0][1],f[1][0],f[1][1]];return o.calcVectorLength(P)?P:null},o.isPointInRect=function(r,e){r=n(r),e=t(e);var o=r[2]-r[0],i=r[3]-r[1];return!(e[0]<r[0]||e[0]>r[0]+o||e[1]<r[1]||e[1]>r[1]+i)},o.isRectInRect=function(t,r){return o.checkRectsIntersect([t,r])&&e(n(t)).every(function(t){return o.isPointInRect(r,t)})},o.checkRectsIntersect=function(t){return t=t.map(n),t.every(function(n){var r=e(n);return t.every(function(t){return n===t||(r.some(function(n){return o.isPointInRect(t,n)})||e(t).some(function(t){return o.isPointInRect(n,t)}))})})},o.getRotatedRectBox=function(t,i){var c=!Array.isArray(t);t=n(t);var u=e(t),a=u[0],s=u[1],f=u[2],P=u[3],h=u[4];return a=o.rotatePointAroundPoint(h,a,i),s=o.rotatePointAroundPoint(h,s,i),f=o.rotatePointAroundPoint(h,f,i),P=o.rotatePointAroundPoint(h,P,i),t=o.getPointsExtent([a,s,f,P]),c?r(t):t},o.uniteRects=function(t){var i=!Array.isArray(t[0]);t=t.map(n);var c=[];t.forEach(function(t){c=c.concat(e(t))});var u=o.getPointsExtent(c);return i?r(u):u},o.getPointsExtent=function(n){var e=!Array.isArray(n[0]),o=1/0,i=-1/0,c=1/0,u=-1/0;n.forEach(function(n){n=t(n),o=Math.min(o,n[0]),i=Math.max(i,n[0]),c=Math.min(c,n[1]),u=Math.max(u,n[1])});var a=[o,c,i,u];return e?r(a):a},o});