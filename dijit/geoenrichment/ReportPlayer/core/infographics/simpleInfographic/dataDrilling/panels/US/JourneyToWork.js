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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["../../ChartBuilder"],function(e){var l={};return l.jorneyToWork={states:"n,p",defaultState:"p",stateSettings:{n:{yAxisTitle:"Number of adults 16+"},p:{yAxisTitle:"Percent of adults 16+"}},fieldInfo:{isChart:!0,chartJson:e.createChart({title:"Journey to Work (ACS)",points:[{label:"Drove Alone",fullName:"commute.ACSDRALONE"},{label:"Carpooled",fullName:"commute.ACSCARPOOL"},{label:"Public Transportation",fullName:"commute.ACSPUBTRAN"},{label:"Bus",fullName:"commute.ACSBUS"},{label:"Streetcar",fullName:"commute.ACSSTRTCAR"},{label:"Subway",fullName:"commute.ACSSUBWAY"},{label:"Railroad",fullName:"commute.ACSRAILRD"},{label:"Ferryboat",fullName:"commute.ACSFERRY"},{label:"Taxicab",fullName:"commute.ACSTAXICAB"},{label:"Motorcycle",fullName:"commute.ACSMCYCLE"},{label:"Bicycle",fullName:"commute.ACSBICYCLE"},{label:"Walked",fullName:"commute.ACSWALKED"},{label:"Other Means",fullName:"commute.ACSOTHTRAN"},{label:"Worked at Home",fullName:"commute.ACSWRKHOME"}],visualProps:{sorting:"Descending"}})}},l});