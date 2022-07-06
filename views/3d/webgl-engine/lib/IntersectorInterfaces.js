/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var i,t;!function(i){i[i.OBJECT=0]="OBJECT",i[i.HUD=1]="HUD",i[i.TERRAIN=2]="TERRAIN",i[i.OVERLAY=3]="OVERLAY",i[i.I3S=4]="I3S",i[i.PCL=5]="PCL",i[i.LOD=6]="LOD",i[i.VOXEL=7]="VOXEL"}(i||(i={}));class s{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.store=t.ALL}}!function(i){i[i.MIN=0]="MIN",i[i.MINMAX=1]="MINMAX",i[i.ALL=2]="ALL"}(t||(t={}));export{s as IntersectorOptions,i as IntersectorType,t as StoreResults};
