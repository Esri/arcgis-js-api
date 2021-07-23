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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/Deferred","dojo/when"],(function(e,r,n){"use strict";var o=e.forEach;return function(e){var i,t,s;e instanceof Array?t=e:e&&"object"==typeof e&&(i=e);var f=[];if(i){for(var u in t=[],i)Object.hasOwnProperty.call(i,u)&&(f.push(u),t.push(i[u]));s={}}else t&&(s=[]);if(!t||!t.length)return(new r).resolve(s);var a=new r;a.promise.always((function(){s=f=null}));var l=t.length;function c(e,r){s[r]=e,a.progress([e,r]),0==--l&&a.resolve(s)}return o(t,(function(e,r){i||f.push(r),n(e,(function(e){a.isFulfilled()||c(e,f[r])}),(function(e){a.isFulfilled()||c(e,f[r])}))})),a.promise}}));