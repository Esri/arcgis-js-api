/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../ClassBreaksRenderer","../DictionaryRenderer","../DotDensityRenderer","../HeatmapRenderer","../Renderer","../SimpleRenderer","../UniqueValueRenderer"],(function(e,r,n,t,s,a,d,i){"use strict";const o={key:"type",base:a,typeMap:{heatmap:s,simple:d,"unique-value":i,"class-breaks":r,"dot-density":t,dictionary:n},errorContext:"renderer"},p={key:"type",base:a,typeMap:{simple:d,"unique-value":i,"class-breaks":r},errorContext:"renderer"};e.rendererTypes=o,e.webSceneRendererTypes=p,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
