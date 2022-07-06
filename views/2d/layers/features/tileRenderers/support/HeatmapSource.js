/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{drawHeatmap as t}from"../../../../../../renderers/support/heatmapUtils.js";class i{constructor(){this.gradient=null,this.height=512,this.width=512}render(i){t(i,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)}}export{i as HeatmapSource};
