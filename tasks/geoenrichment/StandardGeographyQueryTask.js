// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["../../declare","../../urlUtils","dojo/_base/array","dojo/_base/lang","./taskHelper","../FeatureSet","./GeographyQueryBase","./GeographyQuery","./BatchGeographyQuery","./SubGeographyQuery"],(function(e,r,t,o,n,s,a,u,c,i){return e("esri.tasks.geoenrichment.StandardGeographyQueryTask",null,{constructor:function(e){this.url=e||r.getProtocolForWebResource()+"//geoenrich.arcgis.com/arcgis/rest/services/World/GeoenrichmentServer"},execute:function(e){e instanceof a||(e=e.returnSubGeographyLayer?new i(e):e.geographyQueries||o.isArray(e.where)?new c(e):new u(e));var r=e instanceof c;return n.invokeMethod(this,r?"/StandardGeographiesBatchQuery/execute":"/StandardGeographyQuery/execute",(function(){return n.jsonToRest(e.toJson())}),(function(e){return(!e.results||e.results.length<1||!e.results[0].value)&&n.throwEmptyResponse(),{featureSet:new s(e.results[0].value),messages:e.messages}}),"onExecuteComplete","onError")},onExecuteComplete:function(e){},onError:function(e){}})}));