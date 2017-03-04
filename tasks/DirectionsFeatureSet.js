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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/json","../kernel","../geometry/Extent","../geometry/Polyline","../geometry/Point","../graphic","./FeatureSet"],function(e,t,r,n,s,o,a,i,h,c,f){var p=e(f,{declaredClass:"esri.tasks.DirectionsFeatureSet",constructor:function(e,n){this.routeId=e.routeId,this.routeName=e.routeName,t.mixin(this,e.summary),this.extent=new a(this.envelope);var o=this._fromCompressedGeometry,i=this.features,f=this.extent.spatialReference,p=[];r.forEach(n,function(e,t){i[t].setGeometry(p[t]=e?o(e,f):i[t].geometry)}),this.mergedGeometry=this._mergePolylinesToSinglePath(p,f),this.geometryType="esriGeometryPolyline",r.forEach(e.events,function(t,n){r.forEach(t,function(e,r){t[r]=new c(new h(e.point.x,e.point.y,f),null,{ETA:e.ETA,strings:s.stringify(e.strings),arriveTimeUTC:e.arriveTimeUTC})}),e.events[n]=t}),delete this.envelope},_fromCompressedGeometry:function(e,t){var n,s,o,a,h,c,f,p,u=0,l=0,m=0,y=0,d=[],g=0,v=0,I=0;if(h=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),h||(h=[]),0===parseInt(h[g],32)){g=2;var E=parseInt(h[g],32);g++,c=parseInt(h[g],32),g++,1&E&&(v=r.indexOf(h,"|")+1,f=parseInt(h[v],32),v++),2&E&&(I=r.indexOf(h,"|",v)+1,p=parseInt(h[I],32),I++)}else c=parseInt(h[g],32),g++;for(;g<h.length&&"|"!==h[g];){n=parseInt(h[g],32)+u,g++,u=n,s=parseInt(h[g],32)+l,g++,l=s;var T=[n/c,s/c];v&&(a=parseInt(h[v],32)+m,v++,m=a,T.push(a/f)),I&&(o=parseInt(h[I],32)+y,I++,y=o,T.push(o/p)),d.push(T)}var x=new i({paths:[d],hasZ:v>0,hasM:I>0});return x.setSpatialReference(t),x},_mergePolylinesToSinglePath:function(e,t){var n=[];r.forEach(e,function(e){r.forEach(e.paths,function(e){n=n.concat(e)})});var s=[],o=[0,0];return r.forEach(n,function(e){(e[0]!==o[0]||e[1]!==o[1])&&(s.push(e),o=e)}),new i({paths:[s]}).setSpatialReference(t)}});return n("extend-esri")&&t.setObject("tasks.DirectionsFeatureSet",p,o),p});