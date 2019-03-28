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

define(["esri/dijit/geoenrichment/Deferred","require"],function(e,r){var i,n={},t={};return n.initialize=function(){return i?i.promise:(i=new e,r(["./DocumentParser","./ChartConverterPtoE","./InfographicConverterPtoE","./SectionParser","./FieldParser","../../../supportClasses/templateJsonUtils/fieldInfo/utils"],function(e,r,n,o,s,a){t.document=e,t.chart=r,t.infographic=n,t.section=o,t.field=s,a.init().then(i.resolve)}),i.promise)},n.getParser=function(e){return t[e]},n});