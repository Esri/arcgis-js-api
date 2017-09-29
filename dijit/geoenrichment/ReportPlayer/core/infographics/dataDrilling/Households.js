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

define(["./ChartBuilder"],function(l){var o={};return o.avgHouseholdSize={name:"Average Household Size",fieldInfo:{isInfographic:!0,infographicJson:{type:"OneVar",variables:["KeyGlobalFacts.AVGHHSZ"]}}},o.familyHouseholds={name:"Family Households",states:"n,p",fieldInfo:{isChart:!0,chartJson:l.createChart("Bar","Family Households",null,"",[{label:"2-Person",calculator:"n/householdsbysize.FAM2PERS10"},{label:"3-Person",calculator:"n/householdsbysize.FAM3PERS10"},{label:"4-Person",calculator:"n/householdsbysize.FAM4PERS10"},{label:"5-Person",calculator:"n/householdsbysize.FAM5PERS10"},{label:"6-Person",calculator:"n/householdsbysize.FAM6PERS10"},{label:"7+ Person",calculator:"n/householdsbysize.FAM7PERS10"}])}},o.nonfamilyHouseholds={name:"Nonfamily Households",states:"n,p",fieldInfo:{isChart:!0,chartJson:l.createChart("Bar","Nonfamily Households",null,"",[{label:"1-Person",calculator:"n/householdsbysize.NF1PERS10"},{label:"2-Person",calculator:"n/householdsbysize.NF2PERS10"},{label:"3-Person",calculator:"n/householdsbysize.NF3PERS10"},{label:"4-Person",calculator:"n/householdsbysize.NF4PERS10"},{label:"5-Person",calculator:"n/householdsbysize.NF5PERS10"},{label:"6-Person",calculator:"n/householdsbysize.NF6PERS10"},{label:"7+ Person",calculator:"n/householdsbysize.NF7PERS10"}])}},o.familyHouseholdsByAge={name:"Family Households by Age",states:"n,p",fieldInfo:{isChart:!0,chartJson:l.createChart("Bar","Family HHs by Age",null,"",[{label:"15-24",calculator:"n/householdsbyageofhouseholder.FMHHR15C10"},{label:"25-34",calculator:"n/householdsbyageofhouseholder.FMHHR25C10"},{label:"35-44",calculator:"n/householdsbyageofhouseholder.FMHHR35C10"},{label:"45-54",calculator:"n/householdsbyageofhouseholder.FMHHR45C10"},{label:"55-64",calculator:"n/householdsbyageofhouseholder.FMHHR55C10"},{label:"65-74",calculator:"n/householdsbyageofhouseholder.FMHHR65C10"},{label:"75-84",calculator:"n/householdsbyageofhouseholder.FMHHR75C10"},{label:"85+",calculator:"n/householdsbyageofhouseholder.FMHHR85C10"}])}},o.nonfamilyHouseholdsByAge={name:"Nonfamily Households by Age",states:"n,p",fieldInfo:{isChart:!0,chartJson:l.createChart("Bar","Nonfamily HHs by Age",null,"",[{label:"15-24",calculator:"n/householdsbyageofhouseholder.NFHHR15C10"},{label:"25-34",calculator:"n/householdsbyageofhouseholder.NFHHR25C10"},{label:"35-44",calculator:"n/householdsbyageofhouseholder.NFHHR35C10"},{label:"45-54",calculator:"n/householdsbyageofhouseholder.NFHHR45C10"},{label:"55-64",calculator:"n/householdsbyageofhouseholder.NFHHR55C10"},{label:"65-74",calculator:"n/householdsbyageofhouseholder.NFHHR65C10"},{label:"75-84",calculator:"n/householdsbyageofhouseholder.NFHHR75C10"},{label:"85+",calculator:"n/householdsbyageofhouseholder.NFHHR85C10"}])}},o.householdsAtRisk={name:"Households at Risk",states:"n,p",fieldInfo:{isChart:!0,chartJson:l.createChart("Bar","Households at Risk",null,"",[{label:"w/1+ Persons w/Disability",calculator:"n/AtRisk.ACSHHDIS"},{label:"w/Food Stamps/SNAP",calculator:"n/AtRisk.ACSSNAP"},{label:"Below Poverty Level",calculator:"n/AtRisk.ACSHHBPOV"},{label:"With No Vehicles",calculator:"n/AtRisk.ACSOVEH0"}],{sorting:"Descending"})}},o.householdsWithRentPercentageOfIncome={name:"Households with Rent % of Income",states:"n,p",fieldInfo:{isChart:!0,chartJson:l.createChart("Bar","HHs with Rent % of Income",null,"",[{label:"Not Computed",calculator:"n/households.ACSGRNTINO"},{label:"<10%",calculator:"n/households.ACSGRNTI0"},{label:"10-14.9%",calculator:"n/households.ACSGRNTI10"},{label:"15-19.9%",calculator:"n/households.ACSGRNTI15"},{label:"20-24.9%",calculator:"n/households.ACSGRNTI20"},{label:"25-29.9%",calculator:"n/households.ACSGRNTI25"},{label:"30-34.9%",calculator:"n/households.ACSGRNTI30"},{label:"35-39.9%",calculator:"n/households.ACSGRNTI35"},{label:"40-49.9%",calculator:"n/households.ACSGRNTI40"},{label:"50+%",calculator:"n/households.ACSGRNTI50"}])}},o});