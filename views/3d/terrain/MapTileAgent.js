/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{PROGRESSIVE_LOADING_MODULO as e}from"./TerrainConst.js";import{TileAgent as r}from"./TileAgent.js";class t extends r{constructor(){super(),this._scaleRangeEnabled=!0}get _desiredMinLevelDelta(){return 0}get _progressiveLevelModulo(){return e}}export{t as MapTileAgent};
