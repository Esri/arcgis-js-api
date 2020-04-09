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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../geometry","../../Graphic","../../core/maybe","../../core/accessorSupport/decorators","./FeatureSet"],(function(e,t,r,o,n,a,p,s,i){return function(e){function t(t){var r=e.call(this,t)||this;return r.extent=null,r.features=null,r.geometryType="polyline",r.routeId=null,r.routeName=null,r.totalDriveTime=null,r.totalLength=null,r.totalTime=null,r}return r(t,e),t.prototype.readFeatures=function(e,t){var r=this;(e||[]).forEach((function(e){r._decompressFeatureGeometry(e,t.summary.envelope.spatialReference)}));var o=n.SpatialReference.fromJSON(t.spatialReference);return e.map((function(e){var t=a.fromJSON(e),r=e.geometry&&e.geometry.spatialReference;return t.geometry&&!r&&(p.unwrap(t.geometry).spatialReference=o),t.strings=e.strings,t.events=(e.events||[]).map((function(t){var r=new a({geometry:new n.Point({x:t.point.x,y:t.point.y,z:t.point.z,hasZ:void 0!==t.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:t.ETA,arriveTimeUTC:t.arriveTimeUTC}});return r.strings=t.strings,r})),t}))},Object.defineProperty(t.prototype,"mergedGeometry",{get:function(){if(!this.features)return null;var e=this.features.map((function(e){var t=e.geometry;return p.unwrap(t)})),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"strings",{get:function(){return this.features.map((function(e){return e.strings}))},enumerable:!0,configurable:!0}),t.prototype._decompressFeatureGeometry=function(e,t){e.geometry=this._decompressGeometry(e.compressedGeometry,t)},t.prototype._decompressGeometry=function(e,t){var r,o,n,a,p,s,i,u,l=0,y=0,c=0,m=0,f=[],d=0,g=0,h=0;if((p=e.match(/((\+|\-)[^\+\-\|]+|\|)/g))||(p=[]),0===parseInt(p[d],32)){d=2;var v=parseInt(p[d],32);d++,s=parseInt(p[d],32),d++,1&v&&(g=p.indexOf("|")+1,i=parseInt(p[g],32),g++),2&v&&(h=p.indexOf("|",g)+1,u=parseInt(p[h],32),h++)}else s=parseInt(p[d],32),d++;for(;d<p.length&&"|"!==p[d];){r=parseInt(p[d],32)+l,d++,l=r,o=parseInt(p[d],32)+y,d++,y=o;var T=[r/s,o/s];g&&(a=parseInt(p[g],32)+c,g++,c=a,T.push(a/i)),h&&(n=parseInt(p[h],32)+m,h++,m=n,T.push(n/u)),f.push(T)}return{paths:[f],hasZ:g>0,hasM:h>0,spatialReference:t}},t.prototype._mergePolylinesToSinglePath=function(e,t){var r=[];(e||[]).forEach((function(e){e.paths.forEach((function(e){r=r.concat(e)}))}));var o=[],a=[0,0];return r.forEach((function(e){e[0]===a[0]&&e[1]===a[1]||(o.push(e),a=e)})),new n.Polyline({paths:[o]},t)},o([s.property({type:n.Extent,json:{read:{source:"summary.envelope"}}})],t.prototype,"extent",void 0),o([s.property()],t.prototype,"features",void 0),o([s.reader("features")],t.prototype,"readFeatures",null),o([s.property()],t.prototype,"geometryType",void 0),o([s.property({readOnly:!0,dependsOn:["features","extent.spatialReference"]})],t.prototype,"mergedGeometry",null),o([s.property()],t.prototype,"routeId",void 0),o([s.property()],t.prototype,"routeName",void 0),o([s.property({value:null,readOnly:!0,dependsOn:["features"]})],t.prototype,"strings",null),o([s.property({json:{read:{source:"summary.totalDriveTime"}}})],t.prototype,"totalDriveTime",void 0),o([s.property({json:{read:{source:"summary.totalLength"}}})],t.prototype,"totalLength",void 0),o([s.property({json:{read:{source:"summary.totalTime"}}})],t.prototype,"totalTime",void 0),t=o([s.subclass("esri.tasks.support.DirectionsFeatureSet")],t)}(s.declared(i))}));