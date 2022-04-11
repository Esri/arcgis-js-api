// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../graphic","./DirectionsFeatureSet"],(function(e,t,s,r,o,n,i){var a=e(null,{declaredClass:"esri.tasks.RouteResult",constructor:function(e){var t=e.spatialReference,r=e.route;if(e.directions){var o=[],a=[],c=[];s.forEach(e.directions.features,(function(e,t){a[t]=e.compressedGeometry,o[t]=e.strings,c[t]=e.events})),e.directions.strings=o,e.directions.events=c,this.directions=new i(e.directions,a)}if(this.routeName=e.routeName,r&&(r.geometry&&(r.geometry.spatialReference=t),this.route=new n(r)),e.stops){var u=this.stops=[];s.forEach(e.stops,(function(e,s){e.geometry&&(e.geometry.spatialReference=t),u[e.attributes.Sequence-1]=new n(e)}))}},routeName:null,directions:null,route:null,stops:null});return r("extend-esri")&&t.setObject("tasks.RouteResult",a,o),a}));