/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";var t;e.IntersectorType=void 0,(t=e.IntersectorType||(e.IntersectorType={}))[t.OBJECT=0]="OBJECT",t[t.HUD=1]="HUD",t[t.TERRAIN=2]="TERRAIN",t[t.OVERLAY=3]="OVERLAY",t[t.I3S=4]="I3S",t[t.PCL=5]="PCL",t[t.LOD=6]="LOD",t[t.VOXEL=7]="VOXEL";let s=function(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.store=e.StoreResults.ALL};var i;e.StoreResults=void 0,(i=e.StoreResults||(e.StoreResults={}))[i.MIN=0]="MIN",i[i.MINMAX=1]="MINMAX",i[i.ALL=2]="ALL",e.IntersectorOptions=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
