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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports"],function(n,t){Object.defineProperty(t,"__esModule",{value:!0});var r=new Float32Array(1),e=new Uint32Array(r.buffer);t.nextHighestPowerOfTwo=function(n){var t=n;t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16;var r=++t>>1;return n-r<t-n?r:t},t.toUint32=function(n){return r[0]=n,e[0]},t.toFloat32=function(n){return e[0]=n,r[0]},t.i1616to32=function(n,t){return 65535&n|t<<16},t.i8888to32=function(n,t,r,e){return 255&n|(255&t)<<8|(255&r)<<16|e<<24},t.i8816to32=function(n,t,r){return 255&n|(255&t)<<8|r<<16},t.numTo32=function(n){return 0|n}});