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

define(["dojo/_base/lang","esri/kernel","esri/request","./requests/EveryRequest"],function(n,r,t,e){"use strict";var u={};return u.query=function(r,t,u,s){t=t||{},u=u||"results",s=s||100;var o="number"==typeof t.num?t.num:-1,i=t.num=o<0||t.num>s?s:t.num;return t.start=t.start||1,r(t).then(function(s){var a=s[u],f=s.total-t.start+1;if(o>=0&&f>o&&(f=o),(f-=i)<=0)return s;t.num=i;for(var c=[];f>0;)t.start+=i,c.push(r.bind(null,n.mixin({},t))),f-=i;return e(c,!0).then(function(n){return n.forEach(function(n){Array.prototype.push.apply(a,n[u])}),s})})},u.queryCommon=function(e,s){return u.query(function(u){var o=r.id.findCredential(e)||r.id.credentials[0];return t({url:e,content:n.mixin({f:"json",token:o.token},s,u),handleAs:"json"},{usePost:!0})}).then(function(n){return n.results})},u});