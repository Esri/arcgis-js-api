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

define(["require","exports"],(function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.bytesToUTF8=void 0,r.bytesToUTF8=function(e,r){for(var t=0,o="",n=0,i=0,u=e.length;t<u;)(n=(i=e[t++])>>4)<8?n=1:15===n?(n=4,i=(7&i)<<18|(63&e[t++])<<12|(63&e[t++])<<6|63&e[t++]):14===n?(n=3,i=(15&i)<<12|(63&e[t++])<<6|63&e[t++]):(n=2,i=(31&i)<<6|63&e[t++]),(0!==i||r)&&(o+=String.fromCharCode(i));return o}}));