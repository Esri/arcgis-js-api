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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/tsSupport/assignHelper","dojo/Deferred","../../../../geometry","../../../../core/promiseUtils","../../../../core/scheduling"],function(e,t,r,i,n,o,s,u,c){Object.defineProperty(t,"__esModule",{value:!0});var h=function(){function e(e,t){this.spatialReference=e,this.elevationProvider=t,this.point=new s.Point,this.point.spatialReference=e}return e.prototype.queryElevation=function(e,t){return i(this,void 0,void 0,function(){return r(this,function(r){return this.point.x=e,this.point.y=t,[2,u.resolve(this.elevationProvider&&this.elevationProvider.getElevation(this.point)||0)]})})},e}();t.ElevationQueryView=h;var l=function(){function e(e,t,r){this.spatialReference=e,this._getElevationQueryProvider=t,this._queries=[],this._isScheduled=!1,this._queryOptions=n({},r,{ignoreInvisibleLayers:!0})}return e.prototype.queryElevation=function(e,t,n){return void 0===n&&(n=0),i(this,void 0,void 0,function(){var i;return r(this,function(r){return i=new o,this._queries.push({x:e,y:t,minDemResolution:n,result:i}),this._scheduleDoQuery(),[2,i.promise]})})},e.prototype._scheduleDoQuery=function(){var e=this;this._isScheduled||(c.schedule(function(){return e._doQuery()}),this._isScheduled=!0)},e.prototype._doQuery=function(){return i(this,void 0,void 0,function(){var e,t,i,o,u,c,h,l,a;return r(this,function(r){switch(r.label){case 0:if(this._isScheduled=!1,e=this._queries,this._queries=[],t=e.map(function(e){return[e.x,e.y]}),i=e.reduce(function(e,t){return Math.min(e,t.minDemResolution)},1/0),o=new s.Multipoint({points:t,spatialReference:this.spatialReference}),!(u=this._getElevationQueryProvider()))return e.forEach(function(e,t){return e.result.reject()}),[2];h=n({},this._queryOptions,{minDemResolution:i}),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,u.queryElevation(o,h)];case 2:return c=r.sent(),[3,4];case 3:return l=r.sent(),e.forEach(function(e){return e.result.reject(l)}),[2];case 4:return a=c.geometry.points,e.forEach(function(e,t){return e.result.resolve(a[t][2])}),[2]}})})},e}();t.ElevationQuery=l});