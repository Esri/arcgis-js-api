/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../core/Logger","../../../../symbols/callouts/calloutUtils","./Graphics3DLineCalloutSymbolLayer"],(function(o,l,t,e){"use strict";const r=l.getLogger("esri.views.3d.layers.graphics.Graphics3DCalloutSymbolLayerFactory");function a(o,l){if(!t.hasCalloutSupport(o))return r.error("Graphics3DCalloutSymbolLayerFactory#make",`symbol of type '${o.type}' does not support callouts`),null;if(!o.callout)return null;const e=u[o.callout.type];return e?new e(o,l):(r.error("Graphics3DCalloutSymbolLayerFactory#make",`unknown or unsupported callout type ${o.callout.type}`),null)}const u={line:e.Graphics3DLineCalloutSymbolLayer};o.make=a,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})}));
