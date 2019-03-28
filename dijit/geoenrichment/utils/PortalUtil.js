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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/kernel","esri/request","./requests/EveryRequest"],function(n,t,r,e){"use strict";var u={};return u.query=function(t,r,u,s){r=r||{},u=u||"results",s=s||100;var o="number"==typeof r.num?r.num:-1,i=r.num=o<0||r.num>s?s:r.num;return r.start=r.start||1,t(r).then(function(s){var a=s[u],f=s.total-r.start+1;if(o>=0&&f>o&&(f=o),(f-=i)<=0)return s;r.num=i;for(var c=[];f>0;)r.start+=i,c.push(t.bind(null,n.mixin({},r))),f-=i;return e(c,!0).then(function(n){return n.forEach(function(n){Array.prototype.push.apply(a,n[u])}),s})})},u.queryCommon=function(e,s){return u.query(function(u){return r({url:e,content:n.mixin({f:"json",token:t.id.credentials[0].token},s,u),handleAs:"json"},{usePost:!0})}).then(function(n){return n.results})},u});