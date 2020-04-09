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

define(["../../declare","dojo/_base/lang","dojo/promise/all","dojo/Deferred","dojo/when","dojo/Evented","../../SpatialReference","../../geometry/jsonUtils","../../graphic","../../arcgis/csv"],(function(e,t,r,o,n,a,s,i,f,l){return e("esri.tasks.locationproviders.LocationProviderBase",a,{geometryType:null,loaded:!1,constructor:function(e){t.mixin(this,e),setTimeout(t.hitch(this,this._init),0)},locate:function(e,t){var r,a=new o,l=this,c=null,u=[],p=[],h=[];t=t||{};for(var g=0;g<e.length;g++){var m=e[g];if(m&&m instanceof f){var v=m.geometry;v&&t.useExistingGeometries&&i.getJsonType(v)===this.geometryType?(c||(c=v.spatialReference),!v.spatialReference||t.outSpatialReference&&!v.spatialReference.equals(t.outSpatialReference)?h.push(m):u.push(m)):p.push(m)}}function y(e){for(var t={features:e},r=0;r<e.length;r++){var o=e[r];o.setGeometry(o.geometry)}l.emit("locate-progress",t),a.progress(t)}function d(e){var t={error:e};l.emit("error",t),a.progress(t)}return h.length&&(r=this._project(h,t.outSpatialReference,c||new s(4326)).then((function(){y(h)}))),u.length&&y(u),this.loaded?this._locate(p,t).then((function(t){n(r).then((function(){for(var r=[],o=t.concat(h).concat(u),n=0;n<e.length;n++){for(var s=e[n],i=!1,f=0;f<o.length;f++)if(o[f]===s){i=!0;break}i||(s&&s.setGeometry&&s.setGeometry(),r.push(s))}var c={features:o,failed:r};l.emit("locate-complete",c),a.resolve(c)}))}),d,y):d("not loaded"),a.promise},_init:function(){this.geometryType&&(this.loaded=!0,this.emit("load"))},_project:function(e,t,n){var a=[],s=this;function f(e,r){var n=new o,a={featureSet:{geometryType:s.geometryType,features:e}};return l._projectFeatureSet(a,r,t,(function(t){for(var r=0;r<e.length;r++){var o=e[r];o&&o.geometry&&!o.geometry.toJson&&(o.geometry=i.fromJson(o.geometry))}n.resolve()})),n.promise}for(var c=0;c<e.length;c++){var u=e[c],p=u&&u.geometry;if(p){if(p.spatialReference||p.setSpatialReference(n),t.equals(p.spatialReference))continue;for(var h,g=0;g<a.length;g++)h=a[g].sref.equals(p.spatialReference)&&a[g].features;h?h.push(u):a.push({sref:p.spatialReference,features:[u]})}}for(var m=[],v=0;v<a.length;v++)m.push(f(a[v].features,a[v].sref));return r(m)}})}));