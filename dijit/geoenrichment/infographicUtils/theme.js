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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/Evented","dojo/dom-class","esri/dijit/geoenrichment/Deferred","esri/extend"],(function(e,n,o,r,t,i,c){var u="common";function a(e){return!e||"common"==e}var m=new(n([r],{set:function(e,n){this.change(e,u,n),u=n,this.emit("change")},get:function(){return u},load:function(n){var r=new i,t=null,c=e.on("error",m);function m(){c&&c.remove(),r.resolve(t)}return e(["../themes/common/"+n],(function(r){t=o.clone(r),a(u)?m():e(["../themes/"+u+"/"+n],(function(e){!function e(n,o){for(var r in o)if(o.hasOwnProperty(r))try{n[r]=o[r].constructor==Object?e(n[r],o[r]):o[r]}catch(e){n[r]=o[r]}return n}(t,e),m()}))})),r.promise},change:function(e,n,o){a(n)||t.remove(e,n),a(o)||t.add(e,o)}}));return c("esri.dijit.geoenrichment.theme",m),m}));