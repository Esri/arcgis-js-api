/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","./TerrainConst","./TileAgent"],(function(e,t,n){"use strict";let i=function(n){function i(){var e;return(e=n.apply(this,arguments)||this)._scaleRangeEnabled=!1,e}return e._inheritsLoose(i,n),e._createClass(i,[{key:"_desiredMinLevelDelta",get:function(){return t.ELEVATION_DESIRED_RESOLUTION_LEVEL-(this.tile.vlevel-this.tile.level)}},{key:"_progressiveLevelModulo",get:function(){return 0}}]),i}(n.TileAgent);return i}));
