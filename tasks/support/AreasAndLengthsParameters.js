// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["../../core/Accessor","../../core/kebabDictionary"],function(e,r){var s=r({preserveShape:"preserve-shape"}),t=r({esriAcres:"acres",esriHectares:"hectares",esriSquareMiles:"square-miles",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareFeet:"square-feet",esriSquareYards:"square-yards",esriAres:"ares"}),i=r({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});return e.createSubclass({declaredClass:"esri.tasks.support.AreasAndLengthsParameters",properties:{areaUnit:null,calculationType:null,lengthUnit:null,polygons:null},toJSON:function(){var e={};if(this.polygons&&this.polygons.length>0){var r=this.polygons.map(function(e){return e.toJSON()});e.polygons=JSON.stringify(r);var a=this.polygons[0].spatialReference;e.sr=a.wkid?a.wkid:JSON.stringify(a.toJSON())}if(this.lengthUnit&&(e.lengthUnit=i.toJSON(this.lengthUnit)),this.areaUnit){var n=t.toJSON(this.areaUnit);e.areaUnit="string"==typeof n?JSON.stringify({areaUnit:n}):n}return this.calculationType&&(e.calculationType=s.toJSON(this.calculationType)),e}})});