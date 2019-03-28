// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/Logger"],function(n,r,e){Object.defineProperty(r,"__esModule",{value:!0});var t=new Float32Array(1),u=new Uint32Array(t.buffer),i=e.getLogger("esri.views.2d.engine.webgl.number");function o(n,r,e){var t=Math.max(Math.min(n,e),r);return t!==n&&i.warn("Value of "+n+" exceeded rendering limitations and was clamped to "+t),t}r.i8=function(n){return o(n,-128,127)},r.i16=function(n){return o(n,-32768,32767)},r.i32=function(n){return o(n,-2147483648,2147483647)},r.u8=function(n){return o(n,0,255)},r.u16=function(n){return o(n,0,65535)},r.u32=function(n){return o(n,0,4294967295)},r.nextHighestPowerOfTwo=function(n){var r=n;r--,r|=r>>1,r|=r>>2,r|=r>>4,r|=r>>8,r|=r>>16;var e=++r>>1;return n-e<r-n?e:r},r.toUint32=function(n){return t[0]=n,u[0]},r.toFloat32=function(n){return u[0]=n,t[0]},r.i1616to32=function(n,r){return 65535&n|r<<16},r.i8888to32=function(n,r,e,t){return 255&n|(255&r)<<8|(255&e)<<16|t<<24},r.i8816to32=function(n,r,e){return 255&n|(255&r)<<8|e<<16},r.numTo32=function(n){return 0|n}});