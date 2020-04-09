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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports"],(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.bytesToUTF8=function(e,r){for(var n=0,o="",t=0,f=0,i=e.length;n<i;)(t=(f=e[n++])>>4)<8?t=1:15===t?(t=4,f=(7&f)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++]):14===t?(t=3,f=(15&f)<<12|(63&e[n++])<<6|63&e[n++]):(t=2,f=(31&f)<<6|63&e[n++]),(0!==f||r)&&(o+=String.fromCharCode(f));return o}}));