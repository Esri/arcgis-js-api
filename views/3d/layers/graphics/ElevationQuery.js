// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../geometry","../../../../core/arrayUtils","../../../../core/asyncUtils","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/scheduling"],(function(e,t,r,i,n,o,s,u,a){Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){this.spatialReference=e,this.view=t}return e.prototype.getElevation=function(e,t,r){return this.view.elevationProvider.getElevation(e,t,0,this.spatialReference,r)},e.prototype.queryElevation=function(e,t,i,n,o){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){return[2,this.view.elevationProvider.queryElevation(e,t,0,this.spatialReference,i,n,o)]}))}))},e}();t.ViewElevationProvider=l;var c=function(){function e(e,t,i){this.spatialReference=e,this._getElevationQueryProvider=t,this._queries=[],this._isScheduled=!1,this._queryOptions=r.__assign(r.__assign({},i),{ignoreInvisibleLayers:!0})}return e.prototype.queryElevation=function(e,t,i,o){return void 0===o&&(o=0),r.__awaiter(this,void 0,void 0,(function(){var s=this;return r.__generator(this,(function(r){return[2,u.create((function(r,a){var l={x:e,y:t,minDemResolution:o,result:{resolve:r,reject:a},signal:i};s._queries.push(l),u.onAbort(i,(function(){n.remove(s._queries,l),a(u.createAbortError())})),s._scheduleDoQuery()}))]}))}))},e.prototype._scheduleDoQuery=function(){var e=this;this._isScheduled||(a.schedule((function(){return e._doQuery()})),this._isScheduled=!0)},e.prototype._doQuery=function(){return r.__awaiter(this,void 0,void 0,(function(){var e,t,n,a,l,c,h,v,_,f,d,g;return r.__generator(this,(function(y){switch(y.label){case 0:return this._isScheduled=!1,e=this._queries,this._queries=[],0===e.length?[2]:(t=e.map((function(e){return[e.x,e.y]})),n=e.reduce((function(e,t){return Math.min(e,t.minDemResolution)}),1/0),a=new i.Multipoint({points:t,spatialReference:this.spatialReference}),(l=this._getElevationQueryProvider())?(c=e.length>1&&e.some((function(e){return!!e.signal}))?u.createAbortController():null,h=s.isSome(c)?c.signal:e[0].signal,s.isSome(c)&&(v=0,e.forEach((function(t){return u.onAbort(t.signal,(function(){v++,t.result.reject(u.createAbortError()),v===e.length&&c.abort()}))}))),_=r.__assign(r.__assign({},this._queryOptions),{minDemResolution:n,signal:h}),[4,o.result(l.queryElevation(a,_))]):(e.forEach((function(e){return e.result.reject()})),[2]));case 1:for(f=y.sent(),d=0;d<e.length;d++)g=e[d],s.isSome(g.signal)&&g.signal.aborted?g.result.reject(u.createAbortError()):!1===f.ok?g.result.reject(f.error):g.result.resolve(f.value.geometry.points[d][2]);return[2]}}))}))},e}();t.ElevationQuery=c}));