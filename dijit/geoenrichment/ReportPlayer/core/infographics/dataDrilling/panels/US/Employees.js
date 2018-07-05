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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["../../ChartBuilder"],function(a){var l={};return l.civilianPopulation16Plus={states:"n,p",fieldInfo:{isChart:!0,chartJson:a.createDonutChart({title:"Civilian Population 16+",points:[{label:"Employed Civilian Pop 16+",fullName:"industry.EMP_CY"},{label:"Unemployed Population 16+",fullName:"industry.UNEMP_CY"}]})}},l.laborForceByOccupation={states:"n,p",defaultState:"p",fieldInfo:{isChart:!0,chartJson:a.createChart({title:"Labor Force by Occupation",points:[{label:"Management",fullName:"occupation.OCCMGMT_CY"},{label:"Business/Financial",fullName:"occupation.OCCBUS_CY"},{label:"Computer/Mathmatical",fullName:"occupation.OCCCOMP_CY"},{label:"Architecture/Engineer",fullName:"occupation.OCCARCH_CY"},{label:"Life/Social Sciences",fullName:"occupation.OCCSSCI_CY"},{label:"Social Service",fullName:"occupation.OCCSSRV_CY"},{label:"Legal",fullName:"occupation.OCCLEGL_CY"},{label:"Education/Library",fullName:"occupation.OCCEDUC_CY"},{label:"Arts/Entertainment/Rec",fullName:"occupation.OCCENT_CY"},{label:"Health Practices",fullName:"occupation.OCCHTCH_CY"},{label:"Health Support",fullName:"occupation.OCCHLTH_CY"},{label:"Protective Service",fullName:"occupation.OCCPROT_CY"},{label:"Food Preperation",fullName:"occupation.OCCFOOD_CY"},{label:"Building Maintenance",fullName:"occupation.OCCBLDG_CY"},{label:"Personal Care",fullName:"occupation.OCCPERS_CY"},{label:"Sales",fullName:"occupation.OCCSALE_CY"},{label:"Office/Admin",fullName:"occupation.OCCADMN_CY"},{label:"Farm/Fish/Forestry",fullName:"occupation.OCCFARM_CY"},{label:"Construction/Extraction",fullName:"occupation.OCCCONS_CY"},{label:"Maintenance/Repair",fullName:"occupation.OCCMAIN_CY"},{label:"Production",fullName:"occupation.OCCPROD_CY"},{label:"Transportation/Moving",fullName:"occupation.OCCTRAN_CY"}],visualProps:{sorting:"Descending"}})}},l});