/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../../renderers/support/heatmapUtils"],(function(t,e){"use strict";let i=function(){function t(){this.gradient=null,this.height=512,this.width=512}return t.prototype.render=function(t){e.drawHeatmap(t,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)},t}();t.HeatmapSource=i,Object.defineProperty(t,"__esModule",{value:!0})}));
