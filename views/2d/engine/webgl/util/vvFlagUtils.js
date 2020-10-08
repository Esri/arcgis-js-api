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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../enums","../visualVariablesUtils"],(function(e,t,a,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getVVFlags=void 0,t.getVVFlags=function(e){if(!e)return a.WGLVVFlag.NONE;for(var t=0,r=0,l=e;r<l.length;r++){var V=l[r];if("size"===V.type){var o=i.getTypeOfSizeVisualVariable(V);t|=o,"outline"===V.target&&(t|=o<<4)}else"color"===V.type?t|=a.WGLVVFlag.COLOR:"opacity"===V.type?t|=a.WGLVVFlag.OPACITY:"rotation"===V.type&&(t|=a.WGLVVFlag.ROTATION)}return t}}));