/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","./TerrainConst","./TileAgent"],(function(e,t,l,i){"use strict";let n=function(e){function i(){var t;return(t=e.apply(this,arguments)||this)._scaleRangeEnabled=!1,t}return t._inheritsLoose(i,e),t._createClass(i,[{key:"_desiredMinLevelDelta",get:function(){return l.getElevationDesiredResolutionLevel(this.tile.level)-(this.tile.vlevel-this.tile.level)}},{key:"_progressiveLevelModulo",get:function(){return 0}}]),i}(i.TileAgent);e.ElevationTileAgent=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
