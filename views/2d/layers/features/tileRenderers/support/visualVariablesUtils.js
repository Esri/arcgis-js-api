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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../../core/screenUtils","../../../../engine","../../../../engine/webgl/definitions","../../../../../3d/layers/support/FastSymbolUpdates"],(function(e,t,i,a,s,r,n){Object.defineProperty(t,"__esModule",{value:!0});var l=s.enums.WGLVVFlag;function o(e){return{value:e.value,size:a.toPt(e.size)}}function u(e){return e.map((function(e){return o(e)}))}function p(e){if("string"==typeof e||"number"==typeof e)return a.toPt(e);var t=e;return{type:"size",expression:t.expression,stops:u(t.stops)}}t.getVisualVariableSizeValueRepresentationRatio=function(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e},t.stopToSizeStop=o,t.normalizeSizeStops=u,t.normalizeSizeElement=p,t.getVisualVariablesFields=function(e){var t=e&&e.length>0?{}:null;return t&&e.forEach((function(e){var i=e.type;e.field&&(t[i]=e.field)})),t};var v=function(e){for(var t=[],i=[],s=u(e),n=s.length,l=0;l<6;l++){var o=s[Math.min(l,n-1)];t.push(o.value),i.push(null==o.size?r.NAN_MAGIC_NUMBER:a.pt2px(o.size))}return{values:new Float32Array(t),sizes:new Float32Array(i)}};function c(e){var t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(s.Utils.isString(e.field)){if(!e.stops)return null;if(e.stops.length>8)return null;for(var i=e.stops,a=0;a<8;++a){var r=i[Math.min(a,i.length-1)];t.values[a]=r.value,t.opacities[a]=r.opacity}}else{if(!(e.stops&&e.stops.length>=0))return null;var n=e.stops&&e.stops.length>=0&&e.stops[0].opacity;for(a=0;a<8;a++)t.values[a]=1/0,t.opacities[a]=n}return t}t.convertVisualVariables=function(e){var t=e&&e.length>0?{}:null,a=t?{}:null;if(!t)return{vvFields:t,vvRanges:a};for(var r=0,o=e;r<o.length;r++){var f=o[r],z=f.type;if(f.field&&(t[z]=f.field),"size"===z){a.size||(a.size={});var S=f;switch(s.getTypeOfSizeVisualVariable(S)){case l.SIZE_MINMAX_VALUE:a.size.minMaxValue={minDataValue:S.minDataValue,maxDataValue:S.maxDataValue,minSize:p(S.minSize),maxSize:p(S.maxSize)};break;case l.SIZE_SCALE_STOPS:a.size.scaleStops={stops:u(S.stops)};break;case l.SIZE_FIELD_STOPS:if(S.levels){var d={};for(var m in S.levels)d[m]=v(S.levels[m]);a.size.fieldStops={type:"level-dependent",levels:d}}else a.size.fieldStops=i.__assign({type:"static"},v(S.stops));break;case l.SIZE_UNIT_VALUE:a.size.unitValue={unit:S.valueUnit,valueRepresentation:S.valueRepresentation}}}else if("color"===z){var y=n.convertVisualVariables([f],{modelSize:null,symbolSize:null,unitInMeters:1,transformation:null});if(!y)continue;a.color=y.color;for(var V=0;V<32;V+=4)s.color.premultiplyAlpha(a.color.colors,V,!0)}else if("opacity"===z)a.opacity=c(f);else if("rotation"===z){var g=f;a.rotation={type:g.rotationType}}}return{vvFields:t,vvRanges:a}}}));