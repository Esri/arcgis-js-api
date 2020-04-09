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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["../../declare","dojo/Deferred","dojo/promise/all","../../graphic","./LocationProviderBase","../../SpatialReference","../../geometry/jsonUtils"],(function(e,t,n,o,r,i,a){return e("esri.tasks.locationproviders.LocationProviderClientBase",r,{inSpatialReference:null,constructor:function(e){this.inSpatialReference||(this.inSpatialReference=new i(4326))},_locate:function(e,o){var r=[],i=[],a=new t,c=this,s=0;return function t(){setTimeout((function(){for(var l=+new Date+100,f=[];l>+new Date&&s<e.length;){var u=e[s],p=c.getGeometry(u);u.geometry=p,p&&f.push(u),++s}o.outSpatialReference?r.push(c._project(f,o.outSpatialReference).then((function(){i=i.concat(f),a.progress(f)}))):(i=i.concat(f),a.progress(f)),s<e.length?t():n(r).then((function(){a.resolve(i)}))}),25)}(),a.promise}})}));