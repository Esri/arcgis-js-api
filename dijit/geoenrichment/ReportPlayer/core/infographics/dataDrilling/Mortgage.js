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

define(["./ChartBuilder"],function(a){var l={};return l.dwellingMortgage={name:"Dwellings: Mortage Facts",states:"n,a,i",fieldInfo:{isChart:!0,chartJson:a.createChart("Bar","Dwellings: Mortage",null,"",[{label:"Payment & Basics",calculator:"n/HousingHousehold.X3004_X"},{label:"Interest",calculator:"n/HousingHousehold.X3005_X"},{label:"Principal",calculator:"n/HousingHousehold.X3006_X"}])}},l.vacationHomesMortgage={name:"Vacation Homes: Mortage Facts",states:"n,a,i",fieldInfo:{isChart:!0,chartJson:a.createChart("Bar","Vacation Homes: Mortage",null,"",[{label:"Payment",calculator:"n/HousingHousehold.X3050_X"},{label:"Interest",calculator:"n/HousingHousehold.X3052_X"},{label:"Principal",calculator:"n/HousingHousehold.X3051_X"}])}},l});