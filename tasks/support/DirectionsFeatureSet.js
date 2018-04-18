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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["../../geometry/Extent","../../geometry/Point","../../geometry/Polyline","../../geometry/SpatialReference","./FeatureSet","../../Graphic","dojo/_base/array"],function(e,t,r,n,a,s,o){return a.createSubclass({declaredClass:"esri.tasks.support.DirectionsFeatureSet",properties:{geometryType:"esriGeometryPolyline",extent:{type:e,json:{read:{source:"summary.envelope"}}},features:{value:null,json:{read:function(e,r){e.forEach(function(e){this._decompressFeatureGeometry(e,r.summary.envelope.spatialReference)},this);var a=n.fromJSON(r.spatialReference);return e.map(function(e){var r=s.fromJSON(e),n=e.geometry&&e.geometry.spatialReference;return r.geometry&&!n&&(r.geometry.spatialReference=a),r.strings=e.strings,r.events=(e.events||[]).map(function(r){var n=new s({geometry:new t({x:r.point.x,y:r.point.y,z:r.point.z,hasZ:void 0!==r.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:r.ETA,arriveTimeUTC:r.arriveTimeUTC}});return n.strings=r.strings,n}),r})}}},mergedGeometry:{value:null,readOnly:!0,dependsOn:["features","extent.spatialReference"],get:function(){if(!this.features)return null;var e=o.map(this.features,function(e){return e.geometry}),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}},routeId:null,routeName:null,strings:{value:null,readOnly:!0,dependsOn:["features"],get:function(){return o.map(this.features,function(e){return e.strings})}},totalDriveTime:{value:null,json:{read:{source:"summary.totalDriveTime"}}},totalLength:{value:null,json:{read:{source:"summary.totalLength"}}},totalTime:{value:null,json:{read:{source:"summary.totalTime"}}}},_decompressFeatureGeometry:function(e,t){e.geometry=this._decompressGeometry(e.compressedGeometry,t)},_decompressGeometry:function(e,t){var r,n,a,s,o=0,i=0,u=[];a=e.match(/((\+|\-)[^\+\-]+)/g),a||(a=[]),s=parseInt(a[0],32);for(var l=1;l<a.length;l+=2)r=parseInt(a[l],32)+o,o=r,n=parseInt(a[l+1],32)+i,i=n,u.push([r/s,n/s]);return{paths:[u],spatialReference:t}},_mergePolylinesToSinglePath:function(e,t){var n=[];o.forEach(e,function(e){o.forEach(e.paths,function(e){n=n.concat(e)})});var a=[],s=[0,0];return o.forEach(n,function(e){e[0]===s[0]&&e[1]===s[1]||(a.push(e),s=e)}),new r({paths:[a]},t)}})});