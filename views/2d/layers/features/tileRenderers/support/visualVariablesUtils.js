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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/screenUtils","../../../../engine","../../../../../3d/layers/support/FastSymbolUpdates"],function(e,t,a,i,s){function r(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function n(e){return{value:e.value,size:a.toPt(e.size)}}function l(e){return e.map(function(e){return n(e)})}function o(e){if("string"==typeof e||"number"==typeof e)return a.toPt(e);var t=e;return{type:"size",expression:t.expression,stops:l(t.stops)}}function u(e){var t=e&&e.length>0?{}:null;return t&&e.forEach(function(e){var a=e.type;e.field&&(t[a]=e.field)}),t}function p(e){var t=e&&e.length>0?{}:null,r=t?{}:null;if(!t)return{vvFields:t,vvRanges:r};for(var n=0,u=e;n<u.length;n++){var p=u[n],v=p.type;if(p.field&&(t[v]=p.field),"size"===v){r.size||(r.size={});var S=p;switch(i.getTypeOfSizeVisualVariable(S)){case f.SIZE_MINMAX_VALUE:r.size.minMaxValue={minDataValue:S.minDataValue,maxDataValue:S.maxDataValue,minSize:o(S.minSize),maxSize:o(S.maxSize)};break;case f.SIZE_SCALE_STOPS:r.size.scaleStops={stops:l(S.stops)};break;case f.SIZE_FIELD_STOPS:for(var z=[],m=[],V=l(S.stops),d=V.length,h=0;h<6;h++){var g=V[Math.min(h,d-1)];z.push(g.value),m.push(a.pt2px(g.size))}r.size.fieldStops={values:z,sizes:m};break;case f.SIZE_UNIT_VALUE:r.size.unitValue={unit:S.valueUnit,valueRepresentation:S.valueRepresentation}}}else if("color"===v){var y=s.convertVisualVariables([p],{modelSize:null,symbolSize:null,unitInMeters:1,transformation:null});r.color=y.color;for(var h=0;h<32;h+=4)i.color.premultiplyAlpha(r.color.colors,h,!0)}else if("opacity"===v)r.opacity=c(p);else if("rotation"===v){var b=p;r.rotation={type:b.rotationType}}}return{vvFields:t,vvRanges:r}}function c(e){var t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(i.Utils.isString(e.field)){if(!e.stops)return null;if(e.stops.length>8)return null;for(var a=e.stops,s=0;s<8;++s){var r=Math.min(s,a.length-1),n=a[r];t.values[s]=n.value,t.opacities[s]=n.opacity}}else{if(!(e.stops&&e.stops.length>=0))return null;for(var l=e.stops&&e.stops.length>=0&&e.stops[0].opacity,s=0;s<8;s++)t.values[s]=1/0,t.opacities[s]=l}return t}Object.defineProperty(t,"__esModule",{value:!0});var f=i.enums.WGLVVFlag;t.getVisualVariableSizeValueRepresentationRatio=r,t.stopToSizeStop=n,t.normalizeSizeStops=l,t.normalizeSizeElement=o,t.getVisualVariablesFields=u,t.convertVisualVariables=p});