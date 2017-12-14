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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["../../declare","dojo/_base/lang","dojo/promise/all","dojo/Deferred","dojo/when","dojo/Evented","../../SpatialReference","../../geometry/jsonUtils","../../graphic","../../arcgis/csv"],function(e,t,r,o,n,a,s,i,f,l){return e("esri.tasks.locationproviders.LocationProviderBase",a,{geometryType:null,loaded:!1,constructor:function(e){t.mixin(this,e),setTimeout(t.hitch(this,this._init),0)},locate:function(e,t){function r(t){n(R).then(function(){for(var r=[],o=t.concat(m).concat(h),n=0;n<e.length;n++){for(var a=e[n],s=!1,i=0;i<o.length;i++)if(o[i]===a){s=!0;break}s||(a&&a.setGeometry&&a.setGeometry(),r.push(a))}var f={features:o,failed:r};u.emit("locate-complete",f),c.resolve(f)})}function a(e){for(var t={features:e},r=0;r<e.length;r++){var o=e[r];o.setGeometry(o.geometry)}u.emit("locate-progress",t),c.progress(t)}function l(e){var t={error:e};u.emit("error",t),c.progress(t)}var c=new o,u=this,p=null,h=[],g=[],m=[];t=t||{};for(var v=0;v<e.length;v++){var y=e[v];if(y&&y instanceof f){var d=y.geometry;d&&t.useExistingGeometries&&i.getJsonType(d)===this.geometryType?(p||(p=d.spatialReference),!d.spatialReference||t.outSpatialReference&&!d.spatialReference.equals(t.outSpatialReference)?m.push(y):h.push(y)):g.push(y)}}var R;return m.length&&(R=this._project(m,t.outSpatialReference,p||new s(4326)).then(function(){a(m)})),h.length&&a(h),this.loaded?this._locate(g,t).then(r,l,a):l("not loaded"),c.promise},_init:function(){this.geometryType&&(this.loaded=!0,this.emit("load"))},_project:function(e,t,n){function a(e,r){var n=new o,a={featureSet:{geometryType:f.geometryType,features:e}};return l._projectFeatureSet(a,r,t,function(t){for(var r=0;r<e.length;r++){var o=e[r];o&&o.geometry&&!o.geometry.toJson&&(o.geometry=i.fromJson(o.geometry))}n.resolve()}),n.promise}for(var s=[],f=this,c=0;c<e.length;c++){var u=e[c],p=u&&u.geometry;if(p){if(p.spatialReference||p.setSpatialReference(n),t.equals(p.spatialReference))continue;for(var h,g=0;g<s.length;g++)h=s[g].sref.equals(p.spatialReference)&&s[g].features;h?h.push(u):s.push({sref:p.spatialReference,features:[u]})}}for(var m=[],v=0;v<s.length;v++)m.push(a(s[v].features,s[v].sref));return r(m)}})});