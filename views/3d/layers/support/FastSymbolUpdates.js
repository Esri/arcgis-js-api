/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../core/has","../../../../core/mathUtils","../../../../chunks/mat3","../../../../chunks/mat3f64","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../renderers/support/lengthUtils","../../support/debugFlags"],(function(e,t,o,n,i,r,l,s,a,u,f){"use strict";function c(e){return null!=e}function p(e){return"number"==typeof e}function v(e){return"string"==typeof e}function d(e){return null==e||v(e)}function z(e,t){e&&e.push(t)}function y(e,t,o,n=l.create()){const i=e||0,s=t||0,a=o||0;return 0!==i&&r.rotateZ(n,n,-i/180*Math.PI),0!==s&&r.rotateX(n,n,s/180*Math.PI),0!==a&&r.rotateY(n,n,a/180*Math.PI),n}function m(e,t,o,n,i){const r=e.minSize,l=e.maxSize;if(e.expression)return z(i,"Could not convert size info: expression not supported"),!1;if(e.useSymbolValue){const e=n.symbolSize[o];return t.minSize[o]=e,t.maxSize[o]=e,t.offset[o]=t.minSize[o],t.factor[o]=0,t.type[o]=1,!0}if(c(e.field))return c(e.stops)?2===e.stops.length&&p(e.stops[0].size)&&p(e.stops[1].size)?(S(e.stops[0].size,e.stops[1].size,e.stops[0].value,e.stops[1].value,t,o),t.type[o]=1,!0):(z(i,"Could not convert size info: stops only supported with 2 elements"),!1):p(r)&&p(l)&&c(e.minDataValue)&&c(e.maxDataValue)?(S(r,l,e.minDataValue,e.maxDataValue,t,o),t.type[o]=1,!0):null!=u.meterIn[e.valueUnit]?(t.minSize[o]=-1/0,t.maxSize[o]=1/0,t.offset[o]=0,t.factor[o]=1/u.meterIn[e.valueUnit],t.type[o]=1,!0):"unknown"===e.valueUnit?(z(i,"Could not convert size info: proportional size not supported"),!1):(z(i,"Could not convert size info: scale-dependent size not supported"),!1);if(!c(e.field)){if(e.stops&&e.stops[0]&&p(e.stops[0].size))return t.minSize[o]=e.stops[0].size,t.maxSize[o]=e.stops[0].size,t.offset[o]=t.minSize[o],t.factor[o]=0,t.type[o]=1,!0;if(p(r))return t.minSize[o]=r,t.maxSize[o]=r,t.offset[o]=r,t.factor[o]=0,t.type[o]=1,!0}return z(i,"Could not convert size info: unsupported variant of sizeInfo"),!1}function S(e,t,o,n,i,r){const l=Math.abs(n-o)>0?(t-e)/(n-o):0;i.minSize[r]=l>0?e:t,i.maxSize[r]=l>0?t:e,i.offset[r]=e-o*l,i.factor[r]=l}function h(e,t,o,n){if(e.normalizationField||e.valueRepresentation)return z(n,"Could not convert size info: unsupported property"),null;if(!d(e.field))return z(n,"Could not convert size info: field is not a string"),null;if(t.size){if(e.field)if(t.size.field){if(e.field!==t.size.field)return z(n,"Could not convert size info: multiple fields in use"),null}else t.size.field=e.field}else t.size={field:e.field,minSize:[0,0,0],maxSize:[0,0,0],offset:[0,0,0],factor:[0,0,0],type:[0,0,0]};let i;switch(e.axis){case"width":return i=m(e,t.size,0,o,n),i?t:null;case"height":return i=m(e,t.size,2,o,n),i?t:null;case"depth":return i=m(e,t.size,1,o,n),i?t:null;case"width-and-depth":return i=m(e,t.size,0,o,n),i&&m(e,t.size,1,o,n),i?t:null;case null:case void 0:case"all":return i=m(e,t.size,0,o,n),i=i&&m(e,t.size,1,o,n),i=i&&m(e,t.size,2,o,n),i?t:null;default:return z(n,`Could not convert size info: unknown axis "${e.axis}""`),null}}function b(e,t,o){for(let i=0;i<3;++i){let o=t.unitInMeters;1===e.type[i]&&(o*=t.modelSize[i],e.type[i]=2),e.minSize[i]=e.minSize[i]/o,e.maxSize[i]=e.maxSize[i]/o,e.offset[i]=e.offset[i]/o,e.factor[i]=e.factor[i]/o}let n;if(0!==e.type[0])n=0;else if(0!==e.type[1])n=1;else{if(0===e.type[2])return z(o,"No size axis contains a valid size or scale"),!1;n=2}for(let i=0;i<3;++i)0===e.type[i]&&(e.minSize[i]=e.minSize[n],e.maxSize[i]=e.maxSize[n],e.offset[i]=e.offset[n],e.factor[i]=e.factor[n],e.type[i]=e.type[n]);return!0}function x(e,t,o){e[4*t+0]=o.r/255,e[4*t+1]=o.g/255,e[4*t+2]=o.b/255,e[4*t+3]=o.a}function C(e,t,o){if(e.normalizationField)return z(o,"Could not convert color info: unsupported property"),null;if(v(e.field)){if(!e.stops)return z(o,"Could not convert color info: missing stops or colors"),null;{if(e.stops.length>8)return z(o,"Could not convert color info: too many color stops"),null;t.color={field:e.field,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};const n=e.stops;for(let e=0;e<8;++e){const o=n[Math.min(e,n.length-1)];t.color.values[e]=o.value,x(t.color.colors,e,o.color)}}}else{if(!(e.stops&&e.stops.length>=0))return z(o,"Could not convert color info: no field and no colors/stops"),null;{const o=e.stops&&e.stops.length>=0&&e.stops[0].color;t.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};for(let e=0;e<8;e++)t.color.values[e]=1/0,x(t.color.colors,e,o)}}return t}function M(e,t,o){if(e.normalizationField)return z(o,"Could not convert opacity info: unsupported property"),null;if(v(e.field)){if(!e.stops)return z(o,"Could not convert opacity info: missing stops or opacities"),null;{if(e.stops.length>8)return z(o,"Could not convert opacity info: too many opacity stops"),null;t.opacity={field:e.field,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};const n=e.stops;for(let e=0;e<8;++e){const o=n[Math.min(e,n.length-1)];t.opacity.values[e]=o.value,t.opacity.opacityValues[e]=o.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return z(o,"Could not convert opacity info: no field and no opacities/stops"),null;{const o=e.stops&&e.stops.length>=0&&e.stops[0].opacity;t.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};for(let e=0;e<8;e++)t.opacity.values[e]=1/0,t.opacity.opacityValues[e]=o}}return t}function V(e,t,o){const n=2===o&&"arithmetic"===e.rotationType;t.offset[o]=n?90:0,t.factor[o]=n?-1:1,t.type[o]=1}function g(e,t,o){if(!v(e.field))return z(o,"Could not convert rotation info: field is not a string"),null;if(t.rotation){if(e.field)if(t.rotation.field){if(e.field!==t.rotation.field)return z(o,"Could not convert rotation info: multiple fields in use"),null}else t.rotation.field=e.field}else t.rotation={field:e.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};switch(e.axis){case"tilt":return V(e,t.rotation,0),t;case"roll":return V(e,t.rotation,1),t;case null:case void 0:case"heading":return V(e,t.rotation,2),t;default:return z(o,`Could not convert rotation info: unknown axis "${e.axis}""`),null}}function T(e,t,o){if(!e)return null;const n=!t.supportedTypes||!!t.supportedTypes.size,i=!t.supportedTypes||!!t.supportedTypes.color,r=!t.supportedTypes||!!t.supportedTypes.rotation,l=!!t.supportedTypes&&!!t.supportedTypes.opacity,s=e.reduce(((e,s)=>{if(!e)return e;if(s.valueExpression)return z(o,"Could not convert visual variables: arcade expressions not supported"),null;switch(s.type){case"size":return n?h(s,e,t,o):e;case"color":return i?C(s,e,o):e;case"opacity":return l?M(s,e,o):null;case"rotation":return r?g(s,e,o):e;default:return null}}),{size:null,color:null,opacity:null,rotation:null});return!(e.length>0&&s)||s.size||s.color||s.opacity||s.rotation?s&&s.size&&!b(s.size,t,o)?null:s:null}function O(e){return e&&null!=e.size}function E(e,t){if(!e)return{enabled:!1};if(f.DISABLE_FAST_UPDATES)return{enabled:!1};const o=T(e.visualVariables,t);return o?{enabled:!0,visualVariables:o,materialParameters:w(o,t),requiresShaderTransformation:O(o)}:{enabled:!1}}function F(e,t,o){if(!t||!e.enabled)return!1;const n=e.visualVariables,i=T(t.visualVariables,o);return!!i&&(!!(k(n.size,i.size,"size")&&k(n.color,i.color,"color")&&k(n.rotation,i.rotation,"rotation")&&k(n.opacity,i.opacity,"opacity"))&&(e.visualVariables=i,e.materialParameters=w(i,o),e.requiresShaderTransformation=O(i),!0))}function k(e,t,o){if(!!e!=!!t)return!1;if(e&&e.field!==t.field)return!1;if(e&&"rotation"===o){const o=e,n=t;for(let e=0;e<3;e++)if(o.type[e]!==n.type[e]||o.offset[e]!==n.offset[e]||o.factor[e]!==n.factor[e])return!1}return!0}function w(e,t){const o={vvSizeEnabled:!1,vvSizeMinSize:null,vvSizeMaxSize:null,vvSizeOffset:null,vvSizeFactor:null,vvSizeValue:null,vvColorEnabled:!1,vvColorValues:null,vvColorColors:null,vvOpacityEnabled:!1,vvOpacityValues:null,vvOpacityOpacities:null,vvSymbolAnchor:null,vvSymbolRotationMatrix:null},l=O(e);return e&&e.size?(o.vvSizeEnabled=!0,o.vvSizeMinSize=e.size.minSize,o.vvSizeMaxSize=e.size.maxSize,o.vvSizeOffset=e.size.offset,o.vvSizeFactor=e.size.factor):e&&l&&(o.vvSizeValue=t.transformation.scale),e&&l&&(o.vvSymbolAnchor=t.transformation.anchor,o.vvSymbolRotationMatrix=i.create(),r.identity(P),y(t.transformation.rotation[2],t.transformation.rotation[0],t.transformation.rotation[1],P),n.fromMat4(o.vvSymbolRotationMatrix,P)),e&&e.color&&(o.vvColorEnabled=!0,o.vvColorValues=e.color.values,o.vvColorColors=e.color.colors),e&&e.opacity&&(o.vvOpacityEnabled=!0,o.vvOpacityValues=e.opacity.values,o.vvOpacityOpacities=e.opacity.opacityValues),o}var I;!function(e){const t=l.create(),n=a.create();function i(e,i,l){if(!e.vvSizeEnabled)return l;r.copy(t,l);const s=e.vvSymbolRotationMatrix;r.set(P,s[0],s[1],s[2],0,s[3],s[4],s[5],0,s[6],s[7],s[8],0,0,0,0,1),r.multiply(t,t,P);for(let t=0;t<3;++t){const r=e.vvSizeOffset[t]+i[0]*e.vvSizeFactor[t];n[t]=o.clamp(r,e.vvSizeMinSize[t],e.vvSizeMaxSize[t])}return r.scale(t,t,n),r.translate(t,t,e.vvSymbolAnchor),t}function u(e,t,n){if(!t.vvSizeEnabled)return s.set(e,1,1,1);for(let i=0;i<3;++i){const r=t.vvSizeOffset[i]+n[0]*t.vvSizeFactor[i];e[i]=o.clamp(r,t.vvSizeMinSize[i],t.vvSizeMaxSize[i])}return e}e.evaluateModelTransform=i,e.evaluateModelTransformScale=u}(I||(I={}));const P=l.create(),U=I.evaluateModelTransform,A=I.evaluateModelTransformScale;e.convertVisualVariables=T,e.evaluateModelTransform=U,e.evaluateModelTransformScale=A,e.getMaterialParams=w,e.initFastSymbolUpdatesState=E,e.updateFastSymbolUpdatesState=F,Object.defineProperty(e,"__esModule",{value:!0})}));
