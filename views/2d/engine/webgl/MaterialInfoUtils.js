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

define(["require","exports","./enums","./MaterialInfo","./MaterialKeyInfo"],function(e,i,t,a,v){function n(e){var i=[];return i[0]=!!e.sdf,i[1]=!!e.vvSizeMinMaxValue,i[2]=!!e.vvSizeScaleStops,i[3]=!!e.vvSizeFieldStops,i[4]=!!e.vvSizeUnitValue,i[5]=!!e.vvColor,i[6]=!!e.vvRotation,i[7]=!!e.vvOpacity,i[8]=!!e.visibility,i[9]=!!e.pattern,i[10]=!!e.heatmap,i.reduce(function(e,i,t){return i&&(e|=1<<t+2),e},0)}function o(e,i,n){var o=new a.default,l=new v;return l.geometryType=n,l.sdf=!0,l.pattern=!1,l.visibility=!1,l.heatmap=!1,o.texBindingInfo.push(new a.TexBindingInfo(2,e.page,"u_texture")),0===i?l.vvOpacity=l.vvSizeMinMaxValue=l.vvSizeScaleStops=l.vvSizeFieldStops=l.vvSizeUnitValue=l.vvColor=l.vvRotation=!1:(l.vvOpacity=0!=(i&t.WGLVVFlag.OPACITY),l.vvSizeMinMaxValue=0!=(i&t.WGLVVFlag.SIZE_MINMAX_VALUE),l.vvSizeScaleStops=0!=(i&t.WGLVVFlag.SIZE_SCALE_STOPS),l.vvSizeFieldStops=0!=(i&t.WGLVVFlag.SIZE_FIELD_STOPS),l.vvSizeUnitValue=0!=(i&t.WGLVVFlag.SIZE_UNIT_VALUE),l.vvColor=0!=(i&t.WGLVVFlag.COLOR),l.vvRotation=0!=(i&t.WGLVVFlag.ROTATION)),o.materialKey=r(l),o.materialKeyInfo=l,o}function l(e,i,n){var o=new a.default,l=new v;if(l.geometryType=i,e){var S=e.spriteMosaicItem;l.sdf=S.sdf,l.pattern=!0,o.texBindingInfo.push(new a.TexBindingInfo(1,S.page,"u_texture"))}else l.sdf=!1,l.pattern=!1;return 0===n?l.vvOpacity=l.vvSizeMinMaxValue=l.vvSizeScaleStops=l.vvSizeFieldStops=l.vvSizeUnitValue=l.vvColor=l.vvRotation=!1:(l.vvOpacity=0!=(n&t.WGLVVFlag.OPACITY),l.vvSizeMinMaxValue=0!=(n&t.WGLVVFlag.SIZE_MINMAX_VALUE),l.vvSizeScaleStops=0!=(n&t.WGLVVFlag.SIZE_SCALE_STOPS),l.vvSizeFieldStops=0!=(n&t.WGLVVFlag.SIZE_FIELD_STOPS),l.vvSizeUnitValue=0!=(n&t.WGLVVFlag.SIZE_UNIT_VALUE),l.vvColor=0!=(n&t.WGLVVFlag.COLOR),l.vvRotation=0!=(n&t.WGLVVFlag.ROTATION)),l.visibility=!1,o.materialKey=r(l),o.materialKeyInfo=l,o}function r(e){if(e.geometryType===t.WGLGeometryType.UNKNOWN)return-1;var i=n(e)<<3;return e.geometryType+i}function S(e){var i=7&e;return e>>=3,{geometryType:i,programOptions:{id:0!=(1&e),highlight:0!=(2&e),isSDF:0!=(4&e),vvSizeMinMaxValue:0!=(8&e),vvSizeScaleStops:0!=(16&e),vvSizeFieldStops:0!=(32&e),vvSizeUnitValue:0!=(64&e),vvColor:0!=(128&e),vvRotation:0!=(256&e),vvOpacity:0!=(512&e),visibility:0!=(1024&e),pattern:0!=(2048&e),heatmap:0!=(4096&e)}}}Object.defineProperty(i,"__esModule",{value:!0}),i.createTextMaterialInfo=o,i.createMaterialInfo=l,i.getMaterialKey=r,i.getMaterialVariations=S});