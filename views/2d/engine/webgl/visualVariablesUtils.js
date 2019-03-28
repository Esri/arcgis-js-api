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

define(["require","exports","../../../../core/screenUtils","./color","./enums","./Utils","../../../3d/layers/support/FastSymbolUpdates"],function(e,s,m,z,E,l,g){function x(e){return l.isNumber(e.minDataValue)&&l.isNumber(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?E.WGLVVFlag.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?E.WGLVVFlag.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&Array.isArray(e.stops)?E.WGLVVFlag.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?E.WGLVVFlag.SIZE_UNIT_VALUE:E.WGLVVFlag.NONE}function a(e){return{value:e.value,size:m.toPt(e.size)}}function d(e){return e.map(function(e){return a(e)})}function y(e){if("string"==typeof e||"number"==typeof e)return m.toPt(e);var s=e;return{type:"size",expression:s.expression,stops:d(s.stops)}}function h(e){var s={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(l.isString(e.field)){if(!e.stops)return null;if(8<e.stops.length)return null;for(var a=e.stops,i=0;i<8;++i){var t=a[Math.min(i,a.length-1)];s.values[i]=t.value,s.opacities[i]=t.opacity}}else{if(!(e.stops&&0<=e.stops.length))return null;var r=e.stops&&0<=e.stops.length&&e.stops[0].opacity;for(i=0;i<8;i++)s.values[i]=1/0,s.opacities[i]=r}return s}Object.defineProperty(s,"__esModule",{value:!0}),s.getTypeOfSizeVisualVariable=x,s.getVisualVariableSizeValueRepresentationRatio=function(e,s){if(!e||!s)return e;switch(s){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e},s.stopToSizeStop=a,s.normalizeSizeStops=d,s.normalizeSizeElement=y,s.getVisualVariablesFields=function(e){var a=e&&0<e.length?{}:null;return a&&e.forEach(function(e){var s=e.type;e.field&&(a[s]=e.field)}),a},s.convertVisualVariables=function(e){var s=e&&0<e.length?{}:null,a=s?{}:null;if(!s)return{vvFields:s,vvRanges:a};for(var i=0,t=e;i<t.length;i++){var r=t[i],l=r.type;if(r.field&&(s[l]=r.field),"size"===l){a.size||(a.size={});var n=r;switch(x(n)){case E.WGLVVFlag.SIZE_MINMAX_VALUE:a.size.minMaxValue={minDataValue:n.minDataValue,maxDataValue:n.maxDataValue,minSize:y(n.minSize),maxSize:y(n.maxSize)};break;case E.WGLVVFlag.SIZE_SCALE_STOPS:a.size.scaleStops={stops:d(n.stops)};break;case E.WGLVVFlag.SIZE_FIELD_STOPS:for(var o=[],u=[],p=d(n.stops),v=p.length,c=0;c<6;c++){var f=p[Math.min(c,v-1)];o.push(f.value),u.push(m.pt2px(f.size))}a.size.fieldStops={values:o,sizes:u};break;case E.WGLVVFlag.SIZE_UNIT_VALUE:a.size.unitValue={unit:n.valueUnit,valueRepresentation:n.valueRepresentation}}}else if("color"===l){var V=g.convertVisualVariables([r],{modelSize:null,symbolSize:null,unitInMeters:1,transformation:null});for(a.color=V.color,c=0;c<32;c+=4)z.premultiplyAlpha(a.color.colors,c,!0)}else if("opacity"===l)a.opacity=h(r);else if("rotation"===l){var S=r;a.rotation={type:S.rotationType}}}return{vvFields:s,vvRanges:a}}});