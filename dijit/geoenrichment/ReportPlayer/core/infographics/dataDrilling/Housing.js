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

define(["./ChartBuilder"],function(e){var o={};return o.housingByAgeOwnerOccupied={name:"Housing by Age (owner-occupied)",states:"n,p",fieldInfo:{isChart:!0,chartJson:e.createChart("Bar","Housing by Age (owner-occupied)",null,"",[{label:"15-24",calculator:"n/housingbyageofhouseholder.OOHHR15C10"},{label:"25-34",calculator:"n/housingbyageofhouseholder.OOHHR25C10"},{label:"35-44",calculator:"n/housingbyageofhouseholder.OOHHR35C10"},{label:"45-54",calculator:"n/housingbyageofhouseholder.OOHHR45C10"},{label:"55-64",calculator:"n/housingbyageofhouseholder.OOHHR55C10"},{label:"65-74",calculator:"n/housingbyageofhouseholder.OOHHR65C10"},{label:"75-84",calculator:"n/housingbyageofhouseholder.OOHHR75C10"},{label:"85+",calculator:"n/housingbyageofhouseholder.OOHHR85C10"}])}},o.housingByAgeRenterOccupied={name:"Housing by Age (renter-occupied)",states:"n,p",fieldInfo:{isChart:!0,chartJson:e.createChart("Bar","Housing by Age (renter-occupied)",null,"",[{label:"15-24",calculator:"n/housingbyageofhouseholder.ROHHR15C10"},{label:"25-34",calculator:"n/housingbyageofhouseholder.ROHHR25C10"},{label:"35-44",calculator:"n/housingbyageofhouseholder.ROHHR35C10"},{label:"45-54",calculator:"n/housingbyageofhouseholder.ROHHR45C10"},{label:"55-64",calculator:"n/housingbyageofhouseholder.ROHHR55C10"},{label:"65-74",calculator:"n/housingbyageofhouseholder.ROHHR65C10"},{label:"75-84",calculator:"n/housingbyageofhouseholder.ROHHR75C10"},{label:"85+",calculator:"n/housingbyageofhouseholder.ROHHR85C10"}])}},o.housingBySizeOwnerOccupied={name:"Housing by Size (owner-occupied)",states:"n,p",fieldInfo:{isChart:!0,chartJson:e.createChart("Bar","Housing by Size (owner-occupied)",null,"",[{label:"1-Person",calculator:"n/housingbysize.OWN1PERS10"},{label:"2-Person",calculator:"n/housingbysize.OWN2PERS10"},{label:"3-Person",calculator:"n/housingbysize.OWN3PERS10"},{label:"4-Person",calculator:"n/housingbysize.OWN4PERS10"},{label:"5-Person",calculator:"n/housingbysize.OWN5PERS10"},{label:"6-Person",calculator:"n/housingbysize.OWN6PERS10"},{label:"7+ Person",calculator:"n/housingbysize.OWN7PERS10"}])}},o.housingBySizeRenterOccupied={name:"Housing by Size (renter-occupied)",states:"n,p",fieldInfo:{isChart:!0,chartJson:e.createChart("Bar","Housing by Size (renter-occupied)",null,"",[{label:"1-Person",calculator:"n/housingbysize.RNT1PERS10"},{label:"2-Person",calculator:"n/housingbysize.RNT2PERS10"},{label:"3-Person",calculator:"n/housingbysize.RNT3PERS10"},{label:"4-Person",calculator:"n/housingbysize.RNT4PERS10"},{label:"5-Person",calculator:"n/housingbysize.RNT5PERS10"},{label:"6-Person",calculator:"n/housingbysize.RNT6PERS10"},{label:"7+ Person",calculator:"n/housingbysize.RNT7PERS10"}])}},o});