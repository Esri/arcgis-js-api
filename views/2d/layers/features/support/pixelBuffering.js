// COPYRIGHT © 2018 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../../core/screenUtils","../../../engine/webgl/CIMSymbolHelper","../../../engine/webgl/definitions","../../graphics/graphicsUtils"],function(e,t,r,i,n,a){function u(e){if(!("visualVariables"in e))return 0;if(!e.hasVisualVariables("size"))return 0;var t=e.getVisualVariablesForType("size");if(!t[0])return 0;var r=t[0];return"stops"===r.transformationType?r.stops.map(function(e){return e.size}).reduce(y,0):"clamped-linear"===r.transformationType?"number"==typeof r.maxSize?r.maxSize:r.maxSize.stops.map(function(e){return e.size}).reduce(y,0):"real-world-size"===r.transformationType?30:void 0}function l(e){return e.type in g}function o(e){function t(t){return c(t,u(e))}if("simple"!==e.type&&"class-breaks"!==e.type&&"unique-value"!==e.type)return 0;var i=e.getSymbols();return r.pt2px(i.map(t).reduce(y,0))}function s(e,t){return null==e?t:e}function p(e,t){return null==e.outline?t:s(e.outline.width,t)}function f(e,t){return null==e.font?t:s(e.font.size,t)}function m(e,t){if("simple-marker"===e.type){var r=Math.max(s(e.size,12),t);return h(e)+r*x}if("picture-marker"===e.type){var u=Math.max(s(e.height,12),t),l=s(e.width,12)*(u/s(e.height,12)),o=l/2,m=u/2;return h(e)+Math.sqrt(o*o+m*m)}if("text"===e.type){a.getTextSymbolEstimatedSize(M,e,n.AVERAGE_GLYPH_MOSAIC_ITEM);var c=M[2]*(s(e.horizontalAlignment,"top")in d?1:.5),y=M[3]*(s(e.horizontalAlignment,"center")in v?1:.5),g=f(e,9),b=Math.max(g,t)/g;return h(e)+Math.sqrt(c*c+y*y)*b}if("simple-line"===e.type)return Math.max(s(e.width,.75),t)/2;if("simple-fill"===e.type||"picture-fill"===e.type)return Math.max(p(e,.75),t)/2;if("cim"===e.type){var z=i.CIMSymbolHelper.getEnvelope(e);return Math.sqrt(z.width*z.width+z.height*z.height)}}function c(e,t){return l(e)?Math.min(Math.max(5,m(e,t)),75):0}function h(e){var t=s(e.xoffset,0),r=s(e.yoffset,0);return Math.sqrt(t*t+r*r)}function y(e,t){return Math.max(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var g={"simple-marker":1,"picture-marker":1,text:1,"simple-line":1,"simple-fill":1,"picture-fill":1,cim:1},x=.707;t.computePxBuffer=o;var M=[0,0,0,0],d={left:1,right:1},v={top:1,bottom:1,baseline:1}});