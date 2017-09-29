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

define(["require","exports","./MaterialKeyInfo","./enums","./MaterialInfo"],function(e,t,i,a,v){function o(e){var t=[];return t[0]=e.sdf?!0:!1,t[1]=e.vvSizeMinMaxValue?!0:!1,t[2]=e.vvSizeScaleStops?!0:!1,t[3]=e.vvSizeFieldStops?!0:!1,t[4]=e.vvSizeUnitValue?!0:!1,t[5]=e.vvColor?!0:!1,t[6]=e.vvRotation?!0:!1,t[7]=e.vvOpacity?!0:!1,t[8]=e.visibility?!0:!1,t[9]=e.pattern?!0:!1,t[10]=e.heatmap?!0:!1,t.reduce(function(e,t,i){return t&&(e|=1<<i+2),e},0)}function n(e,t){var o=v.pool.acquire(),n=i.pool.acquire();return n.geometryType=a.WGLGeometryType.TEXT,n.sdf=!0,n.pattern=!1,n.visibility=!0,n.heatmap=!1,o.texBindingInfo.push({unit:2,pageId:t.page,semantic:"u_texture"}),e.vvFields?(n.vvOpacity=null!=e.vvFields.opacity,n.vvSizeMinMaxValue=null!=e.vvFields.size,n.vvColor=null!=e.vvFields.color,n.vvRotation=null!=e.vvFields.rotation):n.vvOpacity=n.vvSizeMinMaxValue=n.vvColor=n.vvRotation=!1,o.materialKey=l(n),o.materialKeyInfo=n,o}function r(e,t,o,n){var r=v.pool.acquire(),u=i.pool.acquire();u.geometryType=o;var p=t.spriteMosaicItem;return p?(u.sdf=p.sdf,u.pattern=!0,r.texBindingInfo.push({unit:1,pageId:p.page,semantic:"u_texture"})):(u.sdf=!1,u.pattern=!1),0===n?u.vvOpacity=u.vvSizeMinMaxValue=u.vvSizeScaleStops=u.vvSizeFieldStops=u.vvSizeUnitValue=u.vvColor=u.vvRotation=!1:(u.vvOpacity=0!==(n&a.WGLVVFlag.OPACITY),u.vvSizeMinMaxValue=0!==(n&a.WGLVVFlag.SIZE_MINMAX_VALUE),u.vvSizeScaleStops=0!==(n&a.WGLVVFlag.SIZE_SCALE_STOPS),u.vvSizeFieldStops=0!==(n&a.WGLVVFlag.SIZE_FIELD_STOPS),u.vvSizeUnitValue=0!==(n&a.WGLVVFlag.SIZE_UNIT_VALUE),u.vvColor=0!==(n&a.WGLVVFlag.COLOR),u.vvRotation=0!==(n&a.WGLVVFlag.ROTATION)),u.visibility=!1,u.heatmap=null!=e.heatmapInfo,r.materialKey=l(u),r.materialKeyInfo=u,r}function l(e){if(e.geometryType===a.WGLGeometryType.UNKNOWN)return-1;var t=o(e)<<2;return e.geometryType+t}function u(e){var t=3&e;e>>=2;var i=0!==(1&e),a=0!==(2&e),v=0!==(4&e),o=0!==(8&e),n=0!==(16&e),r=0!==(32&e),l=0!==(64&e),u=0!==(128&e),p=0!==(256&e),S=0!==(512&e),s=0!==(1024&e),y=0!==(2048&e),c=0!==(4096&e);return{geometryType:t,variations:[i,a,v,o,n,r,l,u,p,S,s,y,c]}}Object.defineProperty(t,"__esModule",{value:!0}),t.createTextMaterialInfo=n,t.createMaterialInfo=r,t.getMaterialKey=l,t.getMaterialVariations=u});