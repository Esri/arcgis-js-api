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

define(["require","exports","../../Color","../../symbols","../../core/compilerUtils","../../core/has","../../core/Logger","../../core/screenUtils","./gfxUtils","./Symbol3DMaterial"],function(e,t,r,o,i,l,n,a,s,c){function u(e){var t=e.symbolLayers&&e.symbolLayers.length;if(t){var r=e.symbolLayers.getItemAt(t-1);return"outline"in r&&r.outline&&r.outline.size}}function y(e){if(!e)return 0;if(o.isSymbol3D(e))return u(e)||0;var t=s.getStroke(e);return t&&a.px2pt(t.width)||0}function p(e){if(!e||!e.symbolLayers)return!1;switch(e.type){case"point-3d":return e.symbolLayers.some(function(e){return"object"===e.type});case"line-3d":return e.symbolLayers.some(function(e){return"path"===e.type});case"polygon-3d":return e.symbolLayers.some(function(e){return"object"===e.type||"extrude"===e.type});default:return!1}}function b(e,t){var r=t.resource.href;return!l("esri-canvas-svg-support")&&e.styleOrigin&&L.test(r)?r.replace(L,"/resource/png/$1.png"):r}function f(e,t){if(null==t)return e;var o=e.toRgba();return o[3]=o[3]*t,new r(o)}function m(e,t,r){var o=e.symbolLayers;o&&o.forEach(function(e){if(e){var o=e.material;t=t||o&&o.color||null!=r&&x;var i=f(t,r);o?e.material.color=i:e.material=new c.default({color:i}),null!=r&&"outline"in e&&e.outline&&e.outline.color&&(e.outline.color=f(e.outline.color,r))}})}function h(e,t,r){t=t||e.color,t&&(e.color=f(t,r)),null!=r&&"outline"in e&&e.outline&&e.outline.color&&(e.outline.color=f(e.outline.color,r))}function d(e,t,i){e&&(t||null!=i)&&(t&&(t=new r(t)),o.isSymbol3D(e)?m(e,t,i):o.isSymbol2D(e)&&h(e,t,i))}function g(e,t,r){var o=e.symbolLayers;o&&o.forEach(function(e){if(e)switch(e.type){case"icon":case"line":case"path":case"extrude":case"text":e.size=t;break;case"object":switch(r){case"width":e.width=t;break;case"depth":e.depth=t;break;case"height":e.height=t;break;case"width-and-depth":e.width=t,e.depth=t;break;default:e.width=t,e.depth=t,e.height=t}break;default:v.warn("symbolUtils: applySizeToSymbol","symbolLayer not supported")}})}function w(e,t){switch(e.type){case"simple-marker":e.size=t;break;case"picture-marker":var r=e.width/e.height;r>1?(e.width=t,e.height=t*r):(e.width=t*r,e.height=t);break;case"simple-line":e.width=t;break;case"text":e.font.size=t;break;case"simple-fill":case"picture-fill":case"cim":break;default:i.neverReached(e)}}function k(e,t,r){e&&null!=t&&(o.isSymbol3D(e)?g(e,t,r):o.isSymbol2D(e)&&w(e,t))}function S(e,t,r){if(e&&null!=t)if(o.isSymbol3D(e)){var i=e.symbolLayers;i&&i.forEach(function(e){if(e&&"object"===e.type)switch(r){case"tilt":e.tilt=t;break;case"roll":e.roll=t;break;default:e.heading=t}})}else o.isSymbol2D(e)&&("simple-marker"!==e.type&&"picture-marker"!==e.type&&"text"!==e.type||(e.angle=t))}Object.defineProperty(t,"__esModule",{value:!0});var v=n.getLogger("esri.symbols.support.utils"),L=/\/resource\/(.*?)\.svg$/,x=new r("white");t.getSymbolOutlineSize=y,t.isVolumetricSymbol=p,t.getIconHref=b,t.applyOpacityToColor=f,t.applyColorToSymbol=d,t.applySizeToSymbol=k,t.applyRotationToSymbol=S});