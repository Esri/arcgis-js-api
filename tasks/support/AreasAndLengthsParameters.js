// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators","../../geometry/Polygon"],(function(e,r,t,s,i,o,a){var n=new s.JSONMap({preserveShape:"preserve-shape",planar:"planar",geodesic:"geodesic"}),p=new s.JSONMap({esriAcres:"acres",esriHectares:"hectares",esriSquareMiles:"square-miles",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareFeet:"square-feet",esriSquareYards:"square-yards",esriAres:"ares"}),l=new s.JSONMap({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});return function(e){function r(r){var t=e.call(this,r)||this;return t.areaUnit=null,t.calculationType=null,t.lengthUnit=null,t.polygons=null,t}return t.__extends(r,e),r.prototype.toJSON=function(){var e={};if(this.polygons&&this.polygons.length>0){var r=this.polygons.map((function(e){return e.toJSON()}));e.polygons=JSON.stringify(r);var t=this.polygons[0].spatialReference;e.sr=t.wkid?t.wkid:JSON.stringify(t.toJSON())}if(this.lengthUnit&&(e.lengthUnit=l.toJSON(this.lengthUnit)),this.areaUnit){var s=p.toJSON(this.areaUnit);e.areaUnit="string"==typeof s?JSON.stringify({areaUnit:s}):s}return this.calculationType&&(e.calculationType=n.toJSON(this.calculationType)),e},t.__decorate([o.property({type:String,json:{write:!0}})],r.prototype,"areaUnit",void 0),t.__decorate([o.property({type:String,json:{write:!0}})],r.prototype,"calculationType",void 0),t.__decorate([o.property({type:String,json:{write:!0}})],r.prototype,"lengthUnit",void 0),t.__decorate([o.property({type:[a],json:{write:!0}})],r.prototype,"polygons",void 0),r=t.__decorate([o.subclass("esri.tasks.support.AreasAndLengthsParameters")],r)}(i.JSONSupport)}));