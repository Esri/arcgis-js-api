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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./enums","./MaterialInfo","./MaterialKeyInfo"],function(e,t,a,i,v){function n(e){var t=[];return t[0]=!!e.sdf,t[1]=!!e.vvSizeMinMaxValue,t[2]=!!e.vvSizeScaleStops,t[3]=!!e.vvSizeFieldStops,t[4]=!!e.vvSizeUnitValue,t[5]=!!e.vvColor,t[6]=!!e.vvRotation,t[7]=!!e.vvOpacity,t[8]=!!e.visibility,t[9]=!!e.pattern,t[10]=!!e.heatmap,t.reduce(function(e,t,a){return t&&(e|=1<<a+2),e},0)}function o(e,t){var n=new i.default,o=new v;return o.geometryType=a.WGLGeometryType.TEXT,o.sdf=!0,o.pattern=!1,o.visibility=!1,o.heatmap=!1,n.texBindingInfo.push(new i.TexBindingInfo(2,e.page,"u_texture")),0===t?o.vvOpacity=o.vvSizeMinMaxValue=o.vvSizeScaleStops=o.vvSizeFieldStops=o.vvSizeUnitValue=o.vvColor=o.vvRotation=!1:(o.vvOpacity=0!=(t&a.WGLVVFlag.OPACITY),o.vvSizeMinMaxValue=0!=(t&a.WGLVVFlag.SIZE_MINMAX_VALUE),o.vvSizeScaleStops=0!=(t&a.WGLVVFlag.SIZE_SCALE_STOPS),o.vvSizeFieldStops=0!=(t&a.WGLVVFlag.SIZE_FIELD_STOPS),o.vvSizeUnitValue=0!=(t&a.WGLVVFlag.SIZE_UNIT_VALUE),o.vvColor=0!=(t&a.WGLVVFlag.COLOR),o.vvRotation=0!=(t&a.WGLVVFlag.ROTATION)),n.materialKey=l(o),n.materialKeyInfo=o,n}function r(e,t,n,o){var r=new i.default,S=new v;S.geometryType=n;var V=t.spriteMosaicItem;return V?(S.sdf=V.sdf,S.pattern=!0,r.texBindingInfo.push(new i.TexBindingInfo(1,V.page,"u_texture"))):(S.sdf=!1,S.pattern=!1),0===o?S.vvOpacity=S.vvSizeMinMaxValue=S.vvSizeScaleStops=S.vvSizeFieldStops=S.vvSizeUnitValue=S.vvColor=S.vvRotation=!1:(S.vvOpacity=0!=(o&a.WGLVVFlag.OPACITY),S.vvSizeMinMaxValue=0!=(o&a.WGLVVFlag.SIZE_MINMAX_VALUE),S.vvSizeScaleStops=0!=(o&a.WGLVVFlag.SIZE_SCALE_STOPS),S.vvSizeFieldStops=0!=(o&a.WGLVVFlag.SIZE_FIELD_STOPS),S.vvSizeUnitValue=0!=(o&a.WGLVVFlag.SIZE_UNIT_VALUE),S.vvColor=0!=(o&a.WGLVVFlag.COLOR),S.vvRotation=0!=(o&a.WGLVVFlag.ROTATION)),S.visibility=!1,S.heatmap=null!=e.heatmapInfo,r.materialKey=l(S),r.materialKeyInfo=S,r}function l(e){if(e.geometryType===a.WGLGeometryType.UNKNOWN)return-1;var t=n(e)<<2;return e.geometryType+t}function S(e){var t=3&e;return e>>=2,{geometryType:t,variations:[0!=(1&e),0!=(2&e),0!=(4&e),0!=(8&e),0!=(16&e),0!=(32&e),0!=(64&e),0!=(128&e),0!=(256&e),0!=(512&e),0!=(1024&e),0!=(2048&e),0!=(4096&e)]}}Object.defineProperty(t,"__esModule",{value:!0}),t.createTextMaterialInfo=o,t.createMaterialInfo=r,t.getMaterialKey=l,t.getMaterialVariations=S});