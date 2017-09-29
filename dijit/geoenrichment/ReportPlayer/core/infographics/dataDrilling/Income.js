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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["./ChartBuilder"],function(a){var l={};return l.householdsByIncome={name:"Househols by Income",fieldInfo:{isInfographic:!0,infographicJson:{type:"RelatedVariables",variables:["HouseholdsByIncome.*"]}}},l.disposableIncome={name:"Disposable Income",states:"n,p",fieldInfo:{isChart:!0,chartJson:a.createChart("Bar","Disposable Income",null,"",[{label:"0-14999",calculator:"n/Wealth.DI0_CY"},{label:"15000-24999",calculator:"n/Wealth.DI15_CY"},{label:"25000-34999",calculator:"n/Wealth.DI25_CY"},{label:"35000-49999",calculator:"n/Wealth.DI35_CY"},{label:"50000-74999",calculator:"n/Wealth.DI50_CY"},{label:"75000-99999",calculator:"n/Wealth.DI75_CY"},{label:"100000-149999",calculator:"n/Wealth.DI100_CY"},{label:"150000-199999",calculator:"n/Wealth.DI150_CY"},{label:"200000+",calculator:"n/Wealth.DI200_CY"}])}},l.annualGrowth={name:"Income Annual Growth Rate (2016-2021)",states:"n,i",fieldInfo:{isChart:!0,chartJson:a.createChart("Bar","Annual Growth Rate",null,"",[{label:"Median HH Income",calculator:"n/KeyUSFacts.MHIGRWCYFY"},{label:"Per Capita Income",calculator:"n/KeyUSFacts.PCIGRWCYFY"}],{dataLabelsDecimals:3})}},l.avgHouseholdIncomeByAge={name:"Average Household Income by Age",states:"n,i",fieldInfo:{isChart:!0,chartJson:a.createChart("Bar","Avg HH Income by Age",null,"",[{label:"15-24",calculator:"n/Wealth.AVGIA15_CY"},{label:"25-34",calculator:"n/Wealth.AVGIA25_CY"},{label:"35-44",calculator:"n/Wealth.AVGIA35_CY"},{label:"45-54",calculator:"n/Wealth.AVGIA45_CY"},{label:"55-64",calculator:"n/Wealth.AVGIA55_CY"},{label:"65-74",calculator:"n/Wealth.AVGIA65_CY"},{label:"75+",calculator:"n/Wealth.AVGIA75_CY"}])}},l});