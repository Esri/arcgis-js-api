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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/Evented","dojo/dom-class","dojo/Deferred","../../extend"],function(e,n,o,r,t,c,i){function u(e,n){for(var o in n)if(n.hasOwnProperty(o))try{e[o]=n[o].constructor==Object?u(e[o],n[o]):n[o]}catch(r){e[o]=n[o]}return e}function a(e){return!e||e==d}var d="common",f=d,s=new(n([r],{set:function(e,n){this.change(e,f,n),f=n,this.emit("change")},get:function(){return f},load:function(n){function r(){s&&s.remove(),t.resolve(i)}var t=new c,i=null,s=e.on("error",r);return e(["./themes/"+d+"/"+n],function(t){i=o.clone(t),a(f)?r():e(["./themes/"+f+"/"+n],function(e){u(i,e),r()})}),t.promise},change:function(e,n,o){a(n)||t.remove(e,n),a(o)||t.add(e,o)}}));return i("esri.dijit.geoenrichment.theme",s),s});