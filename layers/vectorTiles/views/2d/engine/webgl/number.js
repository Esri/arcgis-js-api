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

define(["require","exports"],(function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var t=new Float32Array(1),e=new Uint32Array(t.buffer);r.nextHighestPowerOfTwo=function(n){var r=n;return r--,r|=r>>1,r|=r>>2,r|=r>>4,r|=r>>8,r|=r>>16,++r},r.toUint32=function(n){return t[0]=n,e[0]},r.i1616to32=function(n,r){return 65535&n|r<<16},r.i8888to32=function(n,r,t,e){return 255&n|(255&r)<<8|(255&t)<<16|e<<24},r.i8816to32=function(n,r,t){return 255&n|(255&r)<<8|t<<16},r.numTo32=function(n){return 0|n}}));