/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{getElevationDesiredResolutionLevel as e}from"./TerrainConst.js";import{TileAgent as t}from"./TileAgent.js";class l extends t{constructor(){super(...arguments),this._scaleRangeEnabled=!1}get _desiredMinLevelDelta(){return e(this.tile.level)-(this.tile.vlevel-this.tile.level)}get _progressiveLevelModulo(){return 0}}export{l as ElevationTileAgent};
