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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","exports","./enums","./MaterialInfo","./MaterialKeyInfo"],(function(e,i,t,a,v){function n(e){if(e.geometryType===t.WGLGeometryType.UNKNOWN)return-1;var i=function(e){var i=[];return i[0]=!!e.sdf,i[1]=!!e.vvSizeMinMaxValue,i[2]=!!e.vvSizeScaleStops,i[3]=!!e.vvSizeFieldStops,i[4]=!!e.vvSizeUnitValue,i[5]=!!e.vvColor,i[6]=!!e.vvRotation,i[7]=!!e.vvOpacity,i[8]=!!e.visibility,i[9]=!!e.pattern,i[10]=!!e.heatmap,i.reduce((function(e,i,t){return i&&(e|=1<<t+2),e}),0)}(e)<<3;return e.geometryType+i}Object.defineProperty(i,"__esModule",{value:!0}),i.createTextMaterialInfo=function(e,i,o){var l=new a.default,r=new v;return r.geometryType=o,r.sdf=!0,r.pattern=!1,r.visibility=!1,r.heatmap=!1,l.texBindingInfo.push(new a.TexBindingInfo(2,e.page,"u_texture")),0===i?r.vvOpacity=r.vvSizeMinMaxValue=r.vvSizeScaleStops=r.vvSizeFieldStops=r.vvSizeUnitValue=r.vvColor=r.vvRotation=!1:(r.vvOpacity=0!=(i&t.WGLVVFlag.OPACITY),r.vvSizeMinMaxValue=0!=(i&t.WGLVVFlag.SIZE_MINMAX_VALUE),r.vvSizeScaleStops=0!=(i&t.WGLVVFlag.SIZE_SCALE_STOPS),r.vvSizeFieldStops=0!=(i&t.WGLVVFlag.SIZE_FIELD_STOPS),r.vvSizeUnitValue=0!=(i&t.WGLVVFlag.SIZE_UNIT_VALUE),r.vvColor=0!=(i&t.WGLVVFlag.COLOR),r.vvRotation=0!=(i&t.WGLVVFlag.ROTATION)),l.materialKey=n(r),l.materialKeyInfo=r,l},i.createMaterialInfo=function(e,i,o){var l=new a.default,r=new v;if(r.geometryType=i,e){var S=e.spriteMosaicItem;r.sdf=S.sdf,r.pattern=!0,l.texBindingInfo.push(new a.TexBindingInfo(1,S.page,"u_texture"))}else r.sdf=!1,r.pattern=!1;return 0===o?r.vvOpacity=r.vvSizeMinMaxValue=r.vvSizeScaleStops=r.vvSizeFieldStops=r.vvSizeUnitValue=r.vvColor=r.vvRotation=!1:(r.vvOpacity=0!=(o&t.WGLVVFlag.OPACITY),r.vvSizeMinMaxValue=0!=(o&t.WGLVVFlag.SIZE_MINMAX_VALUE),r.vvSizeScaleStops=0!=(o&t.WGLVVFlag.SIZE_SCALE_STOPS),r.vvSizeFieldStops=0!=(o&t.WGLVVFlag.SIZE_FIELD_STOPS),r.vvSizeUnitValue=0!=(o&t.WGLVVFlag.SIZE_UNIT_VALUE),r.vvColor=0!=(o&t.WGLVVFlag.COLOR),r.vvRotation=0!=(o&t.WGLVVFlag.ROTATION)),r.visibility=!1,l.materialKey=n(r),l.materialKeyInfo=r,l},i.getMaterialKey=n,i.getMaterialVariations=function(e){return{geometryType:7&e,variations:[0!=(1&(e>>=3)),0!=(2&e),0!=(4&e),0!=(8&e),0!=(16&e),0!=(32&e),0!=(64&e),0!=(128&e),0!=(256&e),0!=(512&e),0!=(1024&e),0!=(2048&e),0!=(4096&e)]}}}));