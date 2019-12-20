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

define(["require","exports","../enums","../visualVariablesUtils"],function(V,e,l,L){function t(V,e){void 0===e&&(e=!1);var a=l.WGLVVFlag.SIZE_FIELD_STOPS|l.WGLVVFlag.SIZE_MINMAX_VALUE|l.WGLVVFlag.SIZE_SCALE_STOPS|l.WGLVVFlag.SIZE_UNIT_VALUE,t=(V&(l.WGLVVTarget.FIELD_TARGETS_OUTLINE|l.WGLVVTarget.MINMAX_TARGETS_OUTLINE|l.WGLVVTarget.SCALE_TARGETS_OUTLINE|l.WGLVVTarget.UNIT_TARGETS_OUTLINE))>>>4;return e?a&t:a&~t}function a(V){var e=t(V,!1);return V&(l.WGLVVFlag.COLOR|l.WGLVVFlag.OPACITY|l.WGLVVFlag.ROTATION|e)}Object.defineProperty(e,"__esModule",{value:!0}),e.getVVFlags=function(V){if(!V)return l.WGLVVFlag.NONE;for(var e=0,a=0,t=V;a<t.length;a++){var r=t[a];if("size"===r.type){var g=L.getTypeOfSizeVisualVariable(r);e|=g,"outline"===r.target&&(e|=g<<4)}else"color"===r.type?e|=l.WGLVVFlag.COLOR:"opacity"===r.type?e|=l.WGLVVFlag.OPACITY:"rotation"===r.type&&(e|=l.WGLVVFlag.ROTATION)}return e},e.getSizeFlagsMask=t,e.getMarkerVVFlags=a,e.getFillVVFlags=function(V){return V&(l.WGLVVFlag.COLOR|l.WGLVVFlag.OPACITY)},e.getLineVVFlags=function(V,e){if(e)return V&t(V,!0);var a=t(V,!1);return V&(l.WGLVVFlag.COLOR|l.WGLVVFlag.OPACITY|a)},e.getTextVVFlags=function(V){return a(V)},e.getLabelVVFlags=function(V){return V&t(V,!1)}});