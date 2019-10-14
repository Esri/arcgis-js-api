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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["../../ChartBuilder"],function(e){var t={};return t.internetConnectionHome={states:"n,p,i",defaultState:"i",stateSettings:{n:{yAxisTitle:"Number of adults"},p:{yAxisTitle:"Percent of adults"}},fieldInfo:{isChart:!0,chartJson:e.createChart({title:"Internet Access at Home",points:[{label:"Cable modem",fullName:"ElectronicsInternet.MP19003A_B"},{label:"DSL",fullName:"ElectronicsInternet.MP19004A_B"},{label:"Fiber optic",fullName:"ElectronicsInternet.MP19005A_B"},{label:"High speed connection",fullName:"ElectronicsInternet.MP19007A_B"}],visualProps:{sorting:"Descending"}})}},t});