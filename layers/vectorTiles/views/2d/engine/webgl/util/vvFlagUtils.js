// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["require","exports","../enums","../visualVariablesUtils"],function(V,e,a,t){function r(V){if(!V)return a.WGLVVFlag.NONE;for(var e=0,r=0,g=V;r<g.length;r++){var l=g[r];if("size"===l.type){var L=t.getTypeOfSizeVisualVariable(l);e|=L,"outline"===l.target&&(e|=L<<4)}else"color"===l.type?e|=a.WGLVVFlag.COLOR:"opacity"===l.type?e|=a.WGLVVFlag.OPACITY:"rotation"===l.type&&(e|=a.WGLVVFlag.ROTATION)}return e}function g(V,e){void 0===e&&(e=!1);var t=a.WGLVVFlag.SIZE_FIELD_STOPS|a.WGLVVFlag.SIZE_MINMAX_VALUE|a.WGLVVFlag.SIZE_SCALE_STOPS|a.WGLVVFlag.SIZE_UNIT_VALUE,r=a.WGLVVTarget.FIELD_TARGETS_OUTLINE|a.WGLVVTarget.MINMAX_TARGETS_OUTLINE|a.WGLVVTarget.SCALE_TARGETS_OUTLINE|a.WGLVVTarget.UNIT_TARGETS_OUTLINE,g=(V&r)>>>4;return e?t&g:t&~g}function l(V){var e=g(V,!1);return V&(a.WGLVVFlag.COLOR|a.WGLVVFlag.OPACITY|a.WGLVVFlag.ROTATION|e)}function L(V){return V&(a.WGLVVFlag.COLOR|a.WGLVVFlag.OPACITY)}function T(V,e){if(e){return V&g(V,!0)}var t=g(V,!1);return V&(a.WGLVVFlag.COLOR|a.WGLVVFlag.OPACITY|t)}function n(V){return l(V)}Object.defineProperty(e,"__esModule",{value:!0}),e.getVVFlags=r,e.getSizeFlagsMask=g,e.getMarkerVVFlags=l,e.getFillVVFlags=L,e.getLineVVFlags=T,e.getTextVVFlags=n});