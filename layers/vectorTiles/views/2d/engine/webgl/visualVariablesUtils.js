// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports","../../../../core/screenUtils","./color","./enums","./Utils","../../../3d/layers/support/FastSymbolUpdates"],(function(e,a,i,s,t,l,r){function n(e){return l.isNumber(e.minDataValue)&&l.isNumber(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?t.WGLVVFlag.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?t.WGLVVFlag.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&Array.isArray(e.stops)?t.WGLVVFlag.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?t.WGLVVFlag.SIZE_UNIT_VALUE:t.WGLVVFlag.NONE}function o(e){return{value:e.value,size:i.toPt(e.size)}}function u(e){return e.map((function(e){return o(e)}))}function p(e){if("string"==typeof e||"number"==typeof e)return i.toPt(e);var a=e;return{type:"size",expression:a.expression,stops:u(a.stops)}}function c(e){var a={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(l.isString(e.field))if(e.stops){if(e.stops.length>8)return null;for(var i=e.stops,s=0;s<8;++s){var t=i[Math.min(s,i.length-1)];a.values[s]=t.value,a.opacities[s]=t.opacity}}else{if(!e.opacityValues)return null;if(!l.isDefined(e.minDataValue)||!l.isDefined(e.maxDataValue))return null;if(2!==e.opacityValues.length)return null;a.values[0]=e.minDataValue,a.opacities[0]=e.opacityValues[0],a.values[1]=e.maxDataValue,a.opacities[1]=e.opacityValues[1];for(s=2;s<8;++s)a.values[s]=e.maxDataValue,a.opacities[s]=e.opacityValues[1]}else{if(!(e.stops&&e.stops.length>=0||e.opacityValues&&e.opacityValues.length>=0))return null;var r=e.stops&&e.stops.length>=0?e.stops[0].opacity:e.opacityValues[0];for(s=0;s<8;s++)a.values[s]=1/0,a.opacities[s]=r}return a}Object.defineProperty(a,"__esModule",{value:!0}),a.getTypeOfSizeVisualVariable=n,a.getVisualVariableSizeValueRepresentationRatio=function(e,a){if(!e||!a)return e;switch(a){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e},a.stopToSizeStop=o,a.normalizeSizeStops=u,a.normalizeSizeElement=p,a.getVisualVariablesFields=function(e){var a=e&&e.length>0?{}:null;return a&&e.forEach((function(e){var i=e.type;e.field&&(a[i]=e.field)})),a},a.convertVisualVariables=function(e){var a=e&&e.length>0?{}:null,l=a?{}:null;if(!a)return{vvFields:a,vvRanges:l};for(var o=0,V=e;o<V.length;o++){var v=V[o],f=v.type;if(v.field&&(a[f]=v.field),"size"===f){l.size||(l.size={});var S=v;switch(n(S)){case t.WGLVVFlag.SIZE_MINMAX_VALUE:l.size.minMaxValue={minDataValue:S.minDataValue,maxDataValue:S.maxDataValue,minSize:p(S.minSize),maxSize:p(S.maxSize)};break;case t.WGLVVFlag.SIZE_SCALE_STOPS:l.size.scaleStops={stops:u(S.stops)};break;case t.WGLVVFlag.SIZE_FIELD_STOPS:for(var m=[],y=[],z=u(S.stops),g=z.length,x=0;x<6;x++){var E=z[Math.min(x,g-1)];m.push(E.value),y.push(i.pt2px(E.size))}l.size.fieldStops={values:m,sizes:y};break;case t.WGLVVFlag.SIZE_UNIT_VALUE:l.size.unitValue={unit:S.valueUnit,valueRepresentation:S.valueRepresentation}}}else if("color"===f){var d=r.convertVisualVariables([v],{modelSize:null,symbolSize:null,unitInMeters:1,transformation:null});l.color=d.color;for(x=0;x<32;x+=4)s.premultiplyAlpha(l.color.colors,x,!0)}else if("opacity"===f)l.opacity=c(v);else if("rotation"===f){var h=v;l.rotation={type:h.rotationType}}}return{vvFields:a,vvRanges:l}}}));