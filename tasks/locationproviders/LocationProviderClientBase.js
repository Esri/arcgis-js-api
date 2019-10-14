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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["../../declare","dojo/Deferred","dojo/promise/all","../../graphic","./LocationProviderBase","../../SpatialReference","../../geometry/jsonUtils"],function(e,t,n,o,r,i,a){var c=100;return e("esri.tasks.locationproviders.LocationProviderClientBase",r,{inSpatialReference:null,constructor:function(e){this.inSpatialReference||(this.inSpatialReference=new i(4326))},_locate:function(e,o){function r(){setTimeout(function(){for(var t=+new Date+c,u=[];t>+new Date&&f<e.length;){var p=e[f],h=l.getGeometry(p);p.geometry=h,h&&u.push(p),++f}o.outSpatialReference?i.push(l._project(u,o.outSpatialReference).then(function(){a=a.concat(u),s.progress(u)})):(a=a.concat(u),s.progress(u)),f<e.length?r():n(i).then(function(){s.resolve(a)})},25)}var i=[],a=[],s=new t,l=this,f=0;return r(),s.promise}})});