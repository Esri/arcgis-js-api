// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define([],(function(){var t={CENTER:"Center",TOP_LEFT:"TopLeft",TOP:"Top",TOP_RIGHT:"TopRight",RIGHT:"Right",BOTTOM_LEFT:"BottomLeft",BOTTOM:"Bottom",BOTTOM_RIGHT:"BottomRight",LEFT:"Left",isSupported:function(T){for(var o in t)if(t[o]===T)return!0;return!1},toSupportedValue:function(T){return t.isSupported(T)?T:t.BOTTOM}};return t}));