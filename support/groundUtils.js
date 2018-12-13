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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../Ground","../core/Logger","../core/accessorSupport/ensureType","../layers/ElevationLayer"],function(e,r,o,i,n,a){function t(e){var i;if("string"==typeof e)if(e in r.groundElevationLayers){var t=r.groundElevationLayers[e],s=new a({id:t.id,url:t.url});i=new o({layers:[s]})}else l.warn("Unable to find ground definition for: "+e+'. Try "world-elevation"');else i=n.default(o,e);return i}Object.defineProperty(r,"__esModule",{value:!0});var l=i.getLogger("esri.support.groundUtils");r.groundElevationLayers={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer"},"world-topobathymetry":{id:"worldTopoBathymetry",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer"}},r.ensureType=t});