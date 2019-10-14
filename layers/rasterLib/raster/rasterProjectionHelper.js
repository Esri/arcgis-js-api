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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","dojo/sniff","../../../kernel","../../../geometry/Extent","../../../geometry/projection","../../../geometry/webMercatorUtils","../../../SpatialReference","../../../geometry/Point"],function(e,r,i,n,t,o,s,a,d,l){var c={requirePE:function(e,r){return!(e.equals(r.spatialReference)||e._canProject(r))},load:function(){var e=new i;if(!this._loadPromise)if(s.isSupported())this._loadPromise=s.load();else{var n=new i;n.reject("projection engine is not supported on this version of the browser, please try with a modern browser"),this._loadPromise=n.promise}return this._loadPromise.isFulfilled()?this._loadPromise.isResolved()?e.resolve():this._loadPromise.isRejected()&&e.resolve():(this._pendingdfds=this._pendingdfds||[],this._pendingdfds.push(e),this._loadPromise.then(r.hitch(this,function(){this._pendingdfds.forEach(function(e){e.resolve()})}),r.hitch(this,function(){this._pendingdfds.forEach(function(e){e.reject()})}))),e.promise},project:function(e,r){if(!r||e.spatialReference.wkid===r.wkid)return e;var i=s.isLoaded()?s:a;"esri.geometry.Extent"===e.declaredClass?e=new o(e.toJson()):"esri.geometry.Point"===e.declaredClass&&(e=new l(e.toJson())),r=new d(r.toJson());var n=i.project(e,r);return n&&"esri.geometry.Extent"===n.declaredClass?n=new o(n.toJson()):n&&"esri.geometry.Point"===n.declaredClass&&(n=new l(n.toJson())),n},projectResolution:function(e,r,i){var n=i.xmin+(i.xmax-i.xmin)/2,t=i.ymin+(i.ymax-i.ymin)/2,s=new o(n,t,n+e.x,t+e.y,e.spatialReference),a=this.project(s,r);return new l(a.xmax-a.xmin,a.ymax-a.ymin,r)},getProjectionOffsetGrid:function(e,r,i){i=i||20;var n,t,o,d,c,f,m=e.xmin,p=e.ymin,h=e.xmax,x=e.ymax,u=e.spatialReference,y=r.spatialReference,j=s.isLoaded()?s:a,g=r.spatialReference._getInfo(),_=g&&g.valid[0],w=g&&g.valid[1],v=(h-m)/(i-1),P=(x-p)/(i-1),R=[];for(o=0;o<i;o++)for(c=f,f=[],d=0;d<i;d++)n=new l({x:m+v*o,y:p+P*d,spatialReference:u}),t=j.project(n,y),f.push(t),o>0&&g&&t.x<c[d].x&&(t.x+=w-_),R.push((t.x-r.xmin)/(r.xmax-r.xmin)),R.push((t.y-r.ymin)/(r.ymax-r.ymin));return R}};return n("extend-esri")&&r.setObject("layers.rasterLib.raster.rasterProjectionHelper",c,t),c});