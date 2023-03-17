/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../ClassBreaksRenderer","../DictionaryRenderer","../DotDensityRenderer","../HeatmapRenderer","../PieChartRenderer","../Renderer","../SimpleRenderer","../UniqueValueRenderer"],(function(e,r,n,t,a,s,i,d,p){"use strict";const o={key:"type",base:i,typeMap:{heatmap:a,simple:d,"unique-value":p,"class-breaks":r,"dot-density":t,dictionary:n,"pie-chart":s},errorContext:"renderer"},y={key:"type",base:i,typeMap:{simple:d,"unique-value":p,"class-breaks":r,heatmap:a},errorContext:"renderer"};e.rendererTypes=o,e.webSceneRendererTypes=y,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
