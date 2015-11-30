// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["../../declare","dojo/_base/lang","dojo/_base/array","dojo/string","../../lang","../../geometry/jsonUtils","./LocationProviderRemoteBase"],function(e,r,t,a,o,n,s){var u=100;return e("esri.tasks.locationproviders.StandardGeographyQueryLocationProvider",s,{standardGeographyQueryTask:null,queryParameters:null,geographyQueryTemplate:null,geometryType:"esriGeometryPolygon",constructor:function(){this.queryParameters||(this.queryParameters={}),this.queryParameters.returnCentroids&&(this.geometryType="esriGeometryPoint")},_batchWillOverflow:function(e){return e.length+1>u},_locateBatch:function(e){var a=r.mixin({},this.queryParameters,{geographyQueries:t.map(e,function(e,r){var t=e.expression;return t.OBJECTID=r,t})});return o.isDefined(a.generalizationLevel)||(a.generalizationLevel=6),a.returnGeometry=this.queryParameters.returnGeometry===!1?!1:!0,this.standardGeographyQueryTask.execute(a).then(function(r){for(var t=[],a=0;a<r.featureSet.features.length;a++){var o=r.featureSet.features[a];if(o)for(var s=0;s<e.length;s++){var u=e[s];if(u.expression.OBJECTID==o.attributes.ResultID){for(var i=0;i<u.features.length;i++){var y=u.features[i];o.geometry&&(y.geometry=n.fromJson(o.geometry),t.push(y))}break}}}return t})},_createKey:function(e){return a.substitute(this.geographyQueryTemplate,e.attributes)},_createQueryExpression:function(e){var r=a.substitute(this.geographyQueryTemplate,e.attributes);return{QUERY:r}}})});