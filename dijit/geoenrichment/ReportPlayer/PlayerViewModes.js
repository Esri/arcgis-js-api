// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define([],(function(){var S={FULL_PAGES:"fullPages",PANELS_IN_SLIDES:"panelsInSlides",PANELS_IN_STACK:"panelsInStack",PANELS_IN_STACK_ALL:"panelsInStackAll",isSupported:function(n){for(var _ in S)if(S[_]===n)return!0;return!1},toSupportedValue:function(n){return S.isSupported(n)?n:S.FULL_PAGES},isMobileSupported:function(n){return n===S.PANELS_IN_SLIDES||n===S.PANELS_IN_STACK||n===S.PANELS_IN_STACK_ALL},isStackLike:function(n){return n===S.PANELS_IN_STACK||n===S.PANELS_IN_STACK_ALL},isStack:function(n){return n===S.PANELS_IN_STACK||n===S.PANELS_IN_STACK_ALL}};return S}));