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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/Evented","dojo/dom-class","dojo/dom-construct","./dom","dojo/Deferred","../../extend"],function(e,n,o,t,r,c,i,u,d){function a(e,n){for(var o in n)if(n.hasOwnProperty(o))try{e[o]=n[o].constructor==Object?a(e[o],n[o]):n[o]}catch(t){e[o]=n[o]}return e}function s(e){return!e||e==f}var f="common",m=f,h=new(n([t],{set:function(e,n){this.change(e,m,n),m=n,this.emit("change")},get:function(){return m},load:function(n){function t(){i&&i.remove(),r.resolve(c)}var r=new u,c=null,i=e.on("error",t);return e(["./themes/"+f+"/"+n],function(r){c=o.clone(r),s(m)?t():e(["./themes/"+m+"/"+n],function(e){a(c,e),t()})}),r.promise},change:function(e,n,o){s(n)||r.remove(e,n),s(o)||r.add(e,o)}}));return d("esri.dijit.geoenrichment.theme",h),h});