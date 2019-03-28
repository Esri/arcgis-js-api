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

define(["../../ChartBuilder"],function(e){var a={};return a.agePyramid={name:"Age Pyramid",fieldInfo:{isInfographic:!0,infographicJson:{type:"AgePyramid",variables:["Age.*"]}}},a.annualGrowth={states:"n,i",stateSettings:{n:{visualProps:{dataLabelsDecimals:2,dataLabelsShowValuePercentSymbol:!0}}},fieldInfo:{isChart:!0,chartJson:e.createChart({title:"Annual Growth Rate",seriesItems:[{label:"${keyusfacts.totpop10:vintage}-${keyusfacts.totpop_cy:vintage}",points:[{label:"Population",fullName:"KeyUSFacts.POPGRW10CY"},{label:"Households",fullName:"KeyUSFacts.HHGRW10CY"},{label:"Families",fullName:"KeyUSFacts.FAMGRW10CY"}]},{label:"${keyusfacts.totpop_cy:vintage}-${keyusfacts.totpop_fy:vintage}",points:[{label:"Population",fullName:"KeyUSFacts.POPGRWCYFY"},{label:"Households",fullName:"KeyUSFacts.HHGRWCYFY"},{label:"Families",fullName:"KeyUSFacts.FAMGRWCYFY"}]}]})}},a.pop65PlusNoEnglish={states:"n,p",defaultState:"p",fieldInfo:{isChart:!0,chartJson:e.createChart({title:"Pop 65+ Language Spoken at Home - No English (ACS)",points:[{label:"Spanish",fullName:"AtRisk.ACSSPNOA65"},{label:"Indo-European",fullName:"AtRisk.ACSIENOA65"},{label:"Asian-Pacific Islander",fullName:"AtRisk.ACSAPNOA65"},{label:"Other Language",fullName:"AtRisk.ACSOTNOA65"}],visualProps:{sorting:"Descending"}})}},a.daytimePopulation={states:"n,p",defaultState:"p",fieldInfo:{isChart:!0,chartJson:e.createDonutChart({title:"Daytime Population",points:[{label:"Workers",fullName:"DaytimePopulation.DPOPWRK_CY"},{label:"Residents",fullName:"DaytimePopulation.DPOPRES_CY"}]})}},a.populationACS={states:"n,p",defaultState:"p",fieldInfo:{isChart:!0,chartJson:e.createDonutChart({title:"Population (ACS)",points:[{label:"0-17",fullName:"Health.ACSCIVNI0"},{label:"18-34",fullName:"Health.ACSCIVNI18"},{label:"35-64",fullName:"Health.ACSCIVNI35"},{label:"65+",fullName:"Health.ACSCIVNI65"}]})}},a.generationComparison={states:"n,p",defaultState:"p",fieldInfo:{isChart:!0,chartJson:e.createChart({title:"Generation Comparison",seriesItems:[{label:"${generations.genalphacy:vintage}",points:[{label:"Alpha (Born 2017 or Later)",fullName:"Generations.GENALPHACY"},{label:"Z (Born 1999 to 2016)",fullName:"Generations.GENZ_CY"},{label:"Millennial (Born 1981 to 1998)",fullName:"Generations.MILLENN_CY"},{label:"X (Born 1965 to 1980)",fullName:"Generations.GENX_CY"},{label:"Baby Boomer (Born 1946 to 1964)",fullName:"Generations.BABYBOOMCY"},{label:"Silent & Greatest (Born 1945/Earlier)",fullName:"Generations.OLDRGENSCY"}]},{label:"${generations.genalphafy:vintage}",points:[{label:"Alpha (Born 2017 or Later)",fullName:"Generations.GENALPHAFY"},{label:"Z (Born 1999 to 2016)",fullName:"Generations.GENZ_FY"},{label:"Millennial (Born 1981 to 1998)",fullName:"Generations.MILLENN_FY"},{label:"X (Born 1965 to 1980)",fullName:"Generations.GENX_FY"},{label:"Baby Boomer (Born 1946 to 1964)",fullName:"Generations.BABYBOOMFY"},{label:"Silent & Greatest (Born 1945/Earlier)",fullName:"Generations.OLDRGENSFY"}]}]})}},a});