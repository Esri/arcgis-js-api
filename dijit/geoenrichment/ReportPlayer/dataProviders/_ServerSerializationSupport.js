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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/when","esri/graphic","esri/geometry/Polygon","./supportClasses/ReportDataProcessor","./supportClasses/tasks/parsers/DataXMLParser","../core/supportClasses/ReportTemplateTypes","../core/supportClasses/templateJsonUtils/TemplateJsonSerializer","../core/conversion/PortalToEditorConverter"],function(e,r,t,a,n,o,s,i,p){return e(null,{_reportDataFromServerData:function(e){function l(){var e={isGraphicReport:!0,portalJson:{files:d}};return r(p.provideEditorJson(e),function(){return e.templateJson=i.deserialize(e.templateJson),delete e.portalJson,e})}function u(e){var r={metadata:{},areaData:[],errors:[]},t=d.filter(function(e){return"data.xml"===e.name})[0],a=/.*\.png/i,s={};d.forEach(function(e){a.test(e.name)&&(s[e.name]=e.data)});var i={areaData:o.parse(t.data,function(e,r){return s[r]||r})},p={fieldData:r};return n.applyRunReportAndGetDataResults(i,p),r}function c(e){return m._infographicOptionsProvider.getInfographicOptions({geoenrichmentUrl:"",countryID:"",reportID:"",analysisAreas:e})}function f(e){for(var r=[],n=0;e>n;n++)r.push({name:"",feature:new t(new a)});return r}var d,m=this;if(Array.isArray(e.files))d=e.files;else{d=[];for(var D in e.files)d.push({name:D,data:e.files[D]})}return r(l(),function(r){var t=u(r),a=f(t.areaData.length);return{isClassic:!1,reportType:s.STANDARD,reportTitle:"",templateJson:r.templateJson,reportObject:r,fieldData:t,analysisAreas:a,infographicOptions:c(a),attachmentsStore:null,config:e.config||{}}})}})});