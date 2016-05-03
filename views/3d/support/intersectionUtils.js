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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../lib/glMatrix"],function(r){function n(r,n){return-u.dot(n,r)-r[3]}function e(r,e,t){var i=u.dot(r,t.dir),c=n(r,e);if(0>c&&i>=0)return!1;if(i>-1e-6&&1e-6>i)return!0;if((0>c||0>i)&&!(0>c&&0>i))return!0;var f=c/i;return i>0?f<t.clip[1]&&(t.clip[1]=f):f>t.clip[0]&&(t.clip[0]=f),t.clip[0]<=t.clip[1]}function t(r,n,t,i){i.clip[0]=0,i.clip[1]=t?i.len:Number.MAX_VALUE;for(var u=0;u<r.length;u++)if(!e(r[u],n,i))return!1;return!0}function i(r,n,e,t){return r?(e&&t&&(f.len=u.dist(n,e)),u.set(r,f.dir)):t?(f.len=u.dist(n,e),u.scale(u.subtract(e,n,f.dir),1/f.len)):u.normalize(u.subtract(e,n,f.dir)),f}var u=r.vec3d,c=r.vec2d,f={dir:u.create(),len:0,clip:c.create()},l={planeSphere:function(r,n,e){return r[0]*n[0]+r[1]*n[1]+r[2]*n[2]+r[3]<e},frustumSphere:function(r,n,e){for(var t=0;6>t;t++)if(!l.planeSphere(r[t],n,e))return!1;return!0},frustumRay:function(r,n,e,u){var c=i(u,n,e,!1);return t(r,n,null,c)},frustumPoint:function(r,e){for(var t=0;6>t;t++){var i=n(r[t],e);if(0>i)return!1}return!0},frustumLineSegment:function(r,n,e,u){var c=i(u,n,e,!0);return t(r,n,e,c)}};return l});