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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","./enums","./MaterialInfo","./MaterialKeyInfo","./util/Result"],function(e,i,l,o,r,S){function V(e){if(e.geometryType===l.WGLGeometryType.UNKNOWN)return-1;var i,t,a=((t=[])[0]=!!(i=e).sdf,t[1]=!!i.vvSizeMinMaxValue,t[2]=!!i.vvSizeScaleStops,t[3]=!!i.vvSizeFieldStops,t[4]=!!i.vvSizeUnitValue,t[5]=!!i.vvColor,t[6]=!!i.vvRotation,t[7]=!!i.vvOpacity,t[8]=!!i.visibility,t[9]=!!i.pattern,t[10]=!!i.simplePattern,t.reduce(function(e,i,t){return i&&(e|=1<<t+2),e},0)<<3);return e.geometryType+a}Object.defineProperty(i,"__esModule",{value:!0}),i.createTextMaterialInfo=function(e,i,t){var a=new o.default,v=new r;return v.geometryType=t,v.sdf=!0,v.pattern=!1,v.visibility=!1,v.simplePattern=!1,a.texBindingInfo.push(new o.TexBindingInfo(2,e.page,"u_texture")),0===i?v.vvOpacity=v.vvSizeMinMaxValue=v.vvSizeScaleStops=v.vvSizeFieldStops=v.vvSizeUnitValue=v.vvColor=v.vvRotation=!1:(v.vvOpacity=0!=(i&l.WGLVVFlag.OPACITY),v.vvSizeMinMaxValue=0!=(i&l.WGLVVFlag.SIZE_MINMAX_VALUE),v.vvSizeScaleStops=0!=(i&l.WGLVVFlag.SIZE_SCALE_STOPS),v.vvSizeFieldStops=0!=(i&l.WGLVVFlag.SIZE_FIELD_STOPS),v.vvSizeUnitValue=0!=(i&l.WGLVVFlag.SIZE_UNIT_VALUE),v.vvColor=0!=(i&l.WGLVVFlag.COLOR),v.vvRotation=0!=(i&l.WGLVVFlag.ROTATION)),a.materialKey=V(v),a.materialKeyInfo=v,a},i.createMaterialInfo=function(e,i,t){var a=new o.default,v=new r;if(v.geometryType=i,e&&S.ok(e.spriteMosaicItem)){var n=e.spriteMosaicItem;v.sdf=n.sdf,v.pattern=!0,a.texBindingInfo.push(new o.TexBindingInfo(1,n.page,"u_texture"))}else v.sdf=!1,v.pattern=!1;return 0===t?v.vvOpacity=v.vvSizeMinMaxValue=v.vvSizeScaleStops=v.vvSizeFieldStops=v.vvSizeUnitValue=v.vvColor=v.vvRotation=!1:(v.vvOpacity=0!=(t&l.WGLVVFlag.OPACITY),v.vvSizeMinMaxValue=0!=(t&l.WGLVVFlag.SIZE_MINMAX_VALUE),v.vvSizeScaleStops=0!=(t&l.WGLVVFlag.SIZE_SCALE_STOPS),v.vvSizeFieldStops=0!=(t&l.WGLVVFlag.SIZE_FIELD_STOPS),v.vvSizeUnitValue=0!=(t&l.WGLVVFlag.SIZE_UNIT_VALUE),v.vvColor=0!=(t&l.WGLVVFlag.COLOR),v.vvRotation=0!=(t&l.WGLVVFlag.ROTATION)),v.visibility=!1,a.materialKey=V(v),a.materialKeyInfo=v,a},i.getMaterialKey=V,i.getMaterialVariations=function(e){return{geometryType:7&e,programOptions:{id:0!=(1&(e>>=3)),highlight:0!=(2&e),isSDF:0!=(4&e),vvSizeMinMaxValue:0!=(8&e),vvSizeScaleStops:0!=(16&e),vvSizeFieldStops:0!=(32&e),vvSizeUnitValue:0!=(64&e),vvColor:0!=(128&e),vvRotation:0!=(256&e),vvOpacity:0!=(512&e),visibility:0!=(1024&e),pattern:0!=(2048&e),simplePattern:0!=(4096&e)}}}});