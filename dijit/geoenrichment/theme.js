// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/Evented","dojo/dom-class","dojo/dom-construct","./dom","dojo/Deferred","../../extend"],function(e,n,o,r,t,c,i,u,d){function a(e,n){for(var o in n)if(n.hasOwnProperty(o))try{e[o]=n[o].constructor==Object?a(e[o],n[o]):n[o]}catch(r){e[o]=n[o]}return e}function f(e){return!e||e==m}var s="./themes/",m="common",h=m,j=new(n([r],{set:function(e,n){this.change(e,h,n),h=n,this.emit("change")},get:function(){return h},load:function(n){function r(){i&&i.remove(),t.resolve(c)}var t=new u,c=null,i=e.on("error",r);return e([s+m+"/"+n],function(t){c=o.clone(t),f(h)?r():e([s+h+"/"+n],function(e){a(c,e),r()})}),t.promise},change:function(e,n,o){f(n)||t.remove(e,n),f(o)||t.add(e,o)}}));return d("esri.dijit.geoenrichment.theme",j),j});