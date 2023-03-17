/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../../renderers/support/heatmapUtils"],(function(t,e){"use strict";let i=function(){function t(){this.gradient=null,this.height=512,this.intensities=null,this.width=512}return t.prototype.render=function(t){e.drawHeatmap(t,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)},t}();t.HeatmapSource=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
