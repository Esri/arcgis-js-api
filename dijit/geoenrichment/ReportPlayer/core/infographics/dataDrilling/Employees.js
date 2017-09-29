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

define(["./ChartBuilder"],function(a){var l={};return l.occupation={name:"Occupation",states:"n,p",fieldInfo:{isChart:!0,chartJson:a.createDonutChart("Occupation",[{label:"Management",calculator:"n/occupation.OCCMGMT_CY"},{label:"Business/Financial",calculator:"n/occupation.OCCBUS_CY"},{label:"Computer/Mathmatical",calculator:"n/occupation.OCCCOMP_CY"},{label:"Architecture/Engineer",calculator:"n/occupation.OCCARCH_CY"},{label:"Life/Social Sciences",calculator:"n/occupation.OCCSSCI_CY"},{label:"Social Service",calculator:"n/occupation.OCCSSRV_CY"},{label:"Legal",calculator:"n/occupation.OCCLEGL_CY"},{label:"Education/Library",calculator:"n/occupation.OCCEDUC_CY"},{label:"Arts/Entertainment/Rec",calculator:"n/occupation.OCCENT_CY"},{label:"Health Practices",calculator:"n/occupation.OCCHTCH_CY"},{label:"Health Support",calculator:"n/occupation.OCCHLTH_CY"},{label:"Protective Service",calculator:"n/occupation.OCCPROT_CY"},{label:"Food Preperation",calculator:"n/occupation.OCCFOOD_CY"},{label:"Building Maintenance",calculator:"n/occupation.OCCBLDG_CY"},{label:"Personal Care",calculator:"n/occupation.OCCPERS_CY"},{label:"Sales",calculator:"n/occupation.OCCSALE_CY"},{label:"Office/Admin",calculator:"n/occupation.OCCADMN_CY"},{label:"Farm/Fish/Forestry",calculator:"n/occupation.OCCFARM_CY"},{label:"Construction/Extraction",calculator:"n/occupation.OCCCONS_CY"},{label:"Maintenance/Repair",calculator:"n/occupation.OCCMAIN_CY"},{label:"Production",calculator:"n/occupation.OCCPROD_CY"},{label:"Transportation/Moving",calculator:"n/occupation.OCCTRAN_CY"}])}},l.civilianPopulation16Plus={name:"Civilian Population 16+",states:"n,p",fieldInfo:{isChart:!0,chartJson:a.createDonutChart("Civilian Population 16+",[{label:"Employed Civilian Pop 16+",calculator:"n/industry.EMP_CY"},{label:"Unemployed Population 16+",calculator:"n/industry.UNEMP_CY"}])}},l.laborForceByIndustry={name:"Labor Force by Industry (16+)",states:"n,p",fieldInfo:{isChart:!0,chartJson:a.createDonutChart("Labor Force by Industry (16+)",[{label:"Agriculture",calculator:"n/industry.INDAGRI_CY"},{label:"Mining",calculator:"n/industry.INDMIN_CY"},{label:"Construction",calculator:"n/industry.INDCONS_CY"},{label:"Manufacturing",calculator:"n/industry.INDMANU_CY"},{label:"Wholesale Trade",calculator:"n/industry.INDWHTR_CY"},{label:"Retail Trade",calculator:"n/industry.INDRTTR_CY"},{label:"Transportation",calculator:"n/industry.INDTRAN_CY"},{label:"Utilities",calculator:"n/industry.INDUTIL_CY"},{label:"Information",calculator:"n/industry.INDINFO_CY"},{label:"Finance/Insurance",calculator:"n/industry.INDFIN_CY"},{label:"Real Estate",calculator:"n/industry.INDRE_CY"},{label:"Professional/Tech Svcs",calculator:"n/industry.INDTECH_CY"},{label:"Management",calculator:"n/industry.INDMGMT_CY"},{label:"Admin/Waste Mgmt",calculator:"n/industry.INDADMN_CY"},{label:"Educational Services",calculator:"n/industry.INDEDUC_CY"},{label:"Health Care",calculator:"n/industry.INDHLTH_CY"},{label:"Arts/Entertainment/Rec",calculator:"n/industry.INDARTS_CY"},{label:"Accommodation/Food Svcs",calculator:"n/industry.INDFOOD_CY"},{label:"Other Services",calculator:"n/industry.INDOTSV_CY"},{label:"Public Administration",calculator:"n/industry.INDPUBL_CY"}])}},l});