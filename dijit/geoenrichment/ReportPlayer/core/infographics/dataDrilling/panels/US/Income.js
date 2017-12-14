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

define(["../../ChartBuilder"],function(l){var e={};return e.householdsByIncome={name:"Househols by Income",fieldInfo:{isInfographic:!0,infographicJson:{type:"RelatedVariables",variables:["HouseholdsByIncome.*"]}}},e.disposableIncome={states:"n,p",fieldInfo:{isChart:!0,chartJson:l.createChart({title:"Disposable Income",points:[{label:"0-14999",fullName:"Wealth.DI0_CY"},{label:"15000-24999",fullName:"Wealth.DI15_CY"},{label:"25000-34999",fullName:"Wealth.DI25_CY"},{label:"35000-49999",fullName:"Wealth.DI35_CY"},{label:"50000-74999",fullName:"Wealth.DI50_CY"},{label:"75000-99999",fullName:"Wealth.DI75_CY"},{label:"100000-149999",fullName:"Wealth.DI100_CY"},{label:"150000-199999",fullName:"Wealth.DI150_CY"},{label:"200000+",fullName:"Wealth.DI200_CY"}]})}},e});