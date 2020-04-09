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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/compilerUtils"],(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.isSupportedGraphicResultMessage=function(e){switch(e){case 0:break;case 1:return"not owned by a graphics layer";case 2:return"no geometry";case 3:return"the geometry type is not supported";case 4:return"the elevation mode is not supported";case 5:return"the symbol type is not supported";default:r.neverReached(e)}return""}}));