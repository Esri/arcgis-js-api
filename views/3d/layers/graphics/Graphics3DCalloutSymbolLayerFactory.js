/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../core/Logger","../../../../symbols/callouts/calloutUtils","./Graphics3DLineCalloutSymbolLayer"],(function(l,o,e,t){"use strict";const r=o.getLogger("esri.views.3d.layers.graphics.Graphics3DCalloutSymbolLayerFactory");function a(l,o){if(!e.isCalloutSupport(l))return r.error("Graphics3DCalloutSymbolLayerFactory#make",`symbol of type '${l.type}' does not support callouts`),null;if(!l.callout)return null;const t=u[l.callout.type];return t?new t(l,o):(r.error("Graphics3DCalloutSymbolLayerFactory#make",`unknown or unsupported callout type ${l.callout.type}`),null)}const u={line:t.Graphics3DLineCalloutSymbolLayer};l.make=a,Object.defineProperty(l,"__esModule",{value:!0})}));
