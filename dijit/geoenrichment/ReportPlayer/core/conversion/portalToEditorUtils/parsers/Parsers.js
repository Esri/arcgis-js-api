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

define(["esri/dijit/geoenrichment/Deferred","require"],(function(e,r){var i,t={},n={};return t.initialize=function(){return i?i.promise:(i=new e,r(["./DocumentParser","./ChartConverterPtoE","./InfographicConverterPtoE","./SectionParser","./FieldParser","./FilterParser","./SortingParser","../../../supportClasses/templateJsonUtils/fieldInfo/utils"],(function(e,r,t,o,s,a,c,f){n.document=e,n.chart=r,n.infographic=t,n.section=o,n.field=s,n.filter=a,n.sorting=c,f.init().then(i.resolve)})),i.promise)},t.getParser=function(e){return n[e]},t}));