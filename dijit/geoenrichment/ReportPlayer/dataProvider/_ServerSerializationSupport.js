// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/when","esri/graphic","esri/geometry/Polygon","./supportClasses/ReportDataProcessor","./supportClasses/tasks/parsers/DataXMLParser","../core/supportClasses/ReportTemplateTypes","../core/supportClasses/templateJsonUtils/TemplateJsonSerializer","../core/conversion/PortalToEditorConverter"],function(e,r,t,a,n,s,o,i,p){return e(null,{_reportDataFromServerData:function(e){function l(e){var r={metadata:{},areaData:[],errors:[]},t=c.filter(function(e){return"data.xml"===e.name})[0],a=/.*\.png/i,o={};c.forEach(function(e){a.test(e.name)&&(o[e.name]=e.data)});var i={areaData:s.parse(t.data,function(e,r){return o[r]||r})},p={fieldData:r};return n.applyRunReportAndGetDataResults(i,p),r}function u(e){return m._infographicOptionsProvider.getInfographicOptions({geoenrichmentUrl:"",countryID:"",reportID:"",analysisAreas:e})}function f(r){if(e.studyAreas)return e.studyAreas.map(function(e,r){return{name:"Area "+(r+1),feature:new t(e)}});for(var n=[],s=0;s<r;s++)n.push({name:"Area "+(s+1),feature:new t(new a)});return n}var c,m=this;if(Array.isArray(e.files))c=e.files;else{c=[];for(var d in e.files)c.push({name:d,data:e.files[d]})}return r(function(){var e={isGraphicReport:!0,portalJson:{files:c}};return r(p.provideEditorJson(e),function(){return e.templateJson=i.deserialize(e.templateJson),delete e.portalJson,e})}(),function(r){var t=l(r),a=f(t.areaData.length);return{isClassic:!1,reportType:o.STANDARD,reportTitle:"",templateJson:r.templateJson,reportObject:r,fieldData:t,analysisAreas:a,infographicOptions:u(a),attachmentsStore:null,config:e.config||{}}})}})});