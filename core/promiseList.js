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

define(["dojo/_base/array","dojo/Deferred","dojo/when"],function(e,r,n){"use strict";var o=e.forEach;return function(e){function t(e,r){f[r]=e,c.progress([e,r]),0===--l&&c.resolve(f)}var a,s;e instanceof Array?s=e:e&&"object"==typeof e&&(a=e);var f,i=[];if(a){s=[];for(var u in a)Object.hasOwnProperty.call(a,u)&&(i.push(u),s.push(a[u]));f={}}else s&&(f=[]);if(!s||!s.length)return(new r).resolve(f);var c=new r;c.promise.always(function(){f=i=null});var l=s.length;return o(s,function(e,r){a||i.push(r),n(e,function(e){t(e,i[r])},function(e){t(e,i[r])})}),c.promise}});