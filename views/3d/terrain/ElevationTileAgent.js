/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","./TerrainConst","./TileAgent"],(function(e,t,l){"use strict";let n=function(l){function n(){var e;return(e=l.apply(this,arguments)||this)._scaleRangeEnabled=!1,e}return e._inheritsLoose(n,l),e._createClass(n,[{key:"_desiredMinLevelDelta",get:function(){return t.getElevationDesiredResolutionLevel(this.tile.level)-(this.tile.vlevel-this.tile.level)}},{key:"_progressiveLevelModulo",get:function(){return 0}}]),n}(l.TileAgent);return n}));
