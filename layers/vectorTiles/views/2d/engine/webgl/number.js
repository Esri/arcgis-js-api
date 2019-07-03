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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["require","exports"],function(n,r){function t(n){var r=n;return r--,r|=r>>1,r|=r>>2,r|=r>>4,r|=r>>8,r|=r>>16,++r}function e(n){return c[0]=n,a[0]}function o(n,r){return 65535&n|r<<16}function u(n,r,t,e){return 255&n|(255&r)<<8|(255&t)<<16|e<<24}function i(n,r,t){return 255&n|(255&r)<<8|t<<16}function f(n){return 0|n}Object.defineProperty(r,"__esModule",{value:!0});var c=new Float32Array(1),a=new Uint32Array(c.buffer);r.nextHighestPowerOfTwo=t,r.toUint32=e,r.i1616to32=o,r.i8888to32=u,r.i8816to32=i,r.numTo32=f});