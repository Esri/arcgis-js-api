// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../core/Accessoire","../../core/declare","../../core/kebabDictionary"],function(e,r,s){var t=s({preserveShape:"preserve-shape"}),i=s({esriAcres:"acres",esriHectares:"hectares",esriSquareMiles:"square-miles",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareFeet:"square-feet",esriSquareYards:"square-yards",esriAres:"ares"}),a=s({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"}),n=r(e,{declaredClass:"esri.tasks.support.AreasAndLengthsParameters",areaUnit:null,calculationType:null,lengthUnit:null,polygons:null,toJSON:function(){var e={};if(this.polygons&&this.polygons.length>0){var r=this.polygons.map(function(e){return e.toJSON()});e.polygons=JSON.stringify(r);var s=this.polygons[0].spatialReference;e.sr=s.wkid?s.wkid:JSON.stringify(s.toJSON())}if(this.lengthUnit&&(e.lengthUnit=a.toJSON(this.lengthUnit)),this.areaUnit){var n=i.toJSON(this.areaUnit);e.areaUnit="string"==typeof n?JSON.stringify({areaUnit:n}):n}return this.calculationType&&(e.calculationType=t.toJSON(this.calculationType)),e}});return n});