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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

//  copyright

/**
       * The copyright text as defined by the map service.
       *
       * @type {string}
       */

// We expose "copyrightText" as "copyright" in the SDK.

define(["./ArcGISService","../../geometry/SpatialReference","../../geometry/Extent"],function(e,r,n){var t=e.createSubclass({properties:{copyright:{value:null,json:{readFrom:["copyrightText"],read:function(e,r){return r.copyrightText}}},fullExtent:n,legendEnabled:{json:{readFrom:["showLegend"],read:function(e,r){return r.showLegend}}},popupEnabled:{json:{readFrom:["disablePopup"],read:function(e,r){return!r.disablePopup}}},spatialReference:r,version:{value:null,json:{readFrom:["currentVersion","capabilities","tables","supportedImageFormatTypes"],read:function(e,r){return e=r.currentVersion,e||(e=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),e}}}}});return t});