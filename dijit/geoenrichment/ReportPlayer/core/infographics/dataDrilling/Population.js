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

define(["./ChartBuilder"],function(a){var e={};return e.agePyramid={name:"Age Pyramid",fieldInfo:{isInfographic:!0,infographicJson:{type:"AgePyramid",variables:["Age.*"]}}},e.gender={name:"Gender",states:"n,p",fieldInfo:{isChart:!0,chartJson:a.createDonutChart("Gender",[{label:"Male",calculator:"n/5yearincrements.MALES_CY"},{label:"Female",calculator:"n/5yearincrements.FEMALES_CY"}])}},e.medianAgeMaleVsFemale={name:"Median Age Male/Female",states:"n,i",fieldInfo:{isChart:!0,chartJson:a.createChart("Bar","Median Age Male/Female",null,"",[{label:"Male",calculator:"n/5yearincrements.MEDMAGE_CY"},{label:"Female",calculator:"n/5yearincrements.MEDFAGE_CY"}],{sorting:"Descending",dataLabelsDecimals:1})}},e.annualGrowth={name:"Annual Growth Rate",states:"n,i",fieldInfo:{isChart:!0,chartJson:a.createChart("Bar","Annual Growth Rate",null,"",[{label:"2010-2016",points:[{label:"Population",calculator:"n/KeyUSFacts.POPGRW10CY"},{label:"Households",calculator:"n/KeyUSFacts.HHGRW10CY"},{label:"Families",calculator:"n/KeyUSFacts.FAMGRW10CY"}]},{label:"2016-2021",points:[{label:"Population",calculator:"n/KeyUSFacts.POPGRWCYFY"},{label:"Households",calculator:"n/KeyUSFacts.HHGRWCYFY"},{label:"Families",calculator:"n/KeyUSFacts.FAMGRWCYFY"}]}],{dataLabelsDecimals:3})}},e});