// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["../../geometry/Extent","../../geometry/Point","../../geometry/Polyline","../../geometry/SpatialReference","./FeatureSet","../../Graphic"],function(e,t,r,n,a,s){return a.createSubclass({declaredClass:"esri.tasks.support.DirectionsFeatureSet",properties:{geometryType:"esriGeometryPolyline",extent:{type:e,json:{read:{source:"summary.envelope"}}},features:{value:null,json:{read:function(e,r){(e||[]).forEach(function(e){this._decompressFeatureGeometry(e,r.summary.envelope.spatialReference)},this);var a=n.fromJSON(r.spatialReference);return e.map(function(e){var r=s.fromJSON(e),n=e.geometry&&e.geometry.spatialReference;return r.geometry&&!n&&(r.geometry.spatialReference=a),r.strings=e.strings,r.events=(e.events||[]).map(function(r){var n=new s({geometry:new t({x:r.point.x,y:r.point.y,z:r.point.z,hasZ:void 0!==r.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:r.ETA,arriveTimeUTC:r.arriveTimeUTC}});return n.strings=r.strings,n}),r})}}},mergedGeometry:{value:null,readOnly:!0,dependsOn:["features","extent.spatialReference"],get:function(){if(!this.features)return null;var e=this.features.map(function(e){return e.geometry}),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}},routeId:null,routeName:null,strings:{value:null,readOnly:!0,dependsOn:["features"],get:function(){return this.features.map(function(e){return e.strings})}},totalDriveTime:{value:null,json:{read:{source:"summary.totalDriveTime"}}},totalLength:{value:null,json:{read:{source:"summary.totalLength"}}},totalTime:{value:null,json:{read:{source:"summary.totalTime"}}}},_decompressFeatureGeometry:function(e,t){e.geometry=this._decompressGeometry(e.compressedGeometry,t)},_decompressGeometry:function(e,t){var r,n,a,s,o,i,u,l,m=0,p=0,c=0,f=0,y=[],g=0,h=0,d=0;if(o=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),o||(o=[]),0===parseInt(o[g],32)){g=2;var v=parseInt(o[g],32);g++,i=parseInt(o[g],32),g++,1&v&&(h=o.indexOf("|")+1,u=parseInt(o[h],32),h++),2&v&&(d=o.indexOf("|",h)+1,l=parseInt(o[d],32),d++)}else i=parseInt(o[g],32),g++;for(;g<o.length&&"|"!==o[g];){r=parseInt(o[g],32)+m,g++,m=r,n=parseInt(o[g],32)+p,g++,p=n;var T=[r/i,n/i];h&&(s=parseInt(o[h],32)+c,h++,c=s,T.push(s/u)),d&&(a=parseInt(o[d],32)+f,d++,f=a,T.push(a/l)),y.push(T)}return{paths:[y],hasZ:h>0,hasM:d>0,spatialReference:t}},_mergePolylinesToSinglePath:function(e,t){var n=[];(e||[]).forEach(function(e){e.paths.forEach(function(e){n=n.concat(e)})});var a=[],s=[0,0];return n.forEach(function(e){e[0]===s[0]&&e[1]===s[1]||(a.push(e),s=e)}),new r({paths:[a]},t)}})});