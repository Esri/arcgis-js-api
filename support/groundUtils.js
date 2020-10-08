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

define(["require","exports","../Ground","../core/Logger","../core/accessorSupport/ensureType"],(function(e,r,o,i,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ensureType=r.groundElevationLayers=void 0;var n=i.getLogger("esri.support.groundUtils");r.groundElevationLayers={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"},"world-topobathymetry":{id:"worldTopoBathymetry",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"}},r.ensureType=function(e){var i;if("string"==typeof e)if(e in r.groundElevationLayers){var t=r.groundElevationLayers[e];i=new o({resourceInfo:{data:{layers:[t]}}})}else n.warn("Unable to find ground definition for: "+e+'. Try "world-elevation"');else i=a.default(o,e);return i}}));