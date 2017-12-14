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

define(["require","exports","./MaterialKeyInfo","./enums","./MaterialInfo"],function(e,a,t,i,v){function o(e){var a=[];return a[0]=e.sdf?!0:!1,a[1]=e.vvSizeMinMaxValue?!0:!1,a[2]=e.vvSizeScaleStops?!0:!1,a[3]=e.vvSizeFieldStops?!0:!1,a[4]=e.vvSizeUnitValue?!0:!1,a[5]=e.vvColor?!0:!1,a[6]=e.vvRotation?!0:!1,a[7]=e.vvOpacity?!0:!1,a[8]=e.visibility?!0:!1,a[9]=e.pattern?!0:!1,a[10]=e.heatmap?!0:!1,a.reduce(function(e,a,t){return a&&(e|=1<<t+2),e},0)}function n(e,a){var o=v.pool.acquire(),n=t.pool.acquire();return n.geometryType=i.WGLGeometryType.TEXT,n.sdf=!0,n.pattern=!1,n.visibility=!0,n.heatmap=!1,o.texBindingInfo.push({unit:2,pageId:e.page,semantic:"u_texture"}),0===a?n.vvOpacity=n.vvSizeMinMaxValue=n.vvSizeScaleStops=n.vvSizeFieldStops=n.vvSizeUnitValue=n.vvColor=n.vvRotation=!1:(n.vvOpacity=0!==(a&i.WGLVVFlag.OPACITY),n.vvSizeMinMaxValue=0!==(a&i.WGLVVFlag.SIZE_MINMAX_VALUE),n.vvSizeScaleStops=0!==(a&i.WGLVVFlag.SIZE_SCALE_STOPS),n.vvSizeFieldStops=0!==(a&i.WGLVVFlag.SIZE_FIELD_STOPS),n.vvSizeUnitValue=0!==(a&i.WGLVVFlag.SIZE_UNIT_VALUE),n.vvColor=0!==(a&i.WGLVVFlag.COLOR),n.vvRotation=0!==(a&i.WGLVVFlag.ROTATION)),o.materialKey=l(n),o.materialKeyInfo=n,o}function r(e,a,o,n){var r=v.pool.acquire(),S=t.pool.acquire();S.geometryType=o;var p=a.spriteMosaicItem;return p?(S.sdf=p.sdf,S.pattern=!0,r.texBindingInfo.push({unit:1,pageId:p.page,semantic:"u_texture"})):(S.sdf=!1,S.pattern=!1),0===n?S.vvOpacity=S.vvSizeMinMaxValue=S.vvSizeScaleStops=S.vvSizeFieldStops=S.vvSizeUnitValue=S.vvColor=S.vvRotation=!1:(S.vvOpacity=0!==(n&i.WGLVVFlag.OPACITY),S.vvSizeMinMaxValue=0!==(n&i.WGLVVFlag.SIZE_MINMAX_VALUE),S.vvSizeScaleStops=0!==(n&i.WGLVVFlag.SIZE_SCALE_STOPS),S.vvSizeFieldStops=0!==(n&i.WGLVVFlag.SIZE_FIELD_STOPS),S.vvSizeUnitValue=0!==(n&i.WGLVVFlag.SIZE_UNIT_VALUE),S.vvColor=0!==(n&i.WGLVVFlag.COLOR),S.vvRotation=0!==(n&i.WGLVVFlag.ROTATION)),S.visibility=!1,S.heatmap=null!=e.heatmapInfo,r.materialKey=l(S),r.materialKeyInfo=S,r}function l(e){if(e.geometryType===i.WGLGeometryType.UNKNOWN)return-1;var a=o(e)<<2;return e.geometryType+a}function S(e,a){return e.geometryType=3&a,a>>=2,e.sdf=0!==(4&a),e.vvSizeMinMaxValue=0!==(8&a),e.vvSizeScaleStops=0!==(16&a),e.vvSizeFieldStops=0!==(32&a),e.vvSizeUnitValue=0!==(64&a),e.vvColor=0!==(128&a),e.vvRotation=0!==(256&a),e.vvOpacity=0!==(512&a),e.visibility=0!==(1024&a),e.pattern=0!==(2048&a),e.heatmap=0!==(4096&a),e}function p(e){var a=3&e;e>>=2;var t=0!==(1&e),i=0!==(2&e),v=0!==(4&e),o=0!==(8&e),n=0!==(16&e),r=0!==(32&e),l=0!==(64&e),S=0!==(128&e),p=0!==(256&e),u=0!==(512&e),V=0!==(1024&e),s=0!==(2048&e),y=0!==(4096&e);return{geometryType:a,variations:[t,i,v,o,n,r,l,S,p,u,V,s,y]}}Object.defineProperty(a,"__esModule",{value:!0}),a.createTextMaterialInfo=n,a.createMaterialInfo=r,a.getMaterialKey=l,a.updateMaterialVariations=S,a.getMaterialVariations=p});