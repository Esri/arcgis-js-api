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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/when","esri/graphic","esri/geometry/Polygon","./supportClasses/ReportDataProcessor","./supportClasses/tasks/parsers/DataXMLParser","../core/supportClasses/ReportTemplateTypes","../core/supportClasses/templateJsonUtils/TemplateJsonSerializer","../core/conversion/PortalToEditorConverter"],function(e,r,t,a,n,o,s,i,p){return e(null,{_reportDataFromServerData:function(e){function l(e){var r={metadata:{},areaData:[],errors:[]},t=c.filter(function(e){return"data.xml"===e.name})[0],a=/.*\.png/i,s={};c.forEach(function(e){a.test(e.name)&&(s[e.name]=e.data)});var i={areaData:o.parse(t.data,function(e,r){return s[r]||r})},p={fieldData:r};return n.applyRunReportAndGetDataResults(i,p),r}function u(e){return d._infographicOptionsProvider.getInfographicOptions({geoenrichmentUrl:"",countryID:"",reportID:"",analysisAreas:e})}function f(r){if(e.studyAreas)return e.studyAreas.map(function(e,r){return{name:"Area "+(r+1),feature:new t(e)}});for(var n=[],o=0;o<r;o++)n.push({name:"Area "+(o+1),feature:new t(new a)});return n}var c,d=this;if(Array.isArray(e.files))c=e.files;else{c=[];for(var m in e.files)c.push({name:m,data:e.files[m]})}return r(function(){var e={isGraphicReport:!0,portalJson:{files:c}};return r(p.provideEditorJson(e),function(){return e.templateJson=i.deserialize(e.templateJson),delete e.portalJson,e})}(),function(r){var t=l(r),a=f(t.areaData.length);return{isClassic:!1,reportType:s.STANDARD,reportTitle:"",templateJson:r.templateJson,reportObject:r,fieldData:t,analysisAreas:a,infographicOptions:u(a),attachmentsStore:null,config:e.config||{}}})}})});