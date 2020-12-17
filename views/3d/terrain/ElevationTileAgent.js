/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","./TerrainConst","./TileAgent"],(function(e,n,t){"use strict";return function(t){function i(){var e;return(e=t.apply(this,arguments)||this)._scaleRangeEnabled=!1,e}return e._inheritsLoose(i,t),e._createClass(i,[{key:"_desiredMinLevelDelta",get:function(){return n.ELEVATION_DESIRED_RESOLUTION_LEVEL-(this.tile.vlevel-this.tile.lij[0])}},{key:"_loadingLevelDelta",get:function(){return 0}}]),i}(t.TileAgent)}));
