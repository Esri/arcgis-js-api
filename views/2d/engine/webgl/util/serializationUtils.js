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

define(["require","exports"],(function(e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.deserializeList=i.serializeList=void 0,i.serializeList=function(e,i){if(null!==i){e.push(i.length);for(var r=0,t=i;r<t.length;r++){t[r].serialize(e)}return e}e.push(0)},i.deserializeList=function(e,i,r){for(var t=e.readInt32(),n=new Array(t),s=0;s<n.length;s++)n[s]=i.deserialize(e,r);return n}}));