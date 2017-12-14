// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/screenUtils","../../../3d/layers/support/FastSymbolUpdates","./Utils","./enums"],function(e,a,i,s,t,l){function r(e){return t.isNumber(e.minDataValue)&&t.isNumber(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?l.WGLVVFlag.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?l.WGLVVFlag.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&Array.isArray(e.stops)?l.WGLVVFlag.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?l.WGLVVFlag.SIZE_UNIT_VALUE:l.WGLVVFlag.NONE}function n(e,a){if(!e||!a)return e;switch(a){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function o(e){return{value:e.value,size:i.toPt(e.size)}}function u(e){return e.map(function(e){return o(e)})}function p(e){if("string"==typeof e||"number"==typeof e)return i.toPt(e);var a=e;return{type:"size",expression:a.expression,stops:u(a.stops)}}function c(e){var a=e&&e.length>0?{}:null;return a&&e.forEach(function(e){var i=e.type;e.field&&(a[i]=e.field)}),a}function V(e){var a=e&&e.length>0?{}:null,n=a?{}:null;return a&&e.forEach(function(e){var o=e.type;if(e.field&&(a[o]=e.field),"size"===o){n.size||(n.size={});var c=e,V=r(c);switch(V){case l.WGLVVFlag.SIZE_MINMAX_VALUE:n.size.minMaxValue={minDataValue:c.minDataValue,maxDataValue:c.maxDataValue,minSize:p(c.minSize),maxSize:p(c.maxSize)};break;case l.WGLVVFlag.SIZE_SCALE_STOPS:n.size.scaleStops={stops:u(c.stops)};break;case l.WGLVVFlag.SIZE_FIELD_STOPS:for(var f=[],S=[],m=u(c.stops),y=m.length,z=0;6>z;z++){var x=m[Math.min(z,y-1)];f.push(x.value),S.push(i.pt2px(x.size))}n.size.fieldStops={values:f,sizes:S};break;case l.WGLVVFlag.SIZE_UNIT_VALUE:n.size.unitValue={unit:c.valueUnit,valueRepresentation:c.valueRepresentation}}}else if("color"===o){var E=s.convertVisualVariables([e],{modelSize:null,symbolSize:null,unitInMeters:1,transformation:null});n.color=E.color;for(var z=0;32>z;z+=4)t.premultiplyAlpha(n.color.colors,z,!0)}else if("opacity"===o)n.opacity=v(e);else if("rotation"===o){var g=e;n.rotation={type:g.rotationType}}}),{vvFields:a,vvRanges:n}}function v(e){var a={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(t.isString(e.field))if(e.stops){if(e.stops.length>8)return null;for(var i=e.stops,s=0;8>s;++s){var l=Math.min(s,i.length-1),r=i[l];a.values[s]=r.value,a.opacities[s]=r.opacity}}else{if(!e.opacityValues)return null;if(!t.isDefined(e.minDataValue)||!t.isDefined(e.maxDataValue))return null;if(2!==e.opacityValues.length)return null;a.values[0]=e.minDataValue,a.opacities[0]=e.opacityValues[0],a.values[1]=e.maxDataValue,a.opacities[1]=e.opacityValues[1];for(var s=2;8>s;++s)a.values[s]=e.maxDataValue,a.opacities[s]=e.opacityValues[1]}else{if(!(e.stops&&e.stops.length>=0||e.opacityValues&&e.opacityValues.length>=0))return null;for(var n=e.stops&&e.stops.length>=0?e.stops[0].opacity:e.opacityValues[0],s=0;8>s;s++)a.values[s]=1/0,a.opacities[s]=n}return a}Object.defineProperty(a,"__esModule",{value:!0}),a.getTypeOfSizeVisualVariable=r,a.getVisualVariableSizeValueRepresentationRatio=n,a.stopToSizeStop=o,a.normalizeSizeStops=u,a.normalizeSizeElement=p,a.getVisualVariablesFields=c,a.convertVisualVariables=V});