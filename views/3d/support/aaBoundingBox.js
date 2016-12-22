// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./aaBoundingRect"],function(n,t,a){function i(n){return void 0===n&&(n=t.ZERO),[n[0],n[1],n[2],n[3],n[4],n[5]]}function r(n){return[n.xmin,n.ymin,n.zmin,n.xmax,n.ymax,n.zmax]}function e(n,t){return[n[0],n[1],n[2],t[0],t[1],t[2]]}function m(n,t,i){void 0===i&&(i=n);var r=t.declaredClass;return"esri.geometry.Extent"===r?(i[0]=Math.min(n[0],t.xmin),i[1]=Math.min(n[1],t.ymin),i[3]=Math.max(n[3],t.xmax),i[4]=Math.max(n[4],t.ymax),t.hasZ&&(i[2]=Math.min(n[2],t.zmin),i[5]=Math.max(n[5],t.zmax))):"esri.geometry.Point"===r?(i[0]=Math.min(n[0],t.x),i[1]=Math.min(n[1],t.y),i[3]=Math.max(n[3],t.x),i[4]=Math.max(n[4],t.y),t.hasZ&&(i[2]=Math.min(n[2],t.z),i[5]=Math.min(n[5],t.z))):N(t)?(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[2]=Math.min(n[2],t[2]),i[3]=Math.max(n[3],t[3]),i[4]=Math.max(n[4],t[4]),i[5]=Math.max(n[5],t[5])):a.is(t)?(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[3]=Math.max(n[3],t[2]),i[4]=Math.max(n[4],t[3])):Array.isArray(t)&&(2===t.length?(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[3]=Math.max(n[3],t[0]),i[4]=Math.max(n[4],t[1])):3===t.length&&(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[2]=Math.min(n[2],t[2]),i[3]=Math.max(n[3],t[0]),i[4]=Math.max(n[4],t[1]),i[5]=Math.max(n[5],t[2]))),i}function u(n,t,a,i,r){void 0===r&&(r=n);for(var e=n[0],m=n[1],u=n[2],h=n[3],o=n[4],M=n[5],f=0;i>f;f++)e=Math.min(e,t[a+3*f]),m=Math.min(m,t[a+3*f+1]),u=Math.min(u,t[a+3*f+2]),h=Math.max(h,t[a+3*f]),o=Math.max(o,t[a+3*f+1]),M=Math.max(M,t[a+3*f+2]);return r[0]=e,r[1]=m,r[2]=u,r[3]=h,r[4]=o,r[5]=M,r}function h(n){for(var t=0;6>t;t++)if(!isFinite(n[t]))return!1;return!0}function o(n){return n[0]>=n[3]?0:n[3]-n[0]}function M(n){return n[1]>=n[4]?0:n[4]-n[1]}function f(n){return n[2]>=n[5]?0:n[5]-n[2]}function x(n,t){return void 0===t&&(t=[0,0,0]),t[0]=n[0]+o(n)/2,t[1]=n[1]+M(n)/2,t[2]=n[2]+f(n)/2,t}function c(n,t){return void 0===t&&(t=[0,0,0]),t[0]=o(n),t[1]=M(n),t[2]=f(n),t}function s(n,t){return t[0]>=n[0]&&t[1]>=n[1]&&t[2]>=n[2]&&t[0]<=n[3]&&t[1]<=n[4]&&t[2]<=n[5]}function d(n,t,a){return t[0]>=n[0]-a&&t[1]>=n[1]-a&&t[2]>=n[2]-a&&t[0]<=n[3]+a&&t[1]<=n[4]+a&&t[2]<=n[5]+a}function l(n,t){return t[0]>=n[0]&&t[1]>=n[1]&&t[2]>=n[2]&&t[3]<=n[3]&&t[4]<=n[4]&&t[5]<=n[5]}function v(n,t){return Math.max(t[0],n[0])<=Math.min(t[3],n[3])&&Math.max(t[1],n[1])<=Math.min(t[4],n[4])&&Math.max(t[2],n[2])<=Math.min(t[5],n[5])}function g(n,t,a,i,r){return void 0===r&&(r=n),r[0]=n[0]+t,r[1]=n[1]+a,r[2]=n[2]+i,r[3]=n[3]+t,r[4]=n[4]+a,r[5]=n[5]+i,r}function y(n,t,a){return void 0===a&&(a=n),a[0]=t[0],a[1]=t[1],a[2]=t[2],a!==n&&(a[3]=n[3],a[4]=n[4],a[5]=n[5]),a}function I(n,t,a){return void 0===a&&(a=n),a[3]=t[0],a[4]=t[1],a[5]=t[2],a!==n&&(a[0]=n[0],a[1]=n[1],a[2]=n[2]),n}function z(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function E(n,t){return t||(t=a.create()),t[0]=n[0],t[1]=n[1],t[2]=n[3],t[3]=n[4],t}function A(n,t){return n[0]=t[0],n[1]=t[1],n[3]=t[2],n[4]=t[3],n}function N(n){return 6===n.length}function R(n){return 0===o(n)&&0===M(n)&&0===f(n)}function b(n,t,a){if(null==n||null==t)return n===t;if(!N(n)||!N(t))return!1;if(a){for(var i=0;i<n.length;i++)if(!a(n[i],t[i]))return!1}else for(var i=0;i<n.length;i++)if(n[i]!==t[i])return!1;return!0}t.create=i,t.fromExtent=r,t.fromMinMax=e,t.expand=m,t.expandBuffer=u,t.allFinite=h,t.width=o,t.depth=M,t.height=f,t.center=x,t.size=c,t.contains=s,t.containsWithMargin=d,t.containsAabb=l,t.intersectsAabb=v,t.offset=g,t.setMin=y,t.setMax=I,t.set=z,t.toRect=E,t.fromRect=A,t.is=N,t.isPoint=R,t.equals=b,t.POSITIVE_INFINITY=[-(1/0),-(1/0),-(1/0),1/0,1/0,1/0],t.NEGATIVE_INFINITY=[1/0,1/0,1/0,-(1/0),-(1/0),-(1/0)],t.ZERO=[0,0,0,0,0,0]});