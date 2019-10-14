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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["../../ChartBuilder","../../../../../charts/utils/ChartTypes"],function(e,s){var l={};return l.avgHouseholdSize={fieldInfo:{isInfographic:!0,infographicJson:{type:"OneVar",variables:["KeyGlobalFacts.AVGHHSZ"]}}},l.householdsWithNoVehicles={states:"n,p",stateSettings:{n:{yAxisTitle:"Number of households"},p:{yAxisTitle:"Percent of households"}},fieldInfo:{isChart:!0,chartJson:e.createChart({type:s.COLUMN,title:"Households with No Vehicles Available (ACS)",points:[{label:"Owner Occupied HHs",fullName:"AtRisk.ACSOVEH0"},{label:"Renter HHs",fullName:"vehiclesavailable.ACSRVEH0"}]})}},l});