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

define(["./ChartBuilder"],function(a){var t={};return t.educationalAttainment={name:"Educational Attainment",states:"n,p",fieldInfo:{isChart:!0,chartJson:a.createChart("Bar","Educational Attainment",null,"",[{label:"< 9th Grade",calculator:"n/educationalattainment.NOHS_CY"},{label:"High School/No Diploma",calculator:"n/educationalattainment.SOMEHS_CY"},{label:"High School Diploma",calculator:"n/educationalattainment.HSGRAD_CY"},{label:"GED",calculator:"n/educationalattainment.GED_CY"},{label:"Some College/No Degree",calculator:"n/educationalattainment.SMCOLL_CY"},{label:"Associate's Degree",calculator:"n/educationalattainment.ASSCDEG_CY"},{label:"Bachelor's Degree",calculator:"n/educationalattainment.BACHDEG_CY"},{label:"Grad/Professional Degree",calculator:"n/educationalattainment.GRADDEG_CY"}],{sorting:"Descending"})}},t});