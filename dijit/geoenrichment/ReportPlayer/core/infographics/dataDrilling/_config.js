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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["./panels/US/Population","./panels/US/Households","./panels/US/Income","./panels/US/NetWorth","./panels/US/HomeValue","./panels/US/Spending","./panels/US/Electronics","./panels/US/Pets","./panels/US/Businesses","./panels/US/Employees","./panels/US/Education","./panels/US/Mortgage","./panels/US/Housing","./panels/US/JourneyToWork","./panels/US/Health","./panels/US/Tapestry","./panels/US/AtRisk","dojo/i18n!../../../../../../nls/jsapi"],function(e,a,t,n,s,o,i,l,r,S,A,C,p,_,I,h,u,P){P=P.geoenrichment.dijit.ReportPlayer.VariableStates;var c={US:{"TOTPOP_CY, POPGRW10CY":[e.annualGrowth],MEDAGE_CY:[e.agePyramid],ACSOTNOA65:[e.pop65PlusNoEnglish],DPOP_CY:[e.daytimePopulation],"ACSCIVNINS, ACS0ONEHI, ACS18ONEHI, ACS35ONEHI, ACS65ONEHI, ACSCIVNI0, ACSCIVNI18, ACSCIVNI35, ACSCIVNI65, ACS0NOHI, ACS18NOHI, ACS35NOHI, ACS65NOHI":[e.populationACS],MEDHINC_CY:[t.householdsByIncome],"PCI_CY, MEDDI_CY":[t.disposableIncome],"AVGHHSZ_CY, TOTHH_CY":[a.avgHouseholdSize],ACSOVEH0:[a.householdsWithNoVehicles],EDUCBASECY:[A.educationalAttainment],S01_BUS:[r.businessSummaryBySIC],"S01_EMP, UNEMPRT_CY":[S.civilianPopulation16Plus],EMP_CY:[S.laborForceByOccupation],MEDNW_CY:[n.netWorth],MEDVAL_CY:[s.homeValue],X5001_A:[o.apparelMenVsWomen],X8001_A:[o.healthCare],X1130_A:[o.eatingOut],"X4100_A, MP19013a_B":[o.purchasedMostRecentComputers],X1003_A:[o.avgSpentOnFoodAtStores],X7001_A:[o.travel],X9008_A:[o.interestInSports],X9073_A:[o.purchasedMusic],X9045_A:[o.timeOnline],X9074_A:[o.movieGenre],X8002_X:[o.annualHealthExpenditures],X8018_X:[o.medicalServices],"ACS65MEDCR, ACS65HI2PM, ACS65HI2EM, ACS65HI2MM":[o.medicarePopulation65Plus],X3004_X:[C.dwellingMortgage],"X3036_X, X3004_A, ACSMEDCRNT":[p.renterExpenses],"ACSWORKERS, ACSDRALONE, ACSPUBTRAN, ACSCARPOOL, ACSWALKED, ACSBICYCLE":[_.jorneyToWork],"MP14001a_B, MP14002a_B":[I.exercise],MP19014a_B:[i.cellPhonePlan],MP26004h_B:[l.dogProducts],MP26003h_B:[l.catProducts],MP26001h_B:[l.hhOnwsAnyPet],TSEGNAME:[h.tapestry],ACSHHDIS:[u.householdsWithDisability]}},E={n:P.stateNumber_short,p:P.statePercent_short,a:P.stateAverage_short,i:P.stateIndex_short,r:P.stateReliability_short},d={p:P.statePercent,a:P.stateAverage,i:P.stateIndex,r:P.stateReliability};for(var O in c){var M=c[O];Object.keys(M).forEach(function(e){-1!==e.indexOf(",")&&(e.split(",").forEach(function(a){a=a.trim();var t=M[e];t.forEach(function(e){e.fieldInfo.infographicJson&&(e.fieldInfo.infographicJson.style=e.fieldInfo.infographicJson.style||{}),!e.name&&e.fieldInfo.isChart&&(e.name=e.fieldInfo.chartJson.visualProperties.title.text)}),M[a]=t}),delete M[e])})}return{LIBRARY:c,STATE_LOCALIZATION_MAP:d,STATE_LOCALIZATION_MAP_SHORT:E}});