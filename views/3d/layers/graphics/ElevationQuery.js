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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","dojo/Deferred","dojo/_base/lang","../../../../core/Scheduler","../../../../geometry/Multipoint"],function(e,r,t,i,n,u,o,s){Object.defineProperty(r,"__esModule",{value:!0});var c=function(){function e(e,r,t){this.spatialReference=e,this._getElevationQueryProvider=r,this._queries=[],this._isScheduled=!1,this._queryOptions=u.mixin({},t,{ignoreInvisibleLayers:!0})}return e.prototype.queryElevation=function(e,r){return i(this,void 0,void 0,function(){var i;return t(this,function(t){return i=new n,this._queries.push({x:e,y:r,result:i}),this._scheduleDoQuery(),[2,i.promise]})})},e.prototype._scheduleDoQuery=function(){var e=this;this._isScheduled||(o.schedule(function(){return e._doQuery()}),this._isScheduled=!0)},e.prototype._doQuery=function(){return i(this,void 0,void 0,function(){var e,r,i,n,u,o,c;return t(this,function(t){switch(t.label){case 0:if(this._isScheduled=!1,e=this._queries,this._queries=[],r=e.map(function(e){return[e.x,e.y]}),i=new s({points:r,spatialReference:this.spatialReference}),n=this._getElevationQueryProvider(),!n)return e.forEach(function(e,r){return e.result.reject()}),[2];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,n.queryElevation(i,this._queryOptions)];case 2:return u=t.sent(),[3,4];case 3:return o=t.sent(),e.forEach(function(e){return e.result.reject(o)}),[2];case 4:return c=u.geometry.points,e.forEach(function(e,r){return e.result.resolve(c[r][2])}),[2]}})})},e}();r.ElevationQuery=c});