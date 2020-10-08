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

define(["require","exports"],(function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.numTo32=t.i8816to32=t.i8888to32=t.i1616to32=t.u32to4Xu8=t.toFloat32=t.toUint32=t.u32=t.u16=t.u8=t.i32=t.i16=t.i8=void 0;var u=new Float32Array(1),r=new Uint32Array(u.buffer);function o(n,t,u){return Math.round(Math.max(Math.min(n,u),t))}t.i8=function(n){return o(n,-128,127)},t.i16=function(n){return o(n,-32768,32767)},t.i32=function(n){return o(n,-2147483648,2147483647)},t.u8=function(n){return o(n,0,255)},t.u16=function(n){return o(n,0,65535)},t.u32=function(n){return o(n,0,4294967295)},t.toUint32=function(n){return u[0]=n,r[0]},t.toFloat32=function(n){return r[0]=n,u[0]},t.u32to4Xu8=function(n){return[255&n,(65280&n)>>>8,(16711680&n)>>>16,(4278190080&n)>>>24]},t.i1616to32=function(n,t){return 65535&n|t<<16},t.i8888to32=function(n,t,u,r){return 255&n|(255&t)<<8|(255&u)<<16|r<<24},t.i8816to32=function(n,t,u){return 255&n|(255&t)<<8|u<<16},t.numTo32=function(n){return 0|n}}));