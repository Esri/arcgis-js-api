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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/kernel","esri/request","./requests/EveryRequest"],(function(n,r,t,e){"use strict";var u={query:function(r,t,u,o){u=u||"results",o=o||100;var s="number"==typeof(t=t||{}).num?t.num:-1,i=t.num=s<0||t.num>o?o:t.num;return t.start=t.start||1,r(t).then((function(o){var a=o[u],f=o.total-t.start+1;if(s>=0&&f>s&&(f=s),(f-=i)<=0)return o;t.num=i;for(var c=[];f>0;)t.start+=i,c.push(r.bind(null,n.mixin({},t))),f-=i;return e(c,{stopOnError:!0}).then((function(n){return n.forEach((function(n){Array.prototype.push.apply(a,n[u])})),o}))}))},queryCommon:function(e,o){return u.query((function(u){var s=r.id.findCredential(e)||r.id.credentials[0];return t({url:e,content:n.mixin({f:"json",token:s.token},o,u),handleAs:"json"},{usePost:!0})})).then((function(n){return n.results}))}};return u}));