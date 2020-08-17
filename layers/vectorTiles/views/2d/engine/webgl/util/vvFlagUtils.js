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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports","../enums","../visualVariablesUtils"],(function(V,e,a,t){function r(V,e){void 0===e&&(e=!1);var t=a.WGLVVFlag.SIZE_FIELD_STOPS|a.WGLVVFlag.SIZE_MINMAX_VALUE|a.WGLVVFlag.SIZE_SCALE_STOPS|a.WGLVVFlag.SIZE_UNIT_VALUE,r=(V&(a.WGLVVTarget.FIELD_TARGETS_OUTLINE|a.WGLVVTarget.MINMAX_TARGETS_OUTLINE|a.WGLVVTarget.SCALE_TARGETS_OUTLINE|a.WGLVVTarget.UNIT_TARGETS_OUTLINE))>>>4;return e?t&r:t&~r}function g(V){var e=r(V,!1);return V&(a.WGLVVFlag.COLOR|a.WGLVVFlag.OPACITY|a.WGLVVFlag.ROTATION|e)}Object.defineProperty(e,"__esModule",{value:!0}),e.getVVFlags=function(V){if(!V)return a.WGLVVFlag.NONE;for(var e=0,r=0,g=V;r<g.length;r++){var l=g[r];if("size"===l.type){var L=t.getTypeOfSizeVisualVariable(l);e|=L,"outline"===l.target&&(e|=L<<4)}else"color"===l.type?e|=a.WGLVVFlag.COLOR:"opacity"===l.type?e|=a.WGLVVFlag.OPACITY:"rotation"===l.type&&(e|=a.WGLVVFlag.ROTATION)}return e},e.getSizeFlagsMask=r,e.getMarkerVVFlags=g,e.getFillVVFlags=function(V){return V&(a.WGLVVFlag.COLOR|a.WGLVVFlag.OPACITY)},e.getLineVVFlags=function(V,e){if(e)return V&r(V,!0);var t=r(V,!1);return V&(a.WGLVVFlag.COLOR|a.WGLVVFlag.OPACITY|t)},e.getTextVVFlags=function(V){return g(V)}}));
