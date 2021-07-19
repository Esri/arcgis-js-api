/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../ClassBreaksRenderer","../DictionaryRenderer","../DotDensityRenderer","../HeatmapRenderer","../Renderer","../SimpleRenderer","../UniqueValueRenderer"],(function(e,r,n,t,s,a,d,i){"use strict";const p={key:"type",base:a,typeMap:{heatmap:s,simple:d,"unique-value":i,"class-breaks":r,"dot-density":t,dictionary:n},errorContext:"renderer"},o={key:"type",base:a,typeMap:{simple:d,"unique-value":i,"class-breaks":r},errorContext:"renderer"};e.rendererTypes=p,e.webSceneRendererTypes=o,Object.defineProperty(e,"__esModule",{value:!0})}));
