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

define(["../../declare","dojo/_base/array","dojo/_base/lang","./taskHelper","../FeatureSet","./GeographyQueryBase","./GeographyQuery","./BatchGeographyQuery","./SubGeographyQuery"],function(e,r,t,o,n,a,s,u,c){return e("esri.tasks.geoenrichment.StandardGeographyQueryTask",null,{constructor:function(e){this.url=e||location.protocol+"//geoenrich.arcgis.com/arcgis/rest/services/World/GeoenrichmentServer"},execute:function(e){e instanceof a||(e=e.returnSubGeographyLayer?new c(e):e.geographyQueries||t.isArray(e.where)?new u(e):new s(e));var r=e instanceof u;return o.invokeMethod(this,r?"/StandardGeographiesBatchQuery/execute":"/StandardGeographyQuery/execute",function(){return o.jsonToRest(e.toJson())},function(e){return(!e.results||e.results.length<1||!e.results[0].value)&&o.throwEmptyResponse(),{featureSet:new n(e.results[0].value),messages:e.messages}},"onExecuteComplete","onError")},onExecuteComplete:function(){},onError:function(){}})});