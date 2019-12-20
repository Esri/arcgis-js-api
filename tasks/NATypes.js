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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/has","../kernel"],function(e,t,i){var s={esriFeet:"esriNAUFeet",esriKilometers:"esriNAUKilometers",esriMeters:"esriNAUMeters",esriMiles:"esriNAUMiles",esriNauticalMiles:"esriNAUNauticalMiles",esriYards:"esriNAUYards"},r={NONE:"esriNAOutputLineNone",STRAIGHT:"esriNAOutputLineStraight",TRUE_SHAPE:"esriNAOutputLineTrueShape",TRUE_SHAPE_WITH_MEASURE:"esriNAOutputLineTrueShapeWithMeasure"},A={ALLOW_BACKTRACK:"esriNFSBAllowBacktrack",AT_DEAD_ENDS_ONLY:"esriNFSBAtDeadEndsOnly",NO_BACKTRACK:"esriNFSBNoBacktrack",AT_DEAD_ENDS_AND_INTERSECTIONS:"esriNFSBAtDeadEndsAndIntersections"},N={NONE:"esriNAOutputPolygonNone",SIMPLIFIED:"esriNAOutputPolygonSimplified",DETAILED:"esriNAOutputPolygonDetailed"},n={FROM_FACILITY:"esriNATravelDirectionFromFacility",TO_FACILITY:"esriNATravelDirectionToFacility"},a={LengthUnit:s,OutputLine:r,UTurn:A,OutputPolygon:N,TravelDirection:n};return t("extend-esri")&&(e.setObject("tasks._NALengthUnit",s,i),e.setObject("tasks.NAOutputLine",r,i),e.setObject("tasks.NAUTurn",A,i),e.setObject("tasks.NAOutputPolygon",N,i),e.setObject("tasks.NATravelDirection",n,i)),a});