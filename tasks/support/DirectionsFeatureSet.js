// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../geometry/Extent","../../geometry/Polyline","./FeatureSet","dojo/_base/array"],function(e,t,r,n){var a=r.createSubclass({declaredClass:"esri.tasks.support.DirectionsFeatureSet",classMetadata:{properties:{mergedGeometry:{dependsOn:["features","extent.spatialReference"]},strings:{dependsOn:["features"]}},reader:{add:["extent","totalDriveTime","totalLength","totalTime"],exclude:["envelope","summary"]}},geometryType:"esriGeometryPolyline",extent:null,_extentReader:function(t,r){return e.fromJSON(r.summary.envelope)},_featuresReader:function(e,t){return e.forEach(this._decompressFeatureGeometry,this),this.inherited(arguments)},mergedGeometry:null,_mergedGeometryGetter:function(){if(!this.features)return null;var e=n.map(this.features,function(e){return e.geometry}),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)},routeId:null,routeName:null,strings:null,_stringsGetter:function(){return n.map(this.features,function(e){return e.strings})},totalDriveTime:null,_totalDriveTimeReader:function(e,t){return t.summary.totalDriveTime},totalLength:null,_totalLengthReader:function(e,t){return t.summary.totalLength},totalTime:null,_totalTimeReader:function(e,t){return t.summary.totalTime},_decompressFeatureGeometry:function(e){e.geometry=this._decompressGeometry(e.compressedGeometry),delete e.compressedGeometry},_decompressGeometry:function(e){var t,r,n,a,o=0,s=0,u=[];n=e.match(/((\+|\-)[^\+\-]+)/g),n||(n=[]),a=parseInt(n[0],32);for(var i=1;i<n.length;i+=2)t=parseInt(n[i],32)+o,o=t,r=parseInt(n[i+1],32)+s,s=r,u.push([t/a,r/a]);return{paths:[u]}},_mergePolylinesToSinglePath:function(e,r){var a=[];n.forEach(e,function(e){n.forEach(e.paths,function(e){a=a.concat(e)})});var o=[],s=[0,0];return n.forEach(a,function(e){(e[0]!==s[0]||e[1]!==s[1])&&(o.push(e),s=e)}),new t({paths:[o]},r)}});return a});