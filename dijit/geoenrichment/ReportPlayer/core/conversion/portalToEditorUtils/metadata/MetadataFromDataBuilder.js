// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","./map/RendererToMetadataConverter"],(function(a,e){var t={},r={STORE_ID:1,AREA_ID:1,StdGeographyName:1,StdGeographyID:1,StdGeographyLevel:1};return t.recoverMetadataFromAreaData=function(t,o){var n=t[0],s={name:"DataCollection",tags:[{name:"Calculators",tags:[]}]},i={};for(var l in n){var u=n[l].data,g=n[l].comparisonLevels,m=o.map[l],c=!!m,p=c&&"object"==typeof m&&m.webMapJson||null,f=o.locator[l],v={name:c?"Maps":f?"Locator":"DataCollections",attributes:{Name:l},tags:[]};s.tags[0].tags.push(v);var h=[];if(c){for(var y in u)if(!r[y]){var d={name:"Map",attributes:{Name:y},tags:[{name:"Layers",tags:[]}]};p&&p.operationalLayers.forEach((function(a){if(a.isLocatorLayer){var t={name:"LocatorResultsLayer",attributes:{CalculatorName:a.calculatorName},tags:[e.convertRendererJson(a.featureCollection.layers[0].layerDefinition.drawingInfo.renderer)]};i[a.calculatorName]=a.featureCollection.layers[0].title,d.tags[0].tags.push(t)}if(a.isComparisonLayer){var r=a.featureCollection.layers[0].layerDefinition.drawingInfo,o={name:"ComparisonResultsLayer",attributes:{CalculatorName:a.calculatorName},tags:[e.convertRendererJson(r.renderer)]};r.labelingInfo&&o.tags.push(e.convertLabelingInfo(r.labelingInfo)),d.tags[0].tags.push(o)}})),h.push(d)}}else for(var y in u)h.push({name:"Field",attributes:{Name:y,Alias:y,MapTo:"DC."+y,Type:"number"==typeof u[y]?"Double":"String"}});if(v.tags.push({name:"Fields",tags:h}),g&&g.length){var L=[],b={};g.forEach((function(a){a.StdGeographyLevel&&!b[a.StdGeographyLevel]&&(b[a.StdGeographyLevel]=1,L.push(a.StdGeographyLevel))})),L.length&&v.tags.push({name:"ComparisonLevels",tags:L.map((function(a){return{name:"ComparisonLevel",attributes:{Name:a}}}))})}}return s.tags[0].tags.forEach((function(a){if("Locator"===a.name){var e=i[a.attributes.Name];e&&(a.attributes.LayerName=e)}})),a.parseJson(s)},t}));