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

define([],function(){function t(t){return Array.isArray(t)?t:[t.x,t.y]}function n(t){return Array.isArray(t)?t:[t.x,t.y,t.x+t.w,t.y+t.h]}function r(t){return Array.isArray(t)?{x:t[0],y:t[1],w:t[2]-t[0],h:t[3]-t[1]}:t}function o(t){return[[t[0],t[1]],[t[2],t[1]],[t[2],t[3]],[t[0],t[3]],[t[0]+(t[2]-t[0])/2,t[1]+(t[3]-t[1])/2]]}var e={};return e.rotatePointAroundPoint=function(n,r,o){var i=e.degToRad(o),c=t(n),u=t(r),a=Math.cos(i)*(u[0]-c[0])-Math.sin(i)*(u[1]-c[1])+c[0],f=Math.sin(i)*(u[0]-c[0])+Math.cos(i)*(u[1]-c[1])+c[1];return Array.isArray(n)?[a,f]:{x:a,y:f}},e.degToRad=function(t){return t*Math.PI/180},e.radToDeg=function(t){return 180*t/Math.PI},e.cosDeg=function(t){return Math.cos(e.degToRad(t))},e.sinDeg=function(t){return Math.sin(e.degToRad(t))},e.angleTo180_180Range=function(t){return t+=180,t%=360,t<0&&(t=360+t),t-=180},e.angleTo0_360Range=function(t){return t%=360,t<0&&(t=360+t),t},e.calcVectorLength=function(t){var n=t[0]-t[2],r=t[1]-t[3];return Math.sqrt(n*n+r*r)},e.addPointToVector=function(n,r){return r=t(r),n=n.slice(),n[0]+=r[0],n[1]+=r[1],n[2]+=r[0],n[3]+=r[1],n},e.subtractPointFromVector=function(n,r){return r=t(r),n=n.slice(),n[0]-=r[0],n[1]-=r[1],n[2]-=r[0],n[3]-=r[1],n},e.putVectorToOrigin=function(t){return e.subtractPointFromVector(t,[t[0],t[1]])},e.normalizeVector=function(t){t=e.putVectorToOrigin(t);var n=e.calcVectorLength(t);return t[2]/=n,t[3]/=n,t},e.calcDotProduct=function(t,n){return t=e.putVectorToOrigin(t),n=e.putVectorToOrigin(n),t[2]*n[2]+t[3]*n[3]},e.calcAngleBetweenVectors=function(t,n){return t=e.normalizeVector(t),n=e.normalizeVector(n),Math.acos(e.calcDotProduct(t,n))},e.addLengthToVector=function(t,n){var r=e.calcVectorLength(t),o=[t[0],t[1]];return t=e.normalizeVector(t),t[2]*=r+n,t[3]*=r+n,e.addPointToVector(t,o)},e.rotateVectorAroundPoint=function(n,r,o){r=t(r);var i=e.rotatePointAroundPoint(r,[n[0],n[1]],o),c=e.rotatePointAroundPoint(r,[n[2],n[3]],o);return[i[0],i[1],c[0],c[1]]},e.toLineABC=function(t){var n=t[3]-t[1],r=t[0]-t[2];return[n,r,-n*t[0]-r*t[1]]},e.intersect2Lines=function(t,n){var r=e.toLineABC(t),o=e.toLineABC(n),i=r[0],c=r[1],u=r[2],a=o[0],f=o[1],s=o[2],P=i*f-a*c;return 0===P?null:[(s*c-u*f)/P,(a*u-i*s)/P]},e.intersectLineWithRect=function(t,n){function r(r,o){var i=e.intersect2Lines(t,[r[0],r[1],o[0],o[1]]);i&&e.isPointInRect(n,i)&&s.push(i)}var i=o(n),c=i[0],u=i[1],a=i[2],f=i[3],s=[];if(r(c,u),r(u,a),r(a,f),r(f,c),2!==s.length)return null;var P=[s[0][0],s[0][1],s[1][0],s[1][1]];return e.calcVectorLength(P)?P:null},e.isPointInRect=function(r,o){r=n(r),o=t(o);var e=r[2]-r[0],i=r[3]-r[1];return!(o[0]<r[0]||o[0]>r[0]+e||o[1]<r[1]||o[1]>r[1]+i)},e.checkRectsIntersect=function(t){return t=t.map(n),t.every(function(n){var r=o(n);return t.every(function(t){return n===t||(r.some(function(n){return e.isPointInRect(t,n)})||o(t).some(function(t){return e.isPointInRect(n,t)}))})})},e.getRotatedRectBox=function(t,i){var c=!Array.isArray(t);t=n(t);var u=o(t),a=u[0],f=u[1],s=u[2],P=u[3],d=u[4];return a=e.rotatePointAroundPoint(d,a,i),f=e.rotatePointAroundPoint(d,f,i),s=e.rotatePointAroundPoint(d,s,i),P=e.rotatePointAroundPoint(d,P,i),t=e.getPointsExtent([a,f,s,P]),c?r(t):t},e.uniteRects=function(t){var i=!Array.isArray(t[0]);t=t.map(n);var c=[];t.forEach(function(t){c=c.concat(o(t))});var u=e.getPointsExtent(c);return i?r(u):u},e.getPointsExtent=function(n){var o=!Array.isArray(n[0]),e=1/0,i=-1/0,c=1/0,u=-1/0;n.forEach(function(n){n=t(n),e=Math.min(e,n[0]),i=Math.max(i,n[0]),c=Math.min(c,n[1]),u=Math.max(u,n[1])});var a=[e,c,i,u];return o?r(a):a},e});