/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/arrayUtils"],(function(i,n){"use strict";let o=function(){function i(){this._uniforms={proj:[],shadowMapDistance:[],viewportPixelSz:[],lightingMainDirection:[]}}var o=i.prototype;return o.dispose=function(){this._uniforms=null},o.getPrograms=function(i){return this._uniforms[i]||[]},o.subscribeProgram=function(i){for(const n in this._uniforms)i.hasUniform(n)&&this._uniforms[n].push(i)},o.unsubscribeProgram=function(i){for(const o in this._uniforms)n.removeUnordered(this._uniforms[o],i)},i}();i.CommonUniformStore=o,Object.defineProperty(i,"__esModule",{value:!0})}));
