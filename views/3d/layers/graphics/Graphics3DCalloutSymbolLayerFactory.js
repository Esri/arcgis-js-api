/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../core/Logger","../../../../symbols/callouts/calloutUtils","./Graphics3DLineCalloutSymbolLayer"],(function(l,o,e,t){"use strict";const r=o.getLogger("esri.views.3d.layers.graphics.Graphics3DCalloutSymbolLayerFactory");const a={line:t.Graphics3DLineCalloutSymbolLayer};l.make=function(l,o){if(!e.isCalloutSupport(l))return r.error("Graphics3DCalloutSymbolLayerFactory#make",`symbol of type '${l.type}' does not support callouts`),null;if(!l.callout)return null;const t=a[l.callout.type];return t?new t(l,o):(r.error("Graphics3DCalloutSymbolLayerFactory#make",`unknown or unsupported callout type ${l.callout.type}`),null)},Object.defineProperty(l,"__esModule",{value:!0})}));
