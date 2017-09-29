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

define(["../../geometry/Extent","../../geometry/Polyline","../../geometry/SpatialReference","./FeatureSet","../../Graphic","dojo/_base/array"],function(e,t,r,n,a,o){var s=n.createSubclass({declaredClass:"esri.tasks.support.DirectionsFeatureSet",properties:{geometryType:"esriGeometryPolyline",extent:{type:e,json:{read:{source:"summary.envelope"}}},features:{value:null,json:{read:function(e,t){e.forEach(this._decompressFeatureGeometry,this);var n=r.fromJSON(t.spatialReference),o=e.map(function(e){var t=a.fromJSON(e),r=e.geometry&&e.geometry.spatialReference;return t.geometry&&!r&&(t.geometry.spatialReference=n),t});return o}}},mergedGeometry:{value:null,readOnly:!0,dependsOn:["features","extent.spatialReference"],get:function(){if(!this.features)return null;var e=o.map(this.features,function(e){return e.geometry}),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}},routeId:null,routeName:null,strings:{value:null,readOnly:!0,dependsOn:["features"],get:function(){return o.map(this.features,function(e){return e.strings})}},totalDriveTime:{value:null,json:{read:{source:"summary.totalDriveTime"}}},totalLength:{value:null,json:{read:{source:"summary.totalLength"}}},totalTime:{value:null,json:{read:{source:"summary.totalTime"}}}},_decompressFeatureGeometry:function(e){e.geometry=this._decompressGeometry(e.compressedGeometry)},_decompressGeometry:function(e){var t,r,n,a,o=0,s=0,u=[];n=e.match(/((\+|\-)[^\+\-]+)/g),n||(n=[]),a=parseInt(n[0],32);for(var l=1;l<n.length;l+=2)t=parseInt(n[l],32)+o,o=t,r=parseInt(n[l+1],32)+s,s=r,u.push([t/a,r/a]);return{paths:[u]}},_mergePolylinesToSinglePath:function(e,r){var n=[];o.forEach(e,function(e){o.forEach(e.paths,function(e){n=n.concat(e)})});var a=[],s=[0,0];return o.forEach(n,function(e){(e[0]!==s[0]||e[1]!==s[1])&&(a.push(e),s=e)}),new t({paths:[a]},r)}});return s});