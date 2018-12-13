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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","dojo/sniff","../../../kernel","../../../geometry/Extent","../../../geometry/projection","../../../geometry/webMercatorUtils","../../../SpatialReference","../../../geometry/Point"],function(e,i,r,n,t,o,s,a,d,c){var f={requirePE:function(e,i){return!(e.equals(i.spatialReference)||e._canProject(i))},load:function(){var e=new r;if(!this._loadPromise)if(s.isSupported())this._loadPromise=s.load();else{var n=new r;n.reject("projection engine is not supported on this version of the browser, please try with a modern browser"),this._loadPromise=n.promise}return this._loadPromise.isFulfilled()?this._loadPromise.isResolved()?e.resolve():this._loadPromise.isRejected()&&e.resolve():(this._pendingdfds=this._pendingdfds||[],this._pendingdfds.push(e),this._loadPromise.then(i.hitch(this,function(){this._pendingdfds.forEach(function(e){e.resolve()})}),i.hitch(this,function(){this._pendingdfds.forEach(function(e){e.reject()})}))),e.promise},project:function(e,i){return e.spatialReference.wkid===i.wkid?e:(s.isLoaded()?s:a).project(e,i)},projectResolution:function(e,i,r){var n=r.xmin+(r.xmax-r.xmin)/2,t=r.ymin+(r.ymax-r.ymin)/2,s=new o(n,t,n+e.x,t+e.y,e.spatialReference),a=this.project(s,i);return new c(a.xmax-a.xmin,a.ymax-a.ymin,i)},getProjectionOffsetGrid:function(e,i,r){r=r||20;var n,t,o,d,f,l,m=e.xmin,p=e.ymin,h=e.xmax,u=e.ymax,x=e.spatialReference,y=i.spatialReference,j=s.isLoaded()?s:a,_=i.spatialReference._getInfo(),g=_&&_.valid[0],v=_&&_.valid[1],P=(h-m)/(r-1),w=(u-p)/(r-1),R=[];for(o=0;o<r;o++)for(f=l,l=[],d=0;d<r;d++)n=new c({x:m+P*o,y:p+w*d,spatialReference:x}),t=j.project(n,y),l.push(t),o>0&&_&&t.x<f[d].x&&(t.x+=v-g),R.push((t.x-i.xmin)/(i.xmax-i.xmin)),R.push((t.y-i.ymin)/(i.ymax-i.ymin));return R}};return n("extend-esri")&&i.setObject("layers.rasterLib.raster.rasterProjectionHelper",f,t),f});