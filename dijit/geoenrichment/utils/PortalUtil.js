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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/lang","./requests/EveryRequest"],function(t,n){"use strict";var r={};return r.query=function(r,u,e,a){u=u||{},e=e||"results",a=a||100;var s="number"==typeof u.num?u.num:-1,o=u.num=s<0||u.num>a?a:u.num;return u.start=u.start||1,r(u).then(function(a){var i=a[e],f=a.total-u.start+1;if(s>=0&&f>s&&(f=s),(f-=o)<=0)return a;u.num=o;for(var m=[];f>0;)u.start+=o,m.push(r.bind(null,t.mixin({},u))),f-=o;return n(m,!0).then(function(t){return t.forEach(function(t){Array.prototype.push.apply(i,t[e])}),a})})},r});