/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import o from"../../../../core/Logger.js";import{hasCalloutSupport as r}from"../../../../symbols/callouts/calloutUtils.js";import{Graphics3DLineCalloutSymbolLayer as l}from"./Graphics3DLineCalloutSymbolLayer.js";const t=o.getLogger("esri.views.3d.layers.graphics.Graphics3DCalloutSymbolLayerFactory");function e(o,l){if(!r(o))return t.error("Graphics3DCalloutSymbolLayerFactory#make",`symbol of type '${o.type}' does not support callouts`),null;if(!o.callout)return null;const e=a[o.callout.type];return e?new e(o,l):(t.error("Graphics3DCalloutSymbolLayerFactory#make",`unknown or unsupported callout type ${o.callout.type}`),null)}const a={line:l};export{e as make};
