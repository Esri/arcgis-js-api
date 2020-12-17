/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../Renderer","../ClassBreaksRenderer","../UniqueValueRenderer","../DictionaryRenderer","../DotDensityRenderer","../HeatmapRenderer","../SimpleRenderer"],(function(e,r,n,t,s,a,d,i){"use strict";const p={key:"type",base:r,typeMap:{heatmap:d,simple:i,"unique-value":t,"class-breaks":n,"dot-density":a,dictionary:s},errorContext:"renderer"},o={key:"type",base:r,typeMap:{simple:i,"unique-value":t,"class-breaks":n},errorContext:"renderer"};e.rendererTypes=p,e.webSceneRendererTypes=o,Object.defineProperty(e,"__esModule",{value:!0})}));
