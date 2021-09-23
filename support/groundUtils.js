/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../Ground","../core/Logger","../core/accessorSupport/ensureType"],(function(e,r,o,i){"use strict";const t=o.getLogger("esri.support.groundUtils"),n={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"},"world-topobathymetry":{id:"worldTopoBathymetry",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"}};function a(e){let o;if("string"==typeof e)if(e in n){const i=n[e];o=new r({resourceInfo:{data:{layers:[i]}}})}else t.warn(`Unable to find ground definition for: ${e}. Try "world-elevation"`);else o=i.ensureType(r,e);return o}e.ensureType=a,e.groundElevationLayers=n,Object.defineProperty(e,"__esModule",{value:!0})}));
