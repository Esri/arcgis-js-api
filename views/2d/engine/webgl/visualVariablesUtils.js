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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../core/screenUtils","./color","./enums","./Utils","../../../3d/layers/support/FastSymbolUpdates"],function(e,a,i,s,t,l,r){function n(e){return l.isNumber(e.minDataValue)&&l.isNumber(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?t.WGLVVFlag.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?t.WGLVVFlag.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&Array.isArray(e.stops)?t.WGLVVFlag.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?t.WGLVVFlag.SIZE_UNIT_VALUE:t.WGLVVFlag.NONE}function o(e,a){if(!e||!a)return e;switch(a){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function u(e){return{value:e.value,size:i.toPt(e.size)}}function p(e){return e.map(function(e){return u(e)})}function c(e){if("string"==typeof e||"number"==typeof e)return i.toPt(e);var a=e;return{type:"size",expression:a.expression,stops:p(a.stops)}}function v(e){var a=e&&e.length>0?{}:null;return a&&e.forEach(function(e){var i=e.type;e.field&&(a[i]=e.field)}),a}function V(e){var a=e&&e.length>0?{}:null,l=a?{}:null;if(!a)return{vvFields:a,vvRanges:l};for(var o=0,u=e;o<u.length;o++){var v=u[o],V=v.type;if(v.field&&(a[V]=v.field),"size"===V){l.size||(l.size={});var S=v;switch(n(S)){case t.WGLVVFlag.SIZE_MINMAX_VALUE:l.size.minMaxValue={minDataValue:S.minDataValue,maxDataValue:S.maxDataValue,minSize:c(S.minSize),maxSize:c(S.maxSize)};break;case t.WGLVVFlag.SIZE_SCALE_STOPS:l.size.scaleStops={stops:p(S.stops)};break;case t.WGLVVFlag.SIZE_FIELD_STOPS:for(var m=[],y=[],z=p(S.stops),g=z.length,x=0;x<6;x++){var E=z[Math.min(x,g-1)];m.push(E.value),y.push(i.pt2px(E.size))}l.size.fieldStops={values:m,sizes:y};break;case t.WGLVVFlag.SIZE_UNIT_VALUE:l.size.unitValue={unit:S.valueUnit,valueRepresentation:S.valueRepresentation}}}else if("color"===V){var d=r.convertVisualVariables([v],{modelSize:null,symbolSize:null,unitInMeters:1,transformation:null});l.color=d.color;for(var x=0;x<32;x+=4)s.premultiplyAlpha(l.color.colors,x,!0)}else if("opacity"===V)l.opacity=f(v);else if("rotation"===V){var h=v;l.rotation={type:h.rotationType}}}return{vvFields:a,vvRanges:l}}function f(e){var a={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(l.isString(e.field))if(e.stops){if(e.stops.length>8)return null;for(var i=e.stops,s=0;s<8;++s){var t=Math.min(s,i.length-1),r=i[t];a.values[s]=r.value,a.opacities[s]=r.opacity}}else{if(!e.opacityValues)return null;if(!l.isDefined(e.minDataValue)||!l.isDefined(e.maxDataValue))return null;if(2!==e.opacityValues.length)return null;a.values[0]=e.minDataValue,a.opacities[0]=e.opacityValues[0],a.values[1]=e.maxDataValue,a.opacities[1]=e.opacityValues[1];for(var s=2;s<8;++s)a.values[s]=e.maxDataValue,a.opacities[s]=e.opacityValues[1]}else{if(!(e.stops&&e.stops.length>=0||e.opacityValues&&e.opacityValues.length>=0))return null;for(var n=e.stops&&e.stops.length>=0?e.stops[0].opacity:e.opacityValues[0],s=0;s<8;s++)a.values[s]=1/0,a.opacities[s]=n}return a}Object.defineProperty(a,"__esModule",{value:!0}),a.getTypeOfSizeVisualVariable=n,a.getVisualVariableSizeValueRepresentationRatio=o,a.stopToSizeStop=u,a.normalizeSizeStops=p,a.normalizeSizeElement=c,a.getVisualVariablesFields=v,a.convertVisualVariables=V});