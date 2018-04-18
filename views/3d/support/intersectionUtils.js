// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["../lib/glMatrix"],function(r){function n(r,n){return-i.dot(n,r)-r[3]}function t(r,t,e){var u=i.dot(r,e.dir),c=n(r,t);if(c<0&&u>=0)return!1;if(u>-1e-6&&u<1e-6)return!0;if((c<0||u<0)&&!(c<0&&u<0))return!0;var f=c/u;return u>0?f<e.clip[1]&&(e.clip[1]=f):f>e.clip[0]&&(e.clip[0]=f),e.clip[0]<=e.clip[1]}function e(r,n,e,u){u.clip[0]=0,u.clip[1]=e?u.len:Number.MAX_VALUE;for(var i=0;i<r.length;i++)if(!t(r[i],n,u))return!1;return!0}function u(r,n,t,e){return r?(t&&e&&(f.len=i.dist(n,t)),i.set(r,f.dir)):e?(f.len=i.dist(n,t),i.scale(i.subtract(t,n,f.dir),1/f.len)):i.normalize(i.subtract(t,n,f.dir)),f}var i=r.vec3d,c=r.vec2d,f={dir:i.create(),len:0,clip:c.create()},l={planeSphere:function(r,n,t){return r[0]*n[0]+r[1]*n[1]+r[2]*n[2]+r[3]<t},frustumSphere:function(r,n,t){for(var e=0;e<6;e++)if(!l.planeSphere(r[e],n,t))return!1;return!0},frustumRay:function(r,n,t,i){return e(r,n,null,u(i,n,t,!1))},frustumPoint:function(r,t){for(var e=0;e<6;e++){if(n(r[e],t)<0)return!1}return!0},frustumLineSegment:function(r,n,t,i){return e(r,n,t,u(i,n,t,!0))},closestPointOnRay:function(r,n,t,e){var u=i.dot(n,i.subtract(t,r,e));return i.add(r,i.scale(n,u,e),e),e}};return l});