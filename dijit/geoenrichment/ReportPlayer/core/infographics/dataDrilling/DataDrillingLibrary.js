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

define(["dojo/_base/lang","./ChartBuilder","./Population","./Households","./Income","./NetWorth","./HomeValue","./Spending","./Electronics","./Pets","./Businesses","./Employees","./Education","./Mortgage","../../supportClasses/TableUtil","../../supportClasses/templateJsonUtils/FieldInfoNameUtil"],function(e,a,t,n,o,l,s,i,r,c,u,f,d,h,p,m){var g={},C={TOTPOP_CY:[t.annualGrowth],MEDAGE_CY:[t.agePyramid],MEDHINC_CY:[o.householdsByIncome],AVGHHSZ_CY:[n.avgHouseholdSize]},I=({"TOTPOP_CY,MEDAGE_CY":[t.agePyramid,t.gender,t.medianAgeMaleVsFemale,t.annualGrowth],"AVGHHSZ_CY,TOTHH_CY":[n.avgHouseholdSize,n.familyHouseholds,n.nonfamilyHouseholds,n.familyHouseholdsByAge,n.nonfamilyHouseholdsByAge,t.annualGrowth],MEDHINC_CY:[o.householdsByIncome,o.avgHouseholdIncomeByAge,o.annualGrowth],MEDDI_CY:[o.disposableIncome],PCI_CY:[o.disposableIncome,o.avgHouseholdIncomeByAge,o.annualGrowth],MEDNW_CY:[l.netWorth],MEDVAL_CY:[s.homeValue],X5001_A:[i.apparelMenVsWomen,i.apparelMen,i.apparelWomen],X1130_A:[i.eatingOut],X8001_A:[i.healthCare,i.medicalServices],X7001_A:[i.travel,i.entertainmentOnTrips],MP19013A_B:[r.ownComputer],MP19014A_B:[r.ownCellPhone],MP26004H_B:[c.ownDog],MP26003h_B:[c.ownCat],S01_BUS:[u.businessesByType],S01_EMP:[f.civilianPopulation16Plus],UNEMPRT_CY:[n.householdsAtRisk,d.educationalAttainment],ACSMEDCRNT:[n.householdsWithRentPercentageOfIncome],X3004_A:[h.dwellingMortgage,h.vacationHomesMortgage]},{n:"#",p:"%",a:"Avg",i:"Index"});return Object.keys(C).forEach(function(e){-1!==e.indexOf(",")&&(e.split(",").forEach(function(a){var t=C[e];t.forEach(function(e){e.fieldInfo.infographicJson&&(e.fieldInfo.infographicJson.style=e.fieldInfo.infographicJson.style||{})}),C[a]=t}),delete C[e])}),g.hasDrillingOptions=function(e){return!!g.getDrillingOptions(e)},g.getDrillingOptions=function(e){if(!e.variableID)return null;var a=e.variableID.toUpperCase();for(var t in C){var n=m.createFieldNameFromVariable(t);if(-1!==a.indexOf(t.toUpperCase())||-1!==a.indexOf(n.toUpperCase()))return C[t]}return null},g.getDrillingOptionInfo=function(a,t,n,o,l){l=l&&l.charAt(0)||"n";var s=g.getDrillingOptions(a).filter(function(e){return e.name==t})[0];s.stateData||(s.stateData={n:{fieldInfo:s.fieldInfo,tableJson:null}},s.fieldInfo.isChart&&s.fieldInfo.chartJson.seriesItems.forEach(function(e){e.points.forEach(function(e){var a=e.calculator.substr(e.calculator.indexOf("/")+1);e.fieldName=m.createFieldNameFromVariable(a,e.calculator.charAt(0))})}),s.states&&(s.states=s.states.split(",").map(function(e){return e+"/"}),s.states.forEach(function(a){var t=a.charAt(0);if("n"!=t){var n=e.clone(s.fieldInfo);if(s.stateData[t]={fieldInfo:n,tableJson:null},n.isChart){n.chartJson.visualProperties.title.text+=" ("+I[t]+")",n.chartJson.seriesItems.forEach(function(e){e.points.forEach(function(e){var a=e.calculator.substr(e.calculator.indexOf("/")+1);e.fieldName=m.createFieldNameFromVariable(a,t),e.calculator=e.calculator.replace("n/",t+"/")})});n.chartJson.visualProperties.dataLabelsDecimals;("p"==t||"a"==t)&&(n.chartJson.visualProperties.dataLabelsDecimals=2),"i"==t&&(n.chartJson.visualProperties.dataLabelsDecimals=0)}}}),s.calcGroup={states:{ids:s.states,names:s.states.slice(),labels:s.states.map(function(e){return I[e.charAt(0)]})},value:s.states[0]},delete s.states),delete s.fieldInfo);var i=s.stateData[l];i.tableJson||(i.tableJson=p.createSingleCellTable({fieldInfo:i.fieldInfo,width:n,height:o}));var r=e.clone(i.tableJson),c=[];for(var u in s.stateData){var f=s.stateData[u];f.fieldInfo.isChart&&f.fieldInfo.chartJson.seriesItems.forEach(function(e){e.points.forEach(function(e){c.push({fieldName:e.fieldName,mapTo:e.calculator.substr(e.calculator.indexOf("/")+1)+("n"==u?"":"_"+u.toUpperCase())})})})}var d;return s.calcGroup&&(d=e.clone(s.calcGroup),d.value=l+"/"),{tableJson:r,fieldsToEnrich:c,calculationStatesGroup:d}},g});