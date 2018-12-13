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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["../../ChartBuilder"],function(a){var e={};return e.agePyramid={name:"Age Pyramid",fieldInfo:{isInfographic:!0,infographicJson:{type:"AgePyramid",variables:["Age.*"]}}},e.annualGrowth={states:"n,i",fieldInfo:{isChart:!0,chartJson:a.createChart({title:"Annual Growth Rate",seriesItems:[{label:"2010-2018",points:[{label:"Population",fullName:"KeyUSFacts.POPGRW10CY"},{label:"Households",fullName:"KeyUSFacts.HHGRW10CY"},{label:"Families",fullName:"KeyUSFacts.FAMGRW10CY"}]},{label:"2018-2023",points:[{label:"Population",fullName:"KeyUSFacts.POPGRWCYFY"},{label:"Households",fullName:"KeyUSFacts.HHGRWCYFY"},{label:"Families",fullName:"KeyUSFacts.FAMGRWCYFY"}]}],visualProps:{dataLabelsDecimals:3}})}},e.pop65PlusNoEnglish={states:"n,p",defaultState:"p",fieldInfo:{isChart:!0,chartJson:a.createChart({title:"Pop 65+ Language Spoken at Home - No English (ACS)",points:[{label:"Spanish",fullName:"AtRisk.ACSSPNOA65"},{label:"Indo-European",fullName:"AtRisk.ACSIENOA65"},{label:"Asian-Pacific Islander",fullName:"AtRisk.ACSAPNOA65"},{label:"Other Language",fullName:"AtRisk.ACSOTNOA65"}],visualProps:{sorting:"Descending"}})}},e.daytimePopulation={states:"n,p",defaultState:"p",fieldInfo:{isChart:!0,chartJson:a.createDonutChart({title:"Daytime Population",points:[{label:"Workers",fullName:"DaytimePopulation.DPOPWRK_CY"},{label:"Residents",fullName:"DaytimePopulation.DPOPRES_CY"}]})}},e.populationACS={states:"n,p",defaultState:"p",fieldInfo:{isChart:!0,chartJson:a.createDonutChart({title:"Population (ACS)",points:[{label:"0-17",fullName:"Health.ACSCIVNI0"},{label:"18-34",fullName:"Health.ACSCIVNI18"},{label:"35-64",fullName:"Health.ACSCIVNI35"},{label:"65+",fullName:"Health.ACSCIVNI65"}]})}},e});