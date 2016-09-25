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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["./RingBuffer","./DriveBuffer","./IntersectingGeographies","../../extend"],function(e,r,n,t){var i=function(t){if(t){switch(t.areaType){case"DriveTimeBuffer":return new r(t);case"StandardGeography":return new n(t)}switch(t.type){case"DriveTime":return new r(t);case"StdGeo":return new n(t)}return new e(t)}return new e};return t("esri.tasks.geoenrichment.studyAreaOptionsFromJson",i),i});