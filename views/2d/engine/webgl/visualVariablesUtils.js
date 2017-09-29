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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../core/screenUtils","../../../3d/layers/support/FastSymbolUpdates","./Utils","./enums"],function(e,a,i,s,t,l){function n(e){return t.isNumber(e.minDataValue)&&t.isNumber(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?l.WGLVVFlag.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?l.WGLVVFlag.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&Array.isArray(e.stops)?l.WGLVVFlag.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?l.WGLVVFlag.SIZE_UNIT_VALUE:l.WGLVVFlag.NONE}function r(e,a){if(!e||!a)return e;switch(a){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function o(e){return{value:e.value,size:i.toPt(e.size)}}function u(e){return e.map(function(e){return o(e)})}function p(e){return"string"==typeof e||"number"==typeof e?i.toPt(e):{type:"size",expression:e.expression,stops:u(e.stops)}}function c(e){var a=e&&e.length>0?{}:null,r=a?{}:null;return a&&e.forEach(function(e){var o=e.type;if(e.field&&(a[o]=e.field),"size"===o){r.size||(r.size={});var c=n(e);switch(c){case l.WGLVVFlag.SIZE_MINMAX_VALUE:r.size.minMaxValue={minDataValue:e.minDataValue,maxDataValue:e.maxDataValue,minSize:p(e.minSize),maxSize:p(e.maxSize)};break;case l.WGLVVFlag.SIZE_SCALE_STOPS:r.size.scaleStops={stops:u(e.stops)};break;case l.WGLVVFlag.SIZE_FIELD_STOPS:for(var V=[],f=[],S=u(e.stops),m=S.length,z=0;6>z;z++){var x=S[Math.min(z,m-1)];V.push(x.value),f.push(i.pt2px(x.size))}r.size.fieldStops={values:V,sizes:f};break;case l.WGLVVFlag.SIZE_UNIT_VALUE:r.size.unitValue={unit:e.valueUnit,valueRepresentation:e.valueRepresentation}}}else if("color"===o){var E=s.convertVisualVariables([e],{modelSize:null,symbolSize:null,unitInMeters:1,transformation:null});r.color=E.color;for(var z=0;32>z;z+=4)t.premultiplyAlpha(r.color.colors,z,!0)}else"opacity"===o?r.opacity=v(e):"rotation"===o&&(r.rotation={type:e.rotationType})}),{vvFields:a,vvRanges:r}}function v(e){var a={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(t.isString(e.field))if(e.stops){if(e.stops.length>8)return null;for(var i=e.stops,s=0;8>s;++s){var l=Math.min(s,i.length-1),n=i[l];a.values[s]=n.value,a.opacities[s]=n.opacity}}else{if(!e.opacities)return null;if(!t.isDefined(e.minDataValue)||!t.isDefined(e.maxDataValue))return null;if(2!==e.opacities.length)return null;a.values[0]=e.minDataValue,a.opacities[0]=e.opacities[0],a.values[1]=e.maxDataValue,a.opacities[1]=e.opacities[1];for(var s=2;8>s;++s)a.values[s]=e.maxDataValue,a.opacities[s]=e.opacities[1]}else{if(!(e.stops&&e.stops.length>=0||e.opacities&&e.opacities.length>=0))return null;for(var r=e.stops&&e.stops.length>=0?e.stops[0].opacity:e.opacities[0],s=0;8>s;s++)a.values[s]=1/0,a.opacities[s]=r}return a}Object.defineProperty(a,"__esModule",{value:!0}),a.getTypeOfSizeVisualVariable=n,a.getVisualVariableSizeValueRepresentationRatio=r,a.stopToSizeStop=o,a.normalizeSizeStops=u,a.normalizeSizeElement=p,a.convertVisualVariables=c});