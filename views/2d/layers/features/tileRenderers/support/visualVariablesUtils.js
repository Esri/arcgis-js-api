// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../../core/screenUtils","../../../../engine/webgl/color","../../../../engine/webgl/definitions","../../../../engine/webgl/enums","../../../../engine/webgl/visualVariablesUtils","../../../../../3d/layers/support/FastSymbolUpdates"],(function(e,i,t,a,s,l,n,r,o){"use strict";function u(e){return{value:e.value,size:a.toPt(e.size)}}function p(e){return e.map((function(e){return u(e)}))}function v(e){if("string"==typeof e||"number"==typeof e)return a.toPt(e);var i=e;return{type:"size",expression:i.expression,stops:p(i.stops)}}Object.defineProperty(i,"__esModule",{value:!0}),i.convertVisualVariables=i.getVisualVariablesFields=i.normalizeSizeElement=i.normalizeSizeStops=i.stopToSizeStop=i.getVisualVariableSizeValueRepresentationRatio=void 0,i.getVisualVariableSizeValueRepresentationRatio=function(e,i){if(!e||!i)return e;switch(i){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e},i.stopToSizeStop=u,i.normalizeSizeStops=p,i.normalizeSizeElement=v,i.getVisualVariablesFields=function(e){var i=e&&e.length>0?{}:null;return i&&e.forEach((function(e){var t=e.type;e.field&&(i[t]=e.field)})),i};var c=function(e){for(var i=[],t=[],s=p(e),n=s.length,r=0;r<6;r++){var o=s[Math.min(r,n-1)];i.push(o.value),t.push(null==o.size?l.NAN_MAGIC_NUMBER:a.pt2px(o.size))}return{values:new Float32Array(i),sizes:new Float32Array(t)}};function f(e){var i={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;if(e.stops.length>8)return null;for(var t=e.stops,a=0;a<8;++a){var s=t[Math.min(a,t.length-1)];i.values[a]=s.value,i.opacities[a]=s.opacity}}else{if(!(e.stops&&e.stops.length>=0))return null;var l=e.stops&&e.stops.length>=0&&e.stops[0].opacity;for(a=0;a<8;a++)i.values[a]=1/0,i.opacities[a]=l}return i}i.convertVisualVariables=function(e){var i=e&&e.length>0?{}:null,a=i?{}:null;if(!i)return{vvFields:i,vvRanges:a};for(var l=0,u=e;l<u.length;l++){var V=u[l],z=V.type;if(V.field&&(i[z]=V.field),"size"===z){a.size||(a.size={});var S=V;switch(r.getTypeOfSizeVisualVariable(S)){case n.WGLVVFlag.SIZE_MINMAX_VALUE:a.size.minMaxValue={minDataValue:S.minDataValue,maxDataValue:S.maxDataValue,minSize:v(S.minSize),maxSize:v(S.maxSize)};break;case n.WGLVVFlag.SIZE_SCALE_STOPS:a.size.scaleStops={stops:p(S.stops)};break;case n.WGLVVFlag.SIZE_FIELD_STOPS:if(S.levels){var g={};for(var m in S.levels)g[m]=c(S.levels[m]);a.size.fieldStops={type:"level-dependent",levels:g}}else a.size.fieldStops=t.__assign({type:"static"},c(S.stops));break;case n.WGLVVFlag.SIZE_UNIT_VALUE:a.size.unitValue={unit:S.valueUnit,valueRepresentation:S.valueRepresentation}}}else if("color"===z){var d=o.convertVisualVariables([V],{modelSize:null,symbolSize:null,unitInMeters:1,transformation:null});if(!d)continue;a.color=d.color;for(var y=0;y<32;y+=4)s.premultiplyAlpha(a.color.colors,y,!0)}else if("opacity"===z)a.opacity=f(V);else if("rotation"===z){var b=V;a.rotation={type:b.rotationType}}}return{vvFields:i,vvRanges:a}}}));