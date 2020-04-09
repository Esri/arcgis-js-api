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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["../../ChartBuilder"],(function(a){var e={};return e.educationalAttainment={states:"n,p",defaultState:"p",stateSettings:{n:{yAxisTitle:"Number of adults 25+"},p:{yAxisTitle:"Percent of adults 25+"}},fieldInfo:{isChart:!0,chartJson:a.createChart({title:"Educational Attainment",points:[{label:"< 9th Grade",fullName:"educationalattainment.NOHS_CY"},{label:"High School/No Diploma",fullName:"educationalattainment.SOMEHS_CY"},{label:"High School Diploma",fullName:"educationalattainment.HSGRAD_CY"},{label:"GED",fullName:"educationalattainment.GED_CY"},{label:"Some College/No Degree",fullName:"educationalattainment.SMCOLL_CY"},{label:"Associate's Degree",fullName:"educationalattainment.ASSCDEG_CY"},{label:"Bachelor's Degree",fullName:"educationalattainment.BACHDEG_CY"},{label:"Grad/Professional Degree",fullName:"educationalattainment.GRADDEG_CY"}],visualProps:{sorting:"Descending"}})}},e}));