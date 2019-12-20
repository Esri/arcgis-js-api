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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["../../ChartBuilder"],function(e){var a={};return a.householdsByIncome={name:"Househols by Income",fieldInfo:{isInfographic:!0,infographicJson:{type:"RelatedVariables",variables:["HouseholdsByIncome.*"]}}},a.disposableIncome={states:"n,p",defaultState:"p",stateSettings:{n:{yAxisTitle:"Number of households"},p:{yAxisTitle:"Percent of households"}},fieldInfo:{isChart:!0,chartJson:e.createChart({title:"Disposable Income",points:[{label:"$0-14999",fullName:"Wealth.DI0_CY"},{label:"$15000-24999",fullName:"Wealth.DI15_CY"},{label:"$25000-34999",fullName:"Wealth.DI25_CY"},{label:"$35000-49999",fullName:"Wealth.DI35_CY"},{label:"$50000-74999",fullName:"Wealth.DI50_CY"},{label:"$75000-99999",fullName:"Wealth.DI75_CY"},{label:"$100000-149999",fullName:"Wealth.DI100_CY"},{label:"$150000-199999",fullName:"Wealth.DI150_CY"},{label:"$200000+",fullName:"Wealth.DI200_CY"}]})}},a.perCapitaIncome={states:"n,i",stateSettings:{n:{isCurrency:!0}},fieldInfo:{isChart:!0,chartJson:e.createChart({title:"Per Capita Income",points:[{label:"${keyusfacts.pci_cy:vintage}",fullName:"KeyUSFacts.PCI_CY"},{label:"${keyusfacts.pci_fy:vintage}",fullName:"KeyUSFacts.PCI_FY"}]})}},a.annualGrowth={states:"n,i",stateSettings:{n:{visualProps:{dataLabelsDecimals:2,dataLabelsShowValuePercentSymbol:!0}}},fieldInfo:{isChart:!0,chartJson:e.createChart({title:"Annual Growth Rate (${keyusfacts.totpop_cy:vintage}-${keyusfacts.totpop_fy:vintage})",points:[{label:"Median HH Income",fullName:"KeyUSFacts.MHIGRWCYFY"},{label:"Per Capita Income",fullName:"KeyUSFacts.PCIGRWCYFY"}]})}},a});