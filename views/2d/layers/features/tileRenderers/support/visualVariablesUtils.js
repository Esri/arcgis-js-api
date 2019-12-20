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

define(["require","exports","../../../../../../core/tsSupport/assignHelper","../../../../../../core/screenUtils","../../../../engine","../../../../engine/webgl/definitions","../../../../../3d/layers/support/FastSymbolUpdates"],function(e,t,i,a,s,r,n){function l(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function o(e){return{value:e.value,size:a.toPt(e.size)}}function u(e){return e.map(function(e){return o(e)})}function p(e){if("string"==typeof e||"number"==typeof e)return a.toPt(e);var t=e;return{type:"size",expression:t.expression,stops:u(t.stops)}}function v(e){var t=e&&e.length>0?{}:null;return t&&e.forEach(function(e){var i=e.type;e.field&&(t[i]=e.field)}),t}function c(e){var t=e&&e.length>0?{}:null,a=t?{}:null;if(!t)return{vvFields:t,vvRanges:a};for(var r=0,l=e;r<l.length;r++){var o=l[r],v=o.type;if(o.field&&(t[v]=o.field),"size"===v){a.size||(a.size={});var c=o;switch(s.getTypeOfSizeVisualVariable(c)){case S.SIZE_MINMAX_VALUE:a.size.minMaxValue={minDataValue:c.minDataValue,maxDataValue:c.maxDataValue,minSize:p(c.minSize),maxSize:p(c.maxSize)};break;case S.SIZE_SCALE_STOPS:a.size.scaleStops={stops:u(c.stops)};break;case S.SIZE_FIELD_STOPS:if(c.levels){var d={};for(var m in c.levels)d[m]=z(c.levels[m]);a.size.fieldStops={type:"level-dependent",levels:d}}else a.size.fieldStops=i({type:"static"},z(c.stops));break;case S.SIZE_UNIT_VALUE:a.size.unitValue={unit:c.valueUnit,valueRepresentation:c.valueRepresentation}}}else if("color"===v){var y=n.convertVisualVariables([o],{modelSize:null,symbolSize:null,unitInMeters:1,transformation:null});a.color=y.color;for(var V=0;V<32;V+=4)s.color.premultiplyAlpha(a.color.colors,V,!0)}else if("opacity"===v)a.opacity=f(o);else if("rotation"===v){var g=o;a.rotation={type:g.rotationType}}}return{vvFields:t,vvRanges:a}}function f(e){var t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(s.Utils.isString(e.field)){if(!e.stops)return null;if(e.stops.length>8)return null;for(var i=e.stops,a=0;a<8;++a){var r=Math.min(a,i.length-1),n=i[r];t.values[a]=n.value,t.opacities[a]=n.opacity}}else{if(!(e.stops&&e.stops.length>=0))return null;for(var l=e.stops&&e.stops.length>=0&&e.stops[0].opacity,a=0;a<8;a++)t.values[a]=1/0,t.opacities[a]=l}return t}Object.defineProperty(t,"__esModule",{value:!0});var S=s.enums.WGLVVFlag;t.getVisualVariableSizeValueRepresentationRatio=l,t.stopToSizeStop=o,t.normalizeSizeStops=u,t.normalizeSizeElement=p,t.getVisualVariablesFields=v;var z=function(e){for(var t=[],i=[],s=u(e),n=s.length,l=0;l<6;l++){var o=s[Math.min(l,n-1)];t.push(o.value),i.push(null==o.size?r.NAN_MAGIC_NUMBER:a.pt2px(o.size))}return{values:new Float32Array(t),sizes:new Float32Array(i)}};t.convertVisualVariables=c});