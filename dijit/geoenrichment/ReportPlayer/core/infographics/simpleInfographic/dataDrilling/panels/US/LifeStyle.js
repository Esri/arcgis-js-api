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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["../../ChartBuilder"],function(e){var t={};return t.musicAndTheater={states:"n,p,i",defaultState:"i",stateSettings:{n:{yAxisTitle:"Number of adults"},p:{yAxisTitle:"Percent of adults"}},fieldInfo:{isChart:!0,chartJson:e.createChart({title:"Attended Performance in last 12 months",points:[{label:"Classical music or opera",fullName:"LeisureActivitiesLifestyle.MP20061A_B"},{label:"Country music",fullName:"LeisureActivitiesLifestyle.MP20062A_B"},{label:"Rock music",fullName:"LeisureActivitiesLifestyle.MP20063A_B"},{label:"Live theater",fullName:"LeisureActivitiesLifestyle.MP20069A_B"}],visualProps:{sorting:"Descending"}})}},t});