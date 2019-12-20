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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/Evented","dojo/dom-class","esri/dijit/geoenrichment/Deferred","esri/extend"],function(e,n,r,o,t,i,c){function u(e,n){for(var r in n)if(n.hasOwnProperty(r))try{e[r]=n[r].constructor==Object?u(e[r],n[r]):n[r]}catch(o){e[r]=n[r]}return e}function s(e){return!e||e==a}var a="common",d=a,f=new(n([o],{set:function(e,n){this.change(e,d,n),d=n,this.emit("change")},get:function(){return d},load:function(n){function o(){f&&f.remove(),t.resolve(c)}var t=new i,c=null,f=e.on("error",o);return e(["../themes/"+a+"/"+n],function(t){c=r.clone(t),s(d)?o():e(["../themes/"+d+"/"+n],function(e){u(c,e),o()})}),t.promise},change:function(e,n,r){s(n)||t.remove(e,n),s(r)||t.add(e,r)}}));return c("esri.dijit.geoenrichment.theme",f),f});