// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["../../declare","dojo/Deferred","dojo/promise/all","../../graphic","./LocationProviderBase","../../SpatialReference","../../geometry/jsonUtils"],function(e,t,n,o,r,i){var a=100,c=25;return e("esri.tasks.locationproviders.LocationProviderClientBase",r,{inSpatialReference:null,constructor:function(){this.inSpatialReference||(this.inSpatialReference=new i(4326))},_locate:function(e,o){function r(){setTimeout(function(){for(var t=+new Date+a,c=[];t>+new Date&&u<e.length;){var p=e[u],h=f.getGeometry(p);p.geometry=h,h&&c.push(p),++u}o.outSpatialReference?i.push(f._project(c,o.outSpatialReference).then(function(){s=s.concat(c),l.progress(c)})):(s=s.concat(c),l.progress(c)),u<e.length?r():n(i).then(function(){l.resolve(s)})},c)}var i=[],s=[],l=new t,f=this,u=0;return r(),l.promise}})});