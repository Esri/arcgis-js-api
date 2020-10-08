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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators","../../geometry/Polygon"],(function(e,t,r,s,i,o,a){"use strict";var n=new s.JSONMap({preserveShape:"preserve-shape",planar:"planar",geodesic:"geodesic"}),p=new s.JSONMap({esriAcres:"acres",esriHectares:"hectares",esriSquareMiles:"square-miles",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareFeet:"square-feet",esriSquareYards:"square-yards",esriAres:"ares"}),l=new s.JSONMap({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});return function(e){function t(t){var r=e.call(this,t)||this;return r.areaUnit=null,r.calculationType=null,r.lengthUnit=null,r.polygons=null,r}return r.__extends(t,e),t.prototype.toJSON=function(){var e={};if(this.polygons&&this.polygons.length>0){var t=this.polygons.map((function(e){return e.toJSON()}));e.polygons=JSON.stringify(t);var r=this.polygons[0].spatialReference;e.sr=r.wkid?r.wkid:JSON.stringify(r.toJSON())}if(this.lengthUnit&&(e.lengthUnit=l.toJSON(this.lengthUnit)),this.areaUnit){var s=p.toJSON(this.areaUnit);e.areaUnit="string"==typeof s?JSON.stringify({areaUnit:s}):s}return this.calculationType&&(e.calculationType=n.toJSON(this.calculationType)),e},r.__decorate([o.property({type:String,json:{write:!0}})],t.prototype,"areaUnit",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],t.prototype,"calculationType",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],t.prototype,"lengthUnit",void 0),r.__decorate([o.property({type:[a],json:{write:!0}})],t.prototype,"polygons",void 0),t=r.__decorate([o.subclass("esri.tasks.support.AreasAndLengthsParameters")],t)}(i.JSONSupport)}));