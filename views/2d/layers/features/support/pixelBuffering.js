/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/screenUtils","../../../engine/webgl/definitions","../../../../../symbols/cim/Rect","../../../../../symbols/cim/CIMSymbolHelper","../../graphics/graphicsUtils"],(function(t,e,i,r,n,s){"use strict";const a={"simple-marker":1,"picture-marker":1,text:0,"simple-line":0,"simple-fill":0,"picture-fill":0,cim:1,"web-style":1},o=.707;function u(t){if(!("visualVariables"in t))return 0;if(!t.hasVisualVariables("size"))return 0;const e=t.getVisualVariablesForType("size");if(!e[0])return 0;const i=e[0];if("stops"===i.transformationType)return i.stops.map((t=>t.size)).reduce(b,0);if("clamped-linear"===i.transformationType){let t=-1/0,e=-1/0;return t="number"==typeof i.maxSize?i.maxSize:i.maxSize.stops.map((t=>t.size)).reduce(b,0),e="number"==typeof i.minSize?i.minSize:i.minSize.stops.map((t=>t.size)).reduce(b,0),Math.max(t,e)}return"real-world-size"===i.transformationType?30:void 0}function c(t){return t.type in a}async function l(t,i,r){if(!t||r&&"cluster"===r.type)return 0;if("heatmap"===t.type)return Math.round(3*t.blurRadius);if("dot-density"===t.type)return 0;if("dictionary"===t.type)return"esriGeometryPoint"===i||"esriGeometryMultipoint"===i?100:200;const n=t.getSymbols(),s=u(t),a=[];for(const e of n)a.push(M(e,s));const o=await Promise.all(a);return e.pt2px(o.reduce(b,0))}const m=[0,0,0,0];function p(t,e){return null==t?e:t}function f(t,e){return null==t.outline?e:p(t.outline.width,e)}const h={sdf:!0,code:99,metrics:i.AVERAGE_GLYPH_MOSAIC_ITEM.metrics,rect:new r(0,0,24,24),page:0,textureBinding:2};function y(t){const e=t.text&&t.text.length;if(!e)return{glyphMosaicItems:[h]};const i=[];for(let r=0;r<e;r++)i.push({...h,code:t.text.charCodeAt(r)});return{glyphMosaicItems:i}}async function d(t,e){if("simple-marker"===t.type){const i=Math.max(p(t.size,12),e);return x(t)+i*o}if("picture-marker"===t.type){const i=Math.max(p(t.height,12),e),r=p(t.width,12)*(i/p(t.height,12))/2,n=i/2;return x(t)+Math.sqrt(r*r+n*n)}if("text"===t.type){const e=y(t);s.getTextSymbolSize(m,t.toJSON(),e);const i=Math.abs(m[0]),r=Math.abs(m[1]),n=m[2],a=m[3];return Math.max(i,r)+Math.max(n,a)}if("simple-line"===t.type){const i=t,r=Math.max(p(i.width,.75),e)/2;return i.marker?Math.max(6*i.width,2*e):r}if("simple-fill"===t.type||"picture-fill"===t.type)return Math.max(f(t,0),e)/2;if("cim"===t.type){const e=n.CIMSymbolHelper.getEnvelope(t.data);return e?Math.sqrt(e.width*e.width+e.height*e.height):0}return"web-style"===t.type?d(await t.fetchCIMSymbol(),e):0}async function M(t,e){return c(t)?Math.min(await d(t,e),75):0}function x(t){const e=p(t.xoffset,0),i=p(t.yoffset,0);return Math.sqrt(e*e+i*i)}function b(t,e){return Math.max(t,e)}t.computePxBuffer=l,t.getPtMaxVVSize=u,Object.defineProperty(t,"__esModule",{value:!0})}));
