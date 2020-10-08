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

define(["require","exports","./contains"],(function(n,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.polygonIntersectsMultipoint=o.polygonIntersectsPoint=void 0,o.polygonIntersectsPoint=function(n,o,e,r){return t.polygonContainsPoint(n,o,e,r)},o.polygonIntersectsMultipoint=function(n,o,e,r,i,s){for(var l,u=(l=s,i?l?4:3:l?3:2),c=r.coords,p=r.lengths,g=0,f=0;g<p.length;g++,f+=u)if(t.polygonContainsCoords(n,o,e,c[f],c[f+1]))return!0;return!1}}));