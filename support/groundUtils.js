/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../Ground.js";import r from"../core/Logger.js";import{ensureType as o}from"../core/accessorSupport/ensureType.js";const i=r.getLogger("esri.support.groundUtils"),t={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"},"world-topobathymetry":{id:"worldTopoBathymetry",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"}};function a(r){let a=null;if("string"==typeof r)if(r in t){const o=t[r];a=new e({resourceInfo:{data:{layers:[o]}}})}else i.warn(`Unable to find ground definition for: ${r}. Try "world-elevation"`);else a=o(e,r);return a}export{a as ensureType,t as groundElevationLayers};
