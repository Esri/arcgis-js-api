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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter"],(function(a){var e={recoverMetadataFromAreaData:function(e,t){var r=e[0],n={name:"DataCollection",tags:[{name:"Calculators",tags:[]}]};for(var o in r){var s=r[o].data,i=r[o].comparisonLevels,l=t.map[o],p=t.locator[o],m={name:l?"Maps":p?"Locator":"DataCollections",attributes:{Name:o},tags:[]};n.tags[0].tags.push(m);var u=[];for(var g in s)u.push({name:l?"Map":"Field",attributes:{Name:g,Alias:g,MapTo:"DC."+g,Type:"number"==typeof s[g]?"Double":"String"}});if(m.tags.push({name:"Fields",tags:u}),i&&i.length){var v=[],c={};i.forEach((function(a){a.StdGeographyLevel&&!c[a.StdGeographyLevel]&&(c[a.StdGeographyLevel]=1,v.push(a.StdGeographyLevel))})),v.length&&m.tags.push({name:"ComparisonLevels",tags:v.map((function(a){return{name:"ComparisonLevel",attributes:{Name:a}}}))})}}return a.parseJson(n)}};return e}));