// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/tsSupport/assignHelper","../../../../geometry","../../../../core/arrayUtils","../../../../core/asyncUtils","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/scheduling"],function(e,t,r,i,n,o,s,u,l,c,a){Object.defineProperty(t,"__esModule",{value:!0});var h=function(){function e(e,t){this.spatialReference=e,this.view=t,this.point=new o.Point,this.point.spatialReference=e}return e.prototype.getElevation=function(e,t,r){return this.point.x=e,this.point.y=t,this.view.elevationProvider.getElevation(this.point,r)},e.prototype.queryElevation=function(e,t,n,o,s){return i(this,void 0,void 0,function(){return r(this,function(r){return this.point.x=e,this.point.y=t,[2,this.view.elevationProvider.queryElevation(this.point,n,o,s)]})})},e}();t.ViewElevationProvider=h;var p=function(){function e(e,t,r){this.spatialReference=e,this._getElevationQueryProvider=t,this._queries=[],this._isScheduled=!1,this._queryOptions=n({},r,{ignoreInvisibleLayers:!0})}return e.prototype.queryElevation=function(e,t,n,o,u){return void 0===o&&(o=0),i(this,void 0,void 0,function(){var i=this;return r(this,function(r){return[2,c.create(function(r,u){var l={x:e,y:t,minDemResolution:o,result:{resolve:r,reject:u},signal:n};i._queries.push(l),c.onAbort(n,function(){s.remove(i._queries,l),u(c.createAbortError())}),i._scheduleDoQuery()})]})})},e.prototype._scheduleDoQuery=function(){var e=this;this._isScheduled||(a.schedule(function(){return e._doQuery()}),this._isScheduled=!0)},e.prototype._doQuery=function(){return i(this,void 0,void 0,function(){var e,t,i,s,a,h,p,v,f,d,y,g;return r(this,function(r){switch(r.label){case 0:return this._isScheduled=!1,(e=this._queries,this._queries=[],0===e.length)?[2]:(t=e.map(function(e){return[e.x,e.y]}),i=e.reduce(function(e,t){return Math.min(e,t.minDemResolution)},1/0),s=new o.Multipoint({points:t,spatialReference:this.spatialReference}),(a=this._getElevationQueryProvider())?(h=e.length>1&&e.some(function(e){return!!e.signal})?c.createAbortController():null,p=l.isSome(h)?h.signal:e[0].signal,l.isSome(h)&&(v=0,e.forEach(function(t){return c.onAbort(t.signal,function(){v++,t.result.reject(c.createAbortError()),v===e.length&&h.abort()})})),f=n({},this._queryOptions,{minDemResolution:i,signal:p}),[4,u.result(a.queryElevation(s,f))]):(e.forEach(function(e,t){return e.result.reject()}),[2]));case 1:for(d=r.sent(),y=0;y<e.length;y++)g=e[y],l.isSome(g.signal)&&g.signal.aborted?g.result.reject(c.createAbortError()):!1===d.ok?g.result.reject(d.error):g.result.resolve(d.value.geometry.points[y][2]);return[2]}})})},e}();t.ElevationQuery=p});