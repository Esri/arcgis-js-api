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

define(["./ChartBuilder"],function(l){var a={};return a.homeValue={name:"Home Value",states:"n,p",fieldInfo:{isChart:!0,chartJson:l.createChart("Bar","Home Value",null,"",[{label:"0-49999",calculator:"n/Wealth.VAL0_CY"},{label:"50000-99999",calculator:"n/Wealth.VAL50K_CY"},{label:"100000-149999",calculator:"n/Wealth.VAL100K_CY"},{label:"150000-199999",calculator:"n/Wealth.VAL150K_CY"},{label:"200000-249999",calculator:"n/Wealth.VAL200K_CY"},{label:"250000-299999",calculator:"n/Wealth.VAL250K_CY"},{label:"300000-399999",calculator:"n/Wealth.VAL300K_CY"},{label:"400000-499999",calculator:"n/Wealth.VAL400K_CY"},{label:"500000-749999",calculator:"n/Wealth.VAL500K_CY"},{label:"750000-999999",calculator:"n/Wealth.VAL750K_CY"},{label:"1000000+",calculator:"n/Wealth.VAL1M_CY"}])}},a});