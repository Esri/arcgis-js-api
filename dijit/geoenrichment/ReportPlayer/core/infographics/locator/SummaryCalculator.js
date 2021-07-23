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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["../../../dataProvider/supportClasses/data/AreaDataUtil","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer"],(function(e,a){return{calculateSummaryValue:function(r){var i=r.count,t=r.stats,n=r.json,l=r.areaIndex,m=r.viewModel,s=0,u=n.summarizeField,o=t.ranges.filter((function(e){return e.fieldName===u}))[0],d=u?o&&o.sumShown||0:i;if("average"===n.summarizeType)s=i?d/i:0;else if("normalize"===n.summarizeType){var f=0;if("string"==typeof n.summarizeFractionField){var c=t.ranges.filter((function(e){return e.fieldName===n.summarizeFractionField}))[0];f=c&&c.sumShown||0}else f=m.dynamicReportInfo?e.getAreaDataValue({fieldName:n.summarizeFractionField.templateName,fieldData:m.dynamicReportInfo.fieldData,featureIndex:l}):a.renderFieldInfoInTableCell(n.summarizeFractionField,{previewValues:!0}).value||123;s=f?d/f:0}else{if(n.summarizeType)return NaN;s=d}return s*=n.summarizeMultiplier||1}}}));