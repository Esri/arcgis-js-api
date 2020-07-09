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

define(["require","exports","tslib","../../geometry","../../Graphic","../../core/maybe","../../core/accessorSupport/decorators","./FeatureSet"],(function(e,t,r,o,n,a,p,s){return function(e){function t(t){var r=e.call(this,t)||this;return r.extent=null,r.features=null,r.geometryType="polyline",r.routeId=null,r.routeName=null,r.totalDriveTime=null,r.totalLength=null,r.totalTime=null,r}return r.__extends(t,e),t.prototype.readFeatures=function(e,t){var r=this;(e||[]).forEach((function(e){r._decompressFeatureGeometry(e,t.summary.envelope.spatialReference)}));var p=o.SpatialReference.fromJSON(t.spatialReference);return e.map((function(e){var t=n.fromJSON(e),r=e.geometry&&e.geometry.spatialReference;return t.geometry&&!r&&(a.unwrap(t.geometry).spatialReference=p),t.strings=e.strings,t.events=(e.events||[]).map((function(t){var r=new n({geometry:new o.Point({x:t.point.x,y:t.point.y,z:t.point.z,hasZ:void 0!==t.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:t.ETA,arriveTimeUTC:t.arriveTimeUTC}});return r.strings=t.strings,r})),t}))},Object.defineProperty(t.prototype,"mergedGeometry",{get:function(){if(!this.features)return null;var e=this.features.map((function(e){var t=e.geometry;return a.unwrap(t)})),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"strings",{get:function(){return this.features.map((function(e){return e.strings}))},enumerable:!0,configurable:!0}),t.prototype._decompressFeatureGeometry=function(e,t){e.geometry=this._decompressGeometry(e.compressedGeometry,t)},t.prototype._decompressGeometry=function(e,t){var r,o,n,a,p,s,i,u,c=0,l=0,y=0,m=0,f=[],d=0,g=0,_=0;if((p=e.match(/((\+|\-)[^\+\-\|]+|\|)/g))||(p=[]),0===parseInt(p[d],32)){d=2;var h=parseInt(p[d],32);d++,s=parseInt(p[d],32),d++,1&h&&(g=p.indexOf("|")+1,i=parseInt(p[g],32),g++),2&h&&(_=p.indexOf("|",g)+1,u=parseInt(p[_],32),_++)}else s=parseInt(p[d],32),d++;for(;d<p.length&&"|"!==p[d];){r=parseInt(p[d],32)+c,d++,c=r,o=parseInt(p[d],32)+l,d++,l=o;var v=[r/s,o/s];g&&(a=parseInt(p[g],32)+y,g++,y=a,v.push(a/i)),_&&(n=parseInt(p[_],32)+m,_++,m=n,v.push(n/u)),f.push(v)}return{paths:[f],hasZ:g>0,hasM:_>0,spatialReference:t}},t.prototype._mergePolylinesToSinglePath=function(e,t){var r=[];(e||[]).forEach((function(e){e.paths.forEach((function(e){r=r.concat(e)}))}));var n=[],a=[0,0];return r.forEach((function(e){e[0]===a[0]&&e[1]===a[1]||(n.push(e),a=e)})),new o.Polyline({paths:[n]},t)},r.__decorate([p.property({type:o.Extent,json:{read:{source:"summary.envelope"}}})],t.prototype,"extent",void 0),r.__decorate([p.property()],t.prototype,"features",void 0),r.__decorate([p.reader("features")],t.prototype,"readFeatures",null),r.__decorate([p.property()],t.prototype,"geometryType",void 0),r.__decorate([p.property({readOnly:!0,dependsOn:["features","extent.spatialReference"]})],t.prototype,"mergedGeometry",null),r.__decorate([p.property()],t.prototype,"routeId",void 0),r.__decorate([p.property()],t.prototype,"routeName",void 0),r.__decorate([p.property({value:null,readOnly:!0,dependsOn:["features"]})],t.prototype,"strings",null),r.__decorate([p.property({json:{read:{source:"summary.totalDriveTime"}}})],t.prototype,"totalDriveTime",void 0),r.__decorate([p.property({json:{read:{source:"summary.totalLength"}}})],t.prototype,"totalLength",void 0),r.__decorate([p.property({json:{read:{source:"summary.totalTime"}}})],t.prototype,"totalTime",void 0),t=r.__decorate([p.subclass("esri.tasks.support.DirectionsFeatureSet")],t)}(s)}));