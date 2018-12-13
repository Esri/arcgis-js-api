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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/tsSupport/assignHelper","../../../../geometry","../../../../core/promiseUtils","../../../../core/scheduling"],function(e,t,i,r,n,o,u,s){Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){this.spatialReference=e,this.view=t,this.point=new o.Point,this.point.spatialReference=e}return e.prototype.getElevation=function(e,t,i){return this.point.x=e,this.point.y=t,this.view.elevationProvider.getElevation(this.point,i)},e.prototype.queryElevation=function(e,t,n,o){return r(this,void 0,void 0,function(){return i(this,function(i){return this.point.x=e,this.point.y=t,[2,this.view.elevationProvider.queryElevation(this.point,n,o)]})})},e}();t.ViewElevationProvider=c;var h=function(){function e(e,t,i){this.spatialReference=e,this._getElevationQueryProvider=t,this._queries=[],this._isScheduled=!1,this._queryOptions=n({},i,{ignoreInvisibleLayers:!0})}return e.prototype.queryElevation=function(e,t,n){return void 0===n&&(n=0),r(this,void 0,void 0,function(){var r=this;return i(this,function(i){return[2,u.create(function(i,o){r._queries.push({x:e,y:t,minDemResolution:n,result:{resolve:i,reject:o}}),r._scheduleDoQuery()})]})})},e.prototype._scheduleDoQuery=function(){var e=this;this._isScheduled||(s.schedule(function(){return e._doQuery()}),this._isScheduled=!0)},e.prototype._doQuery=function(){return r(this,void 0,void 0,function(){var e,t,r,u,s,c,h,a,l;return i(this,function(i){switch(i.label){case 0:if(this._isScheduled=!1,e=this._queries,this._queries=[],t=e.map(function(e){return[e.x,e.y]}),r=e.reduce(function(e,t){return Math.min(e,t.minDemResolution)},1/0),u=new o.Multipoint({points:t,spatialReference:this.spatialReference}),!(s=this._getElevationQueryProvider()))return e.forEach(function(e,t){return e.result.reject()}),[2];h=n({},this._queryOptions,{minDemResolution:r}),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,s.queryElevation(u,h)];case 2:return c=i.sent(),[3,4];case 3:return a=i.sent(),e.forEach(function(e){return e.result.reject(a)}),[2];case 4:return l=c.geometry.points,e.forEach(function(e,t){return e.result.resolve(l[t][2])}),[2]}})})},e}();t.ElevationQuery=h});