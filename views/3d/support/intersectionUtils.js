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

define(["../lib/glMatrix"],function(r){function n(r,n){return-f.dot(n,r)-r[3]}function e(r,n,e){return-r[0]*n[e]-r[1]*n[e+1]-r[2]*n[e+2]-r[3]}function t(r,e,t){var u=f.dot(r,t.dir),i=n(r,e);if(0>i&&u>=0)return!1;if(u>-1e-6&&1e-6>u)return!0;if((0>i||0>u)&&!(0>i&&0>u))return!0;var c=i/u;return u>0?c<t.clip[1]&&(t.clip[1]=c):c>t.clip[0]&&(t.clip[0]=c),t.clip[0]<=t.clip[1]}function u(r,n,e,u){u.clip[0]=0,u.clip[1]=e?u.len:Number.MAX_VALUE;for(var i=0;i<r.length;i++)if(!t(r[i],n,u))return!1;return!0}function i(r,n,e,t){return r?(e&&t&&(a.len=f.dist(n,e)),f.set(r,a.dir)):t?(a.len=f.dist(n,e),f.scale(f.subtract(e,n,a.dir),1/a.len)):f.normalize(f.subtract(e,n,a.dir)),a}var f=r.vec3d,c=r.vec2d,a={dir:f.create(),len:0,clip:c.create()},l={planeSphere:function(r,n,e){return r[0]*n[0]+r[1]*n[1]+r[2]*n[2]+r[3]<e},frustumSphere:function(r,n,e){for(var t=0;6>t;t++)if(!l.planeSphere(r[t],n,e))return!1;return!0},frustumRay:function(r,n,e,t){var f=i(t,n,e,!1);return u(r,n,null,f)},frustumPoint:function(r,e){for(var t=0;6>t;t++){var u=n(r[t],e);if(0>u)return!1}return!0},conservativeFrustumConvexBuffer:function(r,n,t,u,i){i=i||0;for(var f=0;6>f;f++){for(var c=(i+f)%6,a=!1,l=0;u>l;l++){var o=e(r[c],n,t+3*l);if(o>=0){a=!0;break}}if(!a)return c}return-1},frustumLineSegment:function(r,n,e,t){var f=i(t,n,e,!0);return u(r,n,e,f)}};return l});