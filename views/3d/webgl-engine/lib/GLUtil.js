// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["./webgl-debug"],function(r){var e={checkError:function(r,e){var n=e.getError();n!=e.NO_ERROR&&alert(r+": gl error "+n)},checkFramebufferStatus:function(r,e){var n=e.checkFramebufferStatus(r);n!=e.FRAMEBUFFER_COMPLETE&&console.log("Framebuffer error 0x"+n)},handleError:function(e,n,o){alert(r.glEnumToString(e)+" was caused by call to: "+n+"("+r.glFunctionArgsToString(n,o)+")")},validateNoneOfTheArgsAreUndefined:function(e,n){for(var o=0;o<n.length;++o)void 0===n[o]&&console.error("undefined passed to gl."+e+"("+r.glFunctionArgsToString(e,n)+")")}};return e});