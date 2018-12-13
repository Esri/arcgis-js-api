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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/sniff"],function(e){var n={},i=navigator.userAgent&&-1!==navigator.userAgent.indexOf(" Mobile"),o=!i&&e("touch");return n.isMobileDevice=function(){return i},n.isPCWithTouchScreen=function(){return o},n.isLandscape=function(){return 90===Math.abs(window.orientation)},n.press=i?"touchstart":"mousedown",n.release=i?"touchend":"mouseup",n.click=i?"touchend":"click",n.clickOrRelease=i?"touchend":"click, mouseup",n});