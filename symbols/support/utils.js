// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../Color","../../symbols","../../core/compilerUtils","../../core/has","../../core/Logger","../../core/maybe","../../core/screenUtils","./gfxUtils","./Symbol3DMaterial"],function(e,t,o,r,i,l,n,a,s,c,u){function y(e){var t=e.symbolLayers&&e.symbolLayers.length;if(t){var o=e.symbolLayers.getItemAt(t-1);if("outline"in o)return a.get(o,"outline","size")}}function m(e){if(!e)return 0;if(r.isSymbol3D(e)){var t=y(e);return a.isSome(t)?t:0}var o=c.getStroke(e);return o&&s.px2pt(o.width)||0}function p(e){if(!e||!e.symbolLayers)return!1;switch(e.type){case"point-3d":return e.symbolLayers.some(function(e){return"object"===e.type});case"line-3d":return e.symbolLayers.some(function(e){return"path"===e.type});case"polygon-3d":return e.symbolLayers.some(function(e){return"object"===e.type||"extrude"===e.type});default:return!1}}function f(e,t){var o=t.resource.href;return!l("esri-canvas-svg-support")&&e.styleOrigin&&x.test(o)?o.replace(x,"/resource/png/$1.png"):o}function b(e,t){if(null==t)return e;var r=e.toRgba();return r[3]=r[3]*t,new o(r)}function h(e,t,o){var r=e.symbolLayers;if(r){var i=function(e){var r=a.isSome(e)?e:null;return t=t||r||null!=o&&D,b(t,o)};r.forEach(function(e){if("water"===e.type)e.color=i(e.color);else{var t=a.isSome(e.material)?e.material.color:null,r=i(t);a.isNone(e.material)?e.material=new u.default({color:r}):e.material.color=r,null!=o&&"outline"in e&&a.isSome(e.outline)&&a.isSome(e.outline.color)&&(e.outline.color=b(e.outline.color,o))}})}}function d(e,t,o){t=t||e.color,t&&(e.color=b(t,o)),null!=o&&"outline"in e&&e.outline&&e.outline.color&&(e.outline.color=b(e.outline.color,o))}function g(e,t,i){e&&(t||null!=i)&&(t&&(t=new o(t)),r.isSymbol3D(e)?h(e,t,i):r.isSymbol2D(e)&&d(e,t,i))}function S(e,t,o){var r=e.symbolLayers;r&&r.forEach(function(e){if(e)switch(e.type){case"icon":case"line":case"path":case"extrude":case"text":e.size=t;break;case"object":switch(o){case"width":e.width=t;break;case"depth":e.depth=t;break;case"height":e.height=t;break;case"width-and-depth":e.width=t,e.depth=t;break;default:e.width=t,e.depth=t,e.height=t}break;default:L.warn("symbolUtils: applySizeToSymbol","symbolLayer not supported")}})}function w(e,t){switch(e.type){case"simple-marker":e.size=t;break;case"picture-marker":var o=e.width/e.height;o>1?(e.width=t,e.height=t*o):(e.width=t*o,e.height=t);break;case"simple-line":e.width=t;break;case"text":e.font.size=t;break;case"simple-fill":case"picture-fill":case"cim":break;default:i.neverReached(e)}}function v(e,t,o){e&&null!=t&&(r.isSymbol3D(e)?S(e,t,o):r.isSymbol2D(e)&&w(e,t))}function k(e,t,o){if(e&&null!=t)if(r.isSymbol3D(e)){var i=e.symbolLayers;i&&i.forEach(function(e){if(e&&"object"===e.type)switch(o){case"tilt":e.tilt=t;break;case"roll":e.roll=t;break;default:e.heading=t}})}else r.isSymbol2D(e)&&("simple-marker"!==e.type&&"picture-marker"!==e.type&&"text"!==e.type||(e.angle=t))}Object.defineProperty(t,"__esModule",{value:!0});var L=n.getLogger("esri.symbols.support.utils"),x=/\/resource\/(.*?)\.svg$/,D=new o("white");t.getSymbolOutlineSize=m,t.isVolumetricSymbol=p,t.getIconHref=f,t.applyOpacityToColor=b,t.applyColorToSymbol=g,t.applySizeToSymbol=v,t.applyRotationToSymbol=k});