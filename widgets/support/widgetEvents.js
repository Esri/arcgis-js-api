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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports"],(function(e,o){Object.defineProperty(o,"__esModule",{value:!0});var u=["blur","change","click","dblclick","focus","input","keydown","keypress","keyup","load","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","mousewheel","scroll","submit","touchcancel","touchend","touchmove","touchstart"];o.domEvents=function(e){var o={};return u.forEach((function(u){o["on"+u]=function(o){e.emit.call(e,u,o)}})),o},o.isVNodeEvent=function(e){return!!u[e]}}));