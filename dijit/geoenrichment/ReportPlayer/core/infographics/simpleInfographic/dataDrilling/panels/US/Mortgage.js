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

define(["../../ChartBuilder","../../../../../charts/utils/ChartTypes"],function(e,t){var a={};return a.dwellingMortgage={states:"n,a,i",defaultState:"a",stateSettings:{n:{isCurrency:!0},a:{yAxisTitle:"Average dollars spent per household",isCurrency:!0}},fieldInfo:{isChart:!0,chartJson:e.createChart({type:t.COLUMN,title:"Owner Dwellings: Mortgage Payment",points:[{label:"Interest",fullName:"HousingHousehold.X3005_X"},{label:"Principal",fullName:"HousingHousehold.X3006_X"}]})}},a});