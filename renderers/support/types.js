/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../ClassBreaksRenderer.js";import r from"../DictionaryRenderer.js";import t from"../DotDensityRenderer.js";import o from"../HeatmapRenderer.js";import s from"../PieChartRenderer.js";import a from"../Renderer.js";import i from"../SimpleRenderer.js";import m from"../UniqueValueRenderer.js";const p={key:"type",base:a,typeMap:{heatmap:o,simple:i,"unique-value":m,"class-breaks":e,"dot-density":t,dictionary:r,"pie-chart":s},errorContext:"renderer"},n={key:"type",base:a,typeMap:{simple:i,"unique-value":m,"class-breaks":e,heatmap:o},errorContext:"renderer"};export{p as rendererTypes,n as webSceneRendererTypes};
