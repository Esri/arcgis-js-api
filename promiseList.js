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

define(["dojo/_base/array","dojo/Deferred","dojo/when"],function(e,r,n){"use strict";var o=e.forEach;return function(e){function i(e,r){f[r]=e,l.progress([e,r]),0==--c&&l.resolve(f)}var t,s;e instanceof Array?s=e:e&&"object"==typeof e&&(t=e);var f,u=[];if(t){s=[];for(var a in t)Object.hasOwnProperty.call(t,a)&&(u.push(a),s.push(t[a]));f={}}else s&&(f=[]);if(!s||!s.length)return(new r).resolve(f);var l=new r;l.promise.always(function(){f=u=null});var c=s.length;return o(s,function(e,r){t||u.push(r),n(e,function(e){l.isFulfilled()||i(e,u[r])},function(e){l.isFulfilled()||i(e,u[r])})}),l.promise}});