// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/has","../kernel"],(function(e,S,a){var i={SPATIAL_REL_INTERSECTS:"esriSpatialRelIntersects",SPATIAL_REL_CONTAINS:"esriSpatialRelContains",SPATIAL_REL_CROSSES:"esriSpatialRelCrosses",SPATIAL_REL_ENVELOPEINTERSECTS:"esriSpatialRelEnvelopeIntersects",SPATIAL_REL_INDEXINTERSECTS:"esriSpatialRelIndexIntersects",SPATIAL_REL_OVERLAPS:"esriSpatialRelOverlaps",SPATIAL_REL_TOUCHES:"esriSpatialRelTouches",SPATIAL_REL_WITHIN:"esriSpatialRelWithin",SPATIAL_REL_RELATION:"esriSpatialRelRelation"};return S("extend-esri")&&e.setObject("tasks._SpatialRelationship",i,a),i}));