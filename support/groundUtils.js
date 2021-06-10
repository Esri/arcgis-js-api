/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../core/Logger","../core/accessorSupport/ensureType","../Ground"],(function(e,r,o,i){"use strict";const t=r.getLogger("esri.support.groundUtils"),n={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"},"world-topobathymetry":{id:"worldTopoBathymetry",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"}};function a(e){let r;if("string"==typeof e)if(e in n){const o=n[e];r=new i({resourceInfo:{data:{layers:[o]}}})}else t.warn(`Unable to find ground definition for: ${e}. Try "world-elevation"`);else r=o.ensureType(i,e);return r}e.ensureType=a,e.groundElevationLayers=n,Object.defineProperty(e,"__esModule",{value:!0})}));
